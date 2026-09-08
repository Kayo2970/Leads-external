import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organisation, interestArea, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required fields." },
        { status: 400 }
      );
    }

    // Console log submission details for local development inspection
    console.log("=== NEW LEADS LEAD SUBMISSION ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Organisation: ${organisation || "N/A"}`);
    console.log(`Interest Area: ${interestArea}`);
    console.log(`Message: ${message || "N/A"}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("=================================");

    return NextResponse.json({
      success: true,
      message: "Lead submission received successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Server processing error." },
      { status: 500 }
    );
  }
}
