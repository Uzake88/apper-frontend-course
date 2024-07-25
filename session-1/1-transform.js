function transform(nums) {
    const squareOfNums = nums.map(nums => nums * nums) //listing all numbers and squaring them together
    const finalNums = squareOfNums.sort((a,b) => a-b) //Sorting in ascending order
    return finalNums //returning the final list of numbers
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]