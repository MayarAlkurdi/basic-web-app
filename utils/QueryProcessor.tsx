export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist." 
    )

  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "mayar"
    )

  }

    if (query.toLowerCase().includes("mkurdi")) {
      return (
        "Student in CMU" 
      )
  }
  
const addMatch = query.match(/What is (\d+) plus (\d+)/);
if (addMatch) {
  const x: number = parseInt(addMatch[1]);
  const y: number = parseInt(addMatch[2]);
  return (x+y).toString();
}

const minusMatch = query.match(/What is (\d+) minus (\d+)/);
if (minusMatch) {
  const x: number = parseInt(minusMatch[1]);
  const y: number = parseInt(minusMatch[2]);
  return (x-y).toString();
}

const powerMatch = query.match(/What is (\d+) to the power of (\d+)/);
if (powerMatch) {
  const x: number = parseInt(powerMatch[1]);
  const y: number = parseInt(powerMatch[2]);
  return (x**y).toString();
}

const multiplyMatch = query.match(/What is (\d+) multiplied (\d+)/);
if (multiplyMatch) {
  const x: number = parseInt(multiplyMatch[1]);
  const y: number = parseInt(multiplyMatch[2]);
  return (x*y).toString();
}

const compare = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
if (compare) {
  const x: number = parseInt(compare[1]);
  const y: number = parseInt(compare[2]);
  const z: number = parseInt(compare[3]);
  if (x > y){
    if (x > z){
      return (x).toString();
    }}
  if (y > x){
      if (y > z){
        return (y).toString();
      }}

  if (z > x){
        if (z > y){
          return (z).toString();
        }} 
  
}


return "";
}


