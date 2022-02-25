export const sortFruits = (objArray) => {
  return objArray.sort((a, b) => {
    const labelA = a.label.toUpperCase();
    const labelB = b.label.toUpperCase();

    return labelA < labelB ? -1 : labelA > labelB ? 1 : 0;
  });
};
