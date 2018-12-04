console.log('loaded');

$('ul').on('click', 'li', function() {
  this.remove();
});

$('#addToDo').click(function() {
  console.log('button is clicked', $('#input').val());
  $('ul')
    .first()
    .append(`<li>${$('#input').val()}</li>`);
});
