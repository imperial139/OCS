window.addEventListener("load", function() {
    setTimeout(
        function open(event) {
            document.querySelector(".popup").style.display = "block";
            // document.querySelector(".blur").style.display = "none";

        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".cta").style.display = "block";
    document.querySelector(".head").style.display = "block";

});

//  checkboc value  

// function checkCheckbox() {  
//     var a = document.getElementById("takenBefore1");  
//     var b = document.getElementById("takenBefore2");  
//     var c = document.getElementById("takenBefore3");  
//     var d = document.getElementById("takenBefore4");  
//     var e = document.getElementById("takenBefore5");  
//     var f = document.getElementById("takenBefore6");  
//     var i = document.getElementById("takenBefore7");  
//     var j = document.getElementById("takenBefore8");  
//     if (a.checked == true) {
//         document.getElementById('carp').style.color = 'red';
//       } else if ( ) {
//         greeting = "Good day";
//       } else {
//         greeting = "Good evening";
//       }
//   } 
// let element=document.getElementById("takenBefore1");
function ShowHideDiv() {
    var elmt = document.getElementsByClassName('checkbox');

    if (elmt[0].checked) {
        document.getElementById('text1').style.display = 'block';

    } else {
        document.getElementById('text1').style.display = 'none';
    }
    if (elmt[1].checked) {
        document.getElementById('text').style.display = 'block';

    } else {
        document.getElementById('text').style.display = 'none';
    }
    if (elmt[2].checked) {
        document.getElementById('text3').style.display = 'block';

    } else {
        document.getElementById('text3').style.display = 'none';
    }
    if (elmt[3].checked) {
        document.getElementById('text4').style.display = 'block';

    } else {
        document.getElementById('text4').style.display = 'none';
    }
    if (elmt[4].checked) {
        document.getElementById('text5').style.display = 'block';

    } else {
        document.getElementById('text5').style.display = 'none';
    }
    if (elmt[5].checked) {
        document.getElementById('text6').style.display = 'block';

    } else {
        document.getElementById('text6').style.display = 'none';
    }
    if (elmt[6].checked) {
        document.getElementById('text7').style.display = 'block';

    } else {
        document.getElementById('text7').style.display = 'none';
    }
    if (elmt[7].checked) {
        document.getElementById('text8').style.display = 'block';

    } else {
        document.getElementById('text8').style.display = 'none';
    }
    if (elmt[8].checked) {
        document.getElementById('text9').style.display = 'block';

    } else {
        document.getElementById('text9').style.display = 'none';
    }
    if (elmt[9].checked) {
        document.getElementById('text10').style.display = 'block';

    } else {
        document.getElementById('text10').style.display = 'none';
    }
    if (elmt[10].checked) {
        document.getElementById('text11').style.display = 'block';

    } else {
        document.getElementById('text11').style.display = 'none';
    }
    if (elmt[11].checked) {
        document.getElementById('text12').style.display = 'block';

    } else {
        document.getElementById('text12').style.display = 'none';
    }
    if (elmt[12].checked) {
        document.getElementById('text13').style.display = 'block';

    } else {
        document.getElementById('text13').style.display = 'none';
    }
    if (elmt[13].checked) {
        document.getElementById('text14').style.display = 'block';

    } else {
        document.getElementById('text14').style.display = 'none';
    }
    if (elmt[14].checked) {
        document.getElementById('text15').style.display = 'block';

    } else {
        document.getElementById('text15').style.display = 'none';
    }
    if (elmt[15].checked) {
        document.getElementById('text16').style.display = 'block';

    } else {
        document.getElementById('text16').style.display = 'none';
    }
    if (elmt[16].checked) {
        document.getElementById('text17').style.display = 'block';

    } else {
        document.getElementById('text17').style.display = 'none';
    }
    if (elmt[17].checked) {
        document.getElementById('text18').style.display = 'block';

    } else {
        document.getElementById('text18').style.display = 'none';
    }





}