import type { Submission } from './types';

export const categories = [
  { id: 'best-overall', name: 'Best Overall' },
  { id: 'robotics', name: 'Best in Robotics' },
  { id: 'weirdest-hardware', name: 'Weirdest Hardware' },
  { id: 'local-agent', name: 'Best Local Agent' },
  { id: 'fine-tune', name: 'Most Useful Fine-Tune' },
  { id: 'wildcard', name: 'Wildcard' },
  { id: 'for-humanity', name: 'For Humanity' },
];

const submissions: Submission[] = [
  {
    id: 'local-agent-assistant',
    title: 'Offline Personal Assistant',
    description: 'A fully offline agent that manages your calendar, notes, and local files with natural language. Runs entirely on-device for maximum privacy.',
    category: { id: 'local-agent', name: 'Best Local Agent' },
    author: { name: 'Alice Johnson', email: 'alice@example.com', githubUrl: 'https://github.com/alice' },
    technical: {
      modelUsed: 'Llama 3 8B',
      framework: 'Ollama + Next.js',
      programmingLanguages: ['TypeScript', 'Python'],
      hardwareRequirements: '8GB RAM, CPU',
      modelSize: '8B',
      specializations: ['Function Calling', 'Local RAG'],
    },
    media: {
      screenshots: ['https://picsum.photos/seed/laa1/600/400', 'https://picsum.photos/seed/laa2/600/400'],
      codeRepository: 'https://github.com/alice/offline-assistant',
    },
    metrics: { views: 2500, likes: 850, downloads: 400, shares: 120 },
    timestamps: { submitted: new Date('2024-07-15T09:00:00Z'), lastUpdated: new Date('2024-07-18T14:30:00Z') },
    status: 'approved',
    tags: ['privacy', 'productivity', 'offline', 'agent'],
  },
  {
    id: 'robot-gardener',
    title: 'Autonomous Garden Bot',
    description: 'A small rover that uses computer vision and a fine-tuned model to identify weeds and pests, then removes them organically. Complete with a live video feed.',
    category: { id: 'robotics', name: 'Best in Robotics' },
    author: { name: 'Bob Richards', email: 'bob@example.com' },
    technical: {
      modelUsed: 'Phi-3 Vision',
      framework: 'ROS2 + PyTorch',
      programmingLanguages: ['Python', 'C++'],
      hardwareRequirements: 'Raspberry Pi 5, 2x Motors, Camera',
      modelSize: '4.2B',
      specializations: ['Computer Vision', 'Robotics Control'],
    },
    media: {
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      screenshots: ['https://picsum.photos/seed/rgb1/600/400', 'https://picsum.photos/seed/rgb2/600/400'],
      codeRepository: 'https://github.com/bob/garden-bot',
      model3d: 'https://modelviewer.dev/shared-assets/models/RobotExpressive.glb',
    },
    metrics: { views: 4200, likes: 1500, downloads: 300, shares: 250 },
    timestamps: { submitted: new Date('2024-07-12T11:20:00Z'), lastUpdated: new Date('2024-07-20T10:00:00Z') },
    status: 'featured',
    tags: ['robotics', 'gardening', 'automation', 'computer-vision'],
  },
  {
    id: 'musical-toaster',
    title: 'The Toaster That Sings',
    description: 'This project turns a vintage toaster into a musical instrument. A GPT-2 model fine-tuned on MIDI data generates melodies based on the toast level selected.',
    category: { id: 'weirdest-hardware', name: 'Weirdest Hardware' },
    author: { name: 'Charlie Day', email: 'charlie@example.com' },
    technical: {
      modelUsed: 'GPT-2 Small',
      framework: 'Arduino + Python Flask',
      programmingLanguages: ['Python', 'C++'],
      hardwareRequirements: 'Toaster, Arduino, Solenoids, MIDI Shield',
      modelSize: '124M',
      specializations: ['Creative AI', 'Music Generation'],
    },
    media: {
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      screenshots: ['https://picsum.photos/seed/wh1/600/400', 'https://picsum.photos/seed/wh2/600/400'],
      codeRepository: 'https://github.com/charlie/musical-toaster',
      model3d: 'https://modelviewer.dev/shared-assets/models/Toaster.glb'
    },
    metrics: { views: 8600, likes: 3200, downloads: 120, shares: 800 },
    timestamps: { submitted: new Date('2024-07-01T18:00:00Z'), lastUpdated: new Date('2024-07-05T12:00:00Z') },
    status: 'approved',
    tags: ['iot', 'music', 'creative-tech', 'hardware'],
  },
  {
    id: 'legal-document-analyzer',
    title: 'Legal-Ease Document Summarizer',
    description: 'A fine-tuned model that ingests complex legal documents and produces easy-to-understand summaries, highlighting key clauses, obligations, and risks.',
    category: { id: 'fine-tune', name: 'Most Useful Fine-Tune' },
    author: { name: 'Diana Prince', email: 'diana@example.com', organization: 'LegalTech Inc.' },
    technical: {
      modelUsed: 'Mistral 7B',
      framework: 'Hugging Face Transformers',
      programmingLanguages: ['Python'],
      hardwareRequirements: 'NVIDIA RTX 3090 for fine-tuning',
      modelSize: '7B',
      specializations: ['Legal NLP', 'Summarization', 'RAG'],
    },
    media: {
      screenshots: ['https://picsum.photos/seed/lda1/600/400', 'https://picsum.photos/seed/lda2/600/400'],
      codeRepository: 'https://github.com/diana/legal-ease',
    },
    metrics: { views: 3100, likes: 1100, downloads: 600, shares: 150 },
    timestamps: { submitted: new Date('2024-07-20T10:00:00Z'), lastUpdated: new Date('2024-07-21T11:00:00Z') },
    status: 'approved',
    tags: ['legal-tech', 'nlp', 'fine-tuning', 'professional'],
  },
  {
    id: 'crop-disease-detector',
    title: 'AgriScan: AI for Healthy Crops',
    description: 'Empowering farmers with a mobile app that uses a vision model to detect crop diseases from a simple photo, providing instant diagnosis and treatment advice.',
    category: { id: 'for-humanity', name: 'For Humanity' },
    author: { name: 'Ethan Hunt', email: 'ethan@example.com', organization: 'Global Farming Initiative' },
    technical: {
      modelUsed: 'MobileVLM',
      framework: 'TensorFlow Lite',
      programmingLanguages: ['Python', 'Kotlin'],
      hardwareRequirements: 'Android Smartphone',
      modelSize: '3B',
      specializations: ['Agriculture', 'Computer Vision', 'Mobile AI'],
    },
    media: {
      screenshots: ['https://picsum.photos/seed/cdd1/600/400', 'https://picsum.photos/seed/cdd2/600/400'],
      codeRepository: 'https://github.com/ethan/agriscan',
    },
    metrics: { views: 5500, likes: 2300, downloads: 1100, shares: 450 },
    timestamps: { submitted: new Date('2024-07-18T16:45:00Z'), lastUpdated: new Date('2024-07-19T09:00:00Z') },
    status: 'featured',
    tags: ['agriculture', 'social-good', 'sustainability', 'mobile-app'],
  },
  {
    id: 'generative-story-engine',
    title: 'Endless Adventure RPG',
    description: 'A text-based RPG where the world, characters, and quests are generated in real-time by an LLM, creating a truly unique adventure every time you play.',
    category: { id: 'wildcard', name: 'Wildcard' },
    author: { name: 'Fiona Glenanne', email: 'fiona@example.com' },
    technical: {
      modelUsed: 'Gemma 7B',
      framework: 'LangChain',
      programmingLanguages: ['Python', 'JavaScript'],
      hardwareRequirements: 'Web Browser',
      modelSize: '7B',
      specializations: ['Creative Writing', 'Gaming', 'Agentic Systems'],
    },
    media: {
      screenshots: ['https://picsum.photos/seed/gse1/600/400', 'https://picsum.photos/seed/gse2/600/400'],
      codeRepository: 'https://github.com/fiona/endless-rpg',
    },
    metrics: { views: 7200, likes: 2900, downloads: 1500, shares: 300 },
    timestamps: { submitted: new Date('2024-07-14T21:00:00Z'), lastUpdated: new Date('2024-07-15T10:00:00Z') },
    status: 'approved',
    tags: ['gaming', 'generative-ai', 'interactive-fiction', 'storytelling'],
  },
  {
    id: 'ai-code-optimizer',
    title: 'CodeSynth Optimizer',
    description: 'An integrated system that analyzes code repositories, identifies performance bottlenecks, and suggests optimized code snippets using a specialized fine-tuned model.',
    category: { id: 'best-overall', name: 'Best Overall' },
    author: { name: 'Grace Hopper', email: 'grace@example.com' },
    technical: {
      modelUsed: 'Code Llama 13B',
      framework: 'VS Code Extension',
      programmingLanguages: ['TypeScript', 'Python'],
      hardwareRequirements: 'N/A',
      modelSize: '13B',
      specializations: ['Code Generation', 'Performance Tuning', 'Developer Tools'],
    },
    media: {
      demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      screenshots: ['https://picsum.photos/seed/aco1/600/400', 'https://picsum.photos/seed/aco2/600/400'],
      codeRepository: 'https://github.com/grace/codesynth',
    },
    metrics: { views: 9800, likes: 4500, downloads: 2200, shares: 700 },
    timestamps: { submitted: new Date('2024-07-22T12:00:00Z'), lastUpdated: new Date('2024-07-22T18:00:00Z') },
    status: 'featured',
    tags: ['developer-tools', 'code-generation', 'optimization', 'ai-assistant'],
  },
];

export function getSubmissions(): Promise<Submission[]> {
  // Simulate a network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(submissions);
    }, 200);
  });
}

export function getSubmissionById(id: string): Promise<Submission | undefined> {
  // Simulate a network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(submissions.find((s) => s.id === id));
    }, 150);
  });
}
