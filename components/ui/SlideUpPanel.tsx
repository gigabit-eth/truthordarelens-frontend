import React, { useState } from "react";
import styles from "./SlideUpPanel.module.css";

interface SlideUpPanelProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideUpPanel: React.FC<SlideUpPanelProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-28">
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Panel</button>
      <div className={`${styles.panel} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default SlideUpPanel;
