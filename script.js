'use strict';

const btn = document.querySelector('button-1');
if(btn){
    btn.addEventListener('click', function onClick(event) {

        const box = document.querySelector('showcase-banner');
        box.setAttribute('class','blur');
        box.textContent="SOLD";
    });
}










