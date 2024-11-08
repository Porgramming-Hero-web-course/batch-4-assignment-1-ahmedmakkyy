function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }
  
  // Sample Input:
  const personInfo = { name: "Alice", age: 25, email: "alice@example.com" };
  
  // Sample Output:
  console.log(validateKeys(personInfo, ["name", "age"])); // true
 
  