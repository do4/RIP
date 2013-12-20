/*
    RIP, REST in peace

    Version     : 0.1.0
    Author      : Aurélien Delogu (dev@dreamysource.fr)
    Homepage    : https://github.com/pyrsmk/RIP
    License     : MIT
*/

this.RIP={

    /*
        Map a custom request

        Parameters
            String method
            String url
            Object data
    */
    map:function(method,url,data){
        // Define method
        if(data===undefined){
            data={};
        }
        data._METHOD=method;
        // Prepare form
        var form=document.createElement('form'),
            inputs;
        document.getElementsByTagName('body')[0].appendChild(form);
        form.setAttribute('action',url);
        form.setAttribute('method','post');
        // Add data
        for(var name in data){
            if(data[name] instanceof Array){
                for(var i=0,j=data[name].length;i<j;++i){
                    inputs+='<input type="hidden" name="'+name+'[]" value="'+data[name][i]+'">';
                }
            }
            else{
                inputs+='<input type="hidden" name="'+name+'" value="'+data[name]+'">';
            }
        }
        form.innerHTML=inputs;
        // Submit!
        form.submit();
    },

    /*
        POST request

        Parameters
            String url
            Object data
    */
    POST:function(url,data){
        this.map('POST',url,data);
    },

    /*
        PUT request

        Parameters
            String url
            Object data
    */
    PUT:function(url,data){
        this.map('PUT',url,data);
    },

    /*
        DELETE request

        Parameters
            String url
            Object data
    */
    DELETE:function(url,data){
        this.map('DELETE',url,data);
    }

};
