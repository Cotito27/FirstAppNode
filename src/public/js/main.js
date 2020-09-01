window.onload = function(){
    var itemHome = document.querySelector('#itemHome');
    var itemAbout = document.querySelector('#itemAbout');
    var itemContact = document.querySelector('#itemContact');
    var itemsGroup = document.querySelector('.nav-item');
    function toggleClassList(){
        if(location.href == location.origin + '/contact'){
            itemsGroup.classList.remove('active');
            itemContact.classList.add('active');
        }
        if(location.href == location.origin + '/'){
            itemsGroup.classList.remove('active');
            itemHome.classList.add('active');
        }
        if(location.href == location.origin + '/#about'){
            itemsGroup.classList.remove('active');
            itemAbout.classList.add('active');
        }
    }
    toggleClassList();
    window.addEventListener('click',function(){
        toggleClassList();
        setTimeout(function(){
            toggleClassList();
        },100);
    });
    /*window.addEventListener('mouseout',function(){
        toggleClassList();
    });*/
};