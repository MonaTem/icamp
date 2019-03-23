# Python program to
# find paired sum in array

# function to find the pair of numbers that sums
def findPair(arr, arr_size, sum):

  # Create empty hash set
  s = set()

  for i in range(0,arr_size):
    temp = sum-arr[i]

    if (temp>=0 and temp in s):
      print("Pair with given sum is", arr[i], "and", temp)
    s.add(arr[i])
# driver program to test
A = [10, 16, 17, 9, 42, 27]
n = 51
findPair(A, len(A), n)
