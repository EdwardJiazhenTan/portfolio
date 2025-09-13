import Socials from "./Socials.tsx";
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from "react-icons/fa";

interface AboutProps {
  onContactClick: () => void;
}

export default function About({ onContactClick }: AboutProps) {
  const socialLinks = [
    {
      icon: <FaGithub />,
      color: "#22c55e",
      url: "https://github.com/EdwardJiazhenTan",
    },
    {
      icon: <FaLinkedin />,
      color: "#22c55e",
      url: "https://www.linkedin.com/in/edward-j-tan/",
    },
    {
      icon: <FaSpotify />,
      color: "#22c55e",
      url: "https://open.spotify.com/playlist/5v2k8nRXgR7TvYR33mGiWg?si=7f6803db108340ff",
    },
    {
      icon: <FaInstagram />,
      color: "#22c55e",
      url: "https://www.instagram.com/edwardtan0326/",
    },
    {
      content: "Contact",
      color: "#22c55e",
      onClick: onContactClick,
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white mb-6">Welcome</h1>

      <p className="text-xl text-white/90 leading-relaxed">
        Hi, I am Edward Tan, software developer focusing on full stack
        development.
      </p>

      <p className="text-xl text-white/90 leading-relaxed">
        I graduated from University of Rochester in May 2025 and I'm{" "}
        <span className="text-green-400 animate-pulse font-semibold">
          actively looking for opportunities
        </span>
        .
      </p>

      <div className="flex gap-4 mt-8">
        {socialLinks.map((social, index) => (
          <Socials
            key={index}
            content={social.icon || social.content}
            color={social.color}
            url={social.url}
            onClick={social.onClick}
          />
        ))}
      </div>
    </div>
  );
}
