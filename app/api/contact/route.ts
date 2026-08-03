import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields (name, email, message) are required." },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!apiKey || apiKey === "YOUR_WEB3FORMS_ACCESS_KEY") {
      return NextResponse.json(
        {
          success: false,
          message:
            "Web3Forms Access Key missing. Please add WEB3FORMS_ACCESS_KEY to your .env.local file.",
        },
        { status: 400 }
      );
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: apiKey,
        name,
        email,
        message,
        subject: `New Portfolio Message from ${name}`,
        from_name: `${name} (Portfolio)`,
      }),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } else {
      return NextResponse.json(
        { success: false, message: data.message || "Failed to send message." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error sending contact message:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
