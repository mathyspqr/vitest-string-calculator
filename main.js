//1/
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


//3/
// export function add(numbers) {
//     if(numbers === '') {
//         return 0;
//     }

    
//     return numbers
//         .replace(/\n/g, ',')  
//         .split(',')
//         .reduce((sum, num) => sum + parseInt(num), 0);
// }


//4. TDD : Supporter différents séparateurs (ang. delimiters)
// export function add(numbers) {
//     if(numbers === '') {
//         return 0;
//     }

//     let delimiter = ',';
//     let numbersToProcess = numbers;

//     if (numbers.startsWith('//')) {
//         const parts = numbers.split('\n');
//         delimiter = parts[0].substring(2); 
//         numbersToProcess = parts[1]; 
//     }

//     return numbersToProcess
//         .replace(/\n/g, delimiter) 
//         .split(delimiter)
//         .reduce((sum, num) => sum + parseInt(num), 0);
// }

//5./6.
// export function add(numbers) {
//     if(numbers === '') {
//         return 0;
//     }

//     let delimiter = ',';
//     let numbersToProcess = numbers;

//     if (numbers.startsWith('//')) {
//         const parts = numbers.split('\n');
//         delimiter = parts[0].substring(2);
//         numbersToProcess = parts[1];
//     }

//     const nums = numbersToProcess
//         .replace(/\n/g, delimiter)
//         .split(delimiter)
//         .map(num => parseInt(num));
    
//     const negatives = nums.filter(n => n < 0);
//     if (negatives.length > 0) {
//         throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
//     }

//     return nums.reduce((sum, num) => sum + num, 0);
// }

//7.
// export function add(numbers) {
//     if(numbers === '') {
//         return 0;
//     }

//     let delimiter = ',';
//     let numbersToProcess = numbers;

//     if (numbers.startsWith('//')) {
//         const parts = numbers.split('\n');
//         delimiter = parts[0].substring(2);
//         numbersToProcess = parts[1];
//     }

//     const nums = numbersToProcess
//         .replace(/\n/g, delimiter)
//         .split(delimiter)
//         .map(num => parseInt(num));
    
//     const negatives = nums.filter(n => n < 0);
//     if (negatives.length > 0) {
//         throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
//     }

//     return nums
//         .filter(n => n <= 1000) 
//         .reduce((sum, num) => sum + num, 0);
// }

//8.
// export function add(numbers) {
//     if(numbers === '') {
//         return 0;
//     }

//     let delimiter = ',';
//     let numbersToProcess = numbers;

//     if (numbers.startsWith('//')) {
//         const parts = numbers.split('\n');
//         if (parts[0].startsWith('//[') && parts[0].endsWith(']')) {
//             delimiter = parts[0].substring(3, parts[0].length - 1);
//         } else {
//             delimiter = parts[0].substring(2);
//         }
//         numbersToProcess = parts[1];
//     }

//     const nums = numbersToProcess
//         .replace(/\n/g, delimiter)
//         .split(delimiter)
//         .map(num => parseInt(num));
    
//     const negatives = nums.filter(n => n < 0);
//     if (negatives.length > 0) {
//         throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
//     }

//     return nums
//         .filter(n => n <= 1000)
//         .reduce((sum, num) => sum + num, 0);
// }

//9. TDD : Il est possible de définir plusieurs séparateurs avec le format suivant :
export function add(numbers) {
    if(numbers === '') {
        return 0;
    }

    let delimiters = [','];
    let numbersToProcess = numbers;

    if (numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        const delimiterPart = parts[0].substring(2);
        
        if (delimiterPart.startsWith('[') && delimiterPart.endsWith(']')) {
            const regex = /\[(.*?)\]/g;
            let match;
            delimiters = [];
            
            while ((match = regex.exec(delimiterPart)) !== null) {
                delimiters.push(match[1]);
            }
        } else {
            delimiters = [delimiterPart];
        }
        
        numbersToProcess = parts[1];
    }

    let processedInput = numbersToProcess.replace(/\n/g, ',');
    
    for (const delimiter of delimiters) {
        const escapedDelimiter = delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(escapedDelimiter, 'g');
        processedInput = processedInput.replace(regex, ',');
    }
    
    const nums = processedInput
        .split(',')
        .map(num => parseInt(num));
    
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }

    return nums
        .filter(n => n <= 1000)
        .reduce((sum, num) => sum + num, 0);
}

