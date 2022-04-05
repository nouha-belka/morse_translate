const crypt = new Map([
     ['a','._' ], 
     ['b','_...' ], 
     ['c','_._.'], 
     ['d','_..'], 
     ['e','.'], 
     ['f','.._.'], 
     ['g','__.'], 
     ['h','....'], 
     ['i','..'],
     ['j','.___'], 
     ['k','_._'], 
     ['l','._..'], 
     ['m','__'], 
     ['n','_.'], 
     ['o','___'],
     ['p','.__.'], 
     ['q','__._'], 
     ['r','._.'], 
     ['s','...'], 
     ['t','_'], 
     ['u','.._'], 
     ['v','..._'], 
     ['w','.__'], 
     ['x','_.._'], 
     ['y','_.__'], 
     ['z','__..'],
     [' ','/'],
    ]);

const reversed = new Map([ 
    ['._', 'a'], 
    ['_...', 'b'],
    ['_._.', 'c'], 
    ['_..', 'd'], 
    ['.', 'e'], 
    ['.._.', 'f'], 
    ['__.', 'g'], 
    ['....', 'h'], 
    ['..', 'i'], 
    ['.___', 'j'], 
    ['_._', 'k'], 
    ['._..', 'l'], 
    ['__', 'm'], 
    ['_.', 'n'], 
    ['___', 'o'], 
    ['.__.', 'p'], 
    ['__._', 'q'], 
    ['._.', 'r'], 
    ['...', 's'], 
    ['_', 't'], 
    ['.._', 'u'], 
    ['..._', 'v'], 
    ['.__', 'w'], 
    ['_.._', 'x'], 
    ['_.__', 'y'], 
    ['__..', 'z'],
    ['/', " "] 
]);

function translateToMorse(word){
    letter = "";
    for(let i = 0; i < word.length; i++){
        letter += crypt.get(word[i]);
        letter += " ";
    }
    return letter;
}

function translateCode(code){
    translation = ""
    splitCode = code.split(" ")
    for (let i=0; i<splitCode.length; i++){
        translation += reversed.get(splitCode[i])
    }
    return translation
}

function encryptWord(){
    word = document.getElementById("inputWord").value
    if(document.getElementById("changeSate").innerText == "morse to word"){
        document.getElementById("translateWord").value = translateCode(word);
    }else{
        //console.log(word)
        document.getElementById("translateWord").value = translateToMorse(word);
    }   
    
}

function changeState(){
    if(document.getElementById("changeSate").innerText == "morse to word"){
        document.getElementById("changeSate").innerText = "word to morse";
    }
    else{
        document.getElementById("changeSate").innerText = "morse to word";
    }
    
}


