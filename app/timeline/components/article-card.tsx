'use client';

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Users } from "lucide-react";

export interface Feed {
  id: string;
  type: 'petition' | 'donation';
  title: string;
  description: string;
  imageUrl: string;
  target: number;
  current: number;
  daysLeft: number;
  creatorName: string;
  creatorUsername: string;
  creatorAvatarUrl?: string;
}

interface FeedCardProps extends Feed {}

export function ArticleCard({
  id,
  type,
  title,
  description,
  imageUrl,
  target,
  current,
  daysLeft,
  creatorName,
  creatorUsername,
  creatorAvatarUrl,
}: FeedCardProps) {
  const progress = (current / target) * 100;
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFUlEQVR4nGM8ceIEA27AhEduBEsDAN9QAmyb10RsAAAAAElFTkSuQmCC";

  return (
    <Card className="group hover:shadow-md transition-shadow duration-200 w-full max-w-2xl mx-auto">
      {/* Creator Info */}
      <div className="flex items-center justify-between px-5 pt-4">
        <Link
          href={`/user/${creatorUsername}`}
          className="flex items-center gap-3 hover:underline"
        >
          {creatorAvatarUrl ? (
            <Image
        src={creatorAvatarUrl}
              alt={creatorName}
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-300" />
          )}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-900">
              {creatorName}
            </span>
            <span className="text-xs text-muted-foreground">
              @{creatorUsername}
            </span>
          </div>
        </Link>
        <Badge
          className={`text-xs px-2 py-1 rounded-full ${
            type === 'petition' ? 'bg-blue-600' : 'bg-[#174023]'
          }`}
        >
          {type === 'petition' ? 'Petition' : 'Donation'}
        </Badge>
      </div>

      {/* Image */}
      <div className="relative h-56 w-full mt-4 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          placeholder="blur"
          blurDataURL={blurDataURL}
          className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
        />
      </div>

      {/* Content */}
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {description}
        </p>

        <Progress value={progress} className="h-2 mb-4" />

        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-2">
            {type === 'petition' ? (
              <>
                <Users className="h-4 w-4" />
                <span>{current.toLocaleString()} signatures</span>
              </>
            ) : (
              <>
                <Heart className="h-4 w-4" />
                <span>${current.toLocaleString()} raised</span>
              </>
            )}
          </div>
          <span>{daysLeft} days left</span>
        </div>
      </CardContent>

      <CardFooter className="px-5 py-4 bg-muted/50 flex justify-between items-center">
        <div className="text-sm font-medium text-gray-600">
          {type === 'petition'
            ? `${target.toLocaleString()} target signatures`
            : `$${target.toLocaleString()} target`}
        </div>
        <div className="text-sm font-medium text-[#174023]">
          {Math.round(progress)}% Complete
        </div>
      </CardFooter>
    </Card>
  );
}
