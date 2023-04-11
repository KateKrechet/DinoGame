$(document).keydown(f1)

function f1() {
    if ($('#dino').classList !== 'jump') {
        $('#dino').addClass('jump')
    }
    setTimeout(
        function () {
            $('#dino').removeClass('jump')
        }, 1000)
}

//проверяет на столкновение с кактусом
function f2() {
    let kaktusleft = $('#kaktus').css('left')
    let dinotop = $('#dino').css('top')
    console.log(kaktusleft + '--' + dinotop)
    dinotop = Number(dinotop.slice(0, -2))
    console.log(dinotop)
    kaktusleft = Number(kaktusleft.slice(0, -2))
    console.log(kaktusleft)
    if (0 < kaktusleft && kaktusleft < 50 && dinotop > 330) {
        alert('Поздравляю! Ты испортил штаны!')
        location.reload()
    }
}

//проверяет на столкновение с птицей
function f3() {
    let birdleft = $('#bird').css('left')
    let dinotop = $('#dino').css('top')
    dinotop = Number(dinotop.slice(0, -2))
    birdleft = Number(birdleft.slice(0, -2))
    if (0 < birdleft && birdleft < 50 && dinotop < 270) {
        alert('Поздравляю! Теперь ты птичий корм!')
        location.reload()
    }
}

setInterval(f2, 10)
setInterval(f3, 10)