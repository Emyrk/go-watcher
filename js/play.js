function play() {
    var sgf = $("#sgf-input").val()
    simulate_board(sgf)
}

function simulate_board(sgf) {
    $(".tenuki-board").html("")
    var plays = SGFGrove.parse(sgf)

    window.board = new tenuki.Game({ 
        element: boardElement ,
        boardSize: plays[0][0][0].SZ
        
    });

    plays = plays[0][0]
    // The loop that plays the game
    for(var i = 1; i < plays.length; i++) {
        var place = "--"
        switch(i%2) {
            case 1:
                place = plays[i].W
                break
            case 0:
                place = plays[i].B
        }
        if(place == null) {break}
        board.playAt(get_number(place, 0), get_number(place, 1))
    }
}

function get_number(letter, index) {
    letter = letter.toLowerCase()
    return letter.charCodeAt(index) - 97
}