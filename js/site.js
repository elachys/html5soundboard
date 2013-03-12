var app = {
    sounds: {
    'a.mp3': 'entry 1',
    'b.mp3': 'entry 2',
    'c.mp3': 'entry 3'
    },

    showAudio: function(){
        var list = $('<ul />').data({
            'role': 'listview',
            'inset': 'true'
        });
        for(i in app.sounds){
            $('<li />').data({'audio': i}).text(app.sounds[i]).appendTo(list);
        }
        list.appendTo($('#content')).listview();

    },
    events: function(){
        $('li').live('click', function(){

            console.log(this);
        });
    },
    playAudio: function(file){
        app.clearAudio();
        $('<audio />').attr('src', file).appendTo('#content').play();
    },
    clearAudio: function(){
        $('audio').remove();
    }
    loaded: function(){
        app.events();
        app.showAudio();
    }
};


$(function(){
    app.loaded();
});