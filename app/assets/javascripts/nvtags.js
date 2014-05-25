$( document ).ready(function() {
  $('#hunt-units').mapster(
    {
      fillOpacity: 0.5,
      render_highlight: {
        fillColor: '2aff00',
        stroke: true
      }
    }
  );
  alert('This worked')
});