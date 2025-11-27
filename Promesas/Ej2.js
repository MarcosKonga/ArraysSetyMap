function primeraTarea() {
return new Promise((resolve) => {
    resolve(10);
})
}

function segundaTarea(tarea) {
return new Promise((resolve) => {
    resolve(tarea*2);
})
}

function terceraTarea(tarea) {
return new Promise((resolve) => {
    resolve(tarea+5);
})
}

primeraTarea()
.then((tarea) => {
    console.log(tarea);
    segundaTarea(tarea)
    .then((tarea) => {
        console.log(tarea)
        terceraTarea(tarea)
        .then((tarea) => {
            console.log(tarea);
        }) 
    })
})

