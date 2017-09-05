$('.SamplePageButton').click(function(){
    let $articleTopText = $('.articleTopText');
    let $articleLeftText = $('#leftText');
    let $articleMiddleText = $('#middleText');
    let $articleRightText = $('#rightText');
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