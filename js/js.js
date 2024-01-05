let _background = document.querySelectorAll('.background')
let _background1 = document.getElementById('background1')
let _background2 = document.getElementById('background2')
let _background3 = document.getElementById('background3')
const bg = ['bg-neutral-300', 'bg-img-1', 'bg-img-2', 'bg-img-3', 'bg-img-4', 'bg-img-5']
// *****
let _write = document.getElementsByClassName('write')
let _box = document.getElementById('box')
let _text = document.getElementById('text')
let _text1 = document.getElementById('text1')
// ****start accordion
_click1 = document.querySelectorAll('.click-1')
_icon1 = document.querySelectorAll('.icon1')
_ul1 = document.querySelectorAll('.ul1')

// ****start CSS Transform
let _clickWrite1 = document.getElementById('clickWrite1')
let _line1 = document.querySelectorAll('.line1')
let _line11 = document.getElementsByClassName('line11')
let _wr1 = document.getElementsByClassName('wr1')
let _bg1 = document.querySelectorAll('.bg1')
// ****end CSS Transform

// **** start Alpha (RGBA)
let _clickWrite2 = document.getElementById('clickWrite2')
let _clickSelect1 = document.getElementById('clickSelect1')
let _color = document.getElementById('color')
let _clickColor = document.getElementById('clickColor')
let _select1 = document.querySelectorAll('.select1')
// **** end Alpha (RGBA)

// ****start Gradient
let _clickWrite3 = document.getElementById('clickWrite3')
let _clickSelect2 = document.getElementById('clickSelect2')
let _select2 = document.querySelectorAll('.select2')
let _Linear = document.getElementById('Linear')
let _lineLinear = document.querySelectorAll('.lineLinear')
let _line11Linear = document.getElementsByClassName('line11Linear')
let _lineRadial = document.querySelectorAll('.lineRadial')
let _line11Radial = document.getElementsByClassName('line11Radial')
let _Radial = document.getElementsByClassName('Radial')
let _lineConic = document.querySelectorAll('.lineConic')
let _line11Conic = document.getElementsByClassName('line11Conic')
let _Conic = document.getElementsByClassName('Conic')
let _wr2 = document.getElementsByClassName('wr2')

let _colorGradient1 = document.getElementById('colorGradient1')
let _clickColorGradient1 = document.getElementById('clickColorGradient1')
let _colorGradient2 = document.getElementById('colorGradient2')
let _clickColorGradient2 = document.getElementById('clickColorGradient2')
let _line2 = document.querySelectorAll('.line2')
let _line21 = document.getElementsByClassName('line21')
let _wr2Gradient = document.getElementsByClassName('wr2Gradient')
// ****end Gradient

// ****start border
let _clickWrite4 = document.getElementById('clickWrite4')
let _clickSelect3 = document.getElementById('clickSelect3')
let _select3 = document.querySelectorAll('.select3')
let _line3 = document.querySelectorAll('.line3')
let _line31 = document.getElementsByClassName('line31')
let _wr2Border = document.getElementsByClassName('wr2Border')
let _colorBorder = document.getElementById('colorBorder')
let _clickColorBorder = document.getElementById('clickColorBorder')
// ****end border

// start box shadow
let _clickWrite5 = document.getElementById('clickWrite5')
let _clickSelect4 = document.getElementById('clickSelect4')
let _select4 = document.querySelectorAll('.select4')
let _lineBoxShadow = document.querySelectorAll('.lineBoxShadow')
let _line11boxShadow = document.getElementsByClassName('line11boxShadow')
let _wrBoxShadow = document.getElementsByClassName('wrBoxShadow')
let _colorBoxShadow = document.getElementById('colorBoxShadow')
let _clickColorBoxShadow = document.getElementById('clickColorBoxShadow')
// end box shadow

// start filter
let _clickWrite6 = document.getElementById('clickWrite6')
let _clickSelect5 = document.getElementById('clickSelect5')
let _select5 = document.querySelectorAll('.select5')
let _lineFilter = document.querySelectorAll('.lineFilter')
let _line11Filter = document.getElementsByClassName('line11Filter')
let _wrFilter = document.getElementsByClassName('wrFilter')
// end filter

// start font face
let _clickWrite7 = document.getElementById('clickWrite7')
let _clickSelect6 = document.getElementById('clickSelect6')
let _select6 = document.querySelectorAll('.select6')
let _clickSelect7 = document.getElementById('clickSelect7')
let _select7 = document.querySelectorAll('.select7')
let _clickSelect8 = document.getElementById('clickSelect8')
let _select8 = document.querySelectorAll('.select8')
let _lineFont = document.querySelectorAll('.lineFont')
let _line11Font = document.getElementsByClassName('line11Font')
let _wrFont = document.getElementsByClassName('wrFont')
let _demoText=document.getElementById('demoText')
// end font face

// start text shadow
let _clickWrite8 = document.getElementById('clickWrite8')
let _lineTextShadow = document.querySelectorAll('.lineTextShadow')
let _line11TextShadow = document.getElementsByClassName('line11TextShadow')
let _wrTextShadow = document.getElementsByClassName('wrTextShadow')
let _colorTextShadow = document.getElementById('colorTextShadow')
let _clickColorTextShadow = document.getElementById('clickColorTextShadow')
// end text shadow

// start text rotation
let _clickWrite9 = document.getElementById('clickWrite9')
let _lineTextRotation = document.querySelectorAll('.lineTextRotation')
let _line11TextRotation = document.getElementsByClassName('line11TextRotation')
let _wrTextRotation = document.getElementsByClassName('wrTextRotation')
// end text rotation

// ****end accordion
// ****start background
_background2.addEventListener('click', () => {
    _background3.classList.remove('hidden')
})
_background.forEach((val) => {
    val.addEventListener('click', (e) => {
        _background3.classList.add('hidden')
        switch (val) {
            case _background[0]:
                for (let i = 0; i <= bg.length; i++) {
                    if (i != 0) {
                        _background1.classList.remove(bg[i])
                    } else {
                        _background1.classList.add(bg[0])
                    }
                }
                _background2.innerHTML = 'None'
                _background2.style.color = 'black';
                break;
            case _background[1]:
                for (let i = 0; i <= bg.length; i++) {
                    if (i != 1) {
                        _background1.classList.remove(bg[i])
                    } else {
                        _background1.classList.add(bg[1])
                    }
                }
                _background2.innerHTML = 'Spiral'
                _background2.style.color = 'black'
                break;
            case _background[2]:
                for (let i = 0; i <= bg.length; i++) {
                    if (i != 2) {
                        _background1.classList.remove(bg[i])
                    } else {
                        _background1.classList.add(bg[2])
                    }
                }
                _background2.innerHTML = 'Shapes'
                _background2.style.color = 'black'
                break;
            case _background[3]:
                for (let i = 0; i <= bg.length; i++) {
                    if (i != 3) {
                        _background1.classList.remove(bg[i])
                    } else {
                        _background1.classList.add(bg[3])
                    }
                }
                _background2.innerHTML = 'Labyrinth'
                _background2.style.color = 'black'
                break;
            case _background[4]:
                for (let i = 0; i <= bg.length; i++) {
                    if (i != 4) {
                        _background1.classList.remove(bg[i])
                    } else {
                        _background1.classList.add(bg[4])
                    }
                }
                _background2.innerHTML = 'Forest'
                _background2.style.color = 'black'
                break;
            case _background[5]:
                for (let i = 0; i <= bg.length; i++) {
                    if (i != 5) {
                        _background1.classList.remove(bg[i])
                    } else {
                        _background1.classList.add(bg[5])
                    }
                }
                _background2.innerHTML = 'Colors'
                _background2.style.color = 'black'
                break;
        }
    })
})
// ****end background

// ****start CSS accordion
_click1.forEach((val, i) => {
    val.addEventListener("click", () => {
        if (val.getAttribute('data-status') == 'on') {
            _icon1[i].style.transform = 'rotate(0deg)'
            _ul1[i].style.height = 0
            val.setAttribute('data-status', 'off')
        } else {
            _icon1[i].style.transform = 'rotate(180deg)'
            _ul1[0].style.height = 400 + 'px'
            _ul1[1].style.height = 220 + 'px'
            _ul1[2].style.height = 650 + 'px'
            _ul1[3].style.height = 500 + 'px'
            _ul1[4].style.height = 450 + 'px'
            _ul1[5].style.height = 450 + 'px'
            _ul1[6].style.height = 500 + 'px'
            _ul1[7].style.height = 300 + 'px'
            _ul1[8].style.height = 150 + 'px'
            val.setAttribute('data-status', 'on')
        }
        w1++
        for (let k = 0; k <= _click1.length; k++) {
            if (i != k) {
                _icon1[k].style.transform = 'rotate(0deg)'
                _ul1[k].style.height = 0
                _click1[k].setAttribute('data-status', 'off')
            }
        }

    })
})
// ****end CSS accordion

// ****start CSS Transform
let w1 = 1
_clickWrite1.addEventListener('click', () => {
    let child = _clickWrite1.children
    let p = _clickWrite1.parentElement.previousElementSibling.children
    if (w1 % 2) {
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[0].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[1].classList.remove('hidden')
        _li1()
        _li2()
        _li3()
        _li4()
        _li5()
        _li6()
        _li7()
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[0].classList.add('hidden')
        _write[0].classList.add('hidden')
        _write[1].classList.add('hidden')
    }
    w1++
})
let d1 = 0
let d2 = 0
let d3 = 0
let d4 = 0
let d5 = 0

function _li1() {
    _line1[0].addEventListener('mousedown', (e) => {
        if (d1 == 0) {
            _write[2].classList.add('hidden')
        } else {
            _write[2].classList.remove('hidden')

        }
        para(e)
        _line1[0].addEventListener('mousemove', para)
    })
    _line1[0].addEventListener('mouseup', () => {
        _line1[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        console.log(width)
        w1 = width / (307 / 100)
        _line11[0].setAttribute('data-w', w1)
        w2 = _line11[0].getAttribute('data-w')
        _line11[0].style.width = w2 + "%"
        r = Math.floor(w2 * 3.6)
        _write[3].innerHTML = r
        _wr1[0].innerHTML = r
        _box.style.rotate = r + 'deg'
        d1 = w2
    }
}

function _li2() {
    _line1[1].addEventListener('mousedown', (e) => {
        if (d2 == 1) {
            _write[6].classList.add('hidden')
        } else {
            _write[6].classList.remove('hidden')

        }
        para(e)
        _line1[1].addEventListener('mousemove', para)
    })
    _line1[1].addEventListener('mouseup', () => {
        _line1[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11[1].setAttribute('data-w', w1)
        w2 = _line11[1].getAttribute('data-w')
        _line11[1].style.width = w2 + "%"
        r1 = w2 * .03
        r=r1.toFixed(2)
        _write[7].innerHTML = r
        _wr1[1].innerHTML = r
        _box.classList.add('scale-x-[' + r + ']')
        d2 = r
    }
}

function _li3() {
    _line1[2].addEventListener('mousedown', (e) => {
        if (d3 == 1) {
            _write[6].classList.add('hidden')
        } else {
            _write[6].classList.remove('hidden')
        }
        para(e)
        _line1[2].addEventListener('mousemove', para)
    })
    _line1[2].addEventListener('mouseup', () => {
        _line1[2].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307/ 100)
        _line11[2].setAttribute('data-w', w1)
        w2 = _line11[2].getAttribute('data-w')
        _line11[2].style.width = w2 + "%"
        r1 = w2 * .03
        r=r1.toFixed(2)
        _write[8].innerHTML = r
        _wr1[2].innerHTML = r
        _box.classList.add('scale-y-[' + r + ']')
        d3 = r
    }
}

function _li4() {
    _line1[3].addEventListener('mousedown', (e) => {
        if (d4 == 0) {
            _write[9].classList.add('hidden')
        } else {
            _write[9].classList.remove('hidden')
        }
        para(e)
        _line1[3].addEventListener('mousemove', para)
    })
    _line1[3].addEventListener('mouseup', () => {
        _line1[3].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11[3].setAttribute('data-w', w1)
        w2 = _line11[3].getAttribute('data-w')
        _line11[3].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _wr1[3].innerHTML = r
        _write[10].innerHTML = r
        _box.classList.add('skew-x-[' + r + 'deg]')
        d4 = r
    }
}

function _li5() {
    _line1[4].addEventListener('mousedown', (e) => {
        if (d5 == 0) {
            _write[9].classList.add('hidden')
        } else {
            _write[9].classList.remove('hidden')
        }
        para(e)
        _line1[4].addEventListener('mousemove', para)
    })
    _line1[4].addEventListener('mouseup', () => {
        _line1[4].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11[4].setAttribute('data-w', w1)
        w2 = _line11[4].getAttribute('data-w')
        _line11[4].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _wr1[4].innerHTML = r
        _write[11].innerHTML = r
        _box.classList.add('skew-y-[' + r + 'deg]')
        d5 = r
    }
}

function _li6() {
    _line1[5].addEventListener('mousedown', (e) => {
        para(e)
        _line1[5].addEventListener('mousemove', para)
    })
    _line1[5].addEventListener('mouseup', () => {
        _line1[5].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11[5].setAttribute('data-w', w1)
        w2 = _line11[5].getAttribute('data-w')
        _line11[5].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _wr1[5].innerHTML = r
        _write[4].innerHTML = r
        _box.classList.add('translate-x-[' + r + 'px]')

    }
}

function _li7() {
    _line1[6].addEventListener('mousedown', (e) => {
        para(e)
        _line1[6].addEventListener('mousemove', para)
    })
    _line1[6].addEventListener('mouseup', () => {
        _line1[6].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11[6].setAttribute('data-w', w1)
        w2 = _line11[6].getAttribute('data-w')
        _line11[6].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _wr1[6].innerHTML = r
        _write[5].innerHTML = r
        _box.classList.add('translate-y-[' + r + 'px]')
        d4 = r
    }
}
// ****end CSS Transform

// **** start Alpha (RGBA)
let p2 = 1
let g1=0
_clickWrite2.addEventListener('click', () => {
    let child = _clickWrite2.children
    let p = _clickWrite2.parentElement.previousElementSibling.children
    if (p2 % 2) {
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[1].classList.remove('hidden')
        _write[0].classList.remove('hidden')

    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[1].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p2++
})

_clickSelect1.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select1.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')
            _write[1].classList.add('hidden')
            switch (val) {
                case _select1[0]:
                    _clickSelect1.style.color = 'black'
                    _clickSelect1.innerHTML = 'color';
                    _write[14].classList.remove('hidden')
                    _select1[0].setAttribute('data-status', 'on')
                    _select1[1].setAttribute('data-status', 'off')
                    color5()
                    break;
                case _select1[1]:
                    _write[12].classList.remove('hidden')
                    _clickSelect1.style.color = 'black'
                    _clickSelect1.innerHTML = 'background'
                    _select1[0].setAttribute('data-status', 'off')
                    _select1[1].setAttribute('data-status', 'on')
                    color5()
                    break;
            }

        })
    })
})

_clickColor.addEventListener('click', () => {
    g = _color.value
    g1=g
    color5()
})
function color5(){
    if (_select1[0].getAttribute('data-status') == 'on') {
        _clickSelect1.classList = 'black'
        _box.classList.add('text-[' + g1 + ']')
        _write[15].innerHTML = g1
    } else if (
        _select1[1].getAttribute('data-status') == 'on'
    ) {
        _box.classList.add('bg-[' + g1 + ']')
        _write[13].innerHTML = g1
    }
}

// **** end Alpha (RGBA)

// ****start Gradient
let p3 = 0
_clickWrite3.addEventListener('click', () => {
    let child = _clickWrite3.children
    let p = _clickWrite3.parentElement.previousElementSibling.children
    if (p3 % 2) {
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[2].classList.remove('hidden')
        _write[0].classList.remove('hidden')

    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[2].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})

_clickSelect2.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select2.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')
            _write[1].classList.add('hidden')
            _write[16].classList.remove('hidden')
            _li1line2()
            _li2line2()
            switch (val) {
                case _select2[0]:
                    _clickSelect2.style.color = 'black'
                    _clickSelect2.innerHTML = 'Linear';
                    _Linear.classList.remove('hidden')
                    _write[17].innerHTML = 'linear'
                    _write[18].classList.remove('hidden')
                    _write[20].classList.add('hidden')
                    _write[25].classList.add('hidden')
                    _select2[0].setAttribute('data-status', 'on')
                    _select2[1].setAttribute('data-status', 'off')
                    _select2[2].setAttribute('data-status', 'off')
                    _li3linear()
                    for (let i = 0; i < _Radial.length; i++) {
                        _Radial[i].classList.add('hidden')
                    }
                    for (let i = 0; i < _Conic.length; i++) {
                        _Conic[i].classList.add('hidden')
                    }
                    break;
                case _select2[1]:
                    _clickSelect2.style.color = 'black'
                    _clickSelect2.innerHTML = 'Radial'
                    _Linear.classList.add('hidden')
                    _write[17].innerHTML = 'radial'
                    _write[18].classList.add('hidden')
                    _write[20].classList.remove('hidden')
                    _write[25].classList.add('hidden')
                    _select2[1].setAttribute('data-status', 'on')
                    _select2[0].setAttribute('data-status', 'off')
                    _select2[2].setAttribute('data-status', 'off')
                    _li3Radial1()
                    _li3Radial2()
                    _li3Radial3()
                    _li3Radial4()
                    for (let i = 0; i < _Radial.length; i++) {
                        _Radial[i].classList.remove('hidden')
                    }
                    for (let i = 0; i < _Conic.length; i++) {
                        _Conic[i].classList.add('hidden')
                    }

                    break;
                case _select2[2]:
                    _clickSelect2.style.color = 'black'
                    _clickSelect2.innerHTML = 'Conic'
                    _Linear.classList.add('hidden')
                    _write[17].innerHTML = 'conic'
                    _write[18].classList.add('hidden')
                    _write[20].classList.add('hidden')
                    _write[25].classList.remove('hidden')
                    _select2[2].setAttribute('data-status', 'on')
                    _select2[0].setAttribute('data-status', 'off')
                    _select2[1].setAttribute('data-status', 'off')
                    _li3Conic1()
                    _li3Conic2()
                    _li3Conic3()
                    for (let i = 0; i < _Radial.length; i++) {
                        _Radial[i].classList.add('hidden')
                    }
                    for (let i = 0; i < _Conic.length; i++) {
                        _Conic[i].classList.remove('hidden')
                    }
                    break;
            }

        })
    })
})


let d6 = 0
let d7 = 0
let d8 = 0
let d9 = 0
let d10 = 0
let d11 = 0
let d12 = 0
let d13 = 0
let d14 = 0
let d15 = 0
let d16 = 0
let d17 = 0

function _li3linear() {
    _lineLinear[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineLinear[0].addEventListener('mousemove', para)
    })
    _lineLinear[0].addEventListener('mouseup', () => {
        send()
        _lineLinear[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Linear[0].setAttribute('data-w', w1)
        w2 = _line11Linear[0].getAttribute('data-w')
        _line11Linear[0].style.width = w2 + "%"
        r = Math.floor(w2 * 3.6)
        _write[19].innerHTML = r
        _wr2[0].innerHTML = r
        d6 = r
        send()
    }
}

function _li3Radial1() {
    _lineRadial[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineRadial[0].addEventListener('mousemove', para)
    })
    _lineRadial[0].addEventListener('mouseup', () => {
        send()
        _lineRadial[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Radial[0].setAttribute('data-w', w1)
        w2 = _line11Radial[0].getAttribute('data-w')
        _line11Radial[0].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _write[23].innerHTML = r
        _wr2[1].innerHTML = r
        d11 = r
        send()
    }
}

function _li3Radial2() {
    _lineRadial[1].addEventListener('mousedown', (e) => {
        para(e)
        _lineRadial[1].addEventListener('mousemove', para)
    })
    _lineRadial[1].addEventListener('mouseup', () => {
        send()
        _lineRadial[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Radial[1].setAttribute('data-w', w1)
        w2 = _line11Radial[1].getAttribute('data-w')
        _line11Radial[1].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _write[24].innerHTML = r
        _wr2[2].innerHTML = r
        d12 = r
        send()
    }
}

function _li3Radial3() {
    _lineRadial[2].addEventListener('mousedown', (e) => {
        para(e)
        _lineRadial[2].addEventListener('mousemove', para)
    })
    _lineRadial[2].addEventListener('mouseup', () => {
        send()
        _lineRadial[2].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Radial[2].setAttribute('data-w', w1)
        w2 = _line11Radial[2].getAttribute('data-w')
        _line11Radial[2].style.width = w2 + "%"
        r = Math.floor(w2 * 3)
        _write[21].innerHTML = r
        _wr2[3].innerHTML = r
        d13 = r
        send()
    }
}

function _li3Radial4() {
    _lineRadial[3].addEventListener('mousedown', (e) => {
        para(e)
        _lineRadial[3].addEventListener('mousemove', para)
    })
    _lineRadial[3].addEventListener('mouseup', () => {
        send()
        _lineRadial[3].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Radial[3].setAttribute('data-w', w1)
        w2 = _line11Radial[3].getAttribute('data-w')
        _line11Radial[3].style.width = w2 + "%"
        r = Math.floor(w2 * 3)
        _write[22].innerHTML = r
        _wr2[4].innerHTML = r
        d14 = r
        send()
    }
}

function _li3Conic1() {
    _lineConic[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineConic[0].addEventListener('mousemove', para)
    })
    _lineConic[0].addEventListener('mouseup', () => {
        send()
        _lineConic[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Conic[0].setAttribute('data-w', w1)
        w2 = _line11Conic[0].getAttribute('data-w')
        _line11Conic[0].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _write[27].innerHTML = r
        _wr2[5].innerHTML = r
        d15 = r
        send()
    }
}

function _li3Conic2() {
    _lineConic[1].addEventListener('mousedown', (e) => {
        para(e)
        _lineConic[1].addEventListener('mousemove', para)
    })
    _lineConic[1].addEventListener('mouseup', () => {
        send()
        _lineConic[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Conic[1].setAttribute('data-w', w1)
        w2 = _line11Conic[1].getAttribute('data-w')
        _line11Conic[1].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _write[28].innerHTML = r
        _wr2[6].innerHTML = r
        d16 = r
        send()
    }
}

function _li3Conic3() {
    _lineConic[2].addEventListener('mousedown', (e) => {
        para(e)
        _lineConic[2].addEventListener('mousemove', para)
    })
    _lineConic[2].addEventListener('mouseup', () => {
        send()
        _lineConic[2].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Conic[2].setAttribute('data-w', w1)
        w2 = _line11Conic[2].getAttribute('data-w')
        _line11Conic[2].style.width = w2 + "%"
        r = Math.floor(w2 * 3.6)
        _write[26].innerHTML = r
        _wr2[7].innerHTML = r
        d17 = r
        send()
    }
}
_clickColorGradient1.addEventListener('click', () => {
    g = _colorGradient1.value
    _write[29].innerHTML = g
    d9 = g
    send()
})

_clickColorGradient2.addEventListener('click', () => {
    g = _colorGradient2.value
    _write[31].innerHTML = g
    d10 = g
    send()
})

function _li1line2() {
    _line2[0].addEventListener('mousedown', (e) => {
        para(e)
        _line2[0].addEventListener('mousemove', para)
    })
    _line2[0].addEventListener('mouseup', () => {
        send()
        _line2[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line21[0].setAttribute('data-w', w1)
        w2 = _line21[0].getAttribute('data-w')
        _line21[0].style.width = w2 + "%"
        r = Math.floor(w2)
        _write[30].innerHTML = r
        _wr2Gradient[0].innerHTML = r
        d7 = r
        send()
    }
    d7 = d7
}

function _li2line2() {
    _line2[1].addEventListener('mousedown', (e) => {
        para(e)
        _line2[1].addEventListener('mousemove', para)
    })
    _line2[1].addEventListener('mouseup', () => {
        _line2[1].removeEventListener('mousemove', para)
        send()
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line21[1].setAttribute('data-w', w1)
        w2 = _line21[1].getAttribute('data-w')
        _line21[1].style.width = w2 + "%"
        r = Math.floor(w2)
        _write[32].innerHTML = r
        _wr2Gradient[1].innerHTML = r
        d8 = r
        send()
    }
    d8 = d8
}

function send() {
    if (_select2[0].getAttribute('data-status') == 'on') {
        _box.style.background = 'linear-gradient(' + d6 + 'deg,' + d9 + ' ' + d7 + '%,' + d10 + ' ' + d8 + '%)'
    } else if (
        _select2[1].getAttribute('data-status') == 'on'
    ) {
        _box.style.background = 'radial-gradient(' + d13 + '% ' + d14 + '% at ' + d11 + '% ' + d12 + '%,' + d9 + ' ' + d7 + '%,' + d10 + ' ' + d8 + '%)'
    } else if (
        _select2[2].getAttribute('data-status') == 'on'
    ) {
        _box.style.background = 'conic-gradient(from ' + d17 + 'deg at ' + d16 + '% ' + d15 + '%,' + d9 + ' ' + d7 + '%,' + d10 + ' ' + d8 + '%)'

    }

}

// ****end Gradient

// ****start border
const x = ['none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']
let d18 = 0
let d19 = 0
let d20 = 0
let d21 = 0
_clickWrite4.addEventListener('click', () => {
    let child = _clickWrite4.children
    let p = _clickWrite4.parentElement.previousElementSibling.children
    if (p3 % 2) {
        _li3border1()
        _li3border2()
        send2()
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[3].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[33].classList.remove('hidden')
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[3].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})

_clickSelect3.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select3.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')

            switch (val) {

                case _select3[0]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'none';
                    _write[35].innerHTML = 'none'
                    x.forEach((val, i) => {
                        if (i != 0)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 0) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[1]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'dotted'
                    _write[35].innerHTML = 'dotted'

                    x.forEach((val, i) => {
                        if (i != 1)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 1) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[2]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'dashed'
                    _write[35].innerHTML = 'dashed'
                    x.forEach((val, i) => {
                        if (i != 2)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 2) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[3]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'solid'
                    _write[35].innerHTML = 'solid'
                    x.forEach((val, i) => {
                        if (i != 3)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 3) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[4]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'double'
                    _write[35].innerHTML = 'double'
                    x.forEach((val, i) => {
                        if (i != 4)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 4) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[5]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'groove'
                    _write[35].innerHTML = 'groove'
                    x.forEach((val, i) => {
                        if (i != 5)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 5) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[6]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'ridge'
                    _write[35].innerHTML = 'ridge'
                    x.forEach((val, i) => {
                        if (i != 6)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 6) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[7]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = 'inset'
                    _write[35].innerHTML = 'inset'
                    x.forEach((val, i) => {
                        if (i != 7)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 7) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select3[8]:
                    _clickSelect3.style.color = 'black'
                    _clickSelect3.innerHTML = ' outset'
                    _write[35].innerHTML = 'outset'
                    x.forEach((val, i) => {
                        if (i != 8)
                            _box.classList.remove('[border-style:' + x[i] + ';]')
                    })
                    send2()
                    for (let i = 0; i < _select3.length; i++) {
                        if (i != 8) {
                            _select3[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
            }
        })
    })
})

function _li3border1() {
    _line3[0].addEventListener('mousedown', (e) => {
        para(e)
        _line3[0].addEventListener('mousemove', para)
    })
    _line3[0].addEventListener('mouseup', () => {
        send2()
        _line3[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line31[0].setAttribute('data-w', w1)
        w2 = _line31[0].getAttribute('data-w')
        _line31[0].style.width = w2 + "%"
        r = Math.floor(w2)
        _write[37].innerHTML = r
        _wr2Border[0].innerHTML = r
        d18 = r
        send2()
    }
}

function _li3border2() {
    _line3[1].addEventListener('mousedown', (e) => {
        para(e)
        _line3[1].addEventListener('mousemove', para)
    })
    _line3[1].addEventListener('mouseup', () => {
        send2()
        _line3[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line31[1].setAttribute('data-w', w1)
        w2 = _line31[1].getAttribute('data-w')
        _line31[1].style.width = w2 + "%"
        r = Math.floor(w2)
        _write[34].innerHTML = r
        _wr2Border[1].innerHTML = r
        d19 = r
        send2()
    }
}
_clickColorBorder.addEventListener('click', () => {
    g = _colorBorder.value
    _write[36].innerHTML = g
    d20 = g
    send2()
})

function send2() {
    _box.classList.add('border-[' + d19 + 'px]')
    _box.classList.add('rounded-[' + d18 + 'px]')
    _box.classList.add('border-[' + d20 + ']')
    style = _write[35].innerHTML
    _box.classList.add('[border-style:' + style + ';]')
    d21 = style
}

// ****end border

// start box shadow
let d22 = 0
let d23 = 0
let d24 = 0
let d25 = 0
let d26 = 0
let d27 = 0
_clickWrite5.addEventListener('click', () => {
    let child = _clickWrite5.children
    let p = _clickWrite5.parentElement.previousElementSibling.children
    if (p3 % 2) {
        // send3()
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[4].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[38].classList.remove('hidden')
        _li1boxShadow()
        _li2boxShadow()
        _li3boxShadow()
        _li4boxShadow()
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[4].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})
_clickSelect4.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select4.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')
            _write[1].classList.add('hidden')
            switch (val) {
                case _select4[0]:
                    _clickSelect4.style.color = 'black'
                    _clickSelect4.innerHTML = 'inset';
                    _write[39].innerHTML = ''
                    _select4[0].setAttribute('data-status', 'on')
                    _select4[1].setAttribute('data-status', 'off')
                    send3()
                    break;
                case _select4[1]:
                    _clickSelect4.style.color = 'black'
                    _clickSelect4.innerHTML = 'outset'
                    _write[39].innerHTML = _clickSelect4.innerHTML
                    _select4[1].setAttribute('data-status', 'on')
                    _select4[0].setAttribute('data-status', 'off')
                    send3()
                    break;
            }
        })
    })
})

function _li1boxShadow() {
    _lineBoxShadow[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineBoxShadow[0].addEventListener('mousemove', para)
    })
    _lineBoxShadow[0].addEventListener('mouseup', () => {

        _lineBoxShadow[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        send3()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11boxShadow[0].setAttribute('data-w', w1)
        w2 = _line11boxShadow[0].getAttribute('data-w')
        _line11boxShadow[0].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _wrBoxShadow[0].innerHTML = r
        _write[40].innerHTML = r
        d22 = r
    }
}

function _li2boxShadow() {
    _lineBoxShadow[1].addEventListener('mousedown', (e) => {
        para(e)
        _lineBoxShadow[1].addEventListener('mousemove', para)
    })
    _lineBoxShadow[1].addEventListener('mouseup', () => {
        _lineBoxShadow[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        send3()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11boxShadow[1].setAttribute('data-w', w1)
        w2 = _line11boxShadow[1].getAttribute('data-w')
        _line11boxShadow[1].style.width = w2 + "%"
        r = Math.floor((w2 - 50) * 4)
        _wrBoxShadow[1].innerHTML = r
        _write[41].innerHTML = r
        d23 = r
    }
}

function _li3boxShadow() {
    _lineBoxShadow[2].addEventListener('mousedown', (e) => {
        para(e)
        _lineBoxShadow[2].addEventListener('mousemove', para)
    })
    _lineBoxShadow[2].addEventListener('mouseup', () => {
        _lineBoxShadow[2].removeEventListener('mousemove', para)
    })

    function para(e) {
        send3()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11boxShadow[2].setAttribute('data-w', w1)
        w2 = _line11boxShadow[2].getAttribute('data-w')
        _line11boxShadow[2].style.width = w2 + "%"
        r = Math.floor(w2 * 2)
        _wrBoxShadow[2].innerHTML = r
        _write[42].innerHTML = r
        d24 = r
    }
}

function _li4boxShadow() {
    _lineBoxShadow[3].addEventListener('mousedown', (e) => {
        para(e)
        _lineBoxShadow[3].addEventListener('mousemove', para)
    })
    _lineBoxShadow[3].addEventListener('mouseup', () => {
        _lineBoxShadow[3].removeEventListener('mousemove', para)
    })

    function para(e) {
        send3()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11boxShadow[3].setAttribute('data-w', w1)
        w2 = _line11boxShadow[3].getAttribute('data-w')
        _line11boxShadow[3].style.width = w2 + "%"
        r = Math.floor(w2 * 2)
        _wrBoxShadow[3].innerHTML = r
        _write[43].innerHTML = r
        d25 = r
    }
}
_clickColorBoxShadow.addEventListener('click', () => {
    g = _colorBoxShadow.value
    _write[44].innerHTML = g
    d26 = g
    send3()
})

function send3() {
    style = _write[39].innerHTML
    _box.setAttribute('style', 'box-shadow:' + style + ' ' + d22 + 'px ' + d23 + 'px ' + d24 + 'px ' + d25 + 'px ' + d26 + ';')
}
// end box shadow
 
// start filter
const x1 = ['blur', 'brightness', 'contrast', 'grayscale', 'hue-rotate', 'invert', 'saturate', 'sepia']
let d28=0

_clickWrite6.addEventListener('click', () => {
    let child = _clickWrite6.children
    let p = _clickWrite6.parentElement.previousElementSibling.children
    if (p3 % 2) {
        // send4()
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[5].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[45].classList.remove('hidden')
        _li3Filter1()
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[5].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})
_clickSelect5.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select5.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')

            switch (val) {

                case _select5[0]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'blur';
                    _write[46].innerHTML = 'blur'
                    _write[48].innerHTML = 'px'
                    x1.forEach((val, i) => {
                        if (i != 0){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    // send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 0) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[1]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'brightness'
                    _write[46].innerHTML = 'brightness'
                    _write[48].innerHTML = '%'
                    x1.forEach((val, i) => {
                        if (i != 1){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 1) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[2]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'contrast'
                    _write[46].innerHTML = 'contrast'
                    _write[48].innerHTML = '%'
                    x1.forEach((val, i) => {
                        if (i != 2){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 2) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[3]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'grayscale'
                    _write[46].innerHTML = 'grayscale'
                    _write[48].innerHTML = '%'
                    x1.forEach((val, i) => {
                        if (i != 3){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 3) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[4]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'hue-rotate'
                    _write[46].innerHTML = 'hue-rotate'
                    _write[48].innerHTML = 'deg'
                    x1.forEach((val, i) => {
                        if (i != 4){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send2()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 4) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[5]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'invert'
                    _write[46].innerHTML = 'invert'
                    _write[48].innerHTML = '%'
                    x1.forEach((val, i) => {
                        if (i != 5){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 5) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[6]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'saturate'
                    _write[46].innerHTML = 'saturate'
                    _write[48].innerHTML = '%'
                    x1.forEach((val, i) => {
                        if (i != 6){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 6) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select5[7]:
                    _clickSelect5.style.color = 'black'
                    _clickSelect5.innerHTML = 'sepia'
                    _write[46].innerHTML = 'sepia'
                    _write[48].innerHTML = '%'
                    x1.forEach((val, i) => {
                        if (i != 7){
                            _box.classList.remove('[border-style:' + x1[i] + ';]')
                        }
                    })
                    send4()
                    for (let i = 0; i < _select5.length; i++) {
                        if (i != 7) {
                            _select5[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
            }
        })
    })
})
function _li3Filter1() {
    _lineFilter[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineFilter[0].addEventListener('mousemove', para)
    })
    _lineFilter[0].addEventListener('mouseup', () => {
        send4()
        _lineFilter[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Filter[0].setAttribute('data-w', w1)
        w2 = _line11Filter[0].getAttribute('data-w')
        _line11Filter[0].style.width = w2 + "%"
        r = Math.floor(w2)
        _write[47].innerHTML = r
        _wrFilter[0].innerHTML = r
        d28 = r
        send4()
        x1.forEach((val, i) => {
            _box.classList.remove('[border-style:' + x1[i] + ';]')         
        })
    }
}

function send4(){
    g=_write[46].innerHTML
    g1=_write[48].innerHTML
    _box.classList.add(''+g+'-['+d28+''+g1+']')
}
// end  filter

// start font face
const x2=['font-font1','font-font2','font-font3','font-font4']
let d29=0
let d30=0
let d31=0
_clickWrite7.addEventListener('click', () => {
    let child = _clickWrite7.children
    let p = _clickWrite7.parentElement.previousElementSibling.children
    if (p3 % 2) {
        // send4()
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[6].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[49].classList.remove('hidden')
        _li3Font1()
        _li3Font2()
        _li3Font3()
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[6].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})

_clickSelect6.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select6.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')

            switch (val) {

                case _select6[0]:
                    _clickSelect6.style.color = 'black'
                    _clickSelect6.innerHTML = 'JosefinSans-VariableFont_wght';
                    _write[54].innerHTML = 'JosefinSans-VariableFont_wght'
                    _text.classList.add(''+x2[0]+'')
                    x2.forEach((val, i) => {
                        if (i != 0){
                            _text.classList.remove(''+x2[i]+'')
                        }
                    })
                    send5()
                    for (let i = 0; i < _select6.length; i++) {
                        if (i != 0) {
                            _select6[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select6[1]:
                    _clickSelect6.style.color = 'black'
                    _clickSelect6.innerHTML = 'Caveat-Regular'
                    _write[54].innerHTML = 'Caveat-Regular'
                    _text.classList.add(''+x2[1]+'')
                    x2.forEach((val, i) => {
                        if (i != 1){
                            _text.classList.remove(''+x2[i]+'')
                        }
                    })
                    send5()
                    for (let i = 0; i < _select6.length; i++) {
                        if (i != 1) {
                            _select6[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select6[2]:
                    _clickSelect6.style.color = 'black'
                    _clickSelect6.innerHTML = 'BebasNeue-Regular'
                    _write[54].innerHTML = 'BebasNeue-Regular'
                    _text.classList.add(''+x2[2]+'')
                    x2.forEach((val, i) => {
                        if (i != 2){
                            _text.classList.remove(''+x2[i]+'')
                        }
                    })
                    send5()
                    for (let i = 0; i < _select6.length; i++) {
                        if (i != 2) {
                            _select6[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select6[3]:
                    _clickSelect6.style.color = 'black'
                    _clickSelect6.innerHTML = 'IRANSans'
                    _write[54].innerHTML = 'IRANSans'
                    _text.classList.add(''+x2[3]+'')
                    x2.forEach((val, i) => {
                        if (i != 3){
                            _text.classList.remove(''+x2[i]+'')
                        }
                    })
                    send5()
                    for (let i = 0; i < _select6.length; i++) {
                        if (i != 3) {
                            _select6[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
            }
        })
    })
})
_clickSelect7.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select7.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')

            switch (val) {

                case _select7[0]:
                    _clickSelect7.style.color = 'black'
                    _clickSelect7.innerHTML = 'normal';
                    _write[50].innerHTML = 'normal'
                    _text.classList.add('style1')
                    _text.classList.remove('style2')
                    send5()
                    for (let i = 0; i < _select7.length; i++) {
                        if (i != 0) {
                            _select7[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select7[1]:
                    _clickSelect7.style.color = 'black'
                    _clickSelect7.innerHTML = 'italic'
                    _write[50].innerHTML = 'italic'
                    _text.classList.add('style2')
                    _text.classList.remove('style1')
                    send5()
                    for (let i = 0; i < _select7.length; i++) {
                        if (i != 1) {
                            _select7[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
            }
        })
    })
})
_clickSelect8.addEventListener('click', (e) => {
    let ul = e.target.nextElementSibling
    ul.classList.remove('hidden')
    _select8.forEach((val) => {
        val.addEventListener('click', () => {
            ul.classList.add('hidden')

            switch (val) {

                case _select8[0]:
                    _clickSelect8.style.color = 'black'
                    _clickSelect8.innerHTML = 'normal';
                    _write[51].innerHTML = 'normal'
                    _text.classList.add('fontWeight1')
                    _text.classList.remove('fontWeight2')
                    _text.classList.remove('fontWeight3')
                    send5()
                    for (let i = 0; i < _select8.length; i++) {
                        if (i != 0) {
                            _select8[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select8[1]:
                    _clickSelect8.style.color = 'black'
                    _clickSelect8.innerHTML = 'bold'
                    _write[51].innerHTML = 'bold'
                    _text.classList.remove('fontWeight1')
                    _text.classList.add('fontWeight2')
                    _text.classList.remove('fontWeight3')
                    send5()
                    for (let i = 0; i < _select8.length; i++) {
                        if (i != 1) {
                            _select8[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
                case _select8[2]:
                    _clickSelect8.style.color = 'black'
                    _clickSelect8.innerHTML = 'lighter'
                    _write[51].innerHTML = 'lighter'
                    _text.classList.remove('fontWeight1')
                    _text.classList.remove('fontWeight2')
                    _text.classList.add('fontWeight3')
                    send5()
                    for (let i = 0; i < _select8.length; i++) {
                        if (i != 2) {
                            _select8[i].setAttribute('data-status', 'off')
                        }
                    }
                    break;
            }
        })
    })
})
function _li3Font1() {
    _lineFont[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineFont[0].addEventListener('mousemove', para)
    })
    _lineFont[0].addEventListener('mouseup', () => {
        send5()
        _lineFont[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Font[0].setAttribute('data-w', w1)
        w2 = _line11Font[0].getAttribute('data-w')
        _line11Font[0].style.width = w2 + "%"
        r = Math.floor(w2*.6)
        _write[52].innerHTML = r
        _wrFont[0].innerHTML = r
        d29 = r
        send5()
        
    }
}
function _li3Font2() {
    _lineFont[1].addEventListener('mousedown', (e) => {
        para(e)
        _lineFont[1].addEventListener('mousemove', para)
    })
    _lineFont[1].addEventListener('mouseup', () => {
        send5()
        _lineFont[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Font[1].setAttribute('data-w', w1)
        w2 = _line11Font[1].getAttribute('data-w')
        _line11Font[1].style.width = w2 + "%"
        r = Math.floor(w2/2)
        _write[55].innerHTML = r
        _wrFont[1].innerHTML = r
        d31 = r
        send5()
    }
}
function _li3Font3() {
    _lineFont[2].addEventListener('mousedown', (e) => {
        para(e)
        _lineFont[2].addEventListener('mousemove', para)
    })
    _lineFont[2].addEventListener('mouseup', () => {
        send5()
        _lineFont[2].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11Font[2].setAttribute('data-w', w1)
        w2 = _line11Font[2].getAttribute('data-w')
        _line11Font[2].style.width = w2 + "%"
        r1 =w2*.03
        r=r1.toFixed(1)
        _write[53].innerHTML = r
        _wrFont[2].innerHTML = r
        d30 = r1
        send5()
    }
}
function send5(){
    for(let i=0;i<60;i++){
        if(i==d29){
            _text.classList.add('text-['+d29+'px]') 
    }else{
            _text.classList.remove('text-['+i+'px]')

        }
    }

    _text.setAttribute('style','line-height:'+d30+';')

    for(let i=0;i<50;i++){
        if(i==d31){
            _text.classList.add('tracking-['+d31+'px]') 
    }else{
            _text.classList.remove('tracking-['+i+'px]')

        }
    }
}
_demoText.addEventListener('keyup',()=>{
     text=_demoText.value
     _text.innerHTML=text 
    if(_text.innerHTML==''){
        _text.innerHTML='Demo text'
    }
})
// end font face

// start text shadow
let d32=0
let d33=0
let d34=0
let d35=0
_clickWrite8.addEventListener('click', () => {
    let child = _clickWrite8.children
    let p = _clickWrite8.parentElement.previousElementSibling.children
    if (p3 % 2) {
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[7].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[56].classList.remove('hidden')
        _li1TextShadow1()
        _li1TextShadow2()
        _li3TextShadow3()
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[7].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})

function _li1TextShadow1() {
    _lineTextShadow[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineTextShadow[0].addEventListener('mousemove', para)
    })
    _lineTextShadow[0].addEventListener('mouseup', () => {

        _lineTextShadow[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        send6()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11TextShadow[0].setAttribute('data-w', w1)
        w2 = _line11TextShadow[0].getAttribute('data-w')
        _line11TextShadow[0].style.width = w2 + "%"
        r = Math.floor(w2 - 50)
        _wrTextShadow[0].innerHTML = r
        _write[57].innerHTML = r
        d32 = r
    }
}
function _li1TextShadow2() {
    _lineTextShadow[1].addEventListener('mousedown', (e) => {
        para(e)
        _lineTextShadow[1].addEventListener('mousemove', para)
    })
    _lineTextShadow[1].addEventListener('mouseup', () => {

        _lineTextShadow[1].removeEventListener('mousemove', para)
    })

    function para(e) {
        send6()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11TextShadow[1].setAttribute('data-w', w1)
        w2 = _line11TextShadow[1].getAttribute('data-w')
        _line11TextShadow[1].style.width = w2 + "%"
        r = Math.floor(w2 - 50)
        _wrTextShadow[1].innerHTML = r
        _write[58].innerHTML = r
        d33 = r
    }
}

function _li3TextShadow3() {
    _lineTextShadow[2].addEventListener('mousedown', (e) => {
        para(e)
        _lineTextShadow[2].addEventListener('mousemove', para)
    })
    _lineTextShadow[2].addEventListener('mouseup', () => {
        _lineTextShadow[2].removeEventListener('mousemove', para)
    })

    function para(e) {
        send6()
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11TextShadow[2].setAttribute('data-w', w1)
        w2 = _line11TextShadow[2].getAttribute('data-w')
        _line11TextShadow[2].style.width = w2 + "%"
        r = Math.floor(w2 * .2)
        _wrTextShadow[2].innerHTML = r
        _write[59].innerHTML = r
        d34 = r
    }
}
_clickColorTextShadow.addEventListener('click', () => {
    g = _colorTextShadow.value
    _write[60].innerHTML = g
    d35 = g
    send6()
})
function send6(){
  
_text1.style.textShadow=d32+'px '+d33+'px '+d34+'px '+d35

}
// end text shadow

// start text rotation
let d36=0
_clickWrite9.addEventListener('click', () => {
    let child = _clickWrite9.children
    let p = _clickWrite8.parentElement.previousElementSibling.children
    if (p3 % 2) {
        child[0].style.translate = 100 + '%'
        p[0].innerHTML = 'Disable Parameter'
        _bg1[8].classList.remove('hidden')
        _write[0].classList.remove('hidden')
        _write[61].classList.remove('hidden')
        _li1TextRotation()
    } else {
        child[0].style.translate = 0 + '%'
        p[0].innerHTML = 'Enable Parameter'
        _bg1[8].classList.add('hidden')
        _write[0].classList.add('hidden')
    }
    p3++
})
function _li1TextRotation() {
    _lineTextRotation[0].addEventListener('mousedown', (e) => {
        para(e)
        _lineTextRotation[0].addEventListener('mousemove', para)
    })
    _lineTextRotation[0].addEventListener('mouseup', () => {
        _lineTextRotation[0].removeEventListener('mousemove', para)
    })

    function para(e) {
        width = e.offsetX
        w1 = width / (307 / 100)
        _line11TextRotation[0].setAttribute('data-w', w1)
        w2 = _line11TextRotation[0].getAttribute('data-w')
        _line11TextRotation[0].style.width = w2 + "%"
        console.log(width)
        r = Math.floor(w2 * 3.6)
        _write[62].innerHTML = r
        _wrTextRotation[0].innerHTML = r
        d36 = r
        send7()
    }
}
function send7(){
    _text1.setAttribute('style','transform: rotate('+d36+'deg);')
}
// end text rotation
