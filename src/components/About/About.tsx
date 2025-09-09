import Socials from './Socials.tsx';
import { FaGithub, FaLinkedin, FaSpotify, FaInstagram } from 'react-icons/fa';

export default function About() {
  const socialLinks = [
    { icon: <FaGithub />, color: '#333333' },
    { icon: <FaLinkedin />, color: '#0077b5' },
    { icon: <FaSpotify />, color: '#1db954' },
    { icon: <FaInstagram />, color: '#e4405f' },
    { content: 'Contact', color: '#6366f1' }
  ];

  return (
    <div>
      <h1>
        Welcome
      </h1>

      <p>
        Hi, I am Edward Tan, software developer focusing on full stack development.
      </p>

      <p>
        I graduated from University of Rochester in May 2025 and I'm actively looking for oppportunities.
      </p>
      
      <div className="flex gap-4 mt-6">
        {socialLinks.map((social, index) => (
          <Socials 
            key={index}
            content={social.icon || social.content} 
            color={social.color} 
          />
        ))}
      </div>

    </div>
  );
}
