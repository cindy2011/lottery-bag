$(function() {
	var sIndex=10;
    $(".change").click(function(event) {
        var speed = 90;
        var tx = { changeIn: null, changeOut: null,changeT:null };
        tx.changeOut = setInterval(function() {
            clearInterval(tx.changeIn);
            if (speed >= 100) {
                clearInterval(tx.changeOut);
                var cIndex=$(".pos4").attr("data-index");                
                tx.changeT=setInterval(function(){
                    changeFD();
                    if($(".pos4").attr("data-index")==sIndex){
                    	clearInterval(tx.changeT);
                    };
                }, speed);
            } else {
                speed += 1;
                //console.log(speed);
                tx.changeIn = setInterval(changeFD, speed);
            }
        }, 100);
    });

    function changeFD() {
        $(".gift").each(function() {
            var obj = $(this);
            if (obj.hasClass('pos4')) {
                obj.removeClass('pos4').addClass('pos3');
            } else if (obj.hasClass('pos3')) {
                obj.removeClass('pos3').addClass('pos2');
            } else if (obj.hasClass('pos2')) {
                obj.removeClass('pos2').addClass('pos1');
            } else if (obj.hasClass('pos1')) {
                obj.hide();
                obj.removeClass('pos1').addClass('pos10');
            } else if (obj.hasClass('pos5')) {
                obj.removeClass('pos5').addClass('pos4');
            } else if (obj.hasClass('pos6')) {
                obj.removeClass('pos6').addClass('pos5');
            } else if (obj.hasClass('pos7')) {
                obj.show();
                obj.removeClass('pos7').addClass('pos6');
            } else if (obj.hasClass('pos8')) {
                obj.show();
                obj.removeClass('pos8').addClass('pos7');
            } else if (obj.hasClass('pos9')) {
                obj.show();
                obj.removeClass('pos9').addClass('pos8');
            } else if (obj.hasClass('pos10')) {
                obj.show();
                obj.removeClass('pos10').addClass('pos9');
            }
        });
    }
})
