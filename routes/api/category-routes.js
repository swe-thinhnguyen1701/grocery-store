const router = require('express').Router();
const { Category, Product } = require('../../models');
const { update } = require('../../models/Product');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categories);
  } catch (error) {
    console.log("INTERNAL ERROR", error);
    res.status(500).json("INTERNAE ERROR");
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Product }]
    });
    res.status(200).json(category);
  } catch (error) {
    console.log("\n\nERROR\n", error);
    res.status(500).json("INTERNAL ERROR");
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({ category_name: req.body.category_name });
    res.status(200).json(newCategory);
  } catch (error) {
    console.log("\n\nERROR\n", error);
    res.status(500).json("INTERNAL ERROR");
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateCategory = await Category.update(
      {category_name: req.body.category_name},
      {where: {id: req.params.id }}
    );
    res.status(200).json(updateCategory);
  }catch(error){
    console.log("\n\nERROR\n", error);
    res.status(500).json("INTERNAL ERROR");
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCategory = await Category.destroy({
      where: {id: req.params.id}
    });
    res.status(200).json(deleteCategory);
  }catch(error){
    console.log("\n\nERROR\n", error);
    res.status(500).json("INTERNAL ERROR");
  }
});

module.exports = router;
