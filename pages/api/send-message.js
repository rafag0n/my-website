/* eslint-disable no-undef */
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

const sendRes = (res, status, responseJson) => {
	res.statusCode = status;
	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify(responseJson));
};

export default async function sendMessage(req, res) {
	try {
		await bot.sendMessage(
			process.env.TELEGRAM_CHAT_ID,
			JSON.stringify(req.body)
		);
		sendRes(res, 200, { success: true });
	} catch (err) {
		sendRes(res, 500, { success: false, err });
	}
}
