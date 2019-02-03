import React from 'react'

import style from './style.module.css'

const Quotes = () => (
  <aside className={style.aside}>
    <blockquote className={style.blockquote}>
      <p>
        Music is a language that anyone can learn to speak.
      </p>
    </blockquote>
    <cite className={style.cite}>Dr. Shinichi Suzuki</cite>
  </aside>
)

export default Quotes
