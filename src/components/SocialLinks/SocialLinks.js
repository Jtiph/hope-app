import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Import des icônes
import './SocialLinks.scss';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://linkedin.com/in/ton-profil" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/ton-profil" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      {/* Lien pour ouvrir le client de messagerie */}
      <a href="mailto:ton-email@example.com">
        <FaEnvelope />
      </a>
    </div>
  );
};

export default SocialLinks;
