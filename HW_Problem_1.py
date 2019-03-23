# Python program to find the pair of numbers in an array
# that equals a sum passed in

# function to check for given sum in array
def findPair(arr, arr_size, sum):

  # Create empty hash set
  s = set()

  for i in range(0,arr_size):
    temp = sum-arr[i]
    if (temp>=0 and temp in s):
      print ("Pair with given sum is", arr[i], "and", temp)
    s.add(arr[i])

# driver program to check the above function
A = [1,4,45,6,10,8]
n = 16
findPair(A, len(A), n)
