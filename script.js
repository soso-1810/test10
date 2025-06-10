// ページが読み込まれたときに実行
window.onload = function () {
  const heading = document.querySelector("h1");
  const paragraph = document.querySelector("p");

  // h1 をクリックしたら色を変える
  heading.addEventListener("click", function () {
    heading.style.color = "green";
    heading.textContent = "タイトルがクリックされました！";
  });

  // p をクリックしたらアラートを出す
  paragraph.addEventListener("click", function () {
    alert("段落がクリックされました！");
  });
};
