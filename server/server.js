import 'dotenv/config.js';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

const app = express();

//Security Middleware
app.use(helmet());
app.use(
	cors({
		origin: process.env.FRONTEND_URL || 'http://localhost:3000',
		credentials: true,
	})
);

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 100,
	message: 'Too many requests from this IP, please try agai nafter some time',
});
app.use(limiter);

app.use(express.json({ limit: '10mb' }));

app.post('/api/explain-code', async (req, res) => {
	try {
		const { code, language } = req.body;
		if (!code) {
			return res.status(400).json({ error: 'Code is required!' });
		}

		if (!language) {
			return res.status(400).json({ error: 'Language is required!' });
		}
	} catch (e) {
		console.error(`Code Explain API Error: ${e}`);
		res.status(500).json({ error: 'Server error', details: e.message });
	}
});
