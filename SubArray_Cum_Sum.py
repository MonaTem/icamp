# Python program to find the start and end index of a subarray
# that equals a sum passed in

# function to check for subArray that equals the sum
def subArray(a, X):

  # Create empty hash set
  s = set()
  sum = 0

  for i in range(0,len(a)):
      sum = sum + a[i]
      if sum == X:
         print (0, i)
      if  sum in s
          print sum+1, i
      s.add(arr[i])

# driver program to check the above function
A = [1,4,45,-6,10,8]
X = 16
subArray(a, X)
