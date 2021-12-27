const tagsSetUp = (recipes) => {
  const allTags = {};

  recipes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });

  const tagsArray = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    //? sorts the array in aplhabetical order
    return firstTag.localeCompare(secondTag);
  });

  return tagsArray;
};

export default tagsSetUp;
