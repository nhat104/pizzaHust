var nav_header = document.getElementById('nav_list');

var list_comp =
  nav_header.getElementsByClassName('component');

for (var i = 0; i < list_comp.length; i++) {
  list_comp[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(
        ' active',
        ''
      );
    }
    this.className += ' active';
  });
}
