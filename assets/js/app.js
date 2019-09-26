$('document').ready(function () {

    // variables
    const _comunication = new Comunication();

    //funciones

    // const getUsers = () =>{
    //     let request = _comunication.getUsers();

    //     request.done( (response) =>{
    //           renderMainUsers(response);
    //     });       
    // }
    const getPosts = () => {
        $('#loader').show();
        let request = _comunication.getPosts();

        request.done((response) => {
            renderMainPosts(response);
        });


    }

    const renderMainPosts = (posts, pag_init = 0) => {
        let postsTemplate = '';
        for (var i = pag_init; i < pag_init + 10; i++) {
            let post = posts[i];
            let userPostRequest = _comunication.getUsers(post.userId, false);
            let commentByPost = _comunication.GetCommentsByPost(post.id);           
          
            userPostRequest.done(function (user) {
                postsTemplate += `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${user.name}</h6>
                        <p class="card-text">${post.body}</p>
                        <p class="card-footer">${user.email}</p>
                    </div>
                </div>
                <br>`;
            });
        }

        $('#loader').hide();
        $('.main-posts').html(postsTemplate);

    }

    function Main() {
        getPosts();

    }

    Main();

});