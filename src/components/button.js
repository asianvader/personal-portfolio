import React from "react"
import buttonStyles from "./button.module.css"

export default function Button({ text, link }) {
  return (
    <div className={buttonStyles.wrapper}>
      <a href={link} role="button" className={buttonStyles.button}>
        {text}
      </a>
    </div>
  )
}
