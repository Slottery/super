
function a(option)
{
    this.type=option.tpye;
    this.url=option.url;
    this.data=option.data;
    this.async=option.async;
    function success()
    {

    }
}
function objToString(obj)
{
    if(Object.prototype.toString.call(obj)==='[object Object]')
    {
        let arr =[];
        for(let i in obj)
        {
            arr.push(i+'='+obj[i]);
        }
        return arr.join('&');
    }
}
function ajax(option)
{
    let ajax =new XMLHttpRequest();
    option.tpye=option || "get";
    if(!option.url)
    {
        alert("接口地址不为空");
    }
    if(option.data && Object.prototype.toString.call(option.data)==='[object Object]')
    {
        option.data=objToString(option.data);
    }
    if(option.data && option.tpye ==="get")
    {
        option.url=option.url+"?"+option.data;
        console.log(option.url+"?"+option.data);
    }
    
    if(option.async ==="false" || option.async === false)
    {
        option.async =false;
    }
    ajax.open(option.tpye,option.url,option.async);
    if(option.data && option.tpye==="post")
    {
        ajax.setRequestHeader('content-type','application/x-www-form-urlencoded');
        ajax.send(option.data);
    }else
    {
        ajax.send;
    }
    if(option.async)
    {
       ajax.onreadystatechange =function()
       {
        if(ajax.readyState===4)
        {
            if(ajax.status>=200&&ajax.status<300)
            {
                const res = JSON.parse(xhr.responseText)
                option.success(res);
            }
            else
            {
                console.log("false");
            }
        }
       }
    }
    else
    {
        if(ajax.readyState===4)
        {
            if(ajax.status>=200&&ajax.status<300)
            {
                const res = JSON.parse(xhr.responseText)
                option.success(res);
            }
            else
            {
                console.log("false");
            }
        }
    }
}

