# Python program to sum two numbers
# From an array using a hash set

# Function to find sum
def findPair(arr, arr_size, sum):
  # Create an empty hash set
  s = set()

  for i in range(0, arr_size):
    temp = sum-arr[i]
    if (temp>=0 and temp in s):
      print("The given sum is", temp, "and", arr[i])
    s.add(arr[i])

# Driver program t test
A = [88, 9, 27, 501, 66, 72]
n = 160
findPair(A, len(A), n)
