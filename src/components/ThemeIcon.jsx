import { useContext, useState } from "react"
import { darkThemeIcon, lightThemeIcon } from "./icons"
import { ThemeContext } from "../context/ThemeContext"

export default function ThemeIcon(props) {
  const { themeName, handleTheme } = useContext(ThemeContext)

  return <>
    {themeName === "light" ? <button onClick={handleTheme} className="btn">{lightThemeIcon} Light</button> : <button className="btn" onClick={handleTheme}>{darkThemeIcon} Dark</button>}
  </>
}