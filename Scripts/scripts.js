$('.to-top').click(function(){
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

let $leftReadMoreClick = false;
let $middleReadMoreClick = false;
let $rightReadMoreClick = false;

$('#left-click').click(function(){
    if($leftReadMoreClick === false){
        $('#left-text').append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex nulla. Integer ullamcorper nibh lorem, ut porttitor mi sagittis eget. Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.");
        $leftReadMoreClick = true;
    }
    return false;
});

$('#middle-click').click(function(){
    if($middleReadMoreClick === false){
        $('#middle-text').append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex nulla. Integer ullamcorper nibh lorem, ut porttitor mi sagittis eget. Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.");
        $middleReadMoreClick = true;
    }
    return false;
});

$('#right-click').click(function(){
    if($rightReadMoreClick === false){
        $('#right-text').append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex nulla. Integer ullamcorper nibh lorem, ut porttitor mi sagittis eget. Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.");
        $rightReadMoreClick = true;
    }
    return false;
});

$('.sample-page-button').click(function(){
    let $articleTopText = $('.article-top-text');
    let $articleLeftText = $('#left-text');
    let $articleMiddleText = $('#middle-text');
    let $articleRightText = $('#right-text');
    $articleTopText.html($articleTopText.html().replace(/ipsum/, '<span style="color: red">ipsum</span>'));
    $articleLeftText.html($articleLeftText.html().replace(/ipsum/, '<span style="color: red">ipsum</span>'));
    $articleMiddleText.html($articleMiddleText.html().replace(/ipsum/, '<span style="color: red">ipsum</span>'));
    $articleRightText.html($articleRightText.html().replace(/ipsum/, '<span style="color: red">ipsum</span>'));
    
    setTimeout(function(){
        $articleTopText.html($articleTopText.html().replace(/ipsum/, '<span style="color: black">ipsum</span>'));
        $articleLeftText.html($articleLeftText.html().replace(/ipsum/, '<span style="color: black">ipsum</span>'));
        $articleMiddleText.html($articleMiddleText.html().replace(/ipsum/, '<span style="color: black">ipsum</span>'));
        $articleRightText.html($articleRightText.html().replace(/ipsum/, '<span style="color: black">ipsum</span>'));
    }, 3000);
    return false; 
});