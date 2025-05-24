import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomDropdown from "@/components/inputs/custom-dropdown";
import InputField from "@/components/inputs/input-file";
import { useSignupIndividual } from "@/service/auth";
import { Loader2, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Gender options for CustomDropdown
const genderOptions = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
  { name: "Prefer not to say", value: "prefer_not_to_say" },
];

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z.string().refine(
    (value) => {
      const dob = new Date(value);
      const today = new Date();
      const minAge = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
      );
      return dob <= minAge;
    },
    { message: "You must be at least 18 years old" }
  ),
  gender: z.enum(["male", "female", "prefer_not_to_say"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

type SignupFormData = z.infer<typeof signupSchema>;

// Success Modal Component
const SuccessModal = ({
  isOpen,
  onClose,
  userEmail,
}: {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
}) => {
  const handleOpenEmail = () => {
    // Check if on mobile device
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    if (isMobile) {
      // On mobile, try to open default email app
      window.location.href = `mailto:${userEmail}`;
    } else {
      // On desktop, open popular email providers in new tab
      const emailDomain = userEmail.split("@")[1].toLowerCase();
      let emailUrl = "";

      switch (emailDomain) {
        case "gmail.com":
          emailUrl = "https://mail.google.com";
          break;
        case "outlook.com":
        case "hotmail.com":
        case "live.com":
          emailUrl = "https://outlook.live.com";
          break;
        case "yahoo.com":
          emailUrl = "https://mail.yahoo.com";
          break;
        default:
          emailUrl = "https://mail.google.com"; // Default to Gmail
      }

      window.open(emailUrl, "_blank");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <DialogTitle className="text-2xl font-bold">
            Account Created Successfully!
          </DialogTitle>
          <DialogDescription className="text-base">
            We've sent a verification email to <strong>{userEmail}</strong>.
            Please check your inbox and click the verification link to activate
            your account.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 mt-6">
          <button
            onClick={handleOpenEmail}
            className="w-full flex items-center justify-center gap-2 bg-brandgreen hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
          >
            <Mail size={20} />
            Open Email
          </button>

          <button
            onClick={onClose}
            className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
          >
            I'll check later
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-4">
          Didn't receive the email? Check your spam folder or contact support.
        </p>
      </DialogContent>
    </Dialog>
  );
};

const SignupForm = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const methods = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const { mutate: registerIndividual, isPending } = useSignupIndividual();

  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit = async (data: SignupFormData) => {
    const formdata = {
      name: data.name,
      email: data.email,
      password: data.password,
      dob: data.dateOfBirth,
      gender: data.gender,
    };

    registerIndividual(formdata, {
      onSuccess: (res) => {
        toast.success("Registration successful!");
        console.log(res);

        // Store user email and show success modal
        setUserEmail(data.email);
        setShowSuccessModal(true);

        // Reset form
        reset();
      },
      onError: (err) => {
        // @ts-ignore
        toast.error(`${err?.response?.data?.message || "Registration failed"}`);
      },
    });
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setUserEmail("");
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            name="name"
            label="Full name"
            type="text"
            placeholder="Enter your full name"
            containerClassName="w-full"
            inputClassName="text-gray-700"
            variant="outline"
            required
          />
          <InputField
            name="email"
            label="Email address"
            type="email"
            placeholder="Enter your email"
            containerClassName="w-full"
            inputClassName="text-gray-700"
            variant="outline"
            required
          />
          <InputField
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            containerClassName="w-full"
            inputClassName="text-gray-700"
            variant="outline"
            required
          />
          <InputField
            name="dateOfBirth"
            label="Date of birth"
            type="date"
            containerClassName="w-full"
            inputClassName="text-gray-700"
            variant="outline"
            required
          />
          <CustomDropdown
            name="gender"
            label="Gender"
            options={genderOptions}
            placeholder="Select gender"
            containerClassName="w-full"
            inputClassName="text-gray-700 border border-gray-300"
            required
          />
          <InputField
            name="terms"
            label="I agree to the Terms of Service and Privacy Policy"
            type="checkbox"
            containerClassName="flex items-center"
            inputClassName="mr-2"
            required
          />
          <div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandgreen hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isPending ? <Loader2 className="animate-spin" /> : "Sign up"}
            </button>
          </div>
        </form>
      </FormProvider>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        userEmail={userEmail}
      />
    </>
  );
};

export default SignupForm;
