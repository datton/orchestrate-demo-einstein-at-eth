// Full-Stack: site behaviour
(function () {
  var opts = document.getElementById('quiz-options');
  if (!opts) return;
  var result = document.getElementById('quiz-result');
  ['1892', '1896', '1905'].forEach(function (year) {
    var b = document.createElement('button');
    b.type = 'button';
    b.textContent = year;
    b.addEventListener('click', function () {
      result.textContent = year === '1896'
        ? 'Correct! He entered the Polytechnic in 1896.'
        : 'Not quite. Try again.';
    });
    opts.appendChild(b);
  });
})();
