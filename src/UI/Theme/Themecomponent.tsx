import React, { useEffect } from "react";

export const setTheme = (theme: string) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const initTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
};

export const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
};

const ThemeComponent = () => {
  useEffect(() => {
    initTheme();
  }, []);

  return null;
};

export default ThemeComponent;
