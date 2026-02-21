document.addEventListener('mousemove', function(e) {
   var trail = document.createElement('div');
   trail.className = 'trail';
   trail.style.left = e.pageX + 'px';
   trail.style.top = e.pageY + 'px';
   document.body.appendChild(trail);
   setTimeout(function() {
       trail.remove();
   }, 500);
});
