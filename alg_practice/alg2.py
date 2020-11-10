# 1. Given an array nums, write a function to move all 
# zeroes to the end of it while maintaining the relative 
# order of the non-zero elements.
num = [3, 10, 20, 100, 20, 40]

def solution(nums):
    for i in nums:
        if i == 0:




#2. Write a function that counts the number of times 
# the number 7 occurs in a given integer
# without converting it to a string.
# For example the number 7,704,793 would output 3

given_number = input("Give me a number and I'll count the number of 7's in it.\n")
count = int(given_number.count("7"))
print(count)




#3. Given an array of integers nums and an integer target, return 
# indices of the two numbers such that they add up to target.
# You may assume that each input would have exactly one solution, 
# and you may not use the same element twice.
# You can return the answer in any order.
# Examples and clarification here: https://leetcode.com/problems/two-sum/
# Example 1:
# Input: nums = [2,7,11,15], target = 9
# Output: [0,1]
# Because nums[0] + nums[1] == 9, we return [0, 1].
