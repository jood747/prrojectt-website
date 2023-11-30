function ranMembers() {
    var ul = document.getElementById('myList');
    for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
    }
  }

  window.onload = ranMembers;