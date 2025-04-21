'use client';
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Users, 
  ThumbsUp, 
  Share2, 
  Bookmark, 
  BookmarkCheck,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  Link as LinkIcon,
  X
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export interface Feed {
  id: string;
  type: 'petition' | 'campaign';
  title: string;
  description: string;
  imageUrl: string;
  target: number;
  category: string;
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
  
  // State for social interaction features
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 5);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  
  // Reference to the share dialog
  const shareDialogRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside to close the dialog
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareDialogRef.current && !shareDialogRef.current.contains(event.target as Node)) {
        setShowShareDialog(false);
      }
    }
    
    if (showShareDialog) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showShareDialog]);
  
  // Handle like action
  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  
  // Handle bookmark action
  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };
  
  // Handle share dialog toggle
  const handleShareClick = () => {
    setShowShareDialog(!showShareDialog);
  };
  
  // Generate article URL
  const getArticleUrl = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return `${baseUrl}/articles/${id}`;
  };
  
  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(getArticleUrl()).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    });
  };
  
  // Share on social media
  const shareOnSocial = (platform: string) => {
    const url = encodeURIComponent(getArticleUrl());
    const text = encodeURIComponent(`Check out this ${type}: ${title}`);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(`Sharing this ${type}: ${title}`)}&body=${text}%0A%0A${url}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
      setShowShareDialog(false);
    }
  };

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
          {type === 'petition' ? 'Petition' : 'Campaign'}
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
      <CardFooter className="px-5 py-4 bg-muted/50 flex flex-col gap-3">
        <div className="flex justify-between items-center w-full">
          <div className="text-sm font-medium text-gray-600">
            {type === 'petition'
              ? `${target.toLocaleString()} target signatures`
              : `$${target.toLocaleString()} target`}
          </div>
          <div className="text-sm font-medium text-[#174023]">
            {Math.round(progress)}% Complete
          </div>
        </div>
        
        {/* LinkedIn-style social interaction bar */}
        <div className="border-t pt-3 w-full">
          <div className="flex justify-between items-center">
            {/* Like Button */}
            <button 
              onClick={handleLike}
              className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition hover:bg-gray-100 ${isLiked ? 'text-blue-600' : 'text-gray-500'}`}
            >
              <ThumbsUp size={16} className={isLiked ? 'fill-blue-600' : ''} />
              <span>{likeCount}</span>
            </button>
            
            {/* Share Button */}
            <div className="relative">
              <button 
                onClick={handleShareClick}
                className="flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium text-gray-500 transition hover:bg-gray-100"
              >
                <Share2 size={16} />
                <span>Share</span>
              </button>
              
              {/* Share Dialog */}
              {showShareDialog && (
                <div 
                  ref={shareDialogRef}
                  className="absolute bottom-12 right-0 bg-white shadow-lg rounded-lg w-64 z-10 border border-gray-200"
                >
                  <div className="flex justify-between items-center border-b p-3">
                    <h4 className="font-medium text-gray-700">Share</h4>
                    <button 
                      onClick={() => setShowShareDialog(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X size={16} />
                    </button>
                  </div>
                  
                  <div className="p-3">
                    {/* Social media sharing options */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button 
                        onClick={() => shareOnSocial('linkedin')}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        <Linkedin size={16} />
                        <span>LinkedIn</span>
                      </button>
                      
                      <button 
                        onClick={() => shareOnSocial('twitter')}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blue-50 text-blue-400 hover:bg-blue-100"
                      >
                        <Twitter size={16} />
                        <span>Twitter</span>
                      </button>
                      
                      <button 
                        onClick={() => shareOnSocial('facebook')}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-blue-50 text-blue-600 hover:bg-blue-100"
                      >
                        <Facebook size={16} />
                        <span>Facebook</span>
                      </button>
                      
                      <button 
                        onClick={() => shareOnSocial('email')}
                        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-gray-50 text-gray-700 hover:bg-gray-100"
                      >
                        <Mail size={16} />
                        <span>Email</span>
                      </button>
                    </div>
                    
                    {/* Copy link option */}
                    <div className="border-t pt-3">
                      <button 
                        onClick={copyToClipboard}
                        className="flex items-center justify-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium bg-gray-50 text-gray-700 hover:bg-gray-100"
                      >
                        <LinkIcon size={16} />
                        <span>{copySuccess ? 'Link copied!' : 'Copy link'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Bookmark Button */}
            <button 
              onClick={handleBookmark}
              className={`flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium transition hover:bg-gray-100 ${isBookmarked ? 'text-blue-600' : 'text-gray-500'}`}
            >
              {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
              <span>{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}