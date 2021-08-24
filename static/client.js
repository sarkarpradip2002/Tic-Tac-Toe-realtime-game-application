const socket=io("/");

const serversymbol='o';
const name=prompt("Enter your name to join the chat");
const joining=document.getElementById('joining');

var first=document.getElementById('number1');
var second=document.getElementById('number2');
var third=document.getElementById('number3');
var fourth=document.getElementById('number4');
var fifth=document.getElementById('number5');
var sixth=document.getElementById('number6');
var seventh=document.getElementById('number7');
var eighth=document.getElementById('number8');
var ninth=document.getElementById('number9');

append_join=(message)=>{
    let create=document.createElement('h2')
    create.classList.add('joined');
    create.innerHTML=message;
    joining.appendChild(create);
}

append_result=(message)=>{
    let create=document.createElement('h2')
    create.classList.add('joined');
    create.innerHTML=message;
    joining.appendChild(create);
}
append_join(`You joined the game`);

socket.emit('new-joiner',name);

socket.on('joined',(name)=>{
  append_join(`${name} joined the game`);
})

symbol1=()=>{
    first.innerHTML='x';
    socket.emit('start-game-1',serversymbol);
    if((first.innerHTML=='x'&&second.innerHTML=='x'&&third.innerHTML=='x') || (first.innerHTML=='x'&&fourth.innerHTML=='x'&&seventh.innerHTML=='x') || (first.innerHTML=='x'&&fifth.innerHTML=='x'&&ninth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-1',symbol=>{
    first.innerHTML=symbol;
})

symbol2=()=>{
    second.innerHTML='x';
    socket.emit('start-game-2',serversymbol);
    if((first.innerHTML=='x'&&second.innerHTML=='x'&&third.innerHTML=='x') || (second.innerHTML=='x'&&fifth.innerHTML=='x'&&eighth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-2',symbol=>{
    second.innerHTML=symbol;
})

symbol3=()=>{
    third.innerHTML='x';
    socket.emit('start-game-3',serversymbol);
    if((first.innerHTML=='x'&&second.innerHTML=='x'&&third.innerHTML=='x') || (third.innerHTML=='x'&&sixth.innerHTML=='x'&&ninth.innerHTML=='x') || (third.innerHTML=='x'&&fifth.innerHTML=='x'&&seventh.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-3',symbol=>{
    third.innerHTML=symbol;
})

symbol4=()=>{
    fourth.innerHTML='x';
    socket.emit('start-game-4',serversymbol);
    if((first.innerHTML=='x'&&fourth.innerHTML=='x'&&seventh.innerHTML=='x') || (fourth.innerHTML=='x'&&fifth.innerHTML=='x'&&sixth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-4',symbol=>{
   fourth.innerHTML=symbol;
})

symbol5=()=>{
    fifth.innerHTML='x';
    socket.emit('start-game-5',serversymbol);
    if((first.innerHTML=='x'&&fifth.innerHTML=='x'&&ninth.innerHTML=='x') || (third.innerHTML=='x'&&fifth.innerHTML=='x'&&seventh.innerHTML=='x') || (second.innerHTML=='x'&&fifth.innerHTML=='x'&&eighth.innerHTML=='x') || (fourth.innerHTML=='x'&&fifth.innerHTML=='x'&&sixth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-5',symbol=>{
    fifth.innerHTML=symbol;
})

symbol6=()=>{
    sixth.innerHTML='x';
    socket.emit('start-game-6',serversymbol);
    if((third.innerHTML=='x'&&sixth.innerHTML=='x'&&ninth.innerHTML=='x') || (sixth.innerHTML=='x'&&fifth.innerHTML=='x'&&fourth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-6',symbol=>{
    sixth.innerHTML=symbol;
})

symbol7=()=>{
    seventh.innerHTML='x';
    socket.emit('start-game-7',serversymbol);
    if((first.innerHTML=='x'&&fourth.innerHTML=='x'&&seventh.innerHTML=='x') || (seventh.innerHTML=='x'&&fifth.innerHTML=='x'&&third.innerHTML=='x') || (seventh.innerHTML=='x'&&eighth.innerHTML=='x'&&ninth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-7',symbol=>{
    seventh.innerHTML=symbol;
})

symbol8=()=>{
    eighth.innerHTML='x';
    socket.emit('start-game-8',serversymbol);
    if((seventh.innerHTML=='x'&&eighth.innerHTML=='x'&&ninth.innerHTML=='x') || (eighth.innerHTML=='x'&&fifth.innerHTML=='x'&&second.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-8',symbol=>{
    eighth.innerHTML=symbol;
})

symbol9=()=>{
    ninth.innerHTML='x';
    socket.emit('start-game-9',serversymbol);
    if((third.innerHTML=='x'&&sixth.innerHTML=='x'&&ninth.innerHTML=='x') || (ninth.innerHTML=='x'&&fifth.innerHTML=='x'&&first.innerHTML=='x') || (ninth.innerHTML=='x'&&seventh.innerHTML=='x'&&eighth.innerHTML=='x'))
    {
        append_result(`You win the match`);
        socket.emit('check-win',name);
    }
    else if((first.innerHTML=='x'||first.innerHTML=='o')&&(second.innerHTML=='x'||second.innerHTML=='o')&&(third.innerHTML=='x'||third.innerHTML=='o')&&(fourth.innerHTML=='x'||fourth.innerHTML=='o')&&(fifth.innerHTML=='x'||fifth.innerHTML=='o')&&(sixth.innerHTML=='x'||sixth.innerHTML=='o')&&(seventh.innerHTML='x'||seventh.innerHTML=='o')&&(eighth.innerHTML=='x'||eighth.innerHTML=='o')&&(ninth.innerHTML=='x'||ninth.innerHTML=='o'))
    {
        append_result(`Game Over!!!Match Drawn`);
        socket.emit('match-drawn','Game Over!!!Match Drawn');
    }
}
socket.on('game-9',symbol=>{
    ninth.innerHTML=symbol;
})

socket.on('drawn',message=>{
    append_result(`Game Over!!!Match Drawn`);
})
socket.on('result',name=>{
    append_result(`${name} win the match`);
 })

 socket.on('leave',name=>{
    append_result(`${name} leave the game!! You win!!`);
 })
