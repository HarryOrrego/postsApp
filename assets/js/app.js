$('document').ready(function(){

    // variables
    const _comunication = new Comunication();

    //funciones

    // const getUsers = () =>{
    //     let request = _comunication.getUsers();

    //     request.done( (response) =>{
    //           renderMainUsers(response);
    //     });       
    // }

    const getPosts = () =>{
        let request = _comunication.getPosts();

        request.done((response) =>{
            renderMainPosts(response);
        });        
    }

    const renderMainPosts = (posts) =>{
        let postsTemplate = '';
        posts.forEach((post)=>{
            postsTemplate += `
                        <div class="card " style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${post.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${post.id}</h6>
                <p class="card-text">${post.body}</p>
                </div>
            </div>
            <br>
        `
        });

        $('.main-posts').html(postsTemplate);
        
    }


    function Main(){
        getPosts();
        
    }

    Main();

});