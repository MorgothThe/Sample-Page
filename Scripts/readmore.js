let $leftReadMoreClick = false;
let $middleReadMoreClick = false;
let $rightReadMoreClick = false;

$('#leftClick').click(function(){
    if($leftReadMoreClick == false){
        $('#leftText').append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex nulla. Integer ullamcorper nibh lorem, ut porttitor mi sagittis eget. Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.");
        $leftReadMoreClick = true;
    }
    return false;
});

$('#middleClick').click(function(){
    if($middleReadMoreClick == false){
        $('#middleText').append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex nulla. Integer ullamcorper nibh lorem, ut porttitor mi sagittis eget. Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.");
        $middleReadMoreClick = true;
    }
    return false;
});

$('#rightClick').click(function(){
    if($rightReadMoreClick == false){
        $('#rightText').append("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis felis fermentum, dictum odio ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget ex nulla. Integer ullamcorper nibh lorem, ut porttitor mi sagittis eget. Aenean malesuada mattis justo, sed efficitur nisl fringilla eget. Integer a mi quis lectus vulputate tempus quis quis dui. Mauris suscipit euismod urna, eget feugiat tellus imperdiet vitae. Vestibulum.");
        $rightReadMoreClick = true;
    }
    return false;
});