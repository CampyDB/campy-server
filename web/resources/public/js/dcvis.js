function TemporalVisualization () {
    var dataTable = dc.dataTable("#dc-table-graph");
    var histogramChart = dc.barChart("#dc-histogram-chart");
    var timeChart = dc.lineChart("#dc-time-chart")
    var parseDate = d3.time.format("%Y-%m-%d").parse;
    var yearRingChart = dc.pieChart("#chart-ring-year");
    var dayOfWeekChart = dc.rowChart('#day-of-week-chart');
    var path = "http://localhost:5000/api/data"
    d3.json(path, function(error, data) {
      data.forEach(function(d) {
        d.date = parseDate(d.date);
        d.value = +d.value;
        d.year = d.date.getFullYear();
      });

      function remove_empty_bins(source_group) {
                return {
                    all:function () {
                        return source_group.all().filter(function(d) {
                            return d.value != 0;
                        });
                    }
                };
            }

      var facts = crossfilter(data);

      var timeDimension = facts.dimension(function (d) {
        return d.date;
      });

      var minDate = timeDimension.bottom(1)[0].date;
      var maxDate = timeDimension.top(1)[0].date;
      var hisValue = facts.dimension(function (d) {
        return d.value;
      });

      var yearDim = facts.dimension(function (d) {
        return +d.year;
      });
      var yearTotal = yearDim.group().reduceSum(function (d) {
      return d.value})

      yearRingChart
        .width(300).height(300)
        .dimension(yearDim)
        .group(yearTotal)
        .innerRadius(30)

      var hisValueGroupCount = hisValue.group()
      histogramChart.width(900)
        .height(150)
        .margins({top: 10, right: 10, bottom: 20, left: 40})
        .dimension(hisValue)
        .group(hisValueGroupCount)
        .transitionDuration(500)
        .centerBar(true)
        .gap(5)
        .filter([3, 5])
        .x(d3.scale.linear().domain([0.5, 40.5]))
        .elasticY(true)
        .xAxis().tickFormat()

      var valueByDate = facts.dimension(function(d) {
        return d3.time.month(d.date);
      });

      var valueByDateGroup = valueByDate.group()
        .reduceCount(function(d) { return d.value; });

      timeChart.width(960)
        .height(150)
        .margins({top: 10, right: 10, bottom: 20, left: 40})
        .dimension(valueByDate)
        .group(remove_empty_bins(valueByDateGroup))
        .transitionDuration(500)
        .elasticY(true)
        .x(d3.time.scale().domain([minDate, maxDate]))
        .elasticX(true)
        .xAxis();

      var dayOfWeek = facts.dimension(function (d) {
              var day = d.date.getDay();
              var name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
              return day + '.' + name[day];
          });
      var dayOfWeekGroup = dayOfWeek.group();

      dayOfWeekChart
              .width(300)
              .height(300)
              .margins({top: 20, left: 10, right: 10, bottom: 20})
              .group(dayOfWeekGroup)
              .dimension(dayOfWeek)
              .ordinalColors(['#3182bd', '#6baed6', '#9ecae1', '#c6dbef', '#dadaeb'])
              .label(function (d) {
                  return d.key.split('.')[1];
              })
              .title(function (d) {
                  return d.value;
              })
              .elasticX(true)
              .xAxis().ticks(4);

      dataTable.width(960).height(800)
      .dimension(timeDimension)
      .group(function(d) { return "Temporal Data"})
      .size(20000)
        .columns([
          function(d) { return d.date; },
          function(d) { return d.value; },
        ])
        .sortBy(function(d){ return d.dtg; })
        .order(d3.ascending);

      dc.renderAll();

    });
 }