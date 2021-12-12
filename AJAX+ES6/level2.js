


function serchs(name,list)
{
console.log(name);
const xhr = new XMLHttpRequest()
xhr.open("get", "https://autumnfish.cn//search?keywords= "+name, true)
xhr.onreadystatechange = () => {
if (xhr.readyState === 4) {
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    const res = JSON.parse(xhr.responseText)
    console.log(res)
    console.log(res.result.songs.length);
    console.log(res.result.songs[0]);
    console.log("请求成功")
    for(let i=0;i<res.result.songs.length;i++)
    {
        const li=document.createElement("li");
        let text=res.result.songs[i].name+" "+res.result.songs[i].artists[0].name;
        li.innerHTML=text;
        list.insertBefore(li,list.children[0]);
    }
    } else {
        console.log("请求失败")
     }
}   
}
xhr.send()
}
