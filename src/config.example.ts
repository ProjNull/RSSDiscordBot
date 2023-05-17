export const app = {
    id: "APP_ID_HERE",
    token: "TOKEN_HERE",
    avatarApiKey: "YOUR_AVATAR_API_KEY_HERE", // API: https://api.multiavatar.com/
    enableAutoUpdate: false, // Enable only when you set at least one channel
    autoUpdateInterval: 1800000, // Update interval in miliseconds (30 minutes)
    initMessage: false, // Enable only when you set at least one channel
    helpCommands: false, 
}

// run /chennelid to get id of the channel and then put it here:
export const channels = [
    "CHENNEL_ID_HERE",
]

export const rssServers = [
    // Moved to /src/feeds folder
]
