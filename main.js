(function(window, document){
    'use strict';
    
    const $toggles = document.querySelectorAll('.toggle'); //NodeList 라는 배열 Array-Like
    const $toggleBtn = document.getElementById('toggle-btn');


    $toggleBtn.addEventListener('click', function(){
        toggleElement();
    })


    window.addEventListener('resize',function(){
        if(window.innerWidth > 1024){
            // Off Toggle element
            offElement();
        }
    })


    function toggleElement(){
        //Array Like foreach 사용하여 연결 시킨다. 
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElement(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }


})(window, document)