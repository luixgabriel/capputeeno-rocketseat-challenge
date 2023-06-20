'use client'
import styles from './page.module.css'
import { Header } from './components/header'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <h1>Hello world</h1>
    </main>
  )
}
