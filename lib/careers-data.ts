export interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
}

export const jobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "We're looking for a Senior Full Stack Developer to join our engineering team and help build the future of trade services marketplace.",
    requirements: [
      "5+ years of experience with modern web technologies",
      "Strong knowledge of React, Node.js, and TypeScript",
      "Experience with cloud infrastructure and DevOps",
      "Excellent problem-solving and communication skills"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Remote-first work environment",
      "Health insurance and wellness benefits",
      "Professional development budget"
    ],
    postedDate: "2024-03-15"
  },
  {
    id: 2,
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Hybrid",
    type: "Full-time",
    description: "Join our marketing team to help shape and execute our product marketing strategy for our tradesperson marketplace.",
    requirements: [
      "3+ years of B2B product marketing experience",
      "Strong analytical and strategic thinking skills",
      "Excellent written and verbal communication",
      "Experience in SaaS or marketplace products"
    ],
    benefits: [
      "Competitive compensation package",
      "Flexible working arrangements",
      "Health and wellness benefits",
      "Learning and development opportunities"
    ],
    postedDate: "2024-03-18"
  }
];