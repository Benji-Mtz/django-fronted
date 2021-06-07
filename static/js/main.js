$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Highcharts.setOptions({
  colors: ['#01BAF2', '#71BF45', '#FAA74B']
});  
Highcharts.chart('graficas', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  }, */
  /* title: {
    text: 'Air Composition',
    y:225
  }, */
/* legend:{
  enabled:false
},
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        formatter:function(){ */
          // return this.key+ ': ' + this.y + '%';
         /*  return this.key+ ': ' + this.y;
        }
      },
      showInLegend: true
    }
  },
  series: [{
    name: 'Total Servicios',
    colorByPoint: true,
      innerSize: '60%',
    data: [{
      name: 'Sin servicio',
     color: '#fdebd0 ',
      y: 6,
    }, {
      name: 'En curso',
     color: ' #1b4f72',
      y: 14 
    }, {
      name: 'Otros',
      color: '#f2f4f4',
      y: 15
    }]
  }]
}); */


//exporte les données sélectionnées
/* var $table = $('#table');
    $(function () {
        $('#toolbar').find('select').change(function () {
            $table.bootstrapTable('refreshOptions', {
                exportDataType: $(this).val()
            });
        });
    })

		var trBoldBlue = $("table");

	$(trBoldBlue).on("click", "tr", function (){
			$(this).toggleClass("bold-blue");
	}); */

