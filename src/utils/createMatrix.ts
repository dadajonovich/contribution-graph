export const createMatrix = <T>(
  array: T[],
  width: number,
  height: number
): T[][] => {
  const matrix: T[][] = Array.from({ length: width }, () =>
    Array.from({ length: height })
  );
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const index = i * height + j;
      matrix[i][j] = array[index];
    }
  }
  return matrix;
};
