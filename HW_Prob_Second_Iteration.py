# Python program to find
# Sum of two numbers in an array

# function to find sum
def findPair(arr, arr_size, sum):
  s = set()
  for i in range(0, arr_size):
    temp = sum-arr[i]
    if (temp>=0 and temp in s):
      print("The given sum is", temp, "and", arr[i])
    s.add(arr[i])

# Driver program to test
A = [10, 22, 303, 200, 5]
n = 308
findPair(A, len(A), n)
