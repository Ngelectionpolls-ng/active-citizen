
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email address is required" },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Check if the user exists in your database
    // 2. Generate a new verification token
    // 3. Send a new verification email

    // For demo purposes, we'll simulate success
    console.log(`Resending verification email to: ${email}`);

    return NextResponse.json(
      { 
        message: "Verification email has been resent successfully",
        email 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("Resend verification error:", error);
    return NextResponse.json(
      { message: "Failed to resend verification email" },
      { status: 500 }
    );
  }
}
