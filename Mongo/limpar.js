db.getCollectionNames().forEach( function(collection_name) {
  if (collection_name.indexOf("system.") == -1)
    db[collection_name].drop(); 
})
