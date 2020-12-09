/* eslint-disable no-undef */
import axios from 'axios';
import { createMocks } from 'node-mocks-http';
import sendMessage from '../pages/api/send-message';

const getTelegramUpdates = async () =>
	await axios.get(
		`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getUpdates`
	);

describe('/api/send-message', () => {
	it('sends message to telegram', async () => {
		const message = new Date().toDateString();
		const { req, res } = createMocks({
			method: 'POST',
			query: { message },
		});
		await sendMessage(req, res);
		const telegramUpd = await getTelegramUpdates();
		expect(telegramUpd.data.result[0].message.chat.id.toString()).toBe(
			process.env.TELEGRAM_CHAT_ID
		);
	});
});
