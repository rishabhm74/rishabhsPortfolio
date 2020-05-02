
var i = 0;
function show_menu(){
    if(i == 0){
        document.getElementById('menu_left_hidden').style.marginLeft = "0vw";
        i = i + 1;
        document.getElementById('right_outer_main_container').style.marginLeft = "35vw";
        document.getElementById('right_outer_main_container').style.width = "75%";
        document.getElementById('right_outer_main_container').style.height = "75%";
        document.getElementById('right_outer_main_container').style.marginTop = "12.5vh";
        document.getElementById('menu_icon').src = "close_menu.svg";
        document.getElementById('menu_icon').style.borderRadius = "50%";
        //document.getElementById('menu_icon').style.backgroundColor = "#474747e5";
        document.getElementById('right_main').style.height = "67.5vh";
        document.getElementById('right_main').style.width = "75vw";
        
    }
    else{
        document.getElementById('menu_left_hidden').style.marginLeft = "-35vw";
        i = i - 1;
        document.getElementById('right_outer_main_container').style.marginLeft = "0";
        document.getElementById('right_outer_main_container').style.width = "100%";
        document.getElementById('right_outer_main_container').style.height = "100%";
        document.getElementById('right_outer_main_container').style.marginTop = "0";
        document.getElementById('menu_icon').src = "open_menu.svg";
        document.getElementById('menu_icon').style.borderRadius = "0.4rem";
        document.getElementById('right_main').style.height = "90vh";
        document.getElementById('right_main').style.width = "100vw";
        //document.getElementById('menu_icon').style.backgroundColor = "#f8f8f800";
    }
}
