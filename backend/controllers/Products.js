import Products from "../models/ProductModel.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll({
      where: {
        id: req.query.id,
      },
    });
    if (!products) return res.sendStatus(404);
    res.json(products);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const addPicture = async (req, res) => {
  try {
    const picture = await Products.findAll({
      where: {
        id: "8bcf4024-6278-4081-b40d-80679d1d1717",
      },
    });
    if (!picture && !req.files) return res.sendStatus(404);
    await Products.update(
      {
        picture: req.files.picture.data,
      },
      {
        where: {
          id: "8bcf4024-6278-4081-b40d-80679d1d1717",
        },
      }
    );
    res.status(200).json({ msg: "Success Upload Picture" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const addProducts = async (req, res) => {
  const { name, price, rating, desc } = req.body;
  try {
    await Products.create({
      name: name,
      price: price,
      rating: rating,
      desc: desc,
    });
    res.json({ msg: "Success Create Product!" });
  } catch (error) {
    console.log(error);
  }
};
