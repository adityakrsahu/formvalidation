function validation(){
    let nam = document.getElementById('nam').value;
    let username = document. getElementById ('username').value;
    let mob =parseInt( document . getElementById ('mob').value);
    let  maxmob =document.getElementById('mob').value;
    console.log(typeof(mob))
    console.log(typeof(mob))
    let pass = document.getElementById ('pass').value;
    let cpass = document.getElementById ('cpass').value;
    //console.log(nam,username,mob,pass,cpass);

    if(nam === ''){
        alert("please emter name")
        document.getElementById('nam').focus()
        return false
    }
    else if(username === ''){
        alert("please emter username")
        document.getElementById('username').focus()
        return false
    }
    else if (! username.includes('@gmail.com')){
        alert("@gmail.com must be include")
        return false;
    }
    else if(isNaN(mob)){
        alert("please emter mobile")
        document.getElementById('mob').focus()
        return false
    }
    else if (maxmob.length !==10){
        alert("please enter valid mobile ")
        return false;
    }
   
    else if(pass === ''){
        alert("please emter pass")
        document.getElementById('pass').focus()
        return false
    }
    else if (! pass.includes('@')){
        alert("@ must be include");
        return false;
    }

    else if(cpass === ''){
        alert("please emter cpass");
        document.getElementById('cpass').focus()
        return false
    }
    else if ( pass === cpass){
        alert("password not matched");
        return false;
    }

}