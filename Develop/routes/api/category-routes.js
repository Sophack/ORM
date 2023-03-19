const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//instead of try catch trying then catch 


router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: [Product],
  })
  .then((dbCategoryData) => res.json(dbCategoryData))
  .catch((err) => res.status(404).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((dbCategoryData) => res.status(200).json(dbCategoryData))
  .catch((err) => res.status(404).json(err));
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((dbCategoryData) => res.status(200).json(dbCategoryData))
  .catch((err) => res.status(404).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((dbCategoryData) => res.status(200).json(dbCategoryData))
  .catch((err) => res.status(404).json(err));
});

module.exports = router;
