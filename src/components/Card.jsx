import { useState } from "react";

import styles from "../modules/Card.module.scss";
import defaultAvatar from "../assets/Default.jpg";

function Card({ userData }) {
  return (
    <>
      <div className={styles["user-card"]}>
        <div className={styles["avatar-container"]}>
          <img
            src={userData.avatar_url ? userData.avatar_url : defaultAvatar}
            className={styles["avatar"]}
          />
        </div>
        <div className={styles["user-details"]}>
          <h1>github data</h1>
          <h3>Id: {userData.id}</h3>
          <h3>Username: {userData.login}</h3>
        </div>
      </div>
    </>
  );
}

export default Card;
