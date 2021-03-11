function show(){
    var j = "j a local variable of outer function";
    document.write(j +"<br>");
    function innerfun(){
        var k = "k a local variable of inner function";
        document.write(k +"<br>");
        document.write(j +"<br>");
    }
    innerfun()
}
show();