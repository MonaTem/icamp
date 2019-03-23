/* Use a hash table to find a pair of numbers who sum is
   equal to the sum passed in.  */

var A = [67, 8, 429, 82, 10];
var n = 439;
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
  return bucket;
};

HashTable.prototype.insert = function(key, value, next) {
  var index = this.hash(key);
  if (!this.buckets[index])
    this.buckets[index] = new HashNode(key, value)
  else {
    var currentNode = this.buckets[index];
    while (currentNode.next) {
      currentNode = currentNode.next;
    } currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if (!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while (currentNode) {
      if (currentNode.key === key)
         return currentNode.value;
      currentNode = currentNode.next;
    }
  } return null;
};

const findSum = (A, X) => {
  var MyHT = new HashTable(size);
  for (i = 0; i <=size; i++) {
    var temp = X - A[i];
    // console.log(temp);
    if (temp >= 0 && MyHT.get(temp)) {
      console.log(`pair with the given sum is ${temp} and ${A[i]}`);
      break;
    }
    MyHT.insert(A[i], A[i]);
  }
};

findSum(A, n);
