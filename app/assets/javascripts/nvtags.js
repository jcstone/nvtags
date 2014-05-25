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
    var current = all_data[i]['unit_group']
    if (current.indexOf(key) >= 0) {
      selected_unit.push(all_data[i]);
    }
  }
  return selected_unit;
}

function generateHTML(current_unit) {
  return ['<div> Unit Name:',
          current_unit[0]['unit_group'],
          '</div>',
          '<div> Draw Odds:',
          current_unit[0]['draw_odds'],
          '</div>'
          ].join(',')
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
    var unitId = $(this).attr("id");
    var displayUnit = findSelectedUnits(unitId, hunt_data);
    console.log(displayUnit);
    $('#target').html(generateHTML(displayUnit));
  });



});