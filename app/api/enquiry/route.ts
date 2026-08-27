import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type EnquiryRequest = {
  name?: string;
  email?: string;
  experience?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as EnquiryRequest;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const experience = body.experience?.trim();
    const message = body.message?.trim();

    if (!name || !email || !experience || !message) {
      return NextResponse.json(
        {
          error: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          error: "A valid email address is required.",
        },
        {
          status: 400,
        },
      );
    }

    const enquiryEmail = process.env.ENQUIRY_EMAIL;

    if (!enquiryEmail) {
      console.error("ENQUIRY_EMAIL environment variable is not configured.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const { error } = await resend.emails.send({
      from: "Flow Volleyball Club <onboarding@resend.dev>",
      to: enquiryEmail,
      replyTo: email,
      subject: `New Flow Volleyball enquiry from ${name}`,
      text: `
New Flow Volleyball Club enquiry

Name:
${name}

Email:
${email}

Experience:
${experience}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Unable to send enquiry.",
        },
        {
          status: 500,
        },
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      {
        error: "Unexpected server error.",
      },
      {
        status: 500,
      },
    );
  }
}