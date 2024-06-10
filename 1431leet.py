class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        maxCandies = max(candies)

        return [candy + extraCandies >= maxCandies for candy in candies]

print(Solution.kidsWithCandies(Solution, [2, 3, 5, 1, 3], 3))