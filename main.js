// export function add(numbers) {
    
//     if(numbers === '') {
//         return 0;
//     }
    
//     const nums = numbers.split(',');
    
//     if (nums.length === 1) {
//         return parseInt(nums[0]);
//     }
    
//     if (nums.length === 2) {
//         return parseInt(nums[0]) + parseInt(nums[1]);
//     }
// }

export function add(numbers) {
    if(numbers === '') {
        return 0;
    }

    numbers = "1,\n"
    
    return numbers
        .replace(/\n/g, ',')  
        .split(',')
        .reduce((sum, num) => sum + parseInt(num), 0);
}