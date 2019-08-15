class Utilities{
    
    /**
     * Params = {
     *  async : boolean,
     *  url : string,
     *  data : object,
     *  type : string {"GET" , "POST"}
     * }
     * @param {*} params 
     */
    static DoRequest(params)
    {
        if(!params.url)
            return null;

        if(params.async === null)
            params.async = true;

        if(params.type === null)
            params.type = "GET";

        params.contentType = "application/json";

        return $.ajax(params);
    }
}