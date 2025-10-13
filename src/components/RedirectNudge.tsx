import { FaExternalLinkAlt } from "react-icons/fa";

const RedirectNudge = ({ href = "", text = "" }) => {
  return (
    <a
      className="text-sm text-blue-600 hover:underline flex items-center gap-1 mt-2"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaExternalLinkAlt /> {text}
    </a>
  );
};

export default RedirectNudge;
