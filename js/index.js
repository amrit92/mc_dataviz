String.prototype.supplant = function (o) {
    return this.replace(/{([^{}]*)}/g,
        function (a, b) {
            var r = o[b];
            return typeof r === 'string' || typeof r === 'number' ? r : a;
        }
    );
};
Plotly.d3.csv('output2.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) 
          { return row[key]; });
      }
      console.log(rows);
function myFunction(i) {
  if(i >=0){
    var hx = '#1f77b4'; 
  }
  if(i > 20){
    var hx = '#9467bd';
  }
  if(i > 40){
    var hx = '#bcbd22';
  }
   // var hx = '#'+Math.floor(Math.random()*16777215).toString(16);
   i = i*3;
    var trace = {
      x: unpack(rows, '{val}'.supplant({ val: i+1 })),
      y: unpack(rows, '{val}'.supplant({ val: i+2 })),
      z: unpack(rows, '{val}'.supplant({ val: i+3 })),
      mode: 'lines',
      line: {
        color: hx,
        width: 1
      },
      type: 'scatter3d'
    };
  return trace
}
// var trace1 = {
//   x: unpack(rows, 'x1'),
//   y: unpack(rows, 'y1'),
//   z: unpack(rows, 'z1'),
//   mode: 'lines',
//   marker: {
//     color: '#1f77b4',
//     size: 12,
//     symbol: 'circle',
//     line: {
//       color: 'rgb(0,0,0)',
//       width: 0
//     }
//   },
//   line: {
//     color: '#1f77b4',
//     width: 1
//   },
//   type: 'scatter3d'
// };
// var trace2 = {
//   x: unpack(rows, 'x2'),
//   y: unpack(rows, 'y2'),
//   z: unpack(rows, 'z2'),
//   mode: 'lines',
//   marker: {
//     color: '#9467bd',
//     size: 12,
//     symbol: 'circle',
//     line: {
//       color: 'rgb(0,0,0)',
//       width: 0
//     }
//   },
//   line: {
//     color: 'rgb(44, 160, 44)',
//     width: 1
//   },
//   type: 'scatter3d'
// };
// var trace3 = {
//   x: unpack(rows, 'x3'),
//   y: unpack(rows, 'y3'),
//   z: unpack(rows, 'z3'),
//   mode: 'lines',
//   marker: {
//     color: '#bcbd22',
//     size: 12,
//     symbol: 'circle',
//     line: {
//       color: 'rgb(0,0,0)',
//       width: 0
//     }
//   },
//   line: {
//     color: '#bcbd22',
//     width: 1
//   },
//   type: 'scatter3d'
// };

array = new Array();
for (i = 0; i < 61; i++) {
    array[i] = myFunction(i);
}
var data = [myFunction(1), myFunction(2), myFunction(3)];
console.log(array)
var layout = {
  title: '3D Line Plot',
  autosize: false,
  width: 800,
  height: 800,
  margin: {
    l: 0,
    r: 0,
    b: 0,
    t: 65
  }
};
var d3 = Plotly.d3;
var img_jpg= d3.select('#jpg-export');
Plotly.newPlot('myDiv', array, layout)
// .then(
//     function(gd)
//      {
//       Plotly.toImage(gd,{height:800,width:800})
//          .then(
//             function(url)
//          {
//              img_jpg.attr("src", url);
//              return Plotly.toImage(gd,{format:'jpeg',height:800,width:800});
//          }
//          )
//     });; 
});