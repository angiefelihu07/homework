const getPromesa = () => {return new promise ( (resolve, reject) => {
    resolve( 'hello world');
})
}

getPromesa()
.then( data => {
    console.log(data)
})
.catch( error =>{
    console.error( error)
});