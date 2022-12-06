'use strict';


function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}



function selectAll(selector, parent = document) {
    return parent.querySelector(selector);
}

function print(arg) {
    console.log(arg);
}



const onload = select('.onload');
const two = select('.three')
const settings = select('.settings')
const accept = select('.accept')
const switched = select('.switch');
const browser = select('.browser');
const show = select('.show')
const operating = select('.operating')
const height = select('.height');
const width = select('.width');
const para = select('p')

function visible() {
    two.style.visibility = 'visible'
}
settings.addEventListener('click', () => {
    two.style.visibility = 'hidden';
    onload.style.visibility = 'visible'
})

function getBrowser() {
    if ((navigator.userAgent.includes('Firefox'))) {
        return "Firefox";
    } else if (navigator.userAgent.includes("Edg")) {
        return "Edge";
    } else if (navigator.userAgent.includes("Chrome")) {
        return "Chrome";
    } else if (navigator.userAgent.includes("Safari")) {
        return "Safari";
    } else if (navigator.userAgent.includes("OPR")) {
        return "Opera";
    } else if ((navigator.userAgent.includes("MSIE"))) //IF IE > 10
    {
        return "IE";
    } else {
        return "... something else?";
    }
}


function setCookie(name, value, options = {}) {
    options = {
        path: '/',
        SameSite: 'Lax',
        ...options
    };

    const keys = Object.keys(options);
    const values = Object.values(options);

    if (options?.expires && options.expires instanceof Date) {
        options.expires = options.expires.toUTCString
    }

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    for (let i = 0; i < keys.length; i++) {
        updatedCookie += `; ${keys[i]} = ${values[i]}`;
    }

    document.cookie = updatedCookie
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

const date = new Date();
date.setSeconds(date.getSeconds() + 30);


accept.addEventListener('click', () => {
    save();
    two.style.visibility = 'hidden'
    para.classList.remove('text')
})



function save() {
    if (browser.checked) {
        setCookie('browser', `${getBrowser()}`, { 'max-age': 10 })
        console.log(`Browser : ${getCookie('browser')}`)
    } else {
        console.log('Browser : rejected');
    }

    if (operating.checked) {
        setCookie('os', `Opearting System : ${operators()}`, { 'max-age': 10 })
        console.log(` ${getCookie('os')}`)

    } else {
        console.log('OS : rejected');
    }
    if (width.checked) {
        setCookie('width', `Width :${window.innerWidth} px`, { 'max-age': 10 })
        console.log(` ${getCookie('width')}`)
    } else {
        console.log('width : rejected');
    }
    if (height.checked) {
        setCookie('window', `Height : ${window.innerHeight} px`, { 'max-age': 10 })
        console.log(` ${getCookie('window')} `)
    } else {
        console.log('Height : rejected');
    }

}

show.addEventListener('click', () => {
    onload.style.visibility = 'hidden';
    save();
    para.classList.remove('text')


}
)



function time() {

    if (document.cookie == false) {
        setTimeout(function () {
            two.style.visibility = 'visible'
            para.classList.add('text')
        }, 1000)
    } else {
        two.style.visibility = 'hidden'
    }
}

window.addEventListener('load', () => {
    // setTimeout(function() {
    console.log(document.cookie ? 'Cookies available' : 'no cookies found');
    // },11000);
    time();
   
})

const answer = document.querySelector('.answer')
function operators(){

if (window.navigator.userAgent.includes("Windows NT 10.0") ) return "Windows 10";
else if (window.navigator.userAgent.includes("Windows NT 6.2") )  return "Windows 8";
else if (window.navigator.userAgent.includes("Windows NT 6.1") ) return "Windows 7";
else if (window.navigator.userAgent.includes("Windows NT 6.0") ) return "Windows Vista";
else if (window.navigator.userAgent.includes("Windows NT 5.1") ) return "Windows XP";
else if (window.navigator.userAgent.includes("Windows NT 5.0") ) return "Windows 2000";
else if (window.navigator.userAgent.includes("Mac")            ) return "Mac/iOS";
else if (window.navigator.userAgent.includes("X11")            ) return "UNIX";
else if (window.navigator.userAgent.includes("Linux")          ) return "Linux";}

show.addEventListener('click', () => {
    answer.innerHTML = operators()
})