"use client";
import {
  Mail,
  Eye,
  HomeIcon,
  Phone,
  UserRound,
  Building2,
  Network,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Industries } from "@/utils/constants";
import { useState } from "react";
import { countries } from "@/utils/countries";
import InputField from "@/components/inputs/input-file";
import CustomDropdown from "@/components/inputs/custom-dropdown";
import { FileUploadResponse } from "@/types/response";
import CountryDropdown from "./country-dropdown";

const RegisterSchema = z.object({
  co_operativeName: z.string().min(1, "Organisation name is required"),
  co_operativeIndustry: z.string().min(1, "Industry is required"),
  yearOfIncorporation: z.string(),
  officeAddress: z.string().min(1, "Office address is required"),
  overseerName: z.string().min(1, "Overseer name is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  OrganisationDoc: z.instanceof(File, {
    message: "Organisation Document is required",
  }),
  overseerDesignation: z.string().min(1, "Overseer designation is required"),
  overseerEmail: z.string().email("Invalid email address"),
  overseerPhone: z.string().regex(/^\+?[0-9]{10,15}$/, "Invalid phone number"),
  location: z.string().min(1, "Location is required"),
  acceptTerms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

type RegisterFormData = z.infer<typeof RegisterSchema>;

const RegisterForm = () => {
  const methods = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      acceptTerms: false,
    },
  });

  const [uploadResponse, setUploadResponse] =
    useState<FileUploadResponse | null>(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [OrganisationName, setOrganisationName] = useState("");

  const handleFileUpload = async (
    data: RegisterFormData,
    onSuccess: (res: FileUploadResponse) => void,
    onError: (error: any) => void
  ) => {
    const formData = {
      file: data.OrganisationDoc,
      name: data.co_operativeName,
      description: data.co_operativeName,
    };

    // Commented out for demo
    // uploadFile(formData, {
    //   onSuccess,
    //   onError,
    // });
  };

  const handleUserRegistration = (
    data: RegisterFormData,
    fileId: string | undefined,
    onSuccess: (res: any) => void,
    onError: (error: any) => void
  ) => {
    const userinfo = {
      co_operativeName: data.co_operativeName,
      co_operativeIndustry: data.co_operativeIndustry,
      yearOfIncorporation: data.yearOfIncorporation,
      officeAddress: data.officeAddress,
      overseerName: data.overseerName,
      overseerDesignation: data.overseerDesignation,
      overseerEmail: data.overseerEmail,
      overseerPhone: data.overseerPhone,
      verificationFileId: fileId,
      location: data.location,
    };

    // Commented out for demo
    // registerFn(userinfo, {
    //   onSuccess,
    //   onError,
    // });
  };

  const { mutate: registerOrganization, isPending } = useSignupOrganization();

  const onSubmit = async (data: RegisterFormData) => {
    const formData = {
      organization_name: data.co_operativeName,
      email: data.overseerEmail,
      password: data.password,
      year_of_registration: data.yearOfIncorporation,
      address: data.officeAddress,
      industry_id: data.co_operativeIndustry,
      contact_person: data.overseerName,
      contact_designation: data.overseerDesignation,
      country_id: data.location,
      organization_document: data.OrganisationDoc
    };

    registerOrganization(formData, {
      onSuccess: (res) => {
        toast.success("Organization registered successfully!");
        setOrganisationName(data.co_operativeName);
        setDialogOpen(true);
        methods.reset();
      },
      onError: (err: any) => {
        toast.error(err?.response?.data?.message || "Registration failed");
      }
    });
  };

  return (
    <div className=" ">
      <div className="flex flex-col space-y-4"></div>
      <FormProvider {...methods}>
        <form
          className="flex flex-col space-y-4"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <InputField
            name="co_operativeName"
            icon={<Building2 className="text-primary100" />}
            label="Organisation Name "
            required={true}
            placeholder="Enter Organisation name"
            type="text"
          />

          <InputField
            name="yearOfIncorporation"
            icon={<Eye className="text-primary100" />}
            label="Year of Registration "
            placeholder="Enter year"
            required={true}
            type="years"
          />

          <InputField
            name="officeAddress"
            icon={<HomeIcon className="text-primary100" />}
            label="Office Address "
            placeholder="Enter your office address"
            type="text"
          />

          <InputField
            name="overseerEmail"
            icon={<Mail className="text-primary100" />}
            label="Email Address "
            required={true}
            placeholder="Enter email address"
            type="text"
          />

          <InputField
            name="password"
            icon={<Eye className="text-primary100" />}
            label="Password "
            required={true}
            placeholder="Enter password"
            type="password"
          />

          <InputField
            name="overseerPhone"
            icon={<Phone className="text-primary100" />}
            label="Phone number "
            required={true}
            placeholder="Enter phone number"
            type="text"
          />

          <CustomDropdown
            name="co_operativeIndustry"
            placeholder="Enter industry"
            label="Industry "
            required={true}
            options={Industries}
            onChange={(value) =>
              methods.setValue("co_operativeIndustry", value)
            }
          />

          <InputField
            name="overseerName"
            icon={<UserRound className="text-primary100" />}
            label="Contact Person Name "
            required={true}
            placeholder="Enter contact person name"
            type="text"
          />

          <InputField
            name="overseerDesignation"
            icon={<Network className="text-primary100" />}
            label="Contact Designation "
            required={true}
            placeholder="Enter contact designation"
            type="text"
          />

          <CountryDropdown
            name="location"
            label="Location "
            required={true}
            options={countries}
            placeholder="Select your country"
            onChange={(value) => methods.setValue("location", value)}
          />

          <div className="col-span-1 md:col-span-2">
            <InputField
              name="OrganisationDoc"
              label="Organisation Document "
              placeholder="Upload file"
              type="file"
              required={true}
            />
          </div>

          <div className="">
            <InputField
              label="acceptTerms"
              name="acceptTerms"
              type="checkbox"
              required={true}
              containerClassName="w-fit"
              showLabel={false}
            />
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-textgreen disabled:opacity-50 text-white w-full py-3 rounded-[8px] w-full font-bold"
            >
              Sign up
            </button>
          </div>
        </form>
      </FormProvider>

      <Link href={"/login"} className="flex justify-center items-center">
        <p className="text-textgray">
          {`Already have an account?`}{" "}
          <span className="text-textgreen">Log in</span>
        </p>
      </Link>
    </div>
  );
};

export default RegisterForm;
