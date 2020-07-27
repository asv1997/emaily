//this file will not be committed to the git
//figure out what set of keys to return


if(process.env.NODE_ENV === 'production'){
    //return prod set of keys
    module.exports =  require('./prod');
}

else{
    //return dev set of keys
   module.exports =  require('./dev');

}