import { ReactNode } from "react";

import "../scss/components/GlassDisplay.scss";

interface GlassDisplayProps {
  children: ReactNode;
}

const GlassDisplay: React.FC<GlassDisplayProps> = ({ children }) => {
  return (
    <div className="container glass-display">
      { children }
    </div>
  )
}

export default GlassDisplay