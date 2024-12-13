import output from "../database/output.json";

export const fetchProductsByCategory = async (category) => {
  return output.DK.filter((product) => product.Kategori === category);
};
