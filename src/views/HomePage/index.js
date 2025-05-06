"use client";

import { useRouter } from "next/navigation";
import { Typewriter } from "react-simple-typewriter";
import styles from "./styles.module.css";

const HomePage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.left_container}>
        <div className={styles.content_container}>
          <div className={styles.heading}>CHECK THE</div>
          <div className={styles.typewriter}>
            <Typewriter
              words={[
                "WEATHER",
                "FORECAST",
                "TEMPERATURE",
                "HUMIDITY",
                "AIR QUALITY",
              ]}
              cursor
              cursorStyle="|"
              typeSpeed={140}
              deleteSpeed={80}
              loop={5}
            />
          </div>
          <div className={styles.heading}>AROUND YOU</div>
          <div className={styles.description}>
            Your real-time weather companion.
            <br />
            Accurate forecasts, beautiful UI, and data from trusted sources.
          </div>
          <div className={styles.button_wrapper}>
            <div
              onClick={() => router.push("/forecast")}
              className={styles.styled_button}
            >
              CHECK FORECAST
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_container}></div>
    </div>
  );
};

export default HomePage;
