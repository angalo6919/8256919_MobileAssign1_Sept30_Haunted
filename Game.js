const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    STICK:  Symbol("stick"),
    PLAY: Symbol("play"),
    WATER: Symbol("water"),
    FIRE: Symbol("fire"),
    NOKILL: Symbol("nokill")

});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    
    makeAMove(sInput)
    {
        let sReply = "Hi I'm Nagib. I was burned alive in my house. You wanna be a part of my revenge...?";
        switch(this.stateCur){
            case GameState.WELCOMING:
                this.stateCur = GameState.STICK;
                break;
            case GameState.STICK:
                if(sInput.toLowerCase().match("yes")){
                    sReply = "Your body is my vessel now... Close your eyes for a second and think of a person... and type in ALMAWT";
                    this.stateCur = GameState.PLAY;
                }else{
                    sReply = "Within 10 days your soul is mine...Bye ";
                }
                break;
            case GameState.PLAY:
                if(sInput.toLowerCase().match("almawt")){
                    sReply = "Hmmm i like that person... Water, Fire or No kill?";
                }else{
                    sReply = "I will Haunt you for that...";
                    this.stateCur = GameState.STICK;
                }
                break;

            case GameState.WATER:
            if(sInput.toLowerCase().match("water")){
                sReply = "Let the ring has his body and soul...Thanks your body is free now....";
            }else{
                sReply = "I will Haunt you for that...";
                this.stateCur = GameState.PLAY;
            }
            break;
            case GameState.FIRE:
            if(sInput.toLowerCase().match("fire")){
                sReply = "Let the woods turn his bodyand soulinto ashes...Thanks your body is free now....";
            }else{
                sReply = "I will Haunt you for that...";
                this.stateCur = GameState.PLAY;
            }
            break;
            case GameState.NOKILL:
            if(sInput.toLowerCase().match("nokill")){
                sReply = "Within 10 days your soul is mine...Bye ";
            }else{
                sReply = "I will Haunt you for that...";
                this.stateCur = GameState.PLAY;
            }
            break;
        }
        return(sReply);
    }
}

