import type { NextApiRequest, NextApiResponse } from 'next'
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_API_KEY || '';
const DOMAIN = process.env.MAILGUN_DOMAIN || '';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    console.log('Data', req.body)

    const { name, email, message } = req.body

    const mailgun = new Mailgun(formData);
    const client = mailgun.client({ username: 'api', key: API_KEY });

    const messageData = {
        from: 'Contact Form <contact@jackcoleman.com>',
        to: 'jackaustinc66@gmail.com',
        subject: 'New Contact Form',
        text: `Hello,
        
        You have a new form entry from: ${name} ${email}.
        
        ${message}
        `,
    };
    try {
        const emailRes = await client.messages.create(DOMAIN, messageData)
        console.log(emailRes)
    } catch (err: any) {
        console.error('Error sending email', err)
    }

    res.status(200).json({ submitted: true })
}