document.getElementById('changeColor').addEventListener('click', function() {
    var title = document.getElementById('title');
    title.style.color = title.style.color === 'blue' ? 'red' : 'blue';
});
