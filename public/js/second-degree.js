//get the values from input fields from index.html
// const A = document.getElementById("sd-a").value;
// const B = document.getElementById("sd-b").value;
// const C = document.getElementById("sd-c").value;

// Input Var (Global)

var A;
var B;
var C;


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

// Second Degree Calculation

function calculateDelta(A, B, C) {
    delta = Math.pow(B, 2) - 4 * A * C;
}

function calculateRoots(A, B, delta) {
    if (delta >= 0) {
        root1 = (-B + Math.sqrt(delta)) / 2 * A
        root2 = (-B - Math.sqrt(delta)) / 2 * A
    } else {
        alert('Delta is negative (Still not supported!)');
        console.log("ERROR: Negative delta.")
    }
}

function calculateVertex(A, B, delta) {
    vertexX = (B * -1) / (2 * A);
    vertexY = (delta / (4 * A)) * -1;
}

function calculate() {

    document.getElementById('page-input').style.display = 'none';
    document.getElementById('page-output').style.display = 'flex';

    calculateOutputSizes()


    A = document.getElementById("sd-a").value;
    B = document.getElementById("sd-b").value;
    C = document.getElementById("sd-c").value;


    // Input Validation
    if (isNaN(A) || isNaN(B) || isNaN(C)) {
        alert('Faltando parametros.');
        returnToInputPage();
        return;
    }

    if (A == 0) {
        alert('O Coeficiente A não pode ser 0.');
        returnToInputPage();
        return;
    };


    calculateDelta(A, B, C);
    calculateRoots(A, B, delta);
    calculateVertex(A, B, delta);
    //the y intercept is calculated by x = 0, so intercept = C.
    intercept = C;



    console.log("Delta: " + delta);
    console.log("Roots: " + root1 + " , " + root2);
    console.log("Vertexes: " + vertexX.toString() + " , " + vertexY.toString());
    console.log("Intercept: " + C);



    showOutput(browserHeight, browserWidth, outputButtonsWidth, outputSidebarWidth, delta, root1, root2, vertexX, vertexY, A, B, C);

}




// Show Calculated Data

function showOutput(browserHeight, browserWidth, outputButtonsWidth, outputSidebarWidth, delta, root1, root2, vertexX, vertexY, A, B, C) {

    document.getElementById('output-roots').innerHTML = '( ' + root1 + ' , ' + root2 + ' )';
    document.getElementById('output-vertex').innerHTML = '(' + vertexX.toString() + ',' + vertexY.toString() + ')';
    document.getElementById('output-delta').innerHTML = 'Δ = '+ delta;
    document.getElementById('output-intercept').innerHTML = '( '+ '0' + ' , '+C + ' )';

    const graphWidth = browserWidth - (outputSidebarWidth + outputButtonsWidth);
    const graphHeight = browserHeight - 10;

    // Make Graph
    functionPlot({
        target: "#graph",
        width: graphWidth,
        height: graphHeight,
        yAxis: {
            domain: [-1, 9]
        },
        grid: true,
        data: [{
            // fn: 'x^2 + 2x + 3', // f(x) = ax² + bx + c
            fn: `${A}x^2 + ${B}x + ${C}`,
        }]
    });

    const svg = document.querySelector("#graph svg");
    if (svg) {
        svg.classList.add("graphStyle");
    }



}



// Return to Input Page calculated

function returnToInputPage() {
    document.getElementById('page-output').style.display = 'none';
    document.getElementById('page-input').style.display = 'flex';
}