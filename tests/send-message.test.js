/* eslint-disable no-undef */
import { createMocks } from 'node-mocks-http';
import sendMessage from '../pages/api/send-message';

describe('/api/send-message', () => {
	it('sends message to telegram', async () => {
		const message = new Date().toDateString();
		const { req, res } = createMocks({
			method: 'POST',
			query: { message },
		});
		const f = async () => await sendMessage(req, res);
		expect(f).not.toThrow();
	});
});
