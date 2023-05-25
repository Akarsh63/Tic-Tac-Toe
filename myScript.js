var a=0;
var j=0;
var choosen;
function start(clicked){
    document.getElementById('X').disabled =true;
    document.getElementById('O').disabled =true;
    document.getElementById(clicked).value="true";
    choosen=clicked;
    document.getElementById("O").style.cursor = "not-allowed";
    document.getElementById("X").style.cursor = "not-allowed";
    var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].style.cursor='pointer';
                elem[p].disabled=false;
            }
}
function clic(clicked) {
    j++;
    if (a==0){
        if (document.getElementById('X').value=="true"){
            document.getElementById(clicked).innerText='X';
            a++;
            document.getElementById(clicked).disabled =true;
        }
        else if (document.getElementById('O').value=="true"){
            document.getElementById(clicked).innerHTML='O';
            a++;
            document.getElementById(clicked).disabled =true;
        }
    }
    else if (a==1){
        if (document.getElementById('X').value=="false"){
            document.getElementById(clicked).innerHTML='X';
            a--; 
            document.getElementById(clicked).disabled =true;
        }
        else if (document.getElementById('O').value=="false"){
            document.getElementById(clicked).innerHTML='O';
            a--;
            document.getElementById(clicked).disabled =true;
        }
    }
        t=document.getElementById('1');
        b=document.getElementById('2');
        c=document.getElementById('3');
        d=document.getElementById('4');
        e=document.getElementById('5');
        f=document.getElementById('6');
        g=document.getElementById('7');
        h=document.getElementById('8');
        i=document.getElementById('9');
        if ((t.innerHTML=='X' && b.innerHTML=='X' && c.innerHTML=='X') || (t.innerHTML=='X' && d.innerHTML=='X' && g.innerHTML=='X')){ j=0;
            if (t.innerHTML=='X' && d.innerHTML=='X' && g.innerHTML=='X'){
                t.style.backgroundColor = "beige";
                d.style.backgroundColor = "beige";
                g.style.backgroundColor = "beige";
            }
            else{
               t.style.backgroundColor = "beige";
               b.style.backgroundColor = "beige";
               c.style.backgroundColor = "beige";
            }
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="X"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if ((t.innerHTML=='O' && b.innerHTML=='O' && c.innerHTML=='O') || (t.innerHTML=='O' && d.innerHTML=='O' && g.innerHTML=='O')){ j=0;
            if (t.innerHTML=='O' && d.innerHTML=='O' && g.innerHTML=='O'){
                 t.style.backgroundColor = "beige";
                 d.style.backgroundColor = "beige";
                 g.style.backgroundColor = "beige";
            }
            else{
                 b.style.backgroundColor = "beige";
                 t.style.backgroundColor = "beige";
                 c.style.backgroundColor = "beige";
            }
             var elem=document.getElementsByClassName("btn");
             for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="O"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if ((d.innerHTML=='X' && e.innerHTML=='X' && f.innerHTML=='X') || (b.innerHTML=='X' && e.innerHTML=='X' && h.innerHTML=='X')){ j=0;
            if (b.innerHTML=='X' && e.innerHTML=='X' && h.innerHTML=='X'){
                b.style.backgroundColor = "beige";
                e.style.backgroundColor = "beige";
                h.style.backgroundColor = "beige";
            }
            else{
               d.style.backgroundColor = "beige";
               e.style.backgroundColor = "beige";
               f.style.backgroundColor = "beige";
            }
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="X"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if ((d.innerText=='O' && e.innerHTML=='O' && f.innerHTML=='O') || (b.innerHTML=='O' && e.innerHTML=='O' && h.innerHTML=='O')){ j=0;
            if (b.innerHTML=='O' && e.innerHTML=='O' && h.innerHTML=='O'){
                b.style.backgroundColor = "beige";
                e.style.backgroundColor = "beige";
                h.style.backgroundColor = "beige";
            }
            else{
               d.style.backgroundColor = "beige";
               e.style.backgroundColor = "beige";
               f.style.backgroundColor = "beige";
            }
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="O"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
            
        }
        else if ((g.innerText=='X' && h.innerHTML=='X' && i.innerHTML=='X') || (c.innerHTML=='X' && f.innerHTML=='X' && i.innerHTML=='X')){ j=0;
            if (c.innerHTML=='X' && f.innerHTML=='X' && i.innerHTML=='X'){
                c.style.backgroundColor = "beige";
                f.style.backgroundColor = "beige";
                i.style.backgroundColor = "beige";
            }
            else{
               g.style.backgroundColor = "beige";
               h.style.backgroundColor = "beige";
               i.style.backgroundColor = "beige";
            }
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="X"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if ((g.innerText=='O' && h.innerHTML=='O' && i.innerHTML=='O') || (c.innerHTML=='O' && f.innerHTML=='O' && i.innerHTML=='O')){ j=0; 
            if (c.innerHTML=='O' && f.innerHTML=='O' && i.innerHTML=='O'){
                c.style.backgroundColor = "beige";
                f.style.backgroundColor = "beige";
                i.style.backgroundColor = "beige";
            }
            else{
               g.style.backgroundColor = "beige";
               h.style.backgroundColor = "beige";
               i.style.backgroundColor = "beige";
            }
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="O"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if (t.innerText=='X' && e.innerHTML=='X' && i.innerHTML=='X'){ j=0;
            t.style.backgroundColor = "beige";
            e.style.backgroundColor = "beige";
            i.style.backgroundColor = "beige";
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="X"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if (t.innerText=='O' && e.innerHTML=='O' && i.innerHTML=='O'){ j=0;
            t.style.backgroundColor = "beige";
            e.style.backgroundColor = "beige";
            i.style.backgroundColor = "beige";
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="O"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if (c.innerText=='X' && e.innerHTML=='X' && g.innerHTML=='X'){ j=0;
            c.style.backgroundColor = "beige";
            e.style.backgroundColor = "beige";
            g.style.backgroundColor = "beige";
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="X"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }  
        else if (c.innerText=='O' && e.innerHTML=='O' && g.innerHTML=='O'){
            c.style.backgroundColor = "beige";
            j=0;
            e.style.backgroundColor = "beige";
            g.style.backgroundColor = "beige";
            var elem=document.getElementsByClassName("btn");
            for(var p=0;p<elem.length;p++){
                elem[p].disabled=true;
                elem[p].style.cursor="not-allowed";
            }
            if (choosen=="O"){
                document.getElementById("tex").innerHTML="Player 1 Wins!";
            }
            else{
                document.getElementById("tex").innerHTML="Player 2 Wins!";
            }
        }
        else if (j==9){
            document.getElementById("tex").innerHTML="Match Is Draw!";
        }
}