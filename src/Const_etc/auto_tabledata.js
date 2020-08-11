export const auto_tabledata = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [0, 4],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [2, 4],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
  [4, 0],
  [4, 1],
  [4, 2],
  [4, 3],
  [4, 4],
];

export const auto_tabledataArray = new Array();

for (let i = 0; i < 5; i++) {
  //auto_tabledataArray.push([i]);
  for (let j = 0; j < 5; j++) {
    auto_tabledataArray.push([i, j]);
  }
}

console.log(auto_tabledataArray);
