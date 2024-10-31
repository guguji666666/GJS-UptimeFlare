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
        // Example HTTP Monitor
        {
            // `id` should be unique, history will be kept if the `id` remains constant
            id: 'nezhakk.guguji.us.kg',
            // `name` is used at status page and callback message
            name: '哪吒面板_Vercel',
            // `method` should be a valid HTTP Method
            method: 'GET',
            // `target` is a valid URL
            target: 'https://nezhakk.guguji.us.kg/',
            // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
            tooltip: 'This is a tooltip for this monitor',
            // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
            statusPageLink: 'https://nezhakk.guguji.us.kg/',
            // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
            // expectedCodes: [200],
            // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
            timeout: 10000,
            // [OPTIONAL] headers to be sent
            // headers: {
            //   'User-Agent': 'Uptimeflare',
            //   Authorization: 'Bearer YOUR_TOKEN_HERE',
            // },
            // [OPTIONAL] body to be sent
            // body: 'Hello, world!',
            // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
            // responseKeyword: 'success',
            // [OPTIONAL] if specified, the check will run in your specified region,
            // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
            // checkLocationWorkerRoute: 'https://am.809098.xyz',
        },
        // Example TCP Monitor
        {
            id: 'nezha.guguji.us.kg',
            name: '哪吒面板_Original',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://nezha.guguji.us.kg/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://nezha.guguji.us.kg/',
            timeout: 10000,
        },
        {
            id: 'rp.guguji.us.kg',
            name: 'NPM_MS600_gugu-docker-prod',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://rp.guguji.us.kg/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://rp.guguji.us.kg/',
            timeout: 10000,
        },
        {
            id: 'nt.tigaultraman.com',
            name: 'NTFY',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://nt.tigaultraman.com/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://nt.tigaultraman.com/',
            timeout: 10000,
        },
        {
            id: 'mm.gulaoda.us.kg',
            name: 'Memos_大盘鸡',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://mm.gulaoda.us.kg/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://mm.gulaoda.us.kg/',
            timeout: 10000,
        },
        {
            id: 'spp.gulaoda.us.kg',
            name: 'SunPanel_UGOS',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://spp.gulaoda.us.kg/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://spp.gulaoda.us.kg/',
            timeout: 10000,
        },
        {
            id: 'jump.gulaoda.us.kg',
            name: '堡垒机内',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://jump.gulaoda.us.kg/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://jump.gulaoda.us.kg/',
            timeout: 10000,
        },
        {
            id: 'img.tigaultraman.com',
            name: '大盘鸡tigaultraman图床',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://img.tigaultraman.com/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://img.tigaultraman.com/',
            timeout: 10000,
        },
        {
            id: 'image.gulaoda.com',
            name: 'R2-gulaoda图床',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://image.gulaoda.com/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://image.gulaoda.com/',
            timeout: 10000,
        },
        {
            id: 'guguimage.aceultraman.com',
            name: 'R2-aceultraman图床',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://guguimage.aceultraman.com/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://guguimage.aceultraman.com/',
            timeout: 10000,
        },
        {
            id: 'mtc.tigaultraman.com',
            name: 'Metube',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://mtc.tigaultraman.com/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://mtc.tigaultraman.com/',
            timeout: 10000,
        },
        {
            id: 'note.gulaoda.us.kg',
            name: 'Joplin',
            // `method` should be `TCP_PING` for tcp monitors
            method: 'GET',
            // `target` should be `host:port` for tcp monitors
            target: 'https://note.gulaoda.us.kg/',
            tooltip: 'My production server monitor',
            statusPageLink: 'https://note.gulaoda.us.kg/',
            timeout: 10000,
        },

        // K8S service

        // monitor VPS status
        //{
        //    id: 'AI_MS600_Internal',
        //    name: 'AI_MS600_Internal',
        // `method` should be `TCP_PING` for tcp monitors
        //    method: 'TCP_PING',
        // `target` should be `host:port` for tcp monitors
        //    target: '52.163.74.33:80',
        //    tooltip: 'My production server SSH',
        //statusPageLink: 'https://example.com',
        //    timeout: 5000,
        //},
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
