/** @format */

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
	try {
		const { name, email, message } = await request.json();


		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.EMAIL,
				pass: process.env.PASS,
			},
		});

		const mailOptions = {
			from: process.env.EMAIL,
			to: process.env.EMAIL,
			subject: "New message from your-website",
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: "Message sent successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return new NextResponse("Failed to send message.", { status: 500 });
	}
}
