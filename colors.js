function LinkSetColor(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color',color);
}
var Body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    }
}
function bgHandler(self){
    var target = document.querySelector('body');

    if(self.value === 'night'){
    target.style.backgroundColor = 'grey';
    Body.setColor('white');
    self.value = 'day';

    LinkSetColor('powderblue');
    } 
    else {
    target.style.backgroundColor = 'white';
    Body.setColor('black');
    self.value = 'night';

    LinkSetColor('blue');
    }
}