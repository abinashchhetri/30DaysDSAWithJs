// const print5 = (n, name) => {
//   if (n <= 0) {
//     return;
//   } else {
//     n--, print5(n, name);
//     console.log(`${n}: ` + name);
//   }
// };

// print5(5, "Jashuda");

// backtracing

const print5Back = (i, n, name) => {
  if (i > n) {
    return;
  } else {
     print5Back(i+1, n, name);
    console.log(`${i}: ` + name);
  }
};

print5Back(0, 10, "Jashuda");
