import styles from "./styles.module.css";

export const Favorites = (props) => {
  const { list, handleOnClick } = props;

  return (
    <div className={styles.favorites}>
      <h4 className={styles.title}>My Favorites</h4>
      {list.length > 0 ? (
        <ul className={styles.container}>
          {list.map((item) => (
            <li key={item.id} className={styles.itemContainer}>
              <div className={styles.item}>
                <span>{item.label}</span>
                <span>
                  <div
                    style={{ cursor: "pointer" }}
                    className={styles.buttonRemoveFromFavorites}
                    onClick={() => handleOnClick(item.id)}
                  ></div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>You have no favorite fruits yet.</p>
      )}
    </div>
  );
};
