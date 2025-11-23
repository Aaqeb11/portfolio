import {
  Github,
  ExternalLink,
  ArrowLeft,
  Code,
  Database,
  Bot,
  Zap,
  Server,
  GraduationCap,
  PackageOpen,
  Layout,
} from "lucide-react";
import { ReactElement } from "react";

export type ProjectLinks = {
  live?: string;
  npm?: string;
  github?: string;
};

export type ProjectDetails = {
  overview: string;
  features?: string[];
  useCases?: string[]; // Mark optional if some projects miss them
  pipeline?: string[];
  advantages?: string[];
  performance?: string[];
  bots?: Array<{
    name: string;
    description: string;
    features: string[];
  }>;
  impact?: string[];
  services?: string[];
  architecture?: string[];
  adapters?: string[];
  benefits?: string[];
  aiPipeline?: string[];
};

export type Project = {
  id: number;
  title: string;
  category: string;
  icon?: ReactElement;
  summary: string;
  image: string;
  links: ProjectLinks;
  tech: string[];
  details: ProjectDetails;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Component Dock",
    category: "CLI Tool",
    summary:
      "A powerful CLI tool that streamlines the creation of modern React component libraries with zero configuration.",
    image:
      "/ComponentDock.png",
    links: {
      npm: "https://www.npmjs.com/package/@aaqeb11/component-dock",
      github: "https://github.com/Aaqeb11/component-dock",
    },
    tech: ["TypeScript", "Rollup", "Storybook", "ESLint", "Prettier"],
    details: {
      overview:
        "Component Dock is a powerful command-line interface tool designed to streamline the creation of modern React component libraries. Built to solve the complexity of setting up component library infrastructure, it provides developers with production-ready scaffolding that includes all the essential tools and configurations needed for building, testing, and publishing high-quality React components.",
      features: [
        "Automated Scaffolding: Instantly generate a complete component library structure with a single command",
        "Modern Toolchain: Pre-configured with Rollup, TypeScript, Storybook, ESLint, and Prettier",
        "Zero Configuration: Start building components immediately without spending hours on build configuration",
        "Best Practices Built-in: Follows React community standards and modern development practices",
        "NPM Publishing Ready: Generated libraries are pre-configured for seamless NPM package publishing",
      ],
      useCases: [
        "Quickly bootstrap new component libraries for design systems",
        "Create reusable UI component packages for multiple projects",
        "Build open-source React component libraries",
        "Establish consistent component architecture across teams",
      ],
    },
  },
  {
    id: 2,
    title: "Advanced RAG Email Classification",
    category: "AI/ML System",
    summary:
      "Sophisticated Retrieval-Augmented Generation solution for intelligent email classification using the FLARE approach.",
    image:
      "/AdvancedRAGEmailClassification.png",
    links: {},
    tech: ["Python", "Vector DB", "PostgreSQL", "LLM", "FLARE"],
    details: {
      overview:
        "Developed a sophisticated Retrieval-Augmented Generation (RAG) solution for intelligent email classification and processing. This system combines cutting-edge AI techniques with vector embeddings to achieve high-accuracy email categorization, using the FLARE (Forward-Looking Active Retrieval) approach for enhanced contextual understanding.",
      features: [
        "Vector Database Integration: Dual-store architecture using Vector DB and PG Vector",
        "FLARE Approach: Forward-Looking Active Retrieval for proactive context gathering",
        "Semantic Search: Query vector database for similar historical emails",
        "Confidence Scoring: Assign confidence metrics to each classification",
        "High accuracy rate with reduced false positives through contextual understanding",
      ],
      pipeline: [
        "Email Ingestion: Real-time email data capture and preprocessing",
        "Embedding Generation: Convert email content into vector representations",
        "Semantic Search: Query vector database for similar historical emails",
        "Context Assembly: Gather relevant context using FLARE methodology",
        "Classification: LLM-powered categorization with retrieved context",
        "Confidence Scoring: Assign confidence metrics to each classification",
      ],
    },
  },
  {
    id: 3,
    title: "Graph RAG Email Processing MVP",
    category: "AI/ML System",
    summary:
      "Extended email classification with Graph RAG capabilities, introducing relationship-aware processing for sophisticated email understanding.",
    image:
      "/GraphRAGEmailProcessingMVP.png",
    links: {},
    tech: ["Neo4j", "NER", "Graph Database", "RAG", "Python"],
    details: {
      overview:
        "Extended the email classification system with Graph RAG capabilities, introducing relationship-aware processing that understands connections between emails, senders, and topics. This MVP demonstrates advanced knowledge graph integration for more sophisticated email understanding.",
      features: [
        "Knowledge Graph: Maps relationships between emails, creating a comprehensive network",
        "Thread Awareness: Maintains conversation context across email chains",
        "Entity Recognition: Identifies people, projects, and organizations",
        "Temporal Analysis: Tracks how topics evolve over time",
        "Multi-hop Reasoning: Discovers indirect relationships between emails",
      ],
      advantages: [
        "Understands email threads and conversation context",
        "Identifies patterns across multiple communications",
        "Enables complex queries across related emails",
        "Combines graph context with vector similarity for enhanced accuracy",
      ],
    },
  },
  {
    id: 4,
    title: "CDC Pipeline with Debezium & Kafka",
    category: "Data Engineering",
    summary:
      "Robust Change Data Capture solution for real-time data synchronization and event streaming using Debezium and Apache Kafka.",
    image:
      "/CDCPipelinewithDebezium&Kafka.png",
    links: {},
    tech: ["Apache Kafka", "Debezium", "PostgreSQL", "Event Streaming"],
    details: {
      overview:
        "Architected and implemented a robust Change Data Capture (CDC) solution using Debezium and Apache Kafka for real-time data synchronization and event streaming. This system enables seamless data flow between multiple databases and services while maintaining data consistency and enabling event-driven architecture.",
      features: [
        "Change Detection: Debezium monitors database transaction logs in real-time",
        "Event Creation: Converts database changes into Kafka events",
        "Stream Processing: Kafka distributes events to subscribed consumers",
        "Schema Registry: Maintains event schema consistency",
        "Near-zero latency data propagation with fault-tolerant architecture",
      ],
      useCases: [
        "Real-time data replication across microservices",
        "Cache invalidation and synchronization",
        "Audit logging and compliance tracking",
        "Analytics pipeline feeding",
        "Search index updates",
      ],
      performance: [
        "Near-zero latency data propagation",
        "High throughput handling thousands of events per second",
        "Fault-tolerant with automatic retry mechanisms",
        "Scalable horizontal architecture",
      ],
    },
  },
  {
    id: 5,
    title: "n8n Automation & Slack Bots",
    category: "Automation",
    summary:
      "Comprehensive automation workflows including PR notifiers, reminder bots, and intelligent blocker tracking with automatic ticket creation.",
    image:
      "/n8nAutomation.png",
    links: {},
    tech: ["n8n", "Slack API", "GitHub API", "Linear", "PostgreSQL"],
    details: {
      overview:
        "Developed comprehensive automation solutions using n8n (workflow automation platform) to streamline development operations and team communication. Created multiple intelligent Slack bots that enhance productivity and maintain code quality standards.",
      features: [
        "Real-time Automation: GitHub → Slack notifications without delay",
        "Multi-Bot System: Separate bots for PRs, reminders, and blockers",
        "Workflow Triggers: Responds to GitHub events, Slack messages, and DB updates",
        "Rich Slack Messages: Sends formatted updates with links, stats, and context",
        "Auto Ticketing: Creates Linear/Jira tickets based on Slack conversations",
        "Status Sync: Keeps Slack threads updated with ticket progress",
        "Channel Routing: Sends updates to specific teams or repos automatically",
      ],
      bots: [
        {
          name: "PR-Notifier Bot",
          description: "Real-time GitHub Pull Request notifications to Slack",
          features: [
            "Instant notifications when PRs are opened, updated, or merged",
            "Customizable notification channels based on repository or team",
            "Rich message formatting with PR details and diff stats",
            "Direct links to GitHub for quick access",
          ],
        },
        {
          name: "PR-Reminder Bot",
          description: "Automated reminders for pending pull request reviews",
          features: [
            "Daily digest of pending PRs requiring review",
            "Smart scheduling (only during work hours)",
            "Prioritization based on PR age and criticality",
            "Personalized mentions for assigned reviewers",
          ],
        },
        {
          name: "Blocker Bot",
          description:
            "Intelligent issue tracking with automatic ticket creation",
          features: [
            "Detects blocker keywords in Slack conversations",
            "Automatically creates Jira/Linear tickets from Slack messages",
            "Links Slack threads to ticket conversations",
            "Bidirectional sync for status updates",
          ],
        },
      ],
      impact: [
        "Reduced PR review time by 40% through timely reminders",
        "Eliminated manual ticket creation, saving 2-3 hours per week",
        "Improved team awareness of code review requirements",
        "Streamlined data operations reducing manual migration effort",
      ],
    },
  },
  {
    id: 6,
    title: "Production Infrastructure Management",
    category: "DevOps",
    summary:
      "Comprehensive production infrastructure for internal developer platform, deploying multiple self-hosted open-source solutions.",
    image:
      "/ProductionInfrastructureManagement.png",
    links: {},
    tech: ["Docker", "Nginx", "PostgreSQL", "Backstage", "Gitea", "Infisical"],
    details: {
      overview:
        "Built and maintained comprehensive production infrastructure for an internal developer platform, deploying and managing multiple self-hosted open-source solutions. This infrastructure supports the entire development lifecycle with tools for code hosting, secrets management, project tracking, and team collaboration.",
      services: [
        "Backstage IDP: Unified developer portal and service catalog",
        "Gitea: Self-hosted Git service for code repositories",
        "Infisical: Centralized secrets and environment variable management",
        "Plane: Agile project management alternative to Jira",
        "Rocket.Chat: Team communication platform",
        "NocoDB: Spreadsheet-like interface for PostgreSQL",
        "AppFlowy & Affine: Productivity and documentation tools",
      ],
      architecture: [
        "Docker Compose orchestration for all services",
        "Nginx as reverse proxy and load balancer",
        "SSL/TLS certificates via Let's Encrypt",
        "Automated daily backups for all databases",
        "Infrastructure as Code (IaC) approach",
      ],
      impact: [
        "Reduced external SaaS costs by hosting internally",
        "Full control over development tools and data",
        "Improved team collaboration through integrated tools",
        "Enhanced security with self-hosted solutions",
      ],
    },
  },
  {
    id: 7,
    title: "Standalone Error Handling Package",
    category: "Library",
    summary:
      "Framework-agnostic error handling library with specialized adapters for Axios, NestJS, and Prisma.",
    image:
      "/StandaloneErrorHandlingPackage.png",
    links: {},
    tech: ["TypeScript", "Axios", "NestJS", "Prisma", "Node.js"],
    details: {
      overview:
        "Developed a comprehensive, framework-agnostic error handling library that provides consistent error management across different technologies. The package includes specialized adapters for popular tools like Axios, NestJS, and Prisma, enabling unified error handling strategies across the entire application stack.",
      features: [
        "Universal Error Interface: Standardized error structure across all adapters",
        "Technology Adapters: Specialized handlers for Axios, NestJS, and Prisma",
        "Stack Trace Preservation: Full debugging information maintained",
        "Metadata Support: Contextual information for better error tracking",
        "Framework-agnostic design for maximum flexibility",
      ],
      adapters: [
        "Axios Adapter: HTTP request/response error handling with retry logic",
        "NestJS Adapter: Global exception filters and validation error formatting",
        "Prisma Adapter: Database error translation and constraint violation handling",
      ],
      benefits: [
        "Consistent error handling across microservices",
        "Reduced boilerplate code",
        "Improved error logging and monitoring",
        "Better error messages for debugging",
      ],
    },
  },
  {
    id: 8,
    title: "NoteWiz - AI Education Platform",
    category: "EdTech",
    summary:
      "AI-powered education platform with contextual chatbots, automated flashcard generation, and adaptive quizzes with gamification.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
    links: {
      live: "https://note-wiz-website.vercel.app/",
      github: "https://github.com/NoteWiz/NoteWiz-Website",
    },
    tech: ["React", "Next.js", "OpenAI", "PostgreSQL", "Prisma", "TailwindCSS"],
    details: {
      overview:
        "NoteWiz is an innovative AI-powered education platform that transforms the learning experience through intelligent features like contextual chatbots, automated flashcard generation, and adaptive quiz creation. The platform employs gamification strategies to increase student engagement and improve knowledge retention.",
      features: [
        "AI Chatbot with File Upload: Upload PDFs and documents, ask questions about content",
        "Flashcard Generator: Automatic flashcard creation from study materials",
        "Adaptive Quiz Generator: Generate quizzes with multiple question types and difficulty adaptation",
        "Gamification System: Points, badges, leaderboards, and streak tracking",
        "Progress Analytics: Track learning progress and performance over time",
      ],
      aiPipeline: [
        "Document processing and chunking",
        "Embedding generation for semantic search",
        "Context retrieval from vector store",
        "LLM prompt construction",
        "Response generation and validation",
      ],
      impact: [
        "Improved study efficiency through AI assistance",
        "Increased engagement via gamification",
        "Personalized learning experiences",
        "Better knowledge retention through spaced repetition",
      ],
    },
  },
];

export default projects;
