'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Users, Bookmark, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeedCardProps {
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

export function FeedCard({
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
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const progress = (current / target) * 100;
  const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAAFUlEQVR4nGM8ceIEA27AhEduBEsDAN9QAmyb10RsAAAAAElFTkSuQmCC";

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(prev => !prev);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    setBookmarked(prev => !prev);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: `${window.location.origin}/campaign/${id}`,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <Link href={`/campaign/${id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-200 relative">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <Image
              src={imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="group-hover:scale-105 transition-transform duration-200"
              placeholder="blur"
              blurDataURL={blurDataURL}
            />
            <Badge
              className={`absolute top-4 left-4 ${
                type === 'petition' ? 'bg-blue-600' : 'bg-[#174023]'
              }`}
            >
              {type === 'petition' ? 'Petition' : 'Donation'}
            </Badge>

            {/* Top-right interactions */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button onClick={handleLike}>
                <Heart className={cn("h-5 w-5", liked ? "fill-red-500 text-red-500" : "text-white")} />
              </button>
              <button onClick={handleBookmark}>
                <Bookmark className={cn("h-5 w-5", bookmarked ? "fill-yellow-400 text-yellow-400" : "text-white")} />
              </button>
              <button onClick={handleShare}>
                <Share2 className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
          <Progress value={progress} className="h-2 mb-4" />
          <div className="flex justify-between text-sm text-muted-foreground">
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

        <CardFooter className="px-6 py-4 bg-muted/50 flex justify-between items-center">
          <Link
            href={`/user/${creatorUsername}`}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2"
          >
            {creatorAvatarUrl ? (
              <Image
                src={creatorAvatarUrl}
                alt={creatorName}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
                {creatorName[0]}
              </div>
            )}
            <span className="text-sm font-medium hover:underline text-primary">{creatorName}</span>
          </Link>

          <div className="text-sm font-medium text-[#174023]">
            {Math.round(progress)}% Complete
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
