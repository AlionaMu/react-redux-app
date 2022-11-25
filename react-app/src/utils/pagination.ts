export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArr = (totalPages: number): number[] => {
  const res: number[] = [];
  for (let i = 0; i < totalPages; i++) {
    res.push(i + 1);
  }
  return res;
}