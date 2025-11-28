// fetche methods

// GET

fetch("http://localhost:3000/Details")
.then(res=>res.json())
.then(data=>console.log(data))
.catch(data=>console.log(data))

// POST

let options1={
    "method":"POST",
    "headers":{
        "content-Type":"Application/json"
    },
    "body":JSON.stringify(
        {
        "id":"4",
        "name":"yoshi"
    })
}
fetch("http://localhost:3000/Details",options1)
.then(res=>res.json())
.then(data=>console.log(data))
.catch(data=>console.log(data))


//  PUT

let options2={
    "method":"PUT",
    "headers":{
        "content-Type":"Application/json"
    },
    "body":JSON.stringify(
        {
        "id":"4",
        "name":"anjali"
    })
}
fetch("http://localhost:3000/Details/4",options2)
.then(res=>res.json())
.then(data=>console.log(data))
.catch(data=>console.log(data))

// PATCH

let options3={
    "method":"PATCH",
    "headers":{
        "content-Type":"Application/json"
    },
    "body":JSON.stringify(
        {
        "id":"4",
        "name":"ramya"
    })
}
fetch("http://localhost:3000/Details/4",options3)
.then(res=>res.json())
.then(data=>console.log(data))
.catch(data=>console.log(data))

// DELETE

let options4={
    "method":"DELETE"
}
fetch("http://localhost:3000/Details/4",options4)
.then(res=>res.json())
.then(data=>console.log(data))
.catch(data=>console.log(data))


// DELETE ALL

fetch("http://localhost:3000/Details")
.then(res=>res.json())
.then(data=>{
    for(var i=0;i<data.length;i++){
        fetch(`http://localhost:3000/Details/${data[i].id}`,{"method":"DELETE"})
        .then(res=>{
            if(res.ok){
                console.log(res.status,res.statusText)
            }
            else{
                console.log("data not deleted")
            }
        }).catch(data=>console.log(data))
    }
})

// POST ALL

let data=[
    { "id":"1","name":"puja"},
    { "id" : "2","name":"mahi"},
    {"id" : "3","name":"hema"}
]

let options={
    "method":"POST",
    "headers":{
        "content-Type":"Application/json"
    }
}

for(var i=0;i<data.length;i++){
    let obj=data[i];
    options.body=JSON.stringify(obj)
    fetch("http://localhost:3000/Details",options)
    .then(res=>{
        if(res.ok){
            console.log(res.status,res.statusText)
        }
        else{
            console.log("data not posted")
        }
    }).catch(res=>console.log(res))
}



