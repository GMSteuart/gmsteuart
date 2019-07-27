/**
 * Functions to get content from Contenta JSON API
 */
// TODO: this file should in theory be `api/recipe.js`
export default $axios => ({
  async findAllPromotedRecipes(limit = 4) {
    const params = {
      page: {
        limit
      },
      filter: {
        isPromoted: {
          path: 'isPromoted',
          value: 1
        },
        isPublished: {
          path: 'isPublished',
          value: 1
        }
      },
      include: 'image,image.thumbnail',
      fields: {
        recipes: 'title,difficulty,image',
        images: 'name,thumbnail',
        files: 'filename,url'
      },
      sort: '-created'
    }
    const result = await $axios.get('recipes', { params })
    return result
  }
})
