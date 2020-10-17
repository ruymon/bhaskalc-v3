//get the values from input fields from index.html
// const A = document.getElementById("sd-a").value;
// const B = document.getElementById("sd-b").value;
// const C = document.getElementById("sd-c").value;

//the results:
//b2 - 4ac. DELTA CAN NOT BE NEGATIVE YET!
var delta;

//bhaskara
var root1;
var root2;

//X = -b/2a; Y = f(x)   
var vertexX;
var vertexY;

var intercept;

function calculate(){
    const A = document.getElementById("sd-a").value;
    const B = document.getElementById("sd-b").value;
    const C = document.getElementById("sd-c").value;

    calculateDelta(A, B, C);
    calculateRoots(A, B, delta);
    calculateVertex(A, B, delta);
    //the y intercept is calculated by x = 0, so intercept = C.
    intercept = C;

    console.log("Delta: " + delta);
    console.log("Roots: " + root1 + " , " + root2);
    console.log("Vertexes: " + vertexX.toString() + " , " + vertexY.toString());
    console.log("Intercept: " + C);
}

function calculateDelta(A, B, C){
        delta = Math.pow(B, 2) - 4*A*C;
}

function calculateRoots(A, B, delta){
    if(delta >= 0){
        root1 = (-B + Math.sqrt(delta))/2*A
        root2 = (-B - Math.sqrt(delta))/2*A
    } else{
        alert('Delta is negative (Still not supported!)');
        console.log("ERROR: Negative delta.")
    }
}

function calculateVertex(A, B, delta){
    vertexX = (B * -1) / (2*A) ;
    vertexY = (delta / (4 * A)) * -1;
}