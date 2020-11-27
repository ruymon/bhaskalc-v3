// Loading Screen Timer - onPageLoad

function loadingScreenTimer() {
    setTimeout(() => {
        document.getElementById('page-loader').style.display = 'none';
        document.getElementById('page-input').style.display = 'flex';
    }, 2900)
};

// Calculate Screen Size

var browserWidth;
var browserHeight;

var outputSidebarWidth;
var outputSidebarHeight;

var outputButtonsWidth;
var outputButtonsHeight;


function calculateOutputSizes() {
    //Get Browser Windos Sizes
    browserWidth = $(window).width();
    browserHeight = $(window).height();

    //Get Sidebar sizes
    var outputSidebar = document.getElementById('output-aside');
    var sidebarPositionInfo = outputSidebar.getBoundingClientRect();
    outputSidebarWidth = sidebarPositionInfo.width;
    outputSidebarWidth = sidebarPositionInfo.height;

    //Get Button Div size
    var outputButtons = document.getElementById('output-buttons-container');
    var buttonsPositionInfo = outputButtons.getBoundingClientRect();
    outputButtonsWidth = buttonsPositionInfo.width;
    outputButtonsHeight = buttonsPositionInfo.height;


    
    // console.log("Browser Width = " + browserWidth);
    // console.log("Browser Height = " + browserHeight);

    // console.log("Sidebar Width = " + outputSidebarWidth);
    // console.log("Sidebar Height = " + outputSidebarHeight);

    // console.log("Buttons Width = " + outputButtonsWidth);
    // console.log("Buttons Height = " + outputButtonsHeight);


    // console.log("------------------------------");


};




// function graph


// var element = document.getElementById('output-aside');
// var positionInfo = element.getBoundingClientRect();
// var height = positionInfo.height;
// var width = positionInfo.width;

// console.log(height, width);


// REFERENCES //

// To get Whole Screen Size

    // window.screen.height;
    // window.screen.width;

// To get Browser Viewport [jQuery]

    // $(window).height();
    // $(window).width();

// To get HTML sizes

    // $(document).height();
    // $(document).width();