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
  Home,
  ArrowLeft,
  ArrowRight,
  ImageIcon,
  Globe,
  Building2,
  HomeIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  scope: z.enum(["local", "national", "global"]),
  title: z.string().min(5, "Title must be at least 5 characters"),
  story: z.string().min(100, "Please tell a more detailed story (min 100 characters)"),
  coverImage: z.string().optional(),
  targetSignatures: z.number().min(100, "Target signatures must be at least 100"),
});

type ScopeType = z.infer<typeof formSchema>["scope"];
type PetitionFormData = z.infer<typeof formSchema>;

export default function CreatePetition() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);
  const [coverImagePreview, setCoverImagePreview] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  const maxSteps = 4;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      scope: "local",
      title: "",
      story: "",
      coverImage: "",
      targetSignatures: 1000,
    },
  });

  const onSubmit = async (data: PetitionFormData) => {
    const isAuthenticated = true; // Replace with actual auth check
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    console.log(data);
  };

  const renderPreview = () => {
    const values = form.getValues();
    return (
      <Card className="p-6 space-y-4">
        <CardHeader>
          <CardTitle className="text-2xl">Petition Preview</CardTitle>
        </CardHeader>
        {values.coverImage && (
          <img
            src={values.coverImage}
            alt="Cover"
            className="w-full max-w-lg rounded-md"
          />
        )}
        <div>
          <h3 className="text-xl font-semibold">{values.title}</h3>
          <p className="text-sm text-gray-500 mb-2">Scope: {values.scope}</p>
          <p className="whitespace-pre-wrap">{values.story}</p>
        </div>
        <div className="text-sm text-gray-700">
          <strong>Target Signatures:</strong> {values.targetSignatures}
        </div>
        <div className="flex justify-end pt-4">
          <Button onClick={() => setShowPreview(false)} variant="outline">Back</Button>
        </div>
      </Card>
    );
  };

  const renderStep = () => {
    if (showPreview) return renderPreview();

    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Let's take your first step toward change</h2>
            <p className="text-gray-600">Select the scope of your petition:</p>
            <RadioGroup
              defaultValue="local"
              onValueChange={(value: ScopeType) => form.setValue("scope", value)}
              className="grid gap-4"
            >
              {["local", "national", "global"].map((scope) => (
                <Label
                  key={scope}
                  className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                >
                  <RadioGroupItem value={scope} />
                  {scope === "local" ? <HomeIcon className="w-6 h-6" /> : scope === "national" ? <Building2 className="w-6 h-6" /> : <Globe className="w-6 h-6" />}
                  <div>
                    <p className="font-medium capitalize">{scope}</p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Write your petition title</h2>
            <div>
              <Label htmlFor="title">Petition Title</Label>
              <Input id="title" placeholder="e.g., Stop the Dam Construction" {...form.register("title")} />
              {form.formState.errors.title && (
                <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tell your story</h2>
            <Textarea
              className="h-64"
              {...form.register("story")}
              placeholder="Explain the problem, who is affected, and why it matters..."
            />
            {form.formState.errors.story && (
              <p className="text-sm text-red-500">{form.formState.errors.story.message}</p>
            )}
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Add a cover image</h2>
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
                alt="Preview"
                className="rounded-md w-full max-w-lg"
              />
            )}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-10 px-4">
        <Progress value={(step / maxSteps) * 100} className="mb-6" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {renderStep()}
          {!showPreview && (
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
                disabled={step === 1}
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back
              </Button>

              {step === maxSteps ? (
                <div className="flex gap-4">
                  <Button type="button" variant="outline" onClick={() => setShowPreview(true)}>
                    Preview
                  </Button>
                  <Button type="submit" className="bg-red-500 hover:bg-red-600">
                    Start Petition
                  </Button>
                </div>
              ) : (
                <Button type="button" onClick={() => setStep((prev) => prev + 1)}>
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          )}
        </form>
      </div>

      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in to create your petition</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <Button className="w-full" onClick={() => {}}>Sign in</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
