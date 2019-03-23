/* The problem consists of the following:
   Given an array of numbers and a single sum,
   find the pair of numbers that add up to the
   sum.  Solve the problem using a hash table
   as the algorithm complexity is O(n) and therefore
   faster */

var A = [6, 3, 5, 2, 1, 7];
var X = 4;
// var A = [1, 4, 45, 6, 10, 8];
// var X = 16;
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
  //  for (i = 0; i < key.length; i++) {
  //    total += key.charCodeAt(i);
  //  }
   var bucket = total % 10;
   return bucket;
 }

 HashTable.prototype.insert = function (key, value) {
   var index = this.hash(key);
   if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
   else {
    var currentNode = this.buckets[index];
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key,value);
   }
 }

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
    return null;
  }
};

 const findSum = (A, X) => {
   MyHT = new HashTable(size);
   for (i = 0; i <= size; i++) {
     var temp = X - A[i];
     if (temp >= 0 && MyHT.get(temp)) {
       console.log(`pair with the given sum is ${A[i]} and ${temp}`);
       break;
     }
     MyHT.insert(A[i], A[i]);
   }
 // console.log(MyHT);
 }


findSum(A, X);
