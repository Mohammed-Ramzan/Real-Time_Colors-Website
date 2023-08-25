const navToggleBtn = document.querySelector('.navbar-toggler');
const navCollapseDiv = document.querySelector('.navbar-collapse');

navToggleBtn.addEventListener('click', () => {
    navCollapseDiv.classList.toggle('showNavbar');
    navToggleBtn.classList.toggle('showNavbar-toggler');
});

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

const accordian_open = document.querySelectorAll(".parent-tab label .icon i");
const accordian_close = document.querySelectorAll(".parent-tab .content");
const accordian_input = document.querySelectorAll(".parent-tab input")

accordian_input.forEach((elm, index)=>{
    accordian_close[0].style.maxHeight = "100vh";
    elm.addEventListener("click", function(){
    closeAccordian()
        accordian_close[index].style.maxHeight = "100vh";
    })
})


function closeAccordian(){
    accordian_close.forEach((content)=>{
        content.style.maxHeight="0";
    })
}


const toolbars = document.querySelector(".toolbars");
const randomToolbar = document.querySelector(".generate-btn");
const random = document.querySelector(".toolbar-random svg");
const textColor = document.querySelector(".toolbar-text input");
const bgColor = document.querySelector(".toolbar-background input");
const primaryColor = document.querySelector(".toolbar-p-btn input");
const secondColor = document.querySelector(".toolbar-s-btn input");
const accentColor = document.querySelector(".toolbar-accent input");
const btns = document.querySelector(".hero-btn .btn");
const colors_btn = document.querySelector(".colors-btn");

colors_btn.addEventListener("click", function(){
  // const Currentleft = window.getComputedStyle(toolbars).left;
  if(window.getComputedStyle(toolbars).left == "-1100px"){
    toolbars.style.left = 0;
  }
  else {
    toolbars.style.left = "-1100px" ;
  }
  
})
randomToolbar.addEventListener("click", function(){
    toolbars.style.left = "-1100px";
  })

var colorArrays = [
    ['#e9c46a', '#264653', '#e76f51', '#2a9d8f', '#e9c46a'],

    ['#223d49', '#ffe08a', '#ac5039', '#fff0c7', '#2a9d8f'],

    ['#f6f7f9', '#212428', '#00ff00', '#313130', '#00bb00'],
  
    ['#0e101a', '#ffffff', '#0d8065', '#f0f2fc', '#aff2ea'],

    ['#1d3557', '#f1faee', '#e63946', '#a8dadc', '#457b9d'],
  
    ['#f1faee', '#1d3557', '#a8dadc', '#06446a', '#ffc7cc'],
  
    ['#fffbe5', '#000814', '#ffc300', '#001d3d', '#003566'],

    ['#344e41', '#dad7cd', '#3a5a40', '#b5c49c', '#588157'],

    ['#2b2d42', '#edf2f4', '#d90429', '#8d99ae', '#201f33'],

    ['#212529', '#f8f9fa', '#343a40', '#e9ecef', '#adb5bd'],

    ['#231942', '#ffebf5', '#5e548e', '#efd9f2', '#8d73b0'],

    ['#ffffff', '#191919', '#405bff', '#212121', '#ebff38'],

    ['#eeeeee', '#000000', '#44d62c', '#222222', '#ff9c07'],
  
    ['#eeeeee', '#000000', '#44d62c', '#222222', '#44d62c'],

    ['#ff8bff', '#193718', '#ff8bff', '#5eaa67', '#e9ffe8'],

    ['#000000', '#ffffff', '#000000', '#f2f2f2', '#000000'],
  
    ['#000000', '#ffffff', '#0049db', '#f2f2f2', '#ff6bc1'],
  
    ['#0f1419', '#ffffff', '#1d9bf0', '#f7f7f7', '#8ecdf7'],

    ['#0f1419', '#ffffff', '#ffd400', '#f2f2f2', '#ffe97f'],
  
    ['#fbf5d4', '#0099ab', '#5a39d0', '#006374', '#2156c0'],

    ['#000000', '#e7e7d7', '#006338', '#deded0', '#006338'],

    ['#0f1419', '#ffffff', '#f91880', '#f2f2f2', '#fc8bbf'],

    ['#0f1419', '#ffffff', '#8756FF', '#f2f2f2', '#bbaaff'],
  

    ['#0f1419', '#ffffff', '#ff7a00', '#f2f2f2', '#ffbc7f'],
  
    ['#0f1419', '#ffffff', '#00ba7c', '#f2f2f2', '#7fdcbd'],
  
    ['#006374', '#fbf5d4', '#5a39d0', '#cbddca', '#5a39d0'],
  
    ['#0e101a', '#ffffff', '#ff686b', '#fff6f5', '#84dcc6'],

    ['#584b53', '#fef5ef', '#9d5c63', '#ffffff', '#e4bb97'],
  
    ['#424b54', '#ffffff', '#9b6a6c', '#e6eaeb', '#e2b4bd'],

    ['#ffffff', '#1f2041', '#ffc857', '#4b3f72', '#ffc857'],
  
    ['#050505', '#ffffff', '#121212', '#f6f5f4', '#ffb600'],

    ['#ffffff', '#000000', '#9d34da', '#1a1a1a', '#bd73e8'],

    ['#2b1c50', '#ffffff', '#565add', '#d1d1f7', '#9f92ec'],

    ['#00031f', '#ffffff', '#0b5cff', '#ffffff', '#00ede7'],

    ['#000000', '#ffffff', '#611f69', '#f4ede4', '#ecb22e'],

    ['#171a22', '#ffffff', '#ff622d', '#f7f7f7', '#421983'],

    ['#000000', '#9de2d4', '#e27d5f', '#95d6d2', '#d3bbc2'],
  
    ['#fffbff', '#252cbb', '#ca3f66', '#2e35c2', '#ffccda'],
  

    ['#ffffff', '#4887b0', '#fbeec1', '#3f7897', '#fbeec1'],
  

    ['#05396b', '#5cdb94', '#edf5e0', '#8de4af', '#05396b'],
  

    ['#fcfcfc', '#151515', '#f54c28', '#1b1918', '#689775'],
  

    ['#5d5c61', '#b4c6da', '#557a95', '#d0dce7', '#7a747b'],
  

    ['#2e1115', '#ffffff', '#4f1b1d', '#eaeff2', '#83687b'],
  

    ['#fcfcfc', '#000000', '#4201ff', '#171717', '#230090'],
  

    ['#e5fffd', '#0b0c12', '#66fcf1', '#202833', '#c5c6c8'],
  

    ['#2c221e', '#e3e2de', '#e10243', '#e5d1d6', '#9b1750'],
  

    ['#6c6b66', '#f1f0eb', '#f13c1f', '#fff8e5', '#4056a1'],
  

    ['#d6d6d6', '#272727', '#10f49c', '#424242', '#ffe401'],
  

    ['#fdfffe', '#2f4455', '#da7b93', '#376f70', '#2e151b'],
  

    ['#646561', '#eae8dc', '#e85a50', '#e6e2cc', '#977d59'],
  

    ['#ededed', '#222546', '#29658a', '#474866', '#d1d2d6'],
  

    ['#000000', '#fae053', '#000000', '#ffea61', '#fffad6'],
  

    ['#000000', '#ffffff', '#ffb100', '#f5f5f5', '#d3d8de'],
  

    ['#000000', '#d3d8de', '#000000', '#f5f5f5', '#fdaf1e'],
  

    ['#000000', '#fff5fd', '#000000', '#fff0fc', '#ffb8f2'],
  

    ['#24221b', '#e4dcc9', '#24221b', '#e4dcc9', '#24221b'],
  

    ['#000000', '#ffffff', '#06522c', '#cbfdcf', '#06522c'],
  

    ['#e9dfe0', '#0e0a18', '#4717f7', '#130e20', '#a43acb'],
  

    ['#eceff2', '#010101', '#b92501', '#071622', '#813772'],
  

    ['#e1dee2', '#140941', '#f8003f', '#260740', '#b30039'],
  

    ['#474747', '#efefef', '#ff3a3f', '#fafafa', '#caebf2'],
  

    ['#565656', '#d7cec9', '#763241', '#d6c6b8', '#95785b'],
  

    ['#1e392a', '#fefefe', '#3cc47c', '#d9f7e7', '#e9c892'],
  

    ['#b8ffc9', '#323232', '#54b46c', '#38473c', '#92f2aa'],
  

    ['#dbdfff', '#323232', '#505baf', '#38473c', '#92f2aa'],
  

    ['#dbdfff', '#1f2320', '#505baf', '#38473c', '#92f2aa'],
  

    ['#161613', '#ffffff', '#eb6d80', '#f5e5b4', '#e9b000'],
  

    ['#252326', '#fafdf8', '#0476b5', '#00784a', '#facf03'],
  

    ['#273435', '#ffffff', '#4ba5cd', '#ffefc2', '#f0cb5c'],
  

    ['#273435', '#ffffff', '#4b65ce', '#ffefc2', '#f0a35c'],
  

    ['#4a2849', '#f9eeea', '#93628f', '#f3decd', '#4a2849'],
  

    ['#222127', '#d9d9d9', '#4484ce', '#ead36c', '#f19f4d'],
  

    ['#fbfefd', '#1f2531', '#d9b311', '#0b3c5d', '#328bc3'],
  

    ['#4c2e15', '#ffffff', '#cf5262', '#d6e8f1', '#2b6da8'],
  

    ['#0c1512', '#dedede', '#1a2930', '#e3e3e3', '#f7ce40'],
  

    ['#010101', '#ffffff', '#e5e336', '#cadedd', '#ec576b'],
  

    ['#01524b', '#fbfffe', '#76cad4', '#cfe7e7', '#57bc92'],
  

    ['#1b2541', '#f1f1ef', '#048a95', '#9bd0d4', '#e37224'],
  

    ['#f6f6f6', '#101528', '#ff533f', '#0a0e19', '#ab987a'],
  

    ['#242424', '#ffffff', '#bfd8d2', '#fbf9f3', '#fedcd2'],
  

    ['#485970', '#fefef6', '#f6c8c8', '#c5dbce', '#91a8d1'],
  

    ['#ebebee', '#031424', '#90adbb', '#30415d', '#cf6766'],
  

    ['#ece5ec', '#1a0317', '#88d317', '#262626', '#6c3667'],
  

    ['#f8fedc', '#010101', '#fda781', '#003738', '#fedb43'],
  

    ['#444b45', '#ebe5e9', '#8e9a8d', '#d2dbd1', '#b66355'],
  

    ['#0f0e0b', '#f2eee2', '#f91c85', '#f0e4ad', '#43c0f6'],
  

    ['#3d3d3d', '#ffffff', '#a6d555', '#dbeff0', '#841981'],
  

    ['#303030', '#dedede', '#8abbd9', '#e9e9e9', '#9ad4e2'],
  

    ['#161616', '#ffffff', '#69aa8c', '#fef7c0', '#fa7c92'],
  

    ['#1f2231', '#d5d5d5', '#96858d', '#a0a5ab', '#6e7a94'],
  

    ['#3d3d3d', '#f6f6f6', '#b1463e', '#ccb3b4', '#646e63'],
  

    ['#e8e9db', '#646b49', '#cda34f', '#565c3d', '#393e27'],
  

    ['#290521', '#f6f6f6', '#e62a6f', '#ffffff', '#685582'],
  

    ['#c2bcbf', '#1b2033', '#985d6f', '#98878f', '#3a3d55'],
  

    ['#d3d5d3', '#161220', '#e9c87b', '#233239', '#c27670'],
  

    ['#424242', '#ffffff', '#ff695e', '#cde0cc', '#056573'],
  

    ['#0f080a', '#fefefe', '#1a7b34', '#79d2bc', '#f34c4e'],
  

    ['#24242e', '#e8e8ea', '#40314e', '#c0b3a0', '#30343f'],
  

    ['#090909', '#ffffff', '#4d2c3d', '#f0ede5', '#5a652b'],
  

    ['#06312f', '#f2f2f2', '#d58bfa', '#b3e681', '#0e8044'],
  

    ['#383838', '#f4f4f4', '#c0b283', '#ddd1c1', '#b2a792'],
  

    ['#465c8c', '#f0f9f4', '#94c078', '#ebf1f4', '#efe769'],
  

    ['#353955', '#ffffff', '#353955', '#f5f6e6', '#54668e'],
  

    ['#000000', '#fcfcfc', '#b55b12', '#f5e9e0', '#cecece'],
  

    ['#30241b', '#f9f9f1', '#874c62', '#f9eae6', '#a6d1cd'],
  

    ['#413f40', '#f4f4f4', '#d8de35', '#eec8e0', '#575fab'],
  

    ['#444c64', '#e1f2fc', '#ffb247', '#ced5ee', '#31a1ff'],
  

    ['#000000', '#ffffff', '#fe6d2a', '#ffe98a', '#453894'],
  

    ['#ffffff', '#111111', '#ff602c', '#000000', '#ffffff'],
  

    ['#efefef', '#101010', '#ce1c1b', '#000000', '#ce1b1b'],
  

    ['#fefefd', '#15151b', '#fefe00', '#29282d', '#fdfe00'],
  

    ['#fcfdfe', '#010409', '#ffffff', '#01242b', '#05b8bb'],
  

    ['#e8cfb1', '#151314', '#f1be70', '#e7ceb0', '#e07534'],
  

    ['#1c1c1c', '#f6f6f1', '#5c43f5', '#f5f5f0', '#fa7b6a'],
  

    ['#0f2335', '#fdfcfa', '#0f2335', '#cce5df', '#bf2659'],
  

    ['#0f2335', '#fdfcfa', '#be2659', '#cce5df', '#0f2335'],
  

    ['#222222', '#ffffff', '#fc4070', '#fff3f9', '#fae0e6'],
  

    ['#1c2541', '#ffffff', '#ff8629', '#fafafa', '#76a6da'],
  

    ['#1c2541', '#ffffff', '#ff8629', '#e9f4ff', '#76a6da'],
  

    ['#3e3e3f', '#ffffff', '#008977', '#fbfaf3', '#0e2d3f'],
  

    ['#444444', '#f7f7fc', '#22baa0', '#ffffff', '#5e36ca'],
  

    ['#03391c', '#f8f5f0', '#0a964c', '#ccdbd3', '#e19233'],
  

    ['#2a2538', '#e9e8e4', '#7b6767', '#e7e8c3', '#bad0c9'],
  

    ['#2a2538', '#e9e8e4', '#2a2538', '#fefff5', '#ebc5c5'],
  

    ['#ffffff', '#321c3d', '#943222', '#5e4766', '#b14e40'],
  

    ['#000000', '#e7cbe0', '#eb7b62', '#daa2a5', '#bd6a5e'],
  

    ['#000000', '#ffffff', '#e5cc99', '#d7d1cb', '#bea75c'],
  
    ['#ffffff', '#131417', '#47cf73', '#444857', '#ffdd40'],

    ['#000000', '#fafafa', '#f98644', '#f4eee9', '#f78643'],
  

    ['#201f40', '#f9f9f9', '#c3f928', '#e9e0ff', '#c0abf9'],
  
  
    ['#ffffff', '#1e1e22', '#73f190', '#17181b', '#3b974e'],
  
    ['#e3d7c6', '#2c440c', '#d75628', '#496506', '#e2904e'],

    ['#1d2a25', '#ffffff', '#2f640c', '#edf3fd', '#ce467c'],
  

    ['#ffffff', '#000000', '#80ff00', '#0a1400', '#b0ff61'],
  

    ['#4a4a4a', '#ffffff', '#ff0083', '#fafafa', '#ececec'],
  

    ['#001e1d', '#ffffff', '#ff9d94', '#f8f5f2', '#294638'],
  

    ['#50354e', '#fcfdfc', '#e0e0d1', '#f1eaed', '#714b6f'],
  

    ['#1d4706', '#fafffb', '#e4bdfa', '#ebffe0', '#b8d0f9'],
  

    ['#000000', '#f6fdf7', '#7ed62b', '#ebddf8', '#8cb9e9'],
  

    ['#000000', '#f7f6f8', '#68886c', '#e2e9e6', '#ded4dd'],
  

    ['#ffffff', '#00213d', '#71fead', '#002647', '#437e60'],
  

    ['#1a202c', '#ffffff', '#71fead', '#fff0f1', '#00213d'],
  

    ['#1a202c', '#ffffff', '#71fead', '#f4f4f4', '#31004c'],
  

    ['#ffffff', '#31004c', '#71fead', '#17191c', '#e01b2a'],
  

    ['#ffffff', '#000000', '#ffffff', '#1a1a1a', '#6d8a85'],
  

    ['#ffffff', '#000000', '#00d176', '#091d3e', '#789fdd'],
  

    ['#ffffff', '#000000', '#370060', '#130d17', '#45007a'],
  

    ['#ffffff', '#000000', '#b3c2ff', '#1d1622', '#11236f'],
  

    ['#ffffff', '#000000', '#b3c2ff', '#1d1622', '#6b00b3'],
  

    ['#000000', '#ffffff', '#ffb9b3', '#fff6f5', '#d1bdff'],
  

    ['#0a4d1b', '#ffffff', '#ea4335', '#ebf2ff', '#fbbc04'],
  

    ['#3c3c3e', '#ffffff', '#ea4335', '#ebf2ff', '#fbbc04'],
  

    ['#3c3c3e', '#ffffff', '#4285f4', '#e6f3ef', '#fbbc04'],
  

    ['#197158', '#ffffff', '#4285f4', '#e6f3ef', '#fbbc04'],
  

    ['#026e4e', '#ffffff', '#4285f4', '#e6f3ef', '#fbbc04'],
  

    ['#000000', '#f9f8f7', '#2ba77b', '#ffffff', '#403066'],
  

    ['#000000', '#ffffff', '#006656', '#f8f8fb', '#000000'],
  

    ['#000000', '#ffffff', '#2979ff', '#f0f6ff', '#2c66fe'],
  

    ['#000000', '#ffffff', '#079cf6', '#f7faff', '#75d3ff'],
  

    ['#383540', '#f4f1eb', '#211c35', '#d6d6d6', '#595378'],
  

      ['#424242', '#ffffff', '#bf202e', '#f2f5f7', '#00242b'],
  

      ['#ffffff', '#0e0f12', '#0094ff', '#1a1d21', '#0094ff'],
  

      ['#ffffff', '#0e0f12', '#0094ff', '#1a1d21', '#1fbf75'],
  

      ['#000000', '#ffffff', '#1a1a1a', '#f2ecdb', '#825f0d'],
  

      ['#000000', '#f1f3f5', '#f7b43d', '#ffffff', '#03103a'],
  

      ['#000000', '#ffffff', '#1060fd', '#faefea', '#ad4601'],
  

      ['#222222', '#ffffff', '#7029ff', '#f1eaff', '#aa80ff'],
  

      ['#222222', '#ffffff', '#7029ff', '#f1eaff', '#aa80ff'],
  
];

function generateColor(){
    var randomArrayIndex = Math.floor(Math.random() * colorArrays.length);
var color1 = colorArrays[randomArrayIndex][0];
var color2 = colorArrays[randomArrayIndex][1];
var color3 = colorArrays[randomArrayIndex][2];
var color4 = colorArrays[randomArrayIndex][3];
var color5 = colorArrays[randomArrayIndex][4];

    document.documentElement.style.setProperty('--primary', color1);
    document.documentElement.style.setProperty('--secondary', color2);
    document.documentElement.style.setProperty('--primbuttn', color3);
    document.documentElement.style.setProperty('--secbuttn', color4);
    document.documentElement.style.setProperty('--accent', color5);
    textColor.value = color1;
    bgColor.value = color2;
    primaryColor.value = color3;
    secondColor.value = color4;
    accentColor.value = color5;
  }
function copyColor(){
    const combinedValues = `${textColor.value}\n${bgColor.value}\n${primaryColor.value}\n${secondColor.value}\n${accentColor.value}`
    navigator.clipboard.writeText(combinedValues);
    alert("Copeid")
  }

  textColor.addEventListener("input", function(){
    document.documentElement.style.setProperty('--primary', this.value)
  })
  bgColor.addEventListener("input", function(){
    document.documentElement.style.setProperty('--secondary', this.value)
  })
  primaryColor.addEventListener("input", function(){
    document.documentElement.style.setProperty('--primbuttn', this.value)
  })
  secondColor.addEventListener("input", function(){
    document.documentElement.style.setProperty('--secbuttn', this.value)
  })
  accentColor.addEventListener("input", function(){
    document.documentElement.style.setProperty('--accent', this.value)
  })

  const shareButton = document.querySelector('.toolbar-share');

  if (navigator.share) {
    shareButton.addEventListener('click', () => {
      navigator.share({
        title: 'Color Palette Generator',
        text: 'Check out this website!',
        url: 'https://portfolioramzan.netlify.app/'
      })
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    });
  }
