# Portfolio Projects

## 1. Component Dock - React Component Library CLI

### Overview
Component Dock is a powerful command-line interface tool designed to streamline the creation of modern React component libraries. Built to solve the complexity of setting up component library infrastructure, it provides developers with production-ready scaffolding that includes all the essential tools and configurations needed for building, testing, and publishing high-quality React components.

### Key Features
- **Automated Scaffolding**: Instantly generate a complete component library structure with a single command
- **Modern Toolchain**: Pre-configured with industry-standard tools including:
  - **Rollup** for optimized bundle creation
  - **TypeScript** for type-safe component development
  - **Storybook** for interactive component documentation
  - **ESLint** for code quality enforcement
  - **Prettier** for consistent code formatting
- **Zero Configuration**: Start building components immediately without spending hours on build configuration
- **Best Practices Built-in**: Follows React community standards and modern development practices
- **NPM Publishing Ready**: Generated libraries are pre-configured for seamless NPM package publishing

### Technical Implementation
- **Language**: TypeScript for type safety and better developer experience
- **Package Manager**: Supports npm, yarn, and pnpm
- **Build System**: Rollup with optimized configurations for library bundling
- **Documentation**: Integrated Storybook setup for component showcase and testing
- **Testing Framework**: Jest configuration for unit and integration tests

### Use Cases
- Quickly bootstrap new component libraries for design systems
- Create reusable UI component packages for multiple projects
- Build open-source React component libraries
- Establish consistent component architecture across teams

### Links
- **NPM Package**: [@aaqeb11/component-dock](https://www.npmjs.com/package/@aaqeb11/component-dock)
- **GitHub Repository**: [github.com/Aaqeb11/component-dock](https://github.com/Aaqeb11/component-dock)

---

## 2. Advanced RAG Email Classification System

### Overview
Developed a sophisticated Retrieval-Augmented Generation (RAG) solution for intelligent email classification and processing. This system combines cutting-edge AI techniques with vector embeddings to achieve high-accuracy email categorization, using the FLARE (Forward-Looking Active Retrieval) approach for enhanced contextual understanding.

### Architecture Components

#### Vector Database Integration
- Implemented dual-store architecture using Vector DB and PG Vector (PostgreSQL extension)
- Stores email embeddings for similarity-based retrieval
- Enables semantic search capabilities across historical email data

#### FLARE Approach Implementation
- **Forward-Looking Active Retrieval**: Proactively retrieves relevant context before generating classifications
- Iterative refinement process that improves accuracy with each classification
- Reduces hallucination by grounding responses in actual email data

#### Classification Pipeline
1. **Email Ingestion**: Real-time email data capture and preprocessing
2. **Embedding Generation**: Convert email content into vector representations
3. **Semantic Search**: Query vector database for similar historical emails
4. **Context Assembly**: Gather relevant context using FLARE methodology
5. **Classification**: LLM-powered categorization with retrieved context
6. **Confidence Scoring**: Assign confidence metrics to each classification

### Technical Stack
- **Vector Database**: Specialized vector DB for high-performance similarity search
- **PostgreSQL + pgvector**: Hybrid approach for structured data and vector operations
- **LLM Integration**: Large Language Model API for intelligent classification
- **Python/Node.js**: Backend processing and orchestration

### Performance Metrics
- High accuracy rate in email categorization
- Reduced false positives through contextual understanding
- Scalable architecture handling thousands of emails per hour

### Impact
- Automated manual email sorting processes
- Improved response time for critical email categories
- Enhanced customer service through intelligent routing

---

## 3. Graph RAG Email Processing MVP

### Overview
Extended the email classification system with Graph RAG capabilities, introducing relationship-aware processing that understands connections between emails, senders, and topics. This MVP demonstrates advanced knowledge graph integration for more sophisticated email understanding.

### Graph RAG Concept
Unlike traditional RAG that retrieves isolated documents, Graph RAG:
- Maps relationships between emails, creating a knowledge graph
- Understands email threads and conversation context
- Identifies patterns across multiple communications
- Enables complex queries like "Find all emails related to Project X from Team Y"

### Technical Architecture
- **Knowledge Graph**: Neo4j or similar graph database storing email relationships
- **Entity Extraction**: NER (Named Entity Recognition) to identify key entities
- **Relationship Mapping**: Automated linking of related emails and concepts
- **Graph Traversal**: Efficient querying of email relationships
- **RAG Integration**: Combines graph context with vector similarity

### Advanced Features
- **Thread Awareness**: Maintains conversation context across email chains
- **Entity Recognition**: Identifies people, projects, and organizations
- **Temporal Analysis**: Tracks how topics evolve over time
- **Multi-hop Reasoning**: Discovers indirect relationships between emails

---

## 4. CDC Pipeline with Debezium & Apache Kafka

### Overview
Architected and implemented a robust Change Data Capture (CDC) solution using Debezium and Apache Kafka for real-time data synchronization and event streaming. This system enables seamless data flow between multiple databases and services while maintaining data consistency and enabling event-driven architecture.

### System Architecture

#### Components
- **Debezium**: Open-source CDC platform capturing database changes in real-time
- **Apache Kafka**: Distributed event streaming platform for reliable message delivery
- **Source Databases**: PostgreSQL production databases

#### Data Flow Process
1. **Change Detection**: Debezium monitors database transaction logs
2. **Event Creation**: Converts database changes into Kafka events
3. **Stream Processing**: Kafka distributes events to subscribed consumers
4. **Data Transformation**: Optional data enrichment and filtering
5. **Consumer Processing**: Downstream systems process events asynchronously

### Technical Implementation
- **Debezium Connectors**: Configured for PostgreSQL with custom transformations
- **Kafka Topics**: Organized by entity type and event category
- **Schema Registry**: Maintains event schema consistency
- **Kafka Connect**: Distributed connector framework for scalability
- **Monitoring**: Kafka metrics and Debezium health checks

### Use Cases
- Real-time data replication across microservices
- Cache invalidation and synchronization
- Audit logging and compliance tracking
- Analytics pipeline feeding
- Search index updates

### Performance Characteristics
- Near-zero latency data propagation
- High throughput handling thousands of events per second
- Fault-tolerant with automatic retry mechanisms
- Scalable horizontal architecture

---

## 5. n8n Automation Workflows & Slack Bots

### Overview
Developed comprehensive automation solutions using n8n (workflow automation platform) to streamline development operations and team communication. Created multiple intelligent Slack bots that enhance productivity and maintain code quality standards.

### Automation Workflows

#### 1. PR-Notifier Bot
**Purpose**: Real-time GitHub Pull Request notifications to Slack

**Features**:
- Instant notifications when PRs are opened, updated, or merged
- Customizable notification channels based on repository or team
- Rich message formatting with PR details, diff stats, and reviewer status
- Direct links to GitHub for quick access

**Workflow**:
- GitHub webhook triggers on PR events
- n8n processes payload and formats message
- Routes notification to appropriate Slack channel
- Tracks PR lifecycle from creation to merge

#### 2. PR-Reminder Bot
**Purpose**: Automated reminders for pending pull request reviews

**Features**:
- Daily digest of pending PRs requiring review
- Smart scheduling (only during work hours)
- Prioritization based on PR age and criticality
- Personalized mentions for assigned reviewers
- Configurable reminder frequency

**Logic**:
- Scheduled n8n workflow runs at specified intervals
- Queries GitHub API for pending PRs
- Filters based on age, labels, and review status
- Generates reminder messages with context
- Sends targeted notifications to reviewers

#### 3. Blocker Bot with Automatic Ticket Creation
**Purpose**: Intelligent issue tracking and automated ticket management

**Features**:
- Detects blocker keywords in Slack conversations
- Automatically creates Jira/Linear tickets from Slack messages
- Links Slack threads to ticket conversations
- Status updates sync between Slack and ticket system
- Smart categorization and priority assignment

**Workflow Process**:
1. Monitor Slack channels for blocker keywords
2. Extract context and relevant information
3. Format ticket description with conversation context
4. Create ticket in project management system
5. Post ticket link back to Slack thread
6. Establish bidirectional sync for updates

#### Data Migration Pipelines
**Purpose**: Seamless data transfer and enrichment between systems

**Pipelines Built**:
- **Airtable Migration**:
  - Extract data from legacy systems
  - Transform and enrich with additional metadata
  - Load into Airtable with proper relationships
  - Maintain data integrity during transfer

- **PostgreSQL ETL**:
  - Scheduled data extraction from multiple sources
  - Data cleaning and normalization
  - Batch loading into PostgreSQL
  - Error handling and logging

**Features**:
- Scheduled automatic execution
- Error handling with retry logic
- Data validation and quality checks
- Comprehensive logging for audit trails
- Configurable transformation rules

### Technical Stack
- **n8n**: Visual workflow automation platform
- **Slack API**: Bot interactions and messaging
- **GitHub API**: Repository and PR data access
- **Linear API**: Ticket management
- **Airtable API**: Database operations
- **PostgreSQL**: Data warehousing
- **Webhooks**: Real-time event triggering

### Impact
- Reduced PR review time by 40% through timely reminders
- Eliminated manual ticket creation, saving 2-3 hours per week
- Improved team awareness of code review requirements
- Streamlined data operations reducing manual migration effort

---

## 6. Production Infrastructure Management

### Overview
Built and maintained comprehensive production infrastructure for an internal developer platform, deploying and managing multiple self-hosted open-source solutions. This infrastructure supports the entire development lifecycle with tools for code hosting, secrets management, project tracking, and team collaboration.

### Core Infrastructure Components

#### 1. Backstage IDP (Internal Developer Platform)
**Purpose**: Unified developer portal and service catalog

**Implementation**:
- Custom Backstage deployment with organization-specific plugins
- Service catalog with automated component discovery

**Configuration**:
- Docker containerized deployment
- PostgreSQL backend for catalog data
- OAuth integration for authentication
- Custom plugins for internal tool integration

**Setup**:
- Docker Compose deployment
- Nginx reverse proxy with SSL

#### 2. Gitea - Git Hosting
**Purpose**: Self-hosted Git service for code repositories

**Features**:
- Complete Git hosting with web interface
- Pull request workflows and code review
- Issue tracking and project boards
- CI/CD integration hooks
- User and organization management

**Setup**:
- Docker Compose deployment
- SQLite/PostgreSQL database backend
- Nginx reverse proxy with SSL
- Automated backup configurations

#### 3. Infisical - Secrets Management
**Purpose**: Centralized secrets and environment variable management

**Capabilities**:
- End-to-end encrypted secrets storage
- Environment-specific secret management
- API key rotation and versioning
- Access control and audit logging
- CLI and API integration for CI/CD

**Setup**:
- Docker Compose deployment
- Nginx reverse proxy with SSL

#### 4. Plane - Project Management
**Purpose**: Alternative to Jira for agile project management

**Features**:
- Sprint planning and backlog management
- Kanban and Scrum board views
- Issue tracking with custom workflows
- Roadmap visualization
- Time tracking and reporting

**Integration**:
- GitHub/Gitea webhook integration
- Slack notifications
- API access for automation

#### 5. Additional Production Services

##### Rocket.Chat - Team Communication
- Self-hosted Slack alternative
- Real-time messaging and video calls
- Channel-based organization
- Bot integrations and webhooks
- File sharing and search

##### NocoDB - Database Interface
- Spreadsheet-like interface for PostgreSQL
- No-code database management
- REST API auto-generation
- Collaborative data editing
- Role-based permissions

##### AppFlowy & Affine - Productivity Tools
- Notion-like workspace for documentation
- Collaborative note-taking
- Knowledge base management
- Template library
- Offline-first architecture

### Infrastructure Architecture

**Deployment Strategy**:
- Docker Compose orchestration for all services
- Nginx as reverse proxy and load balancer
- SSL/TLS certificates via Let's Encrypt
- Automated certificate renewal

**Networking**:
- Internal Docker network for service communication
- External exposure through reverse proxy
- Domain-based routing for each service
- Firewall rules for security

**Monitoring & Observability**:
- Service health checks
- Uptime monitoring
- Log aggregation
- Resource utilization tracking
- Alert configuration for critical failures

**Backup & Disaster Recovery**:
- Automated daily backups for all databases
- Configuration backup to git repositories
- Volume snapshots for data persistence
- Documented recovery procedures

### DevOps Practices
- Infrastructure as Code (IaC) approach
- Version-controlled configurations
- Automated deployment scripts
- Zero-downtime update procedures
- Regular security patching

### Business Impact
- Reduced external SaaS costs by hosting internally
- Full control over development tools and data
- Improved team collaboration through integrated tools
- Enhanced security with self-hosted solutions
- Faster onboarding with unified developer portal

---

## 7. Standalone Error Handling Package

### Overview
Developed a comprehensive, framework-agnostic error handling library that provides consistent error management across different technologies. The package includes specialized adapters for popular tools like Axios, NestJS, and Prisma, enabling unified error handling strategies across the entire application stack.

### Core Features

#### Universal Error Interface
- Standardized error structure across all adapters
- Consistent error codes and messages
- Stack trace preservation for debugging
- Metadata support for contextual information

#### Technology Adapters

##### Axios Adapter
- HTTP request/response error handling
- Status code mapping to custom error types
- Retry logic for transient failures
- Request/response logging
- Timeout handling

##### NestJS Adapter
- Global exception filters
- HTTP exception mapping
- Validation error formatting
- Built-in error response structure
- Logging integration

##### Prisma Adapter
- Database error translation
- Constraint violation handling
- Connection error management
- Query error formatting
- Transaction rollback support

### Package Structure
```
@your-org/error-handler/
├── core/
│   ├── ErrorBase.ts
│   ├── ErrorFactory.ts
│   └── ErrorTypes.ts
├── adapters/
│   ├── AxiosAdapter.ts
│   ├── NestJSAdapter.ts
│   └── PrismaAdapter.ts
├── utils/
│   ├── Logger.ts
│   └── ErrorSerializer.ts
└── index.ts
```

### Usage Examples

**Axios Integration**:
```typescript
import { AxiosErrorHandler } from '@your-org/error-handler';

const api = axios.create();
api.interceptors.response.use(
  response => response,
  AxiosErrorHandler.handleError
);
```

**NestJS Integration**:
```typescript
import { NestJSErrorFilter } from '@your-org/error-handler';

@UseFilters(NestJSErrorFilter)
export class AppController {
  // Your controllers
}
```

**Prisma Integration**:
```typescript
import { PrismaErrorHandler } from '@your-org/error-handler';

try {
  await prisma.user.create(data);
} catch (error) {
  throw PrismaErrorHandler.handle(error);
}
```

### Benefits
- Consistent error handling across microservices
- Reduced boilerplate code
- Improved error logging and monitoring
- Better error messages for debugging
- Framework-agnostic design

---

## 8. AI-Powered Education Platform (NoteWiz)

### Overview
NoteWiz is an innovative AI-powered education platform that transforms the learning experience through intelligent features like contextual chatbots, automated flashcard generation, and adaptive quiz creation. The platform employs gamification strategies to increase student engagement and improve knowledge retention.

### Core Features

#### 1. AI Chatbot with File Upload
**Capabilities**:
- Upload PDFs, documents, and study materials
- Ask questions about uploaded content
- Get contextual explanations and summaries

**Technology**:
- OpenAI GPT integration for natural language understanding
- Vector embeddings for content similarity
- RAG (Retrieval-Augmented Generation) for accurate responses

#### 2. Flashcard Generator
**Features**:
- Automatic flashcard creation from study materials
- AI-extracted key concepts and definitions


#### 3. Adaptive Quiz Generator
**Capabilities**:
- Generate quizzes from uploaded content
- Multiple question types (MCQ, True/False, Short Answer)
- Difficulty adaptation based on performance
- Instant feedback and explanations
- Progress tracking and analytics

#### 4. Gamification System
**Elements**:
- Points and experience (XP) system
- Achievement badges and milestones
- Leaderboards for competitive motivation
- Streak tracking for consistency
- Level progression system

**Psychology**:
- Immediate feedback loops
- Clear progress visualization
- Social comparison features
- Reward schedules for engagement

### Technical Architecture

**Frontend**:
- **React**: Component-based UI
- **Next.js**: Server-side rendering and routing
- **TailwindCSS**: Responsive design
- **Zustand**: State management

**Backend**:
- **Next.js API Routes**: Serverless functions
- **OpenAI API**: AI-powered features
- **PostgreSQL**: User data and content storage
- **Prisma ORM**: Database management

**AI Pipeline**:
1. Document processing and chunking
2. Embedding generation for semantic search
3. Context retrieval from vector store
4. LLM prompt construction
5. Response generation and validation

### User Experience Flow
1. Upload study materials (PDFs, notes)
2. Platform analyzes content and extracts key concepts
3. Generate flashcards and practice quizzes
4. Study using AI chatbot for clarification
5. Track progress through gamified dashboard
6. Adapt learning path based on performance

### Impact & Metrics
- Improved study efficiency through AI assistance
- Increased engagement via gamification
- Personalized learning experiences
- Better knowledge retention through spaced repetition

### Links
- **Live Platform**: [note-wiz-website.vercel.app](https://note-wiz-website.vercel.app/)
- **GitHub Repository**: [github.com/NoteWiz/NoteWiz-Website](https://github.com/NoteWiz/NoteWiz-Website)

---

## Technical Skills Demonstrated Across Projects

### Languages
JavaScript, TypeScript, Python, Java, C++, SQL, Go

### Frontend Technologies
React, React Native, Next.js, Expo, TailwindCSS, HTML5, CSS3, Redux, Zustand

### Backend Technologies
Node.js, Nest.js, Express.js, REST APIs, GraphQL

### Databases & Data
PostgreSQL, MongoDB, Redis, Vector Databases, Prisma ORM

### Cloud & DevOps
Docker, Docker Compose, CI/CD, Linux, Self-hosted Infrastructure, Nginx, SSL/TLS

### Event Processing & Integration
Apache Kafka, Debezium CDC, n8n Automation, Webhooks

### AI & Machine Learning
OpenAI API, RAG (Retrieval-Augmented Generation), Graph RAG, Vector Embeddings, LangChain

### Testing & Quality
Mocha, Chai, Playwright, Sinon, Storybook

### Tools & Platforms
Git, GitHub, Backstage, Slack Integrations, Airtable, Gitea, Infisical, Plane

---

## Contact & Links

- **Location**: Dubai, UAE
- **Email**: aaqebahmed@gmail.com
- **Phone**: +971 588-936-809
- **LinkedIn**: [linkedin.com/in/aaqeb-ahmed-nawaz-30441b215](https://www.linkedin.com/in/aaqeb-ahmed-nawaz-30441b215/)
- **GitHub**: [github.com/Aaqeb11](https://github.com/Aaqeb11)
