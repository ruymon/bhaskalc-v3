import functionPlot from "function-plot";

let contentsBounds = document.body.getBoundingClientRect();
let width = 800;
let height = 500;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;

functionPlot({
  target: "#graph",
  width,
  height,
  yAxis: { domain: [-1, 9] },
  grid: true,
  data: [
    {
      fn: "x^2",
      derivative: {
        fn: "2 * x",
        updateOnMouseMove: true
      }
    }
  ]
});
