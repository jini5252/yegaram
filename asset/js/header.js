fetch("header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
  });

fetch("side-bar.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("sideBar").innerHTML = html;
  });

// 로딩시 DOM에 존재하지 않으면 이벤트가 먹히지 않는다. - 이벤트위임 방식 써야함
document.addEventListener("click", function (e) {
  const button = e.target.closest(".menu-toggle");
  if (!button) return;

  const menuItem = button.closest(".menu-item");
  const isOpen = menuItem.classList.contains("active");

  menuItem.classList.toggle("active", !isOpen);
  button.setAttribute("aria-expanded", String(!isOpen));
});
