
//global variables/arrays/objects needed
//player obj = {items:
//              stats:
//              hp:
//              others: }
    function dice(x)
    {
        return Math.floor(Math.random()*x);
    }
    function calculate_percentage(hp,constitution)
      {   return ((hp*100)/constitution);}
//array for storing pixel data generated by python script
//
//
//var pixels = new Array([],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
var b=0;
var pixels = new Array("mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","cave","grass","grass","forest","mountain","mountain","forest","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","forest","forest","mountain","forest","forest","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","forest","mountain","forest","forest","forest","forest","forest","mountain","mountain","mountain","mountain","river","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","forest","mountain","forest","forest","forest","forest","forest","forest","forest","forest","forest","river","forest","forest","forest","forest","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","sidequest","grass","grass","grass","grass","forest","forest","forest","forest","forest","forest","forest","forest","forest","forest","river","forest","forest","forest","forest","pirate cove","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","forest","forest","forest","forest","necromancer's thicket","grass","grass","grass","grass","grass","river","grass","grass","forest","forest","forest","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","forest","grass","grass","grass","grass","grass","river","grass","grass","grass","forest","forest","forest","forest","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","forest","river","river","river","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","forest","haunted graveyard","grass","grass","grass","grass","grass","forest","grass","grass","grass","grass","grass","grass","river","river","river","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","river","river","bridge","river","river","river","river","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","mountain","rock golem quary","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","quest","river","river","river","river","river","river","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","trader1","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","trader2","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","port","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","healer","grass","grass","grass","grass","grass","grass","grass","grass","grass","playerstart","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water");
var asset_types = new Array("mountain","grass","forest","river","water","bridge","port","healer","playerstart","enemyhideout1","enemyhideout2","enemyhideout3","enemyhideout4","quest","sidequest","trader1","trader2","cave");
var impassable_types = new Array("mountain","water","river");
var event_types= new Array("healer","port","playerstart","rock golem quary","haunted graveyard","pirate cove","necromancer's thicket","quest","sidequest","trader1","trader2","cave");
var event_combat= new Array("rock golem quary","haunted graveyard","pirate cove","necromancer's thicket")
var estate = new Array();
var estateid= new Array();
var player_position;
var playerposid;
var gridcheck;
var event = false;
var event_box;
var choice_box;
var choice_text;
var message_box;
var animation_box;
var event_title;
var choice=0;
var choices = new Array();
var event_type=0;
var active_enemies = new Array();
var active_friends = new Array();
var player= {
    name:"player name variable",
    hp:50,
    constitution:50,
    strength:3,
    defense:1,
    dexterity:3,
    magic:1,
    speed:2,
    money:100,
    silversword:0,
    book:false,
    attack:function(x)
    {   let c=dice(16);
        if(c==15){c=16;message_box.append("you rolled a crit");}
        if(c<=x.defense){message_box.append("<p>your attack was blocked</p>")}else{
        let dmg = this.strength+dice(c);let temp="<p>you hit "+x.name+" for "+dmg+" dmg.</p>";
        message_box.append(temp);
        x.hp = x.hp-dmg;}
    },
    necromancy()
    {   let m;
    if(pirate.hp==0){
        pirate.hp=pirate.constitution;
        active_friends.push(pirate);
        m=true;
    }
    if(necromancer.hp==0){
        necromancer.hp=necromancer.constitution;
        active_friends.push(necromancer);
        m=true;
    }
    if(rockgolem.hp==0){
        rockgolem.hp=rockgolem.constitution;
        active_friends.push(rockgolem)
        m=true;
    }
    if(m=true){player.book=false;}

    },

};
var pirate= {
    name:"pirate",
    hp:30,
    constitution:30,
    strength:2,
    defense:1,
    dexterity:3,
    magic:1,
    speed:2,
    attack:function(x)
    {
        let c=dice(16);
        if(c==15){c=16;message_box.append(this.name+" rolled a crit");}
        if(c<=x.defense){message_box.append("<p>pirate's attack was blocked</p>")}else{
        let dmg = this.strength+dice(c);let temp="<p>"+this.name+ " hit "+x.name+" for "+dmg+" dmg.</p>";
        message_box.append(temp);
        x.hp = x.hp-dmg;}
    }
};
var necromancer= {
    name:"necromancer",
    hp:60,
    constitution:60,
    strength:1,
    defense:1,
    dexterity:3,
    magic:6,
    speed:3,
    attack:function(x)
    {   let c=dice(16);
        if(c==15){c=16;message_box.append(this.name+" rolled a crit");}
        if(c<=x.defense){message_box.append("<p>necromancer's attack was blocked</p>")}else{
        let dmg = this.strength+dice(c);let temp="<p>"+this.name+ " hit "+x.name+" for "+dmg+" dmg.</p>";
        message_box.append(temp);
        x.hp = x.hp-dmg;}
    }
};

var ghost={
    name:"ghost",
    hp:45,
    constitution:45,
    strength:1,
    defense:1,
    dexterity:3,
    magic:6,
    speed:3,
    attack:function(x)
    {let c=dice(16);
        if(c==15){c=16;message_box.append(this.name+" rolled a crit");}
        if(c<=x.defense){message_box.append("<p>ghost's attack was blocked</p>")}else{
        let dmg = this.strength+dice(c);let temp="<p>"+this.name+ " hit "+x.name+" for "+dmg+" dmg.</p>";
        message_box.append(temp);
        x.hp = x.hp-dmg;}
    }
};

var zombie={
    name:"zombie",
    hp:45,
    constitution:45,
    strength:1,
    defense:1,
    dexterity:3,
    magic:6,
    speed:3,
    attack:function(x)
    {let c=dice(16);
        if(c==15){c=16;message_box.append(this.name+" rolled a crit");}
        if(c<=x.defense){message_box.append("<p>zombie's attack was blocked</p>")}else{
        let dmg = this.strength+dice(c);let temp="<p>"+this.name+ " hit "+x.name+" for "+dmg+" dmg.</p>";
        message_box.append(temp);
        x.hp = x.hp-dmg;}
    }
};
var rockgolem = {
    name:"rock golem",
    hp:60,
    constitution:60,
    strength:3,
    defense:3,
    dexterity:3,
    magic:6,
    speed:3,
    attack:function(x)
    {let c=dice(16);
        if(c==15){c=16;message_box.append(this.name+" rolled a crit");}
        if(c<=x.defense){message_box.append("<p>rock golem's attack was blocked</p>")}else{
        let dmg = this.strength+dice(c);let temp="<p>"+this.name+ " hit "+x.name+" for "+dmg+" dmg.</p>";
        message_box.append(temp);
        x.hp = x.hp-dmg;}
    }

};
//on ready
    // when everything is coming together make a "press space to start screen"
    //function to fill the game world with *pixels* (40x20) done
    //function to spawn player
    
    //draw map
    for(let i=0;i<pixels.length;i++)
    {   for(let a=0;a<event_types.length;a++)
        {
            if(pixels[i]==event_types[a]){estate.push(i);estateid.push(pixels[i]);}
        }
        var pixel = $("<div>");
        pixel.addClass(pixels[i]);
        pixel.attr("data-number",i);
        //pixel.text(pixel.attr("data-number"))
        pixel.attr("id","pos"+i);
        $("body").append(pixel);
    }
    //spawn player
    var playersprite = $("<img>");
    playersprite.addClass("playersprite");
    playersprite.attr("src", "assets/images/player.png");
    player_position = $(".playerstart").attr("data-number");
    $(".playerstart").prepend(playersprite);
    playerposid = "#pos"+player_position;
    

    function update_choices()
    {  
        choice_box.empty();
        for(let i=0;i<choices.length;i++)
        {   choice_text = $("<p>");
            choice_text.addClass("choicetext");
            choice_text.text(choices[i]);
            choice_text.attr("id","choice"+i);
            choice_box.append(choice_text);
        }
    }

    function event_screen()
    {   
        event_box= $("<section>");
        event_box.addClass("eventbox");
        //event_box.text("event box");
        $("body").append(event_box);
        choice_box= $("<section>");
        choice_box.addClass("choicebox");
        choice_box.text("choice box");
        $(".eventbox").append(choice_box);
        message_box = $("<section>");
        message_box.addClass("messagebox");
        message_box.text("message box");
        $(".eventbox").append(message_box);
        animation_box=$("<section>");
        animation_box.addClass("animationbox");
        animation_box.text("animations go here");
        $(".eventbox").prepend(animation_box);
        event_title = $("<section>");
        event_title.addClass("eventtitle");
        event_title.html("<h1 style=\"text-align:center\">event title</h1>");
        $(".eventbox").prepend(event_title);

    }

    function pcheck(x)
    {
        gridcheck="#pos"+(x);
        for(let i=0;i<impassable_types.length;i++){
            if($(gridcheck).attr("class")==impassable_types[i]){return false;} 
        }
        if(x>800||x<0){return false;}
        return true;
    }



//echeck revisited

    function echeck(x)
    {   let bool=false;
           console.log(x);
        let temp;
        for(let i=0;i<estate.length;i++)
        {
            if(x==estate[i]){event_type=estateid[i];
                event=true;
                event_screen();
                choices.push("approach","leave");
                choice_box.empty();
                update_choices();
                temp = "<h1 style=\"text-align:center\">"+estateid[i]+"</h1>";
                event_title.html(temp);
                choice=0;
                temp = "#choice0";
                $(temp).css({"background-color":"teal"});
                }
        }
        

    }


        //old echeck function... depreciated for now but i will keep it here just incase
  /*  function echeck(x)
    {   console.log(x)
        //CREATE ASSOCIATED ARRAY FOR EVENT_TYPE, EVENT_TITLE, AND ASSOCIATED XVALUE
        //OR THINK OF A WAY TO MAKE AN OBJ WHICH ACHIEVES THIS SAME END. 
        //MAKE A LOOP TO ITERATE THROUGH AND CHECK X WITH EVENT SPOT ARRAY 

       let temp;
        //northernmost hideout
        if(x==221){
            console.log("trigger event");
            event_type=1;
            event=true;
            event_screen();
            event_title.html("<h1 style=\"text-align:center\">PIRATE COVE</h1>");
            choices.push("approach","leave");
            choice_box.empty();
            update_choices();


        }
        //mountainside hideout
        if(x==441){
            console.log("trigger event");
            event_type=2;
            event=true;
            event_screen();
            event_title.html("<h1 style=\"text-align:center\">MOUNTAIN BANDIT CAMP</h1>");
            choices.push("approach","leave");
            choice_box.empty();
            update_choices();
            
            
        }
        //HAUNTED GRAVEYARD
        if(x==365){
            console.log("trigger event");
            event_type=3;
            event=true;
            event_screen();
            event_title.html("<h1 style=\"text-align:center\">HAUNTED GRAVEYARD</h1>");
            choices.push("approach","leave");
            choice_box.empty();
            update_choices();
            
        }
        //necromancer den
        if(x==250){
            console.log("trigger event");
            event_type=4;
            event=true;
            event_screen();
            event_title.html("<h1 style=\"text-align:center\">NECROMANCER DEN</h1>");
            choices.push("approach","leave");
            choice_box.empty();
            update_choices();
        }
        if(x==704){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==675){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==41){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==575){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==514){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==201){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==465){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }

        choice=0;
        temp = "#choice0";
        $(temp).css({"background-color":"teal"});

    }
    */
    function rm_eventbox()
    {   message_box.empty();
        choice_box.empty();
        animation_box.empty();
        event_title.empty();
        event_box.empty();
        event_box.remove();
        event=false;
        choices.length=0;
        event_type=0;
    }

    function battle(x)
    {   choice_box.empty();
        choices.length=0;
        choices.push("attack","flee");
        if(player.book==true){choices.push("necromancy");}
        update_choices();
        choice=0;
        let temp = "#choice0";
        $(temp).css({"background-color":"teal"});
        
        /*todo create  objects for each scenario containing their entities, messages, etc*/
        
        //pirate cove
        if(event_type=="pirate cove")
        {  //hp boxes
            temp = "your hp: "+player.hp+"                    pirate hp:"+pirate.hp;
            animation_box.text(temp);
            //message box text describing the scenario
            message_box.html("you enter the pirates lair...<br> you are attacked and must fight for your life!");
            //create an "active enemies" array set to desired opponents
            active_enemies.push(pirate);
        }
        if(event_type=="necromancer's thicket")
        {
            //hp boxes
            temp = "your hp: "+player.hp+"                    necromancer hp:"+necromancer.hp;
            animation_box.text(temp);
            //message box text describing the scenario
            message_box.html("you approach the necromancer's altar... <br> the necromancer draws his blade!");
            //create an "active enemies" array set to desired opponents
            active_enemies.push(necromancer);
        }
        if(event_type=="rock golem quary")
        {
            //hp boxes
            temp = "your hp: "+player.hp+"                    rock golem hp:"+rockgolem.hp;
            animation_box.text(temp);
             //message box text describing the scenario
            message_box.html("THUD THUD THUD.... a rock golem begins to throw rocks at you!");
            //create an "active enemies" array set to desired opponents
            active_enemies.push(rockgolem);
        }
        if(event_type=="haunted graveyard")
        {
             //hp boxes
            temp = "your hp: "+player.hp+"                    ghost hp:"+ghost.hp;
            animation_box.text(temp);
            //message box text describing the scenario
            message_box.html("you walk around the spooky graveyard... <br> an angry spirit attacks you!");
           //create an "active enemies" array set to desired opponents
             active_enemies.push(ghost);
        }
    }

    function win()
    {   //pirate cove
        if(event_type=="pirate cove")
        {   player.money+=100;
            player.silversword=1;
            active_enemies.length=0;
            choices.length=0;
            choice_box.empty();
            console.log(choices);
            choices.push("leave");
            update_choices();
            message_box.html("you've bested the pirate and now you take his treasure!");
        }

        if(event_type=="necromancer's thicket")
        {   player.book=true;
            active_enemies.length=0;
            choices.length=0;
            choice_box.empty();
            console.log(choices);
            choices.push("leave");
            update_choices();
            message_box.html("you've bested the necromancer and take his book!");
            
        }
        if(event_type=="haunted graveyard")
        {
            
            active_enemies.length=0;
            choices.length=0;
            choice_box.empty();
            console.log(choices);
            choices.push("leave");
            update_choices();
            message_box.html("you've put the restless spirit to rest");
        }
        if(event_type=="rock golem quary")
        {   
            
            active_enemies.length=0;
            choices.length=0;
            choice_box.empty();
            console.log(choices);
            choices.push("leave");
            update_choices();
            player.defense+=3;
            message_box.html("you smash the rock golem into a million pebbles<br> you make a shield from the remains *+3 defense*");
        }

    }

    function lose()
    {
        message_box.text("you're dead ;n;");
        choice_box.empty();
        choice_box.text("oh dear!");

    }

    
    function flee()
    { 
        let roll = dice(active_enemies[dice(active_enemies.length)].hp);
        console.log(roll);
        if(roll<=5){console.log("you flee");b=0;
        rm_eventbox();}else{active_enemies[0].attack(player);}
        temp = "your hp: "+player.hp+"            enemy hp:"+ active_enemies[0].hp;
        animation_box.text(temp);
        if(player.hp<=0){lose();}
    }

    function attack() 
    {   let temp;
        
        player.attack(active_enemies[0]);
        if(active_enemies[0].hp>0){active_enemies[0].attack(player);}
        temp = "your hp: "+player.hp+"            enemies hp:"+ active_enemies[0].hp;
        if(active_enemies[0].hp<1){active_enemies[0].hp=0;win();}
        if(player.hp<1){player.hp=0;lose();}
        animation_box.text(temp);
    }
    function hpbar()
    {   

    }
    function healer()
    {   choices.length=0;
        choices.push("purchase healing","leave");
        update_choices();
        message_box.text("healer: i can heal you, but my coin pouch is looking a bit light... it'll cost you 100 gold pieces.\nyou have: "+player.money+"gold pieces\n");

    }

    function handle_choice(x)
    {   
        if($(x).text()=="leave"){rm_eventbox();b=0;}
        if($(x).text()=="approach"){if(event_combat.some(arrVal => event_type === arrVal)) {battle(x);}
        if(event_type=="healer"){healer();}}
        //if($(x).text()=="trade"){}
        //if($(x).text()=="talk"){}
        if($(x).text()=="purchase healing"){console.log("healing triggered"+b);b++;if(b>1){if(player.money>=100){player.money=player.money-100;player.hp=player.constitution;message_box.text("you have healed yourself and now have "+player.money+" coins");}else{choices.length=0;choices.push("leave");update_choices(); message_box.text("you dont' have enough money");}}}
        if($(x).text()=="attack"){b++;if(b>1){attack();}}
        if($(x).text()=="flee"){flee();}
        if($(x).text()=="necromancy"){player.necromancy();choices.length=2;update_choices();active_enemies[0].attack(player);}
        choice=0;
    }





    //get key input
        //if trying to walkinto unwalkable spot, do nothing else move to spot
        //if position= interactable... interact
        //press i for inventory
        //press j for journal
        $(document).keyup(function(e) {
            let temp;
            if(event==false){
            switch (e.which) {
            // space button
            case 32:

            break;
            // Move Buttons (Keyboard Down)
            case 40:
            if(!pcheck(player_position+40)){break;} 
                $(playerposid).empty();
                player_position=player_position+40;
                playerposid="#pos"+player_position;
                $(playerposid).prepend(playersprite);
                echeck(player_position);
                
              break;
      
              // Move Buttons (Keyboard Right)
            case 39:
                
                if(!pcheck(player_position+1)){break;} 
              $(playerposid).empty();
              player_position++;
              playerposid="#pos"+player_position;
              $(playerposid).prepend(playersprite);
              echeck(player_position);
              break;
      
              // Move Buttons (Keyboard Up)
            case 38:
            if(!pcheck(player_position-40)){break;} 
            $(playerposid).empty();
                player_position=player_position-40;
                playerposid="#pos"+player_position;
                $(playerposid).prepend(playersprite);
                echeck(player_position);
              break;
      
              // Move Buttons (Keyboard Left)
            case 37:
            if(!pcheck(player_position-1)){break;} 
             $(playerposid).empty();
             player_position--;
             playerposid="#pos"+player_position;
             $(playerposid).prepend(playersprite);
             echeck(player_position);
              break;
      
            default:
              break;
            }}else{//event box logic
                temp = "#choice"+choice;
                $(temp).css({"background-color":"black"});
                switch(e.which){
                    case 27: 
                    //rm_eventbox();
                    //event=false;
                    //b=0;
                    break;
                    //space key(will be used to select)
                    case 32:
                    handle_choice(temp);
                    break;
                    //down arrow
                    case 40:
                    //if(choice<=0){break;}
                    if(choice>choices.length-2){console.log("no more choices"); break;}
                    choice++;
                    break;
                    //right arrow
                    case 39:
                    break;
                   
                    //up arrow
                    case 38: 
                    if(choice<=0){break;}
                    choice--;
                    break;
                    //left arrow
                    case 37:
                    break;


                    break;
                    default: break;
                }
                temp = "#choice"+choice;
                $(temp).css({"background-color":"teal"});
            }
            //console.log(playerposid);
            //console.log(player_position);
            

          });


//why isn't this working? 
    $(".choice_text").on("click", function(){
        let m = $(this).text();
        console.log(m);
        handle_choice(m);

    });
    //function for interacting, pull up large ... absolute pos div that acts as game screen
        //get key or button input to talk, fight, and interact with the scenario
        //wire buttons to game logic*rolls damage etc*

    //