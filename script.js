const pawn = document.getElementsByClassName("pawn");
const pawnArray = [...pawn];
let a = 0;
pawnArray.forEach((item) => {
  item.addEventListener("click", function () {
    let myattr = item.getAttribute("class");
    const myid_str = item.parentElement.getAttribute("id");
    let my_id = Number(myid_str);

    if (myattr == "black pawn") {
      let path_id1 = my_id - 10;
      let path_id2 = my_id - 20;
      let path_id1_str = path_id1.toString();
      let path_id2_str = path_id2.toString();

      item.classList.add("selected");
      first_block = document.getElementById(path_id1_str);
      first_block.classList.add("path");
      second_block = document.getElementById(path_id2_str);
      second_block.classList.add("path");
      first_block.addEventListener("click", function () {
        first_block.appendChild(item);
        first_block.classList.remove("path");
        second_block.classList.remove("path");
      });
      second_block.addEventListener("click", function () {
        second_block.appendChild(item);
        first_block.classList.remove("path");
        second_block.classList.remove("path");
      });
    } else {
      let path_id1 = my_id + 10;
      let path_id2 = my_id + 20;
      let path_id1_str = path_id1.toString();
      let path_id2_str = path_id2.toString();
      item.classList.add("selected");
      first_block = document.getElementById(path_id1_str);
      first_block.classList.add("path");
      second_block = document.getElementById(path_id2_str);
      second_block.classList.add("path");
      first_block.addEventListener("click", function () {
        first_block.appendChild(item);
        first_block.classList.remove("path");
        second_block.classList.remove("path");
      });
      second_block.addEventListener("click", function () {
        second_block.appendChild(item);
        first_block.classList.remove("path");
        second_block.classList.remove("path");
      });
    }
  });
});

function displayChessboard() {
  const chessboard = document.getElementById("chessboard");
  chessboard.innerHTML = "";

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const square = document.createElement("div");
      square.textContent = board[i][j] || "";
      square.classList.add((i + j) % 2 === 0 ? "light" : "dark");
      square.addEventListener("click", () => movePiece(i, j));
      chessboard.appendChild(square);
    }
  }
}
