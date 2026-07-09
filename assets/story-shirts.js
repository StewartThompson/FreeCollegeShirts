(function () {
  var TOTAL = 245;

  function pad(n) {
    return String(n).padStart(3, "0");
  }

  var nums = [];
  for (var i = 1; i <= TOTAL; i++) nums.push(i);
  for (var j = nums.length - 1; j > 0; j--) {
    var k = Math.floor(Math.random() * (j + 1));
    var tmp = nums[j];
    nums[j] = nums[k];
    nums[k] = tmp;
  }

  var idx = 0;
  var bands = document.querySelectorAll(".shirt-band");
  bands.forEach(function (band) {
    var count = parseInt(band.getAttribute("data-count"), 10) || 8;
    var html = "";
    for (var c = 0; c < count; c++) {
      if (idx >= nums.length) idx = 0;
      var n = pad(nums[idx++]);
      var src = "assets/photos/" + n + ".jpeg";
      html +=
        '<button type="button" data-full="' + src + '">' +
        '<img src="' + src + '" alt="A free college t-shirt" loading="lazy" width="400" height="599">' +
        "</button>";
    }
    band.innerHTML = html;
  });
})();
