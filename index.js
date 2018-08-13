fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      }
      else {
        for (var key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection))
      {
        for (var i = 0; i < collection.length; i++)
        {
          newCollection.push(callback(collection[i], i, collection))
        }
      }
      else {
        for (var key in collection) {
          newCollection.push(callback(collection[key]))
        }
      }
      return newCollection

    },

    reduce: function(collection, callback, acc = 0)
    {
      for (var i = 0; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
      }
      return acc
    },

    find: function(collection, predicate)
      {
        for (var i = 0; i < collection.length; i++)
        {

          if (predicate(collection[i]))
          {
            return collection[i];
          }
        }

    },

    filter: function(collection, predicate)
    {
      let arr = [];
      for (var i = 0; i < collection.length; i++)
      {
        if (predicate(collection[i]))
        {
          arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection) {
      let x = 0;
      if (Array.isArray(collection))
      {
        return collection.length
      }
      else
      {
        return Object.keys(collection).length
      }
    },

    first: function(array, n=1)
    {
      if (array.slice(0, n).length === 1)
      {
        return array.slice(0, n)[0]
      }
      else
      {
        return array.slice(0, n)
      }
    },

    last: function(array, n=1) {
      // debugger

      if (array.slice(-n).length === 1)
      {
        return array.slice(-n)[0]
      }
      else
      {
        return array.slice(-n)
      }
    },

    compact: function(array)
    {
      let newArray = []
      for (var i = 0; i < array.length; i++)
      {
        if (array[i])
        {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, callback)
    {
      let newArray = array.slice(0);
      return newArray.sort(function(a, b){ return callback(a)-callback(b)})

    },


  }
})()

fi.libraryMethod()
