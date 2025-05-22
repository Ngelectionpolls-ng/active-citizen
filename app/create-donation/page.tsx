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

const formSchema = z.object({
  fundraisingType: z.enum(["self", "other", "charity"]),
  title: z.string().min(5, "Title must be at least 5 characters"),
  story: z
    .string()
    .min(50, "Please tell a more detailed story (min 50 characters)"),
  images: z
    .array(z.string().optional())
    .length(5, "Please provide exactly 5 image slots")
    .optional(),
  category: z.string().min(1, "Please select a category"),
  goal: z.number().min(1, "Goal amount must be greater than 0"),
});

type DonationFormData = z.infer<typeof formSchema>;
type FundraisingType = z.infer<typeof formSchema>["fundraisingType"];

export default function CreateDonation() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLeaveDialogOpen, setIsLeaveDialogOpen] = useState(false);
  const [imagePreviews, setImagePreviews] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxSteps = 5;

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fundraisingType: "self",
      title: "",
      story: "",
      images: [undefined, undefined, undefined, undefined, undefined],
      category: "",
      goal: 0,
    },
  });

  const onSubmit = async (data: DonationFormData) => {
    const isAuthenticated = true; // Replace with actual auth check
    if (!isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }
    console.log(data);
  };

  const handleImageUpload = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
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
    setCurrentSlide(
      (prev) => (prev + 1) % imagePreviews.filter((img) => img).length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + imagePreviews.filter((img) => img).length) %
        imagePreviews.filter((img) => img).length
    );
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Who are you fundraising for?</h2>
            <RadioGroup
              defaultValue="self"
              onValueChange={(value: FundraisingType) =>
                form.setValue("fundraisingType", value)
              }
              className="grid gap-4"
            >
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="self" />
                <User className="w-6 h-6" />
                <div>
                  <p className="font-medium">Yourself</p>
                  <p className="text-sm text-gray-500">
                    Raise funds for your personal needs
                  </p>
                </div>
              </Label>
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="other" />
                <Users className="w-6 h-6" />
                <div>
                  <p className="font-medium">Someone Else</p>
                  <p className="text-sm text-gray-500">
                    Raise funds for another individual or group
                  </p>
                </div>
              </Label>
              <Label className="flex items-center space-x-4 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <RadioGroupItem value="charity" />
                <Heart className="w-6 h-6" />
                <div>
                  <p className="font-medium">A Charity</p>
                  <p className="text-sm text-gray-500">
                    Raise funds for a charitable organization
                  </p>
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
                <Input
                  id="title"
                  placeholder="Give your fundraiser a clear title"
                  {...form.register("title")}
                />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  onValueChange={(value) => form.setValue("category", value)}
                  defaultValue={form.getValues("category")}
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
                {form.formState.errors.category && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.category.message}
                  </p>
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
                  <p className="text-sm text-red-500">
                    {form.formState.errors.story.message}
                  </p>
                )}
              </div>
              <Card className="bg-gray-50 border-none">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Use a clear, compelling title</li>
                    <li>• Choose a category that matches your cause</li>
                    <li>• Share a personal story to connect with donors</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Add images</h2>
            <p className="text-gray-600">
              Fundraisers with images attract more donations. Upload up to 5
              images.
            </p>
            <Card className="p-8 border-dashed hover:bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[0, 1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
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
                <p className="text-sm text-red-500 mt-2">
                  {form.formState.errors.images.message}
                </p>
              )}
            </Card>
            <Card className="bg-gray-50 border-none">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Image Tips</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm mb-2">Do:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use close-up images that convey emotion</li>
                      <li>• Choose simple images with good contrast</li>
                      <li>• Include relevant landmarks or people</li>
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
                <p className="text-sm text-red-500">
                  {form.formState.errors.goal.message}
                </p>
              )}
              <Card className="bg-gray-50 border-none mt-4">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Tips</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Set a realistic but ambitious goal</li>
                    <li>• Consider fees and expenses when setting your goal</li>
                    <li>• Be transparent about how funds will be used</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 5:
        const { fundraisingType, title, story, images, category, goal } =
          form.getValues();
        const validImages = images?.filter((img): img is string => !!img) || [];
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Preview Your Fundraiser</h2>
            <p className="text-gray-600">
              Review how your fundraiser will look to donors. Make any final
              edits before publishing.
            </p>
            <Card>
              <CardHeader>
                <CardTitle>{title || "Your Fundraiser Title"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {validImages.length > 0 && (
                  <div className="relative">
                    <div className="w-full h-48 overflow-hidden rounded-lg">
                      <img
                        src={validImages[currentSlide]}
                        alt={`Fundraiser image ${currentSlide + 1}`}
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
                                index === currentSlide
                                  ? "bg-gray-800"
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
                <div>
                  <h3 className="font-semibold">Fundraising For</h3>
                  <p className="text-gray-600 capitalize">
                    {fundraisingType || "Not selected"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Category</h3>
                  <p className="text-gray-600">{category || "Not selected"}</p>
                </div>
                <div>
                  <h3 className="font-semibold">Goal</h3>
                  <p className="text-gray-600">
                    {goal ? `$${goal.toLocaleString()}` : "Not set"}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Story</h3>
                  <p className="text-gray-600 line-clamp-3">
                    {story || "Your story will appear here"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col lg:flex-row">
      <div className="lg:flex-1 py-8 px-4 sm:px-6 lg:px-8 overflow-y-auto h-screen ">
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
                  <Button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Create Fundraiser
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

      <div
        className="lg:w-1/2 lg:flex lg:items-center lg:justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="w-full h-full  bg-gradient-to-b from-transparent to-black/60 flex flex-col justify-end p-6 lg:p-12">
          <h2 className="text-white text-3xl font-bold mb-4">
            Make a Difference Today
          </h2>
          <p className="text-white/90 text-lg">
            Join thousands of people who are creating positive change through
            fundraising. Your story matters.
          </p>
        </div>
      </div>

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

      <Dialog open={isLeaveDialogOpen} onOpenChange={setIsLeaveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Leave this page?</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-gray-600">
            You haven’t finished creating your fundraiser. Are you sure you want
            to go back to the homepage?
          </p>
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              variant="outline"
              onClick={() => setIsLeaveDialogOpen(false)}
            >
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
