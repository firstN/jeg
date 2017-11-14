function res_value(){
    document.getElementById('name').value='';
    document.getElementById('password').value='';
}

document.getElementById('submit').addEventListener('click',function (e) {
    e.preventDefault()
    let date = {
        "name": document.getElementById('name').value,
        "password":document.getElementById('password').value
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'back/hello', true);
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.send(JSON.stringify(date))
    xhr.onreadystatechange = function(){

        if (this.readyState == 4){
            let date_rr = JSON.parse(xhr.responseText)
           console.log(date_rr)

           
            
        } else {}
    }   
    res_value()
})
document.getElementById('serch').addEventListener('click',function (e) {
    e.preventDefault()
    let date = {
        "name": document.getElementById('name').value,
        "password":document.getElementById('password').value
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'back/hello/my', true);
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.send(JSON.stringify(date))
    xhr.onreadystatechange = function(){

        if (this.readyState == 4){
            let date_rr = JSON.parse(xhr.responseText)
           console.log(date_rr)

           
            
        } else {}
    }   
    res_value()
})
document.getElementById('New_promise_hello').addEventListener('click',function (e) {
    e.preventDefault()
    let date = {
        "name": document.getElementById('name').value,
        "password":document.getElementById('password').value
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'back/hello/promise', true);
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.send(JSON.stringify(date))
    xhr.onreadystatechange = function(){

        if (this.readyState == 4){
            let date_rr = JSON.parse(xhr.responseText)
           console.log(date_rr)

           
            
        } else {}
    }   
 
})
document.getElementById('mongoDB').addEventListener('click',function (e) {
    e.preventDefault()
    let date = {
        "name": document.getElementById('name').value,
        "password":document.getElementById('password').value
    }
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mongoDB/hi', true);
    xhr.setRequestHeader('Content-Type','application/json')
    
    xhr.send(JSON.stringify(date))
    xhr.onreadystatechange = function(){

        if (this.readyState == 4){
            let date_rr = JSON.parse(xhr.responseText)
           console.log(date_rr)

           
            
        } else {}
    }   
    res_value()
})