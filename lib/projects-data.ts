
import MyClinic from '@/public/projects/myclinic.png'
import Portfolio from '@/public/projects/portfolio.png'
import Web3Raise from '@/public/projects/web3raise.png'
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
      title: "MyClinic",
      description:
        "A full-stack application for managing every aspect of a clinic, from patient records to appointments scheduling and admin dashboard.",
      image: MyClinic,
      technologies: ["Next.js", "TypeScript", "Shadcn", "Supabase", "Tanstack Query", "Resend"],
      liveUrl: "https://www.myclinic.tech/",
      githubUrl: "https://github.com/diegoddie/MyClinic",
    },
    {
      id: 2,
      title: "Portfolio",
      description: "My personal portfolio website, where I showcase my projects and give a brief introduction about myself.",
      image: Portfolio,
      technologies: ["Next.js", "Typescript", "Shadcn", "Resend", "Framer Motion"],
      liveUrl: "https://www.diegolauricella.com",
      githubUrl: "https://github.com/diegoddie/portfolio",
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