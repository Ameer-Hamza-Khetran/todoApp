import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import CreateTodo from "./createTodo/page";
import GetTodo from "./getTodo/page";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <GetTodo/>
      <CreateTodo/>
    </div>
  )
}
