import ChromaGrid from "../ChromaGrid";

const techStackItems = [
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    title: "React",
    subtitle: "UI Library",
    handle: "@react",
    borderColor: "#61DBFB",
    gradient: "linear-gradient(135deg, #61DBFB 0%, #21a1c4 100%)",
    url: "https://react.dev",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    title: "TypeScript",
    subtitle: "Programming Language",
    handle: "@typescript",
    borderColor: "#3178C6",
    gradient: "linear-gradient(135deg, #3178C6 0%, #235a97 100%)",
    url: "https://typescriptlang.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "JavaScript",
    subtitle: "Programming Language",
    handle: "@javascript",
    borderColor: "#F7DF1E",
    gradient: "linear-gradient(135deg, #F7DF1E 0%, #e6c200 100%)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    title: "Python",
    subtitle: "Programming Language",
    handle: "@python",
    borderColor: "#306998",
    gradient: "linear-gradient(135deg, #4B8BBE 0%, #306998 50%, #FFD43B 100%)",
    url: "https://python.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    title: "Node.js",
    subtitle: "Runtime Environment",
    handle: "@nodejs",
    borderColor: "#68A063",
    gradient: "linear-gradient(135deg, #68A063 0%, #3C873A 100%)",
    url: "https://nodejs.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    title: "Next.js",
    subtitle: "React Framework",
    handle: "@nextjs",
    borderColor: "#000000",
    gradient: "linear-gradient(135deg, #000000 0%, #434343 100%)",
    url: "https://nextjs.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
    title: "NestJS",
    subtitle: "Backend Framework",
    handle: "@nestjs",
    borderColor: "#E0234E",
    gradient: "linear-gradient(135deg, #E0234E 0%, #b01a3d 100%)",
    url: "https://nestjs.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    title: "FastAPI",
    subtitle: "Python Framework",
    handle: "@fastapi",
    borderColor: "#009688",
    gradient: "linear-gradient(135deg, #009688 0%, #00695c 100%)",
    url: "https://fastapi.tiangolo.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
    title: "Supabase",
    subtitle: "Backend Platform",
    handle: "@supabase",
    borderColor: "#3ECF8E",
    gradient: "linear-gradient(135deg, #3ECF8E 0%, #2aa56d 100%)",
    url: "https://supabase.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    title: "PostgreSQL",
    subtitle: "Database",
    handle: "@postgresql",
    borderColor: "#336791",
    gradient: "linear-gradient(135deg, #336791 0%, #254872 100%)",
    url: "https://postgresql.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    title: "MongoDB",
    subtitle: "NoSQL Database",
    handle: "@mongodb",
    borderColor: "#47A248",
    gradient: "linear-gradient(135deg, #47A248 0%, #3a8239 100%)",
    url: "https://mongodb.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    title: "Docker",
    subtitle: "Containerization",
    handle: "@docker",
    borderColor: "#2496ED",
    gradient: "linear-gradient(135deg, #2496ED 0%, #1a73ba 100%)",
    url: "https://docker.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    title: "Kubernetes",
    subtitle: "Orchestration",
    handle: "@kubernetes",
    borderColor: "#326CE5",
    gradient: "linear-gradient(135deg, #326CE5 0%, #2557c7 100%)",
    url: "https://kubernetes.io",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    title: "Tailwind CSS",
    subtitle: "CSS Framework",
    handle: "@tailwindcss",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)",
    url: "https://tailwindcss.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    title: "Redux",
    subtitle: "State Management",
    handle: "@redux",
    borderColor: "#764ABC",
    gradient: "linear-gradient(135deg, #764ABC 0%, #5e3a94 100%)",
    url: "https://redux.js.org",
  },
  {
    image: "https://logo.svgcdn.com/devicon/zustand-original.svg",
    title: "Zustand",
    subtitle: "State Management",
    handle: "@zustand",
    borderColor: "#443E38",
    gradient: "linear-gradient(135deg, #443E38 0%, #2c2822 100%)",
    url: "https://zustand-demo.pmnd.rs",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    title: "GraphQL",
    subtitle: "Query Language",
    handle: "@graphql",
    borderColor: "#E10098",
    gradient: "linear-gradient(135deg, #E10098 0%, #b80078 100%)",
    url: "https://graphql.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
    title: "Socket.io",
    subtitle: "Real-time Engine",
    handle: "@socketio",
    borderColor: "#010101",
    gradient: "linear-gradient(135deg, #010101 0%, #3c3c3c 100%)",
    url: "https://socket.io",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
    title: "Storybook",
    subtitle: "UI Development",
    handle: "@storybook",
    borderColor: "#FF4785",
    gradient: "linear-gradient(135deg, #FF4785 0%, #1EA7FD 100%)",
    url: "https://storybook.js.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    title: "AWS",
    subtitle: "Cloud Platform",
    handle: "@awscloud",
    borderColor: "#FF9900",
    gradient: "linear-gradient(135deg, #FF9900 0%, #252F3E 100%)",
    url: "https://aws.amazon.com",
  },
  {
    image: "https://logo.svgcdn.com/simple-icons/n8n-dark.svg",
    title: "n8n",
    subtitle: "Workflow Automation",
    handle: "@n8n_io",
    borderColor: "#EA4B71",
    gradient: "linear-gradient(135deg, #EA4B71 0%, #c73d5d 100%)",
    url: "https://n8n.io",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg",
    title: "Playwright",
    subtitle: "E2E Testing",
    handle: "@playwright",
    borderColor: "#E2574C",
    gradient: "linear-gradient(135deg, #E2574C 0%, #1E8D22 100%)",
    url: "https://playwright.dev",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg",
    title: "Mocha",
    subtitle: "Test Framework",
    handle: "@mochajs",
    borderColor: "#8D6748",
    gradient: "linear-gradient(135deg, #8D6748 0%, #5d4430 100%)",
    url: "https://mochajs.org",
  },
  {
    image: "https://www.vectorlogo.zone/logos/chaijs/chaijs-icon.svg",
    title: "Chai",
    subtitle: "Assertion Library",
    handle: "@chaijs",
    borderColor: "#A40802",
    gradient: "linear-gradient(135deg, #A40802 0%, #7a0601 100%)",
    url: "https://www.chaijs.com",
  },
  {
    image: "https://sinonjs.org/assets/images/logo.png",
    title: "Sinon",
    subtitle: "Test Doubles",
    handle: "@sinonjs",
    borderColor: "#7FBA00",
    gradient: "linear-gradient(135deg, #7FBA00 0%, #5d8800 100%)",
    url: "https://sinonjs.org",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    title: "Git",
    subtitle: "Version Control",
    handle: "@git",
    borderColor: "#F05032",
    gradient: "linear-gradient(135deg, #F05032 0%, #c93d26 100%)",
    url: "https://git-scm.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    title: "GitHub",
    subtitle: "Code Hosting",
    handle: "@github",
    borderColor: "#181717",
    gradient: "linear-gradient(135deg, #181717 0%, #4a4a4a 100%)",
    url: "https://github.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    title: "npm",
    subtitle: "Package Manager",
    handle: "@npm",
    borderColor: "#CB3837",
    gradient: "linear-gradient(135deg, #CB3837 0%, #a22d2b 100%)",
    url: "https://npmjs.com",
  },
  {
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
    title: "Ubuntu",
    subtitle: "Operating System",
    handle: "@ubuntu",
    borderColor: "#E95420",
    gradient: "linear-gradient(135deg, #E95420 0%, #c44217 100%)",
    url: "https://ubuntu.com",
  },
];

export const Grid = () => {
  return (
    <div style={{ height: "full", position: "relative" }}>
      <ChromaGrid
        items={techStackItems}
        radius={400}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        columns={3}
        gap="4rem"
      />
    </div>
  );
};
