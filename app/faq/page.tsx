import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Find Local Trade Services",
  description: "Find answers to common questions about our platform, how to find tradespeople, and how to list your business.",
  openGraph: {
    title: "FAQ | Find Local Trade Services",
    description: "Find answers to common questions about our platform, how to find tradespeople, and how to list your business.",
    type: "website",
  },
};

const faqItems = [
  {
    question: "How do I find a tradesperson?",
    answer: "You can search for tradespeople by entering your location and the type of service you need. Browse through profiles, read reviews, and contact professionals directly through our platform.",
  },
  {
    question: "Are the tradespeople verified?",
    answer: "Yes, all tradespeople on our platform undergo a verification process. We check their qualifications, insurance, and business registration. We also collect and verify customer reviews.",
  },
  {
    question: "How much does it cost to use the platform?",
    answer: "Our platform is free for customers to use. Tradespeople pay a small subscription fee to maintain their listing and access additional features.",
  },
  {
    question: "Can I leave a review?",
    answer: "Yes, after a job is completed, you can leave a review sharing your experience. Your feedback helps maintain quality standards and helps others make informed decisions.",
  },
  {
    question: "How do I list my business?",
    answer: "Click on the 'List Your Business' button in the navigation menu. Complete your business profile, provide necessary documentation, and choose a subscription plan.",
  },
  {
    question: "What happens if there's a dispute?",
    answer: "We have a dedicated support team to help resolve any disputes between customers and tradespeople. Contact our support team immediately if you encounter any issues.",
  },
  {
    question: "Are quotes free?",
    answer: "Yes, requesting quotes through our platform is free. You can compare multiple quotes before making a decision.",
  },
  {
    question: "How quickly can I expect a response?",
    answer: "Most tradespeople respond within 24-48 hours. You can see average response times on their profiles.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take data protection seriously. All personal information is encrypted and handled in accordance with privacy laws.",
  },
  {
    question: "What areas do you cover?",
    answer: "We cover all major cities and surrounding areas. Enter your postcode to see available tradespeople in your location.",
  },
];

export default function FAQPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Can't find what you're looking for?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}