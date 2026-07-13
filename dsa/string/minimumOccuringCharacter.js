let s1 = "anana";
let str = [...s1];

// let min = str.length;
let min = Number.MAX_SAFE_INTEGER;
let res = str[0];

for (let i = 0; i < str.length; i++) {
  let count = 1;

  if (str[i] == "") continue;
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] == str[j]) {
      count++;
      str[j] = "";
    }
  }
  if (count < min) {
    min = count;
    res = str[i];
  }
}

console.log(res + ":" + min);
