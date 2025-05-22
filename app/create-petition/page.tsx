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
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { courses } from "@/utils/constants";

// Mock Icons object (replace with actual imports)
const Icons = {
  accountability: Building2,
  community: HomeIcon,
  crime: Home,
  election: Globe,
  tech: ImageIcon,
  education: Home,
  climate: Globe,
  healthcare: Building2,
  empowerment: HomeIcon,
  judiciary: Building2,
};

const formSchema = z.object({
  scope: z.enum(["local", "national", "global"]),
  title: z.string().min(5, "Title must be at least 5 characters"),
  story: z.string().min(100, "Please tell a more detailed story (min 100 characters)"),
  images: z
    .array(z.string().optional())
    .length(5, "Please provide exactly 5 image slots")
    .optional(),
  targetSignatures: z.number().min(100, "Target signatures must be at least 100"),
  course: z.string().min(1, "Please select a course"),
});

type ScopeType = z.infer<typeof formSchema>["scope"];
type PetitionFormData = z.infer<typeof formSchema>;

export default function CreatePetition() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([null, null, null, null, null]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSteps = 5;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      scope: "local",
      title: "",
      story: "",
      images: [undefined, undefined, undefined, undefined, undefined],
      targetSignatures: 1000,
      course: "",
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

  const handleImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreviews((prev) => {
        const newPreviews = [...prev];
        newPreviews[index] = imageUrl;
        return newPreviews;
      });
      form.setValue(`images.${index}`, imageUrl);
    }
  };

  const removeImage = (index: number) => {
    setImagePreviews((prev) => {
      const newPreviews = [...prev];
      newPreviews[index] = null;
      return newPreviews;
    });
    form.setValue(`images.${index}`, undefined);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imagePreviews.filter((img) => img).length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imagePreviews.filter((img) => img).length) % imagePreviews.filter((img) => img).length);
  };

  const renderStep = () => {
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
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="local" />
                <HomeIcon className="w-6 h-6" />
                <div>
                  <p className="font-medium">A Citizen in Need</p>
                  <p className="text-sm text-gray-500">For changes for an individual</p>
                </div>
              </Label>
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="national" />
                <Building2 className="w-6 h-6" />
                <div>
                  <p className="font-medium">A Local Community</p>
                  <p className="text-sm text-gray-500">For changes in your Local Community</p>
                </div>
              </Label>
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="global" />
                <Globe className="w-6 h-6" />
                <div>
                  <p className="font-medium">A National Interest</p>
                  <p className="text-sm text-gray-500">For national impact</p>
                </div>
              </Label>
            </RadioGroup>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Write your petition title</h2>
            <p className="text-gray-600">Tell people what you want to change.</p>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Petition Title</Label>
                <Input 
                  id="title" 
                  placeholder="Start with an action verb (e.g., Stop, Save, Grant)"
                  {...form.register("title")} 
                />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500">{form.formState.errors.title.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="targetSignatures">Target Signatures</Label>
                <Input
                  id="targetSignatures"
                  type="number"
                  placeholder="Enter target number of signatures"
                  {...form.register("targetSignatures", { valueAsNumber: true })}
                />
                {form.formState.errors.targetSignatures && (
                  <p className="text-sm text-red-500">{form.formState.errors.targetSignatures.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="course">Categories</Label>
                <Select
                  onValueChange={(value) => form.setValue("course", value)}
                  defaultValue={form.getValues("course")}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course: { id: string; course: string }) => (
                      <SelectItem key={course.id} value={course.course}>
                        {course.course}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {form.formState.errors.course && (
                  <p className="text-sm text-red-500">{form.formState.errors.course.message}</p>
                )}
              </div>
              <Card className="bg-gray-50 border-none">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Start with an action verb (Stop, Save, Ban, Grant, etc.)</li>
                    <li>• Name specific places, organizations, or people</li>
                    <li>• Use longer titles to add key details</li>
                    <li>• Set a realistic but ambitious signature goal</li>
                    <li>• Choose a course that matches your petition's theme</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Tell your story</h2>
            <p className="text-gray-600">
              Start from scratch or use our recommended structure below. You can always edit your petition, even after publishing.
            </p>
            <div>
              <Textarea
                placeholder="Describe how people are concretely affected by the problem..."
                className="h-64 mb-4"
                {...form.register("story")}
              />
              {form.formState.errors.story && (
                <p className="text-sm text-red-500">{form.formState.errors.story.message}</p>
              )}
              <Card className="bg-gray-50 border-none">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Recommended Structure</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>1. Who is affected?</li>
                    <li>2. What is the problem?</li>
                    <li>3. Why does it matter?</li>
                    <li>4. What needs to change?</li>
                    <li>5. How can supporters help?</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Add images</h2>
            <p className="text-gray-600">Petitions with images get six times more signatures. Upload up to 5 images.</p>
            <Card className="p-8 border-dashed hover:bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className="relative w-full aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                      {imagePreviews[index] ? (
                        <>
                          <img
                            src={imagePreviews[index]!}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <Button
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2"
                            onClick={() => removeImage(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </>
                      ) : (
                        <ImageIcon className="w-12 h-12 text-gray-400" />
                      )}
                    </div>
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(index, e)}
                      disabled={!!imagePreviews[index]}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
              {form.formState.errors.images && (
                <p className="text-sm text-red-500 mt-2">{form.formState.errors.images.message}</p>
              )}
            </Card>
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Image Tips</h3>
                <div className="space-y-4">
                  <div>
                    
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use close-up images that convey emotion</li>
                      <li>• Choose simple images with good contrast</li>
                      <li>• Include relevant landmarks or public figures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">Don't:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use images with text</li>
                      <li>• Use busy or cluttered images</li>
                      <li>• Include graphic or inappropriate content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 5:
        const { scope, title, story, images, targetSignatures, course } = form.getValues();
        const validImages = images?.filter((img): img is string => !!img) || [];
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Review your petition</h2>
            <p className="text-gray-600">
              Preview how your petition will look to supporters. Make any final edits before publishing.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>Petition Preview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {validImages.length > 0 && (
                  <div className="relative">
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                      <img
                        src={validImages[currentSlide]}
                        alt={`Petition image ${currentSlide + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {validImages.length > 1 && (
                      <>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-1/2 left-2 transform -translate-y-1/2"
                          onClick={prevSlide}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="absolute top-1/2 right-2 transform -translate-y-1/2"
                          onClick={nextSlide}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                        <div className="flex justify-center mt-2 space-x-2">
                          {validImages.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full ${
                                index === currentSlide ? "bg-gray-800" : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">Scope</h3>
                  <p className="text-gray-600 capitalize">{scope || "Not selected"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Title</h3>
                  <p className="text-gray-600">{title || "Your petition title will appear here"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Story</h3>
                  <p className="text-gray-600 line-clamp-3">{story || "Your story will appear here"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Target Signatures</h3>
                  <p className="text-gray-600">{targetSignatures || "Not set"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Category</h3>
                  <p className="text-gray-600">{course || "Not selected"}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50">
      <div className="flex w-full h-full ">
        <div className="flex-1 overflow-y-scroll py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                    <Button type="submit" className="bg-red-500 hover:bg-red-600">
                      Start Petition
                    </Button>
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

        <div className="hidden  lg:block lg:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=2070&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-12">
              <h2 className="text-white text-3xl font-bold mb-4">Make Your Voice Heard</h2>
              <p className="text-white/90 text-lg">
                Join millions of people taking action to create positive change through petitions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isAuthModalOpen} onOpenChange={setIsAuthModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in to create your petition</DialogTitle>
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

      <Dialog open={isLeaveDialogOpen} onOpenChange={setIsLeaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Leave this page?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            You haven't finished creating your petition. Are you sure you want to go back to the homepage?
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