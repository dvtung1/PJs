const dcE =(t,a,b,c,d)=>{let l=a?a.length?a.length:0:0,k=b?b.length?b.length:0:0,y=c?c.length?c.length:0:0,p=d?d.length?d.length:0:0,e=document.createElement(t);while(l--)e.setAttribute(a[l][0],a[l][1]);while(k--)e[b[k][0]]=b[k][1];while(y--)e.appendChild(c[y]);while(p--)e.addEventListener(d[p][0],d[p][1]);return e;}
