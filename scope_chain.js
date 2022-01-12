function a(){
    var b = 100;
    c();

    function c(){
        console.log(b);
    }
}

a();