import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/inputs/input-file";
import CustomDropdown from "@/components/inputs/custom-dropdown";

// Gender options for CustomDropdown
const genderOptions = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
  { name: "Other", value: "other" },
  { name: "Prefer not to say", value: "prefer-not-to-say" },
];

// Signup schema
const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  dateOfBirth: z.string().refine(
    (value) => {
      const date = new Date(value);
      const today = new Date();
      const minimumAge = new Date(
        today.getFullYear() - 13,
        today.getMonth(),
        today.getDate()
      );
      return date <= minimumAge;
    },
    { message: "You must be at least 13 years old" }
  ),
  gender: z.enum(["male", "female", "other", "prefer-not-to-say"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms" }),
  }),
});

const SignupForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const methods = useForm({
    resolver: zodResolver(signupSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
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
          required
        />
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brandgreen hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SignupForm;
