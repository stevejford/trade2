import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the TrustTrades team",
};

export default function Contact() {
  return (
    <div className="container py-12">
      <div className="mb-8 space-y-4">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">
          Have questions? We're here to help.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="First name" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Email" type="email" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your message"
                  className="min-h-[150px] resize-none"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Other ways to get in touch with us.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    123 Business Street
                    <br />
                    Sydney, NSW 2000
                    <br />
                    Australia
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    +61 2 1234 5678
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    contact@trusttrades.com
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Business Hours</CardTitle>
              <CardDescription>
                When you can reach our support team.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Monday - Friday</span>
                  <span className="text-sm">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Saturday</span>
                  <span className="text-sm">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Sunday</span>
                  <span className="text-sm">Closed</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}