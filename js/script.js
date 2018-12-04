$('ul').on('click', 'li', function() {
  $(this).css('text-decoration', 'line-through');
});

$('#addToDo').click(function() {
  $('ul')
    .first()
    .append(`<li>${$('#input').val()}</li>`);
});
