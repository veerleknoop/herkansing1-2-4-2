const toggleModal = () => {
    document.querySelector('.modal')
        .classList.toggle('modal--hidden')

};
document.querySelector('.watch-trailer')
    .addEventListener('click', openModal);

function openModal() {
    var myPlayer = videojs('my-video1');
    myPlayer.play();
    $(".modal").removeClass('modal--hidden')
    console.log("openModal")

}

function closeModal() {
    var myPlayer = videojs('my-video1');
    myPlayer.pause();
    $(".modal").addClass('modal--hidden')
    console.log("closeModal")
}

document.querySelector('.modal-close span')
    .addEventListener('click', closeModal);




var a;

function show_hide() {
    if (a == 1) {
        document.getElementById("nav").style.display = "inline";
        return a = 0;
    } else document.getElementById("nav").style.display = "none";
    return a = 1;
}


$(document).ready(function() {
    $(".video-player").click(function(e) {
        var currentSelector = $(this);
        currentSelector.addClass('player-active');

        $('.video-player').each(function(index, item) {
            var playerSelector = $(item);

            if (!currentSelector.is(playerSelector)) {
                playerSelector.removeClass('player-active');
                playerSelector.find('video')[0].pause();
            }
        });
    });
});

$('.video-js').each(function() {

    var player = videojs(this.id);
    var parent = $(this).parents('.video-player');
    var forward = parent.find('.video-forward')


    $(forward).click(function() {
        var time = player.currentTime();
        player.currentTime(time + 10);
    })
});

$('.video-js').each(function() {

    var player = videojs(this.id);
    var parent = $(this).parents('.video-player');
    var play = parent.find('.video-play-btn')

    $(play).click(function() {
        if (player.paused()) {
            player.play();
        } else {
            player.pause();
        }
    })

});
$(function() {
    $("#tabs").tabs();
});