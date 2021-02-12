var animations = [
    "blind", "bounce", "clip", "drop", "explode", "fade", "fold", "highlight", "puff", "pulsate", "scale", "shake", "size", "slide"
]

var listWishes = [
    "Chúc mừng năm Tân Sửu 2021, chúc mừng nhiều may mắn mới, chúc cho một năm thành công, thắng lợi.",
    "Chúc bạn và gia đình năm mới An khang thịnh vượng, tài lộc đầy nhà, con cháu sum vầy, một năm bình an và sung túc.",
    "Chúc bạn một năm mới hạnh phúc với hy vọng bạn sẽ có nhiều phước lành trong năm tới.",
    "Năm cũ đi qua, năm mới đã đến, chúc bạn có một năm tràn ngập bình an, hạnh phúc, may mắn và vui vẻ. Happy New Year!",
    "Đêm sẽ tối, ngày sẽ sáng, chúc bạn có cuộc sống luôn tươi sáng, gặp nhiều may mắn và thành công. Chúc mừng năm mới.",
    "Hãy để năm cũ kết thúc và năm mới bắt đầu với những khát vọng, những mục tiêu mới. Chúc mừng năm mới.",
    "Hy vọng năm mới của bạn có nhiều hạnh phúc mới, mục tiêu, thành tựu mới và có nhiều cảm hứng mới về cuộc sống. Chúc bạn một năm tràn ngập hạnh phúc.",
    "Chúc bạn mỗi ngày của năm mới đều tràn đầy thành công, hạnh phúc và thịnh vượng. Happy New Year!.",
    "Chúc bạn một năm mới tràn ngập niềm vui, có một năm mới hạnh phúc.",
    "Năm mới mang đến hy vọng, quyết tâm, tinh thần và những mong muốn. Chúc bạn có một năm đầy hứa hẹn và trọn vẹn.",
    "Có thể những niềm vui của năm mới kéo dài mãi mãi trong cuộc sống của bạn. Có thể bạn sẽ tìm thấy được ánh sáng dẫn bạn đến thành công, cái đích mà bạn mong muốn. Chúc mừng năm mới.",
    "Hãy cùng vẫy tay tạm biệt năm cũ, đón nhận năm mới với nhiều ước mơ, hoài bão và cả hy vọng. Chúc bạn năm mới tràn ngập niềm vui và hạnh phúc.",
    "Hy vọng cuộc sống của bạn sẽ đầy bất ngờ, niềm vui trong năm mới. Bạn sẽ được ban phước với mọi thứ mà bạn muốn trong cuộc sống.",
    "Hy vọng mới, kế hoạch mới, hiệu quả mới, cảm nhận mới, cam kết mới. Chào mừng năm 2021 với một thái độ tươi mới. Happy New Year!",
    "Chúc mừng năm mới. Chúc cho bạn một năm mọi mục tiêu, mong muốn đều được thực hiện.",
    "Chúc mừng năm mới. Chúc bạn một năm suôn sẻ, hạnh phúc, không ưu phiền.",
    "Tết đến, xuân về, an khang thịnh vượng, phát tài phát lộc, sức khỏe dồi dào, mọi điều như ý."
]

var opened = false;
var text = listWishes[Math.ceil(Math.random() * listWishes.length) - 1];
var gifts = $('.gift').click(giftOnClick);
text = "Chúc bạn sớm hết viêm màng túi và sớm có gấu!"
$('.text').html(text);

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
    $('.gift').off('click');
    $('.gift').addClass('opened');

    $(this).click(giftOnClick);
    $(this).removeClass('opened');

    $("#dial").dialog("open");
}
