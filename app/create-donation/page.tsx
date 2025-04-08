"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Users,
  User,
  Heart,
  ArrowLeft,
  ArrowRight,
  Image as ImageIcon,
  Home,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const formSchema = z.object({
  fundraisingType: z.enum(["self", "other", "charity"]),
  title: z.string().min(5, "Title must be at least 5 characters"),
  story: z.string().min(50, "Please tell a more detailed story (min 50 characters)"),
  coverImage: z.string().optional(),
  category: z.string(),
  goal: z.number().min(1, "Goal amount must be greater than 0"),
});

export default function CreateDonation() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const maxSteps = 5;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fundraisingType: "self",
      title: "",
      story: "",
      coverImage: "",
      category: "community",
      goal: 0,
    },
  });

  const onSubmit = async (data) => {
    const isAuthenticated = true; // Replace with actual auth check
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    console.log(data);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Who are you fundraising for?</h2>
            <RadioGroup
              defaultValue="self"
              onValueChange={(value) => form.setValue("fundraisingType", value)}
              className="grid gap-4"
            >
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="self" />
                <User className="w-6 h-6" />
                <div>
                  <p className="font-medium">Yourself</p>
                  <p className="text-sm text-gray-500">Funds are delivered to your bank account</p>
                </div>
              </Label>
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="other" />
                <Users className="w-6 h-6" />
                <div>
                  <p className="font-medium">Someone else</p>
                  <p className="text-sm text-gray-500">You'll invite a beneficiary to receive funds</p>
                </div>
              </Label>
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="charity" />
                <Heart className="w-6 h-6" />
                <div>
                  <p className="font-medium">Charity</p>
                  <p className="text-sm text-gray-500">Funds are delivered to your chosen charity</p>
                </div>
              </Label>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tell donors about your cause</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Fundraiser Title</Label>
                <Input id="title" placeholder="Give your fundraiser a clear title" {...form.register("title")} />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="story">Your Story</Label>
                <Textarea
                  id="story"
                  placeholder="Tell potential donors why you're raising funds..."
                  className="h-32"
                  {...form.register("story")}
                />
                {form.formState.errors.story && (
                  <p className="text-sm text-red-500">{form.formState.errors.story.message}</p>
                )}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Add a cover photo</h2>
            <Card className="p-8 text-center hover:bg-gray-50">
              <div className="flex flex-col items-center space-y-4">
                <ImageIcon className="w-12 h-12 text-gray-400" />
                <div>
                  <p className="font-medium">Upload a photo</p>
                  <p className="text-sm text-gray-500">Bring your story to life with an image</p>
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setCoverImagePreview(imageUrl);
                      form.setValue("coverImage", imageUrl);
                    }
                  }}
                />
                {coverImagePreview && (
                  <img
                    src={coverImagePreview}
                    alt="Cover Preview"
                    className="mt-4 w-full max-w-md h-auto rounded-lg border"
                  />
                )}
              </div>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Set your fundraising goal</h2>
            <div>
              <Label htmlFor="goal">Goal Amount ($)</Label>
              <Input
                id="goal"
                type="number"
                min="1"
                placeholder="Enter your goal amount"
                {...form.register("goal", { valueAsNumber: true })}
              />
              {form.formState.errors.goal && (
                <p className="text-sm text-red-500">{form.formState.errors.goal.message}</p>
              )}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Preview Your Fundraiser</h2>
            <Card>
              <CardHeader>
                <CardTitle>{form.getValues("title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {coverImagePreview && (
                  <img
                    src={coverImagePreview}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                )}
                <div>
                  <h3 className="font-semibold">Fundraising For</h3>
                  <p>{form.getValues("fundraisingType")}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Goal</h3>
                  <p>${form.getValues("goal").toLocaleString()}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Story</h3>
                  <p className="text-gray-600">{form.getValues("story")}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="flex-1 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Home Button with Dialog Trigger */}
            <div className="mb-6">
              <Button variant="ghost" onClick={() => setIsLeaveDialogOpen(true)}>
                <Home className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </div>

            <Progress value={(step / maxSteps) * 100} className="mb-8" />

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Card className="p-6">
                {renderStep()}

                <div className="flex justify-between mt-8">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                    disabled={step === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>

                  {step === maxSteps ? (
                    <Button type="submit">Create Fundraiser</Button>
                  ) : (
                    <Button type="button" onClick={() => setStep(step + 1)}>
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </Card>
            </form>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-12">
              <h2 className="text-white text-3xl font-bold mb-4">Make a Difference Today</h2>
              <p className="text-white/90 text-lg">
                Join thousands of people who are creating positive change through fundraising. Your story matters.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in to create your fundraiser</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Button className="w-full" onClick={() => {}}>
              Sign In
            </Button>
            <Button variant="outline" className="w-full" onClick={() => {}}>
              Create Account
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Leave Confirmation Dialog */}
      <Dialog open={isLeaveDialogOpen} onOpenChange={setIsLeaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Leave this page?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            You haven’t finished creating your fundraiser. Are you sure you want to go back to the homepage?
          </p>
          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setIsLeaveDialogOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                setIsLeaveDialogOpen(false);
                router.push("/");
              }}
            >
              Leave
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
