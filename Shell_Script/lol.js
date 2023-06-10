let x = 'https://github.com/saransh484/Express-MongoDB.git'

var pathArray = x.split( '/' );

len = pathArray.length
last = pathArray[len-1]
last1 = last.split('.')
folder = last1[0]
console.log(folder)


