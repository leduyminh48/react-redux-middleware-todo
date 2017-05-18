export function formatCategories(categories) { //TODO: use Immutable.js
  const rootCategories = categories
    .filter(category => !category.parentId)
    .map(category => ({ ...category })); //clone

  return putSubcategoriesIntoParents(rootCategories, categories);
}

function putSubcategoriesIntoParents(rootCategories, categories) {
  const rootCategoriesWithSubs = rootCategories.map(rootCategory => {
    return {
      ...rootCategory,
      subcategories: categories
        .filter(category => category.parentId === rootCategory.id)
        .map(category => ({ ...category })) //clone
    }
  });

  rootCategoriesWithSubs.forEach(rootCategoryWithSubs => {
    rootCategoryWithSubs.subcategories = putSubcategoriesIntoParents(rootCategoryWithSubs.subcategories, categories);
  });

  return rootCategoriesWithSubs;
}