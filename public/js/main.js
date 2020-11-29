// Loading Screen Timer - onPageLoad

function loadingScreenTimer() {
    setTimeout(() => {
        document.getElementById('page-loader').style.display = 'none';
        document.getElementById('page-input').style.display = 'flex';
        }, 2900)
    };

// Calculate Screen Size

let browserWidth;
let browserHeight;

let outputSidebarWidth;
let outputSidebarHeight;

let outputButtonsWidth;
let outputButtonsHeight;


function calculateOutputSizes() {

    //Get Browser Windos Sizes
    browserWidth = $(window).width();
    browserHeight = $(window).height();

    //Get Sidebar sizes
    var outputSidebar = document.getElementById('output-aside');
    var sidebarPositionInfo = outputSidebar.getBoundingClientRect();
    outputSidebarWidth = sidebarPositionInfo.width;
    outputSidebarHeight = sidebarPositionInfo.height;

    //Get Button Div size
    var outputButtons = document.getElementById('output-buttons-container');
    var buttonsPositionInfo = outputButtons.getBoundingClientRect();
    outputButtonsWidth = buttonsPositionInfo.width;
    outputButtonsHeight = buttonsPositionInfo.height;

};
