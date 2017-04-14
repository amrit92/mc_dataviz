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