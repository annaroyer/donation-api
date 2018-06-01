const allValidCategories = (items) => {
  const item_options = ['clothing and accessories', 'household items', 'furniture', 'non-perishable foods']
  items.forEach(function(item){
    if(!item_options.includes(item)){
      throw new Error('Not an accepted item category.')
    }
  })
}

module.exports = { allValidCategories }
