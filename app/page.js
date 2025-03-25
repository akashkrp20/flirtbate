import Image from "next/image";
import styles from "./page.module.css";
import { Banner } from "@/components/Banner";
import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className='main-container'>
        <div className='main-outer'>
        <Banner />
        <Card />
        <div className="red-blur-1"></div>
        </div>
    </div>
  );
}
