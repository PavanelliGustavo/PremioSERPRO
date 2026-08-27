document.querySelectorAll('.item-head').forEach(function (head) {
  head.addEventListener('click', function () {
    var item = head.parentElement;
    var aberto = item.classList.toggle('open');
    head.setAttribute('aria-expanded', aberto);
  });
});
