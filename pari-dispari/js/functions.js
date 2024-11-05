function salutaLog(username, userAge){
    console.log(`Ciao ${username}, hai ${userAge} anni`);
};

function salutaPrint(username, userAge){
    document.writeln(`Ciao ${username}, hai ${userAge} anni`);
};

function saluta(username, userAge){
    const message = `Ciao ${username}, hai ${userAge} anni`
    return message;
};