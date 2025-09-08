export interface Submission {
  id: string;
  title: string;
  description: string;
  category: {
    id: 'best-overall' | 'robotics' | 'weirdest-hardware' | 'local-agent' | 'fine-tune' | 'wildcard' | 'for-humanity';
    name: string;
  };
  author: {
    name: string;
    email: string;
    organization?: string;
    githubUrl?: string;
  };
  technical: {
    modelUsed: string;
    framework: string;
    programmingLanguages: string[];
    hardwareRequirements: string;
    modelSize: string;
    specializations: string[];
  };
  media: {
    demoVideo?: string;
    screenshots: string[];
    codeRepository: string;
    documentation?: string;
    model3d?: string;
  };
  metrics: {
    views: number;
    likes: number;
    downloads: number;
    shares: number;
  };
  timestamps: {
    submitted: Date;
    lastUpdated: Date;
    published?: Date;
  };
  status: 'draft' | 'submitted' | 'under-review' | 'approved' | 'featured';
  tags: string[];
}
