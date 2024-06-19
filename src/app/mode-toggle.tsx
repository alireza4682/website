"use client";

import React from "react";

import Cookie from "js-cookie";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

function ModeToggle({ initialTheme }: { initialTheme: string }) {
  const [theme, setTheme] = React.useState(initialTheme);

  function handleClick() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    Cookie.set("color-theme", nextTheme, { expires: 1000 });

    document.documentElement.classList.contains("dark")
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }

  return (
    <button onClick={handleClick}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default ModeToggle;
