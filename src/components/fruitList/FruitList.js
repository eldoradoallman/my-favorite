import styles from "./styles.module.css";

export const FruitList = (props) => {
  const { list, handleOnClick } = props;

  return (
    <div className={styles.fruitList}>
      <h4 className={styles.title}>Fruits</h4>
      {list.length > 0 ? (
        <ul className={styles.container}>
          {list.map((item) => (
            <li key={item.id} className={styles.itemContainer}>
              <div className={styles.item}>
                <span>{item.label}</span>
                <span>
                  <div
                    style={{ cursor: "pointer" }}
                    className={styles.buttonAddToFavorites}
                    onClick={() => handleOnClick(item.id)}
                  ></div>
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>The list is empty.</p>
      )}
    </div>
  );
};
