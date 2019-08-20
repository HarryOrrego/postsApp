class Comunication{

    service =  'https://jsonplaceholder.typicode.com/';

    endpoints = {
        getUsers : 'users',
        getPosts : 'posts',
        getComments : 'comments',
        getCommentsByPost : 'comments?postId'
    }

    getUsers(id = '' , async = true){
        return Utilities.DoRequest({
            url : this.service + this.endpoints.getUsers + '/' + id,
            async :async
        });   
    }

    getPosts(id = ''){
        return Utilities.DoRequest({
            url : this.service + this.endpoints.getPosts + '/' + id
        });
    }

    getComments(id = ''){
        return Utilities.DoRequest({
            url : this.service + this.endpoints.getComments + '/' + id
        });
    }

    GetCommentsByPost(id){
        return Utilities.DoRequest({
            url : this.service + this.endpoints.getCommentsByPost + '=' + id
        })
    };


}