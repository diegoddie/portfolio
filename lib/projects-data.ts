import MyClinic from '@/public/projects/myclinic.png'
import Web3Raise from '@/public/projects/web3raise.png'
import Resumatcher from '@/public/projects/resumatcher.png'
import { StaticImageData } from 'next/image'
// Define the Project type
export type Project = {
    id: number
    title: string
    description: string
    image: string | StaticImageData
    technologies: string[]
    liveUrl?: string
    githubUrl?: string
  }
  
  // Sample projects data
  export const projects: Project[] = [
    {
      id: 1,
      title: "Resumatcher",
      description:
        "A SaaS application that allows users to upload their CV and automatically find the most relevant job opportunities through an AI-based matching system.",
      image: Resumatcher,
      technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "Docker", "Stripe", "Hugging Face", "OpenAI"],
      liveUrl: "https://www.resumatcher.xyz/",
      githubUrl: "https://github.com/diegoddie/resumatcher",
    },
    {
      id: 2,
      title: "MyClinic",
      description:
        "A full-stack application for managing every aspect of a clinic, from patient records to appointments scheduling and admin dashboard.",
      image: MyClinic,
      technologies: ["Next.js", "TypeScript", "Shadcn", "Supabase", "Tanstack Query", "Resend"],
      liveUrl: "https://www.myclinic.tech/",
      githubUrl: "https://github.com/diegoddie/MyClinic",
    },
    {
      id: 3,
      title: "Web3Raise",
      description:
        "Web3Raise is a decentralized crowdfunding platform built on top of Ethereum blockchain. It allows users to create and fund campaigns for their projects using smart contracts.",
      image: Web3Raise,
      technologies: ["Vite", "React", "Solidity", "Hardhat", "Ethereum Testnet", "Tailwind CSS"],
      liveUrl: "https://web3-raise-crowdfunding-dapp.vercel.app/",
      githubUrl: "https://github.com/diegoddie/Web3Raise-CrowdfundingDapp",
    },
  ]