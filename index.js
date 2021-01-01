var opened = false;
var animations = [
    "blind", "bounce", "clip", "drop", "explode", "fade", "fold", "highlight", "puff", "pulsate", "scale", "shake", "size", "slide"
]
var gifts = $('.gift').click(giftOnClick);
$("#dial").dialog({
    autoOpen: false,
    resizable: false,
    width: "auto",
    height: "auto",
    modal: true,
    show: {
        effect: animations[Math.floor(Math.random() * animations.length)],
        duration: 1000
    },
    hide: {
        effect: animations[Math.floor(Math.random() * animations.length)],
        duration: 1000
    },
    buttons: {
        OK: function() {
            $( this ).dialog( "close" );
        }
    }
});

function giftOnClick() {
    $(this).off('click');
    $(this).addClass('opened');
    var text;
    if (!opened) {
        text = "Chúc bạn may mắn vào năm sau!";
        opened = true;
    } else {
        text = "Hẹn gặp lại sau hai năm";
    }
    $('.text').html(text);
    $("#dial").dialog("open");
}