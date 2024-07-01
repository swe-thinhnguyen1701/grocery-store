const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({
      include: [{model: Product}]
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
  try{
    const category = await Category.findOne({
      where: {id: req.params.id},
      include: [{model: Product}]
    });
    res.status(200).json(category);
  }catch(error){
    console.log("\n\nERROR\n",error);
    res.status(500).json("INTERNAL ERROR");
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
