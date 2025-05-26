"use client";

import { Suspense } from "react";

// Main page component with Suspense boundary
export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Loading...
                  </h2>
                  <p className="text-gray-600">
                    Please wait while we prepare the verification page...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <VerifyContent />
    </Suspense>
  );
}

// Separate client component for verification logic
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Icons } from "@/components/shared/icons";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [verificationStatus, setVerificationStatus] = useState<
    "loading" | "success" | "error"
  >("loading");
  const [message, setMessage] = useState("");

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  useEffect(() => {
    if (!token) {
      setVerificationStatus("error");
      setMessage("Invalid verification link. No token provided.");
      return;
    }

    // Verify email using API
    const verifyEmail = async () => {
      try {
        const response = await fetch("/api/verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, email }),
        });

        if (response.ok) {
          setVerificationStatus("success");
          setMessage("Your email has been successfully verified!");
        } else {
          const errorData = await response.json();
          setVerificationStatus("error");
          setMessage(
            errorData.message || "Verification failed. Please try again."
          );
        }
      } catch (error) {
        setVerificationStatus("error");
        setMessage("An error occurred during verification. Please try again.");
      }
    };

    verifyEmail();
  }, [token, email]);

  const handleContinue = () => {
    router.push("/login");
  };

  const handleResendVerification = async () => {
    if (!email) return;

    try {
      const response = await fetch("/api/resend-verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage(
          "Verification email has been resent! Please check your inbox."
        );
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Failed to resend verification email.");
      }
    } catch (error) {
      setMessage(
        "An error occurred while resending the email. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block mb-8">
            <Icons.logo className="size-16 mx-auto" />
          </Link>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            {verificationStatus === "loading" && (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Verifying Your Email
                </h2>
                <p className="text-gray-600">
                  Please wait while we verify your email address...
                </p>
              </div>
            )}

            {verificationStatus === "success" && (
              <div className="space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Email Verified Successfully!
                  </h2>
                  <p className="text-gray-600">{message}</p>
                  {email && (
                    <p className="text-sm text-gray-500">
                      Verified email: <strong>{email}</strong>
                    </p>
                  )}
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={handleContinue}
                    className="w-full bg-textgreen hover:bg-textgreen/90 text-white"
                  >
                    Continue to Login
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => router.push("/")}
                    className="w-full"
                  >
                    Go to Homepage
                  </Button>
                </div>
              </div>
            )}

            {verificationStatus === "error" && (
              <div className="space-y-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Verification Failed
                  </h2>
                  <p className="text-gray-600">{message}</p>
                </div>
                <div className="space-y-3">
                  {email && (
                    <Button
                      onClick={handleResendVerification}
                      className="w-full bg-textgreen hover:bg-textgreen/90 text-white"
                    >
                      Resend Verification Email
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => router.push("/register")}
                    className="w-full"
                  >
                    Back to Registration
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => router.push("/")}
                    className="w-full"
                  >
                    Go to Homepage
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact our{" "}
              <Link href="/support" className="text-textgreen hover:underline">
                support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
