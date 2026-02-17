import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: "business.trustmetric@gmail.com",
      subject: "New Inquiry - TrustMetrics",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
