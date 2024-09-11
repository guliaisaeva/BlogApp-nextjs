import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey,How are you?!</b> Discover my stories and creative ides
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>
            Lorem ipsum dolor sit exercitationem quam expedita debitis !
          </h2>
          <p className={styles.postDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            earum molestiae temporibus dolorum vel neque doloribus, quod
            architecto quas quis, fugit aperiam in tempore beatae exercitationem
            suscipit illum nemo? Possimus!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
