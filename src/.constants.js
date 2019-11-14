module.exports = Object.freeze({
  TOKEN: '1019743383:AAFIkJYQ8-6ivzuti4utSIvmOenqIDn5ZJI',
  ARIA_SECRET: 'bhadoo',
  INDEX_DOMAIN: 'https://3.bbot.workers.dev/Drive/',
  ARIA_DOWNLOAD_LOCATION: '/app/downloads)',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID:  '1UwDOa5aNyEwM3KVPqrh0mjfodztaEYCq',
  SUDO_USERS: [513611281, 650936828],	// Telegram user IDs.These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001397784007],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['1@gmail.com', '2@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'domain here',
    port: 80,
    path: '/botNotify'
  },
    COMMANDS_USE_BOT_NAME: {
      ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
      NAME: "@Bhadoo3_bot"
    }
});
// Heroku Account ID PASSWORD varunswami.mba@gtb.org.in Bhadoo@1 is
