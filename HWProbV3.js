/* Use a hash table to find a pair of numbers in
   an array that sums to a sum parameter */

var A = [-1, 62, 734, 8, 102, 97, 250, 781];
var n = 780;
var size = A.length;

function HashTable(size) {
  this.buckets = Array(size);
  this.numbuckets = this.buckets.length;
}

function HashNode(key, value, next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
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

const findSum = (A, X) => {
  MyHT = new HashTable(size);
  for (i = 0; i<= size; i++) {
    var temp = X - A[i];
    if (MyHT.get(temp)) {
      console.log(`pair with given sum is ${temp} and ${A[i]}`);
      break;
    }
   MyHT.insert(A[i], A[i]);
  }
};

findSum(A, n);
