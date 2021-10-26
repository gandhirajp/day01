var data=new XMLHttpRequest();

data.open('GET','https://restcountries.com/v2/all',true);

data.send();

data.onload=function(){
    var value=JSON.parse(data.response)

    console.log(value);
     let ab=value.filter((element)=>element.population<100000);
    console.log (ab);
    
}

