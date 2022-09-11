import React from "react";
import { Link } from "react-router-dom";
import styles from "./learning.module.css";
import { CardData } from "../../config/cardData";

const LearningCard = () => {
  return (
    <div>
      <div className={styles.learningCardContainer}>
        {CardData.map((data) => (
          <div className={styles.card}>
            <div className={styles.imgBox}>
              <img
                src={data.image}
                alt="Namste JavaScript"
                className={styles.mouse}
              />
            </div>

            <div className={styles.contentBox}>
              <h3>{data.name}</h3>
              <h2 className={styles.author}>
                Author:{" "}
                <span className={styles.authorName}>{data.author}</span>{" "}
              </h2>
              <Link
                to={"/tutorials"}
                className={styles.learn}
                state={{ data: data.notes, path: data.path }}
              >
                Learn Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningCard;
