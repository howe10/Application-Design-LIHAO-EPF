export function parseUrl() {
    const url = window.location;
    const query = url.href.split('?')[1] || '';
    const delimiter = '&'; 
    const result ={};
    var parts = query.split(delimiter); 
 console.log(parts.map(item =>item.split("=")).reduce((prev,next)=>{prev[next[0]]=next[1] 
    return prev;} ,result));
    return result;
  }

  