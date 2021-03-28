# Print the version of Python sublime text is using
import sys
#print(sys.version)

def square_numbers(nums):
	result = []
	for i in nums:
		result.append(i*i)
	return result

my_nums = square_numbers([1, 2, 3, 4, 5])

#print(my_nums)

# How about using generator?
def generator_square_numbers(nums):
	for i in nums:
		yield(i*i)


generator_nums = generator_square_numbers([1, 2, 3, 4, 5])
# Generator object is returned
print(generator_nums)

# Use keyword next to print the number one by one
print(next(generator_nums))
print(next(generator_nums))
print(next(generator_nums))
print(next(generator_nums))
print(next(generator_nums))
# Stop iteration error
#print(next(generator_nums))

# List comprehension

my_nums = [x*x for x in [1,2,3,4,5]]
print(my_nums)

gen_nums = (x*x for x in [1,2,3,4,5])
print(gen_nums)
print(list(gen_nums))