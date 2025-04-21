import styles from "./page.module.scss"
import { Home } from "@/containers/home";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <Home />
    </main>
  );
}
