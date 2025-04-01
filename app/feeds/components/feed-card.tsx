'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Heart, Users } from "lucide-react";
import Link from "next/link";

interface FeedCardProps {
  id: string;
  type: 'petition' | 'donation';
  title: string;
  description: string;
  imageUrl: string;
  target: number;
  current: number;
  daysLeft: number;
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
}: FeedCardProps) {
  const progress = (current / target) * 100;

  return (
    <Link href={`/campaign/${id}`}>
      <Card className="group hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
            />
            <Badge 
              className={`absolute top-4 left-4 ${
                type === 'petition' ? 'bg-blue-600' : 'bg-[#174023]'
              }`}
            >
              {type === 'petition' ? 'Petition' : 'Donation'}
            </Badge>
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
        <CardFooter className="px-6 py-4 bg-muted/50">
          <div className="w-full flex justify-between items-center">
            <div className="text-sm font-medium">
              {type === 'petition' ? (
                `${target.toLocaleString()} target signatures`
              ) : (
                `$${target.toLocaleString()} target`
              )}
            </div>
            <div className="text-sm font-medium text-[#174023]">
              {Math.round(progress)}% Complete
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}