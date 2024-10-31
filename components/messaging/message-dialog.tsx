"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";
import { MessageBubble } from "./message-bubble";
import { Send } from "lucide-react";

const formSchema = z.object({
  message: z.string().min(1, "Message cannot be empty"),
});

interface Message {
  id: string;
  content: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  timestamp: string;
  isRead: boolean;
}

interface MessageDialogProps {
  recipientId: string;
  recipientName: string;
  recipientAvatar?: string;
  currentUserId: string;
  currentUserName: string;
  currentUserAvatar?: string;
}

export function MessageDialog({
  recipientId,
  recipientName,
  recipientAvatar,
  currentUserId,
  currentUserName,
  currentUserAvatar,
}: MessageDialogProps) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // TODO: Implement actual message sending
      const newMessage: Message = {
        id: Date.now().toString(),
        content: values.message,
        senderId: currentUserId,
        senderName: currentUserName,
        senderAvatar: currentUserAvatar,
        timestamp: new Date().toISOString(),
        isRead: false,
      };
      
      setMessages((prev) => [...prev, newMessage]);
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Message</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={recipientAvatar} />
              <AvatarFallback>{recipientName[0]}</AvatarFallback>
            </Avatar>
            <DialogTitle>{recipientName}</DialogTitle>
          </div>
        </DialogHeader>

        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isCurrentUser={message.senderId === currentUserId}
              />
            ))}
          </div>
        </ScrollArea>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="border-t p-4 flex gap-2"
        >
          <Textarea
            {...form.register("message")}
            placeholder="Type your message..."
            className="resize-none"
            rows={2}
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}