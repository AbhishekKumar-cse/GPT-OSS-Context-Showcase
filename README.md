# GPT-OSS Showcase

**Tagline: GPT-OSS Showcase: Where Innovation Takes Center Stage.**

---

## 🚀 Project Overview

The **GPT-OSS Showcase** is a modern, full-stack web application designed to be a central hub for a contest celebrating creativity and innovation in the open-source generative AI community. It provides a platform for developers to submit their projects, have them showcased, and receive automated, AI-powered feedback. The application is built to be engaging, interactive, and intelligent, leveraging a cutting-edge tech stack to deliver a seamless user experience.

Inspired by the explosion of creativity in the open-source AI space with models like Llama, Phi, and Gemma, this platform was created to build a community, encourage innovation, and celebrate the incredible work of developers worldwide.

---

## ✨ Key Features

The showcase is packed with features designed to create a rich and interactive experience for contestants, judges, and visitors.

### 1. AI-Powered Submission Evaluation
Submissions can be evaluated by a sophisticated AI assistant built with Genkit and Google's Gemini models. This feature provides an initial automated review based on key criteria:
- **Creativity & Originality Score (1-10):** How innovative is the idea?
- **Technical Complexity Score (1-10):** How challenging was the project to build?
- **Potential Impact Score (1-10):** How useful or impactful could this project be?
- **Actionable Feedback:** The AI provides constructive feedback and detailed suggestions for improvement, helping contestants refine their work and speeding up the review process.

### 2. Interactive 3D & AR Visualizations
For submissions in the robotics and hardware categories, the showcase integrates an interactive 3D model viewer.
- **Immersive Experience:** Judges and visitors can interact with 3D models of physical devices and robots directly in the browser.
- **AR Support:** The viewer supports Augmented Reality, allowing users to place and view models in their own physical space using a compatible device.
- **Powered by `@google/model-viewer`:** This feature offers a novel way to showcase physical projects without needing to be physically present.

### 3. AI-Generated Taglines
To add a creative touch to each submission, an AI-powered feature generates catchy taglines based on the project's description.
- **One-Click Generation:** A simple button on the submission details page triggers a Genkit flow to create a short, memorable tagline.
- **Enhances Presentation:** This feature helps to quickly summarize the essence of a project in a fun and engaging way.

### 4. Dynamic Filtering and Search
The platform provides robust tools for navigating and discovering submissions.
- **Search:** A full-text search allows users to find projects by title, description, or author.
- **Filter by Category:** Users can easily filter the gallery to view submissions from specific categories (e.g., Robotics, For Humanity).
- **Sort Submissions:** Submissions can be sorted by "Newest" or "Most Popular" to highlight trending or recent projects.

### 5. Modern, Responsive UI
The entire application is built with a clean, modern, and fully responsive user interface, ensuring a great experience on any device, from desktops to mobile phones. The UI is built using **ShadCN UI** and **Tailwind CSS** for a professional and consistent look and feel.

---

## 🛠️ Tech Stack

The GPT-OSS Showcase is built with a modern, production-ready technology stack.

- **Frontend Framework:** **Next.js 15** (with App Router and React Server Components)
- **Language:** **TypeScript**
- **AI Framework:** **Genkit** for orchestrating AI flows and connecting to LLMs.
- **AI Models:** **Google Gemini** family of models via the Google AI Platform.
- **Styling:** **Tailwind CSS** for utility-first styling.
- **Component Library:** **ShadCN UI** for a rich set of accessible and reusable components.
- **3D/AR Viewer:** **`@google/model-viewer`** web component.
- **Schema & Validation:** **Zod** for defining structured inputs and outputs for AI flows.
- **Icons:** **Lucide React** for a clean and consistent icon set.

---

## 🔧 Getting Started & Local Development

To run the GPT-OSS Showcase on your local machine, follow these steps.

### Prerequisites
- Node.js (v18 or later)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd gpt-oss-showcase
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root of the project and add your Google AI API key. You can get a key from [Google AI Studio](https://aistudio.google.com/).

```
GEMINI_API_KEY=YOUR_API_KEY_HERE
```

### 4. Run the Development Server
The application requires two development servers to run concurrently: one for the Next.js frontend and one for the Genkit AI flows.

- **Run the Next.js App:**
  ```bash
  npm run dev
  ```
  The application will be available at `http://localhost:9002`.

- **Run the Genkit Development Server:**
  In a separate terminal, run:
  ```bash
  npm run genkit:dev
  ```
  This will start the Genkit server, which the Next.js app will call for AI features.

You can now open your browser to `http://localhost:9002` to see the application running.

---

## 📁 Project Structure

The project follows a standard Next.js App Router structure with some key directories:

```
.
├── src
│   ├── app/                # Next.js pages and layouts
│   ├── components/         # Reusable React components (UI, layout, etc.)
│   ├── lib/                # Shared utilities, types, and mock data
│   ├── hooks/              # Custom React hooks
│   └── ai/                 # Genkit AI configuration and flows
│       ├── flows/          # Individual AI features (evaluation, tagline, etc.)
│       └── genkit.ts       # Genkit initialization
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

---

## 🧠 AI Flows (Genkit)

All AI functionality is managed through Genkit flows defined in the `src/ai/flows/` directory. Each flow is a serverless function that performs a specific AI task.

- **`submission-evaluation.ts`**: Takes submission details as input and returns a structured JSON object with scores for creativity, technical complexity, and impact, along with detailed feedback.
- **`generate-tagline.ts`**: Takes a project description and returns a single, catchy tagline.
- **`auto-tag-generation.ts`**: (Future) Analyzes submission content to generate relevant tags.
- **`semantic-search-enhancement.ts`**: (Future) Enhances search capabilities with semantic understanding.
```