const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try{
    const tags = await Tag.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(tags);
  }catch(error){
    console.log("ERROR! \n", error);
    res.status(500).json("INTERNAL ERROR");
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const tag = await Tag.findOne({
      where: {id: req.params.id},
      include: [{model: Product}]
    });
    res.status(200).json(tag);
  }catch(error){
    console.log("\n\nERROR\n",error);
    res.status(500).json("INTERNAL ERROR");
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
