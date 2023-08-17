import Products from "../models/ProductModel.js";
import Transaction from "../models/TransactionModel.js";
export const getProducts = async (req, res) => {
  try {
    const products = await Products.findAll(
      {
      include: {
        model: Transaction
      },}
    //   attributes: ["name_transaction", "name_product", "price"  , "desc"]
    );
    if (!products) return res.sendStatus(404);
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
};
export const getProductByOne = async (req, res) => {
  try {
    const products = await Products.findOne({
      where: {
        id_product: req.params.id,
      },
      // attributes: ["id_product", "name_product", "price", "rating", "desc"],
    });
    if (!products) return res.sendStatus(404);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const updateProduct = async (req, res) => {
  const { name, price, rating, desc } = req.body;
  try {
    const product = Products.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!product) return res.sendStatus(404);
    await Products.update(
      {
        name: name,
        price: price,
        desc: desc,
        rating: rating,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Success Update Data!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const products = await Products.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ["id", "name", "price", "rating"],
    });
    if (!products) return res.sendStatus(404);
    await Products.destroy({ where: { id: req.params.id } });
    res.status(200).json({msg: "Success Delete Product!"});
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
