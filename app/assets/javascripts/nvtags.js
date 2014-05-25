function getAjaxHuntData(hunt_number) {
  $.ajax({
    type: "GET",
    url: "nvtags/ajax_hunt_data",
    data: {hunt_number: hunt_number},
    success: function(json) {
      //var hunt_data = $.parseJSON(json);
      // alert(foo.id); // alert(foo.name);
      // etc.
      console.log(json);
    }
  });
}


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

  $('#hunt_number_unit_group').change(function(){
    getAjaxHuntData($(this).val());      
  });



});