$('document').ready(function(){

    // variables
    const _comunication = new Comunication();

    //funciones

    const getUsers = () =>{

        let request = _comunication.getUser();

        request.done( (response) => {
            console.log(response);
        });

        request.fail( (e) => {
            console.log("Error on getUsers", e);
        });        
    }
    

    function Main(){

        getUsers();
    }

    Main();

});