function HashTable(size) {
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// HashTable.prototype.hash = function(key) {
//   var total = key;
//   var bucket = total % 10;
//   return key;
// };

HashTable.prototype.hash = function(key) {
  let total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  let bucket = total % this.numBuckets;
  return bucket;
}

HashTable.prototype.insert = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index])
     this.buckets[index] = new HashNode(key,value);
  else {
    var currentNode = this.buckets[index];
    while(currentNode) {
      currentNode = currentNode.next;
    }
  currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key, value) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key)
        return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
};

const SubArrayCumSum = (a, X) => {
  let sum = 0;
  let size = a.length;
  MyHT = new HashTable(size);
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
    if (sum === X)  {
       return {sum, i}
    } else if (MyHT.get(sum)) {
           return MyHT.get(sum);
           } else MyHT.insert(sum, i);
  }
}

SubArrayCumSum([1, -2], -1);
