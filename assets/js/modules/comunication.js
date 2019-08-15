class Comunication{

    service =  'https://jsonplaceholder.typicode.com/';

    endpoints = {
        getUser : 'user',
        getPosts : 'posts',
        getComments : 'comments'
    }

    getUsers(id = ''){
        return Utilities.DoRequest({
            url : this.service + this.endpoints.getUser + '/' + id
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


}