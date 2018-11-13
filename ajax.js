
function loadDoc(){
var getHttpRequest = function(){
    var http_Request = false;
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_Request = new XMLHttpRequest();
        if (http_Request.overrideMimeType) {
            http_Request.overrideMimeType('text/xml');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_Request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_Request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_Request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
 return http_Request
}
var httpRequest = getHttpRequest()
httpRequest.open('GET','https://thatsthespir.it/api',true)
httpRequest.onreadystatechange = function(){
   if(this.readyState === 4){
    var myobject = JSON.parse(this.responseText)
    document.getElementById('quote-text').innerHTML = myobject.quote;
    document.getElementById('quote-autor').innerHTML = myobject.author;
   }
};
httpRequest.send()
}