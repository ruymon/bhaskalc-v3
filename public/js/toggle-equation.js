//this script is responsible for toggling .deactive class from .first-degree-form and .second-degree-form

var isFirstDegree;

function firstDegree(){
    isFirstDegree = true;
    toggleClass();

   // console.log("firstdegree true")
}
function secondDegree(){
    isFirstDegree = false;
    toggleClass();

   // console.log("firstdegree false")
}
function toggleClass(){
    //gets the div that holds both linear and quadratic equations input fields
    const firstDegreeForm = document.getElementById('first-degree-form');
    const secondDegreeForm = document.getElementById('second-degree-form');

    if (isFirstDegree){
        //this will enable firstDegree and disable secondDegree
        firstDegreeForm.classList.remove("deactive");
        secondDegreeForm.classList.add("deactive");
    } else{
        //this will enable secondDegree and disable firstDegree
        firstDegreeForm.classList.add("deactive");
        secondDegreeForm.classList.remove("deactive");
    }
}