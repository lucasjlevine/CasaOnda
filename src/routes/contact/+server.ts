import { json } from '@sveltejs/kit';
import { Resend } from 'resend';

export async function POST({ request }) {
	const resend = new Resend('re_PHiqz3k4_8JiV4KViADqEKbim1EuCZnvT');

	const formData = await request.formData();
	const email = formData.get('email') as string;
	const message = formData.get('message') as string;
	const date = new Date();

	const response = await resend.emails.send({
		// from: email,
		from: 'onboarding@resend.dev',
		to: 'casaondanosara@gmail.com',
		subject: `Casa Onda Contact Form | ${email}`,
		html: `
            <p>Sent: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
			</hr>
			<h4>${email}</h4>
            <p>${message}</p>
            `
	});

	if (response.error) {
		return json(
			{
				success: false,
				message: `Failed to send email: ${response.error.message}`
			},
			{ status: 500 }
		);
	}

	return json(
		{
			success: true,
			message: 'Email sent successfully!'
		},
		{ status: 200 }
	);
}
