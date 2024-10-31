const pageConfig = {
    // Title for your status page
    title: "咕咕鸡 Status Page",
    // Links shown at the header of your status page, could set `highlight` to `true`
    links: [
      //{ link: 'https://am.809098.xyz', label: '个人博客', highlight: true },
      //{ link: 'https://youtube.com/@AM_CLUB', label: 'AM科技' },
      { link: 'https://github.com/guguji666666', label: 'GitHub' },
      { link: 'https://809098.xyz', label: 'AM科技' },
    ],
  }
  
  const workerConfig = {
    // Write KV at most every 3 minutes unless the status changed
    kvWriteCooldownMinutes: 3,
    // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
    // passwordProtection: 'username:password',
    // Define all your monitors here
    monitors: [
      // Example HTTP Monitor
      {
        id: 'nezhakk.guguji.us.kg',
        name: '哪吒面板_Vercel',
        method: 'GET',
        target: 'https://nezhakk.guguji.us.kg/',
        tooltip: 'This is a tooltip for this monitor',
        statusPageLink: 'https://nezhakk.guguji.us.kg/',
        timeout: 10000,
      },
      // Example TCP Monitor
      {
        id: 'nezha.guguji.us.kg',
        name: '哪吒面板_Original',
        method: 'GET',
        target: 'https://nezha.guguji.us.kg/',
        tooltip: 'My production server monitor',
        statusPageLink: 'https://nezha.guguji.us.kg/',
        timeout: 10000,
      },
      // Add other monitors as necessary...
    ],
    notification: {
      // [Optional] apprise API server URL
      appriseApiServer: "https://gugu-test-apprise-notification-dqhmp8faaqewqexsadap.vercel.app/notify",
      // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
      //recipientUrl: "tgram://bottoken/ChatID",
      // [Optional] timezone used in notification messages, default to "Etc/GMT"
      timeZone: "Asia/Shanghai",
      // [Optional] grace period in minutes before sending a notification
      gracePeriod: 5,
    },
    callbacks: {
      onStatusChange: async (
        env: any,
        monitor: any,
        isUp: boolean,
        timeIncidentStart: number,
        timeNow: number,
        reason: string
      ) => {
        // This callback will be called when there's a status change for any monitor
        await notify(env, monitor, isUp, timeIncidentStart, timeNow, reason)
      },
      onIncident: async (
        env: any,
        monitor: any,
        timeIncidentStart: number,
        timeNow: number,
        reason: string
      ) => {
        // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      },
    },
  }
  
  // Below is code for sending Telegram & Bark notifications
  // You need to input your parameters here
  
  const escapeMarkdown = (text: string) => {
    return text.replace(/[_*[\](){}~`>#+\-=|.!\\]/g, '\\$&');
  };
  
  async function notify(
    env: any,
    monitor: any,
    isUp: boolean,
    timeIncidentStart: number,
    timeNow: number,
    reason: string
  ) {
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      month: 'numeric',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'Asia/Shanghai',
    });
  
    let downtimeDuration = Math.round((timeNow - timeIncidentStart) / 60);
    const timeIncidentStartFormatted = dateFormatter.format(new Date(timeIncidentStart * 1000));
    let statusText = isUp
      ? `The service is up again after being down for ${downtimeDuration} minutes.`
      : `Service became unavailable at ${timeIncidentStartFormatted}. Issue: ${reason || 'unspecified'}`;
  
    console.log('Notifying: ', monitor.name, statusText);
  
    // Provide Bark server and device key
    const BARK_SERVER = 'https://bkgg.guguji.us.kg'; // e.g., 'https://api.day.app'
    const BARK_DEVICE_KEY = 'WhfLLN5E8VpJmDDxtbmZ2i'; // Your Bark device key
  
    if (BARK_SERVER && BARK_DEVICE_KEY) {
      try {
        let title = isUp ? `✅ ${monitor.name} is up again!` : `🔴 ${monitor.name} is currently down.`;
        await sendBarkNotification(BARK_SERVER, BARK_DEVICE_KEY, monitor, title, statusText);
      } catch (error) {
        console.error('Error sending Bark notification:', error);
      }
    }
  
    // Provide Telegram chat ID and API token
    const TELEGRAM_CHAT_ID = '2104804853';
    const TELEGRAM_API_TOKEN = '6080884946:AAG1Cvh658ZVv6MWiz1oRZ1pC-OSG4dF5Bw';
  
    if (TELEGRAM_CHAT_ID && TELEGRAM_API_TOKEN) {
      try {
        let operationalLabel = isUp ? 'Up' : 'Down';
        let statusEmoji = isUp ? '✅' : '🔴';
        let telegramText = `*${escapeMarkdown(
          monitor.name,
        )}* is currently *${operationalLabel}*\n${statusEmoji} ${escapeMarkdown(statusText)}`;
        await notifyTelegram(TELEGRAM_CHAT_ID, TELEGRAM_API_TOKEN, monitor, isUp, telegramText);
      } catch (error) {
        console.error('Error sending Telegram notification:', error);
      }
    }
  }
  
  async function notifyTelegram(chatId: string, apiToken: string, monitor: any, operational: boolean, text: string) {
    const payload = new URLSearchParams({
      chat_id: chatId,
      parse_mode: 'MarkdownV2',
      text: text,
    });
  
    try {
      const response = await fetch(`https://api.telegram.org/bot${apiToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: payload.toString(),
      });
  
      if (!response.ok) {
        console.error(
          `Failed to send Telegram notification "${text}",  ${response.status} ${response.statusText
          } ${await response.text()}`,
        );
      }
    } catch (error) {
      console.error('Error sending Telegram notification:', error);
    }
  }
  
  async function sendBarkNotification(barkServer: string, barkDeviceKey: string, monitor: any, title: string, body: string, group: string = '') {
    const barkUrl = `${barkServer}/push`;
    const data = {
      title: title,
      body: body,
      group: group,
      url: monitor.url,
      device_key: barkDeviceKey,
    };
  
    const response = await fetch(barkUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      console.log('Bark notification sent successfully.');
    } else {
      const respText = await response.text();
      console.error('Failed to send Bark notification:', response.status, response.statusText, respText);
    }
  }
  
  // Don't forget this, otherwise compilation fails.
  export { pageConfig, workerConfig }
