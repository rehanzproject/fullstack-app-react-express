import express from "express";
import {
  addPicture,
  addProducts,
  deleteProduct,
  getProductByOne,
  getProducts,
  updateProduct,
} from "../controllers/Products.js";
import { verifyToken } from "../middleware/VerifyToken.js";
//#region 
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - finished
 *         - rating
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the Product
 *         name:
 *           type: string
 *           description: The name of your Product
 *         price:
 *           type: integer
 *           description: The Product price
 *         rating:
 *           type: integer
 *           description: Whether you have rating reading the Product
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the Product was added
 *       example:
 *         id: 8af23c5b-718b-4456-afe4-58f04b5b50ff
 *         name: Es Teh
 *         price: 500000
 *         rating: 5
 *         createdAt: 2020-03-10T04:05:06.157Z
 */

const ProductRouter = express.Router();
/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 * /books:
 *   get:
 *     summary: Lists all the books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
//#endregion
ProductRouter.get("/", verifyToken, getProducts);
ProductRouter.get("/:id", getProductByOne);
ProductRouter.put("/:id", updateProduct);
ProductRouter.delete("/:id", deleteProduct);
ProductRouter.post("/", addProducts);
ProductRouter.post("/pict", addPicture);

export default ProductRouter;
