function HashTable(size) {
  this.buckets = Array(size);
  this.numbuckets = this.buckets.length;
}

HashTable.prototype.hash = function(key) {
  var total = key;
  var bucket = total % 10;
  return key;
};

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

const SubArrayCommonDiff = (a, X) => {
  let sum = 0;
  let size = a.length;
  MyHT = new HashTable(size);
  for (let i = 0; i < a.length; i++) {
    sum = sum + a[i];
    if (sum = X)  {
       return {sum, i}
    } else if (MyHT.get(sum)) {
           return MyHT.get(sum);
           } else MyHT.insert(sum, i);
  }
}

SubArrayCommonDiff([1, -2], -1);
