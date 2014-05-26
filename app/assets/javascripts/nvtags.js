// Make data global
var hunt_data = [];

function getAjaxHuntData(hunt_number) {
  $.ajax({
    type: "GET",
    url: "nvtags/ajax_hunt_data",
    data: {hunt_number: hunt_number},
    success: function(json) {
      hunt_data = json;
    }
  });
}

//Not a reliable way of finding selected unit data, for instance clicking on unit 41
//return 3 units that all contain 41... damn. Rethink this one. 
function findSelectedUnits(key, all_data) {
  var selected_unit = []
  for (var i = 0; i < all_data.length; i++) {
    var current = all_data[i]['units_included']
    var unit_array = current.split(';')

    //if there's multiple units, check for a match
    if (unit_array.length > 0) {
       for (var j = 0; j < unit_array.length; j++) {
         if (unit_array[j] === key){
          selected_unit.push(all_data[i]);
         }
       };
    }
    //otherwise just check the single unit
    else if (current === key) {
      selected_unit.push(all_data[i]);
    }
  }
  return selected_unit;
}

function displayData(current_unit) {
  $('#unit-group').html("Unit Group: " + current_unit[0]['unit_group']);
  $('#draw-odds').html("Draw Odds: " + current_unit[0]['draw_odds']);
  $('#apps').html("Number of Applications: " + current_unit[0]['apps']);
  $('#tags-avail').html("Tags Available: " + current_unit[0]['tags_avail']);
  $('#tags-sold').html("Tags Sold: " + current_unit[0]['tags_sold']);
  $('#percent-return').html("Percent Return: " + current_unit[0]['percent_return']);
  $('#number-of-successful-hunters').html("No. of Successful Hunters: " + current_unit[0]['number_of_successful_hunters']);
  $('#percent-of-successful-hunters').html("Percent of Successful Hunters: " + current_unit[0]['percent_return']+ "%");
  $('#point-class-1').html(current_unit[0]['point_class_1']);
  $('#point-class-2').html(current_unit[0]['point_class_2']);
  $('#point-class-3').html(current_unit[0]['point_class_3']);
  $('#point-class-4').html(current_unit[0]['point_class_4']);
  $('#point-class-5').html(current_unit[0]['point_class_5']);
  $('#point-class-6').html(current_unit[0]['point_class_6']);
  $('#percent-4-plus-points').html("Percent of 4+ Points" + current_unit[0]['point_class_1']+"%");

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

  $('area').click(function(){
    var unitId = $(this).attr("alt");
    var displayUnit = findSelectedUnits(unitId, hunt_data);
    displayData(displayUnit);
  });



});