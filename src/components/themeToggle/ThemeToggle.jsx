"use client";
import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemContext";

function ThemeToggle() {
  const { theme, toggle } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
      onClick={toggle}
    >
      <Image src="/moon.png" alt="moon" height={14} width={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="sun" height={14} width={14} />
    </div>
  );
}

export default ThemeToggle;
