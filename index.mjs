// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-iteration-order@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-minmax-view-buffer-index@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-tiling-block-size@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.2-esm/index.mjs";var i="throw";var c="throw";var n=[function(o,r,s,f,t){var a=o.offset,e=r.offset,d=f.call(t,o.data[a],0,[a,e],[o,r]);void 0!==d&&(r.data[e]=s(d))},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h;for(c=o.shape[0],d=o.strides[0],i=r.strides[0],n=o.offset,l=r.offset,a=o.data,e=r.data,h=0,v=0;v<c;v++)void 0!==(p=f.call(t,a[n],h,[n,l],[o,r]))&&(e[l]=s(p)),n+=d,l+=i,h+=1},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b;for(l=o.shape,h=o.strides,y=r.strides,"row-major"===o.order?(v=l[1],p=l[0],d=h[1],i=h[0]-v*h[1],c=y[1],n=y[0]-v*y[1]):(v=l[0],p=l[1],d=h[0],i=h[1]-v*h[0],c=y[0],n=y[1]-v*y[0]),m=o.offset,u=r.offset,a=o.data,e=r.data,b=0,x=0;x<p;x++){for(j=0;j<v;j++)void 0!==(w=f.call(t,a[m],b,[m,u],[o,r]))&&(e[u]=s(w)),m+=d,u+=c,b+=1;m+=i,u+=n}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E;for(p=o.shape,u=o.strides,j=r.strides,"row-major"===o.order?(h=p[2],y=p[1],m=p[0],d=u[2],i=u[1]-h*u[2],c=u[0]-y*u[1],n=j[2],l=j[1]-h*j[2],v=j[0]-y*j[1]):(h=p[0],y=p[1],m=p[2],d=u[0],i=u[1]-h*u[0],c=u[2]-y*u[1],n=j[0],l=j[1]-h*j[0],v=j[2]-y*j[1]),x=o.offset,w=r.offset,a=o.data,e=r.data,E=0,P=0;P<m;P++){for(g=0;g<y;g++){for(b=0;b<h;b++)void 0!==(k=f.call(t,a[x],E,[x,w],[o,r]))&&(e[w]=s(k)),x+=d,w+=n,E+=1;x+=i,w+=l}x+=c,w+=v}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q;for(y=o.shape,w=o.strides,b=r.strides,"row-major"===o.order?(m=y[3],u=y[2],j=y[1],x=y[0],d=w[3],i=w[2]-m*w[3],c=w[1]-u*w[2],n=w[0]-j*w[1],l=b[3],v=b[2]-m*b[3],p=b[1]-u*b[2],h=b[0]-j*b[1]):(m=y[0],u=y[1],j=y[2],x=y[3],d=w[0],i=w[1]-m*w[0],c=w[2]-u*w[1],n=w[3]-j*w[2],l=b[0],v=b[1]-m*b[0],p=b[2]-u*b[1],h=b[3]-j*b[2]),g=o.offset,P=r.offset,a=o.data,e=r.data,q=0,A=0;A<x;A++){for(z=0;z<j;z++){for(E=0;E<u;E++){for(k=0;k<m;k++)void 0!==(N=f.call(t,a[g],q,[g,P],[o,r]))&&(e[P]=s(N)),g+=d,P+=l,q+=1;g+=i,P+=v}g+=c,P+=p}g+=n,P+=h}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F;for(u=o.shape,P=o.strides,k=r.strides,"row-major"===o.order?(j=u[4],x=u[3],w=u[2],b=u[1],g=u[0],d=P[4],i=P[3]-j*P[4],c=P[2]-x*P[3],n=P[1]-w*P[2],l=P[0]-b*P[1],v=k[4],p=k[3]-j*k[4],h=k[2]-x*k[3],y=k[1]-w*k[2],m=k[0]-b*k[1]):(j=u[0],x=u[1],w=u[2],b=u[3],g=u[4],d=P[0],i=P[1]-j*P[0],c=P[2]-x*P[1],n=P[3]-w*P[2],l=P[4]-b*P[3],v=k[0],p=k[1]-j*k[0],h=k[2]-x*k[1],y=k[3]-w*k[2],m=k[4]-b*k[3]),E=o.offset,z=r.offset,a=o.data,e=r.data,F=0,C=0;C<g;C++){for(B=0;B<b;B++){for(q=0;q<w;q++){for(N=0;N<x;N++){for(A=0;A<j;A++)void 0!==(D=f.call(t,a[E],F,[E,z],[o,r]))&&(e[z]=s(D)),E+=d,z+=v,F+=1;E+=i,z+=p}E+=c,z+=h}E+=n,z+=y}E+=l,z+=m}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J;for(x=o.shape,z=o.strides,A=r.strides,"row-major"===o.order?(w=x[5],b=x[4],g=x[3],P=x[2],k=x[1],E=x[0],d=z[5],i=z[4]-w*z[5],c=z[3]-b*z[4],n=z[2]-g*z[3],l=z[1]-P*z[2],v=z[0]-k*z[1],p=A[5],h=A[4]-w*A[5],y=A[3]-b*A[4],m=A[2]-g*A[3],u=A[1]-P*A[2],j=A[0]-k*A[1]):(w=x[0],b=x[1],g=x[2],P=x[3],k=x[4],E=x[5],d=z[0],i=z[1]-w*z[0],c=z[2]-b*z[1],n=z[3]-g*z[2],l=z[4]-P*z[3],v=z[5]-k*z[4],p=A[0],h=A[1]-w*A[0],y=A[2]-b*A[1],m=A[3]-g*A[2],u=A[4]-P*A[3],j=A[5]-k*A[4]),N=o.offset,q=r.offset,a=o.data,e=r.data,J=0,H=0;H<E;H++){for(G=0;G<k;G++){for(F=0;F<P;F++){for(D=0;D<g;D++){for(C=0;C<b;C++){for(B=0;B<w;B++)void 0!==(I=f.call(t,a[N],J,[N,q],[o,r]))&&(e[q]=s(I)),N+=d,q+=p,J+=1;N+=i,q+=h}N+=c,q+=y}N+=n,q+=m}N+=l,q+=u}N+=v,q+=j}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O;for(b=o.shape,q=o.strides,B=r.strides,"row-major"===o.order?(g=b[6],P=b[5],k=b[4],E=b[3],z=b[2],A=b[1],N=b[0],d=q[6],i=q[5]-g*q[6],c=q[4]-P*q[5],n=q[3]-k*q[4],l=q[2]-E*q[3],v=q[1]-z*q[2],p=q[0]-A*q[1],h=B[6],y=B[5]-g*B[6],m=B[4]-P*B[5],u=B[3]-k*B[4],j=B[2]-E*B[3],x=B[1]-z*B[2],w=B[0]-A*B[1]):(g=b[0],P=b[1],k=b[2],E=b[3],z=b[4],A=b[5],N=b[6],d=q[0],i=q[1]-g*q[0],c=q[2]-P*q[1],n=q[3]-k*q[2],l=q[4]-E*q[3],v=q[5]-z*q[4],p=q[6]-A*q[5],h=B[0],y=B[1]-g*B[0],m=B[2]-P*B[1],u=B[3]-k*B[2],j=B[4]-E*B[3],x=B[5]-z*B[4],w=B[6]-A*B[5]),C=o.offset,D=r.offset,a=o.data,e=r.data,O=0,L=0;L<N;L++){for(K=0;K<A;K++){for(J=0;J<z;J++){for(I=0;I<E;I++){for(H=0;H<k;H++){for(G=0;G<P;G++){for(F=0;F<g;F++)void 0!==(M=f.call(t,a[C],O,[C,D],[o,r]))&&(e[D]=s(M)),C+=d,D+=h,O+=1;C+=i,D+=y}C+=c,D+=m}C+=n,D+=u}C+=l,D+=j}C+=v,D+=x}C+=p,D+=w}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T;for(P=o.shape,D=o.strides,F=r.strides,"row-major"===o.order?(k=P[7],E=P[6],z=P[5],A=P[4],N=P[3],q=P[2],B=P[1],C=P[0],d=D[7],i=D[6]-k*D[7],c=D[5]-E*D[6],n=D[4]-z*D[5],l=D[3]-A*D[4],v=D[2]-N*D[3],p=D[1]-q*D[2],h=D[0]-B*D[1],y=F[7],m=F[6]-k*F[7],u=F[5]-E*F[6],j=F[4]-z*F[5],x=F[3]-A*F[4],w=F[2]-N*F[3],b=F[1]-q*F[2],g=F[0]-B*F[1]):(k=P[0],E=P[1],z=P[2],A=P[3],N=P[4],q=P[5],B=P[6],C=P[7],d=D[0],i=D[1]-k*D[0],c=D[2]-E*D[1],n=D[3]-z*D[2],l=D[4]-A*D[3],v=D[5]-N*D[4],p=D[6]-q*D[5],h=D[7]-B*D[6],y=F[0],m=F[1]-k*F[0],u=F[2]-E*F[1],j=F[3]-z*F[2],x=F[4]-A*F[3],w=F[5]-N*F[4],b=F[6]-q*F[5],g=F[7]-B*F[6]),G=o.offset,H=r.offset,a=o.data,e=r.data,T=0,R=0;R<C;R++){for(Q=0;Q<B;Q++){for(O=0;O<q;O++){for(M=0;M<N;M++){for(L=0;L<A;L++){for(K=0;K<z;K++){for(J=0;J<E;J++){for(I=0;I<k;I++)void 0!==(S=f.call(t,a[G],T,[G,H],[o,r]))&&(e[H]=s(S)),G+=d,H+=y,T+=1;G+=i,H+=m}G+=c,H+=u}G+=n,H+=j}G+=l,H+=x}G+=v,H+=w}G+=p,H+=b}G+=h,H+=g}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X;for(E=o.shape,H=o.strides,I=r.strides,"row-major"===o.order?(z=E[8],A=E[7],N=E[6],q=E[5],B=E[4],C=E[3],D=E[2],F=E[1],G=E[0],d=H[8],i=H[7]-z*H[8],c=H[6]-A*H[7],n=H[5]-N*H[6],l=H[4]-q*H[5],v=H[3]-B*H[4],p=H[2]-C*H[3],h=H[1]-D*H[2],y=H[0]-F*H[1],m=I[8],u=I[7]-z*I[8],j=I[6]-A*I[7],x=I[5]-N*I[6],w=I[4]-q*I[5],b=I[3]-B*I[4],g=I[2]-C*I[3],P=I[1]-D*I[2],k=I[0]-F*I[1]):(z=E[0],A=E[1],N=E[2],q=E[3],B=E[4],C=E[5],D=E[6],F=E[7],G=E[8],d=H[0],i=H[1]-z*H[0],c=H[2]-A*H[1],n=H[3]-N*H[2],l=H[4]-q*H[3],v=H[5]-B*H[4],p=H[6]-C*H[5],h=H[7]-D*H[6],y=H[8]-F*H[7],m=I[0],u=I[1]-z*I[0],j=I[2]-A*I[1],x=I[3]-N*I[2],w=I[4]-q*I[3],b=I[5]-B*I[4],g=I[6]-C*I[5],P=I[7]-D*I[6],k=I[8]-F*I[7]),J=o.offset,K=r.offset,a=o.data,e=r.data,X=0,V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<N;O++){for(M=0;M<A;M++){for(L=0;L<z;L++)void 0!==(W=f.call(t,a[J],X,[J,K],[o,r]))&&(e[K]=s(W)),J+=d,K+=m,X+=1;J+=i,K+=u}J+=c,K+=j}J+=n,K+=x}J+=l,K+=w}J+=v,K+=b}J+=p,K+=g}J+=h,K+=P}J+=y,K+=k}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_;for(A=o.shape,K=o.strides,L=r.strides,"row-major"===o.order?(N=A[9],q=A[8],B=A[7],C=A[6],D=A[5],F=A[4],G=A[3],H=A[2],I=A[1],J=A[0],d=K[9],i=K[8]-N*K[9],c=K[7]-q*K[8],n=K[6]-B*K[7],l=K[5]-C*K[6],v=K[4]-D*K[5],p=K[3]-F*K[4],h=K[2]-G*K[3],y=K[1]-H*K[2],m=K[0]-I*K[1],u=L[9],j=L[8]-N*L[9],x=L[7]-q*L[8],w=L[6]-B*L[7],b=L[5]-C*L[6],g=L[4]-D*L[5],P=L[3]-F*L[4],k=L[2]-G*L[3],E=L[1]-H*L[2],z=L[0]-I*L[1]):(N=A[0],q=A[1],B=A[2],C=A[3],D=A[4],F=A[5],G=A[6],H=A[7],I=A[8],J=A[9],d=K[0],i=K[1]-N*K[0],c=K[2]-q*K[1],n=K[3]-B*K[2],l=K[4]-C*K[3],v=K[5]-D*K[4],p=K[6]-F*K[5],h=K[7]-G*K[6],y=K[8]-H*K[7],m=K[9]-I*K[8],u=L[0],j=L[1]-N*L[0],x=L[2]-q*L[1],w=L[3]-B*L[2],b=L[4]-C*L[3],g=L[5]-D*L[4],P=L[6]-F*L[5],k=L[7]-G*L[6],E=L[8]-H*L[7],z=L[9]-I*L[8]),M=o.offset,O=r.offset,a=o.data,e=r.data,_=0,Z=0;Z<J;Z++){for(Y=0;Y<I;Y++){for(X=0;X<H;X++){for(W=0;W<G;W++){for(V=0;V<F;V++){for(U=0;U<D;U++){for(T=0;T<C;T++){for(S=0;S<B;S++){for(R=0;R<q;R++){for(Q=0;Q<N;Q++)void 0!==($=f.call(t,a[M],_,[M,O],[o,r]))&&(e[O]=s($)),M+=d,O+=u,_+=1;M+=i,O+=j}M+=c,O+=x}M+=n,O+=w}M+=l,O+=b}M+=v,O+=g}M+=p,O+=P}M+=h,O+=k}M+=y,O+=E}M+=m,O+=z}}],l=[function(o,r,s,f,t){var a=o.offset,e=r.offset,d=f.call(t,o.accessors[0](o.data,a),0,[a,e],[o,r]);void 0!==d&&r.accessors[1](r.data,e,s(d))},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m;for(l=o.shape[0],c=o.strides[0],n=r.strides[0],v=o.offset,p=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],m=0,h=0;h<l;h++)void 0!==(y=f.call(t,d(a,v),m,[v,p],[o,r]))&&i(e,p,s(y)),v+=c,p+=n,m+=1},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P;for(p=o.shape,m=o.strides,u=r.strides,"row-major"===o.order?(h=p[1],y=p[0],c=m[1],n=m[0]-h*m[1],l=u[1],v=u[0]-h*u[1]):(h=p[0],y=p[1],c=m[0],n=m[1]-h*m[0],l=u[0],v=u[1]-h*u[0]),j=o.offset,x=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],P=0,b=0;b<y;b++){for(w=0;w<h;w++)void 0!==(g=f.call(t,d(a,j),P,[j,x],[o,r]))&&i(e,x,s(g)),j+=c,x+=l,P+=1;j+=n,x+=v}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A;for(y=o.shape,x=o.strides,w=r.strides,"row-major"===o.order?(m=y[2],u=y[1],j=y[0],c=x[2],n=x[1]-m*x[2],l=x[0]-u*x[1],v=w[2],p=w[1]-m*w[2],h=w[0]-u*w[1]):(m=y[0],u=y[1],j=y[2],c=x[0],n=x[1]-m*x[0],l=x[2]-u*x[1],v=w[0],p=w[1]-m*w[0],h=w[2]-u*w[1]),b=o.offset,g=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],A=0,E=0;E<j;E++){for(k=0;k<u;k++){for(P=0;P<m;P++)void 0!==(z=f.call(t,d(a,b),A,[b,g],[o,r]))&&i(e,g,s(z)),b+=c,g+=v,A+=1;b+=n,g+=p}b+=l,g+=h}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C;for(u=o.shape,g=o.strides,P=r.strides,"row-major"===o.order?(j=u[3],x=u[2],w=u[1],b=u[0],c=g[3],n=g[2]-j*g[3],l=g[1]-x*g[2],v=g[0]-w*g[1],p=P[3],h=P[2]-j*P[3],y=P[1]-x*P[2],m=P[0]-w*P[1]):(j=u[0],x=u[1],w=u[2],b=u[3],c=g[0],n=g[1]-j*g[0],l=g[2]-x*g[1],v=g[3]-w*g[2],p=P[0],h=P[1]-j*P[0],y=P[2]-x*P[1],m=P[3]-w*P[2]),k=o.offset,E=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],C=0,q=0;q<b;q++){for(N=0;N<w;N++){for(A=0;A<x;A++){for(z=0;z<j;z++)void 0!==(B=f.call(t,d(a,k),C,[k,E],[o,r]))&&i(e,E,s(B)),k+=c,E+=p,C+=1;k+=n,E+=h}k+=l,E+=y}k+=v,E+=m}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H;for(x=o.shape,E=o.strides,z=r.strides,"row-major"===o.order?(w=x[4],b=x[3],g=x[2],P=x[1],k=x[0],c=E[4],n=E[3]-w*E[4],l=E[2]-b*E[3],v=E[1]-g*E[2],p=E[0]-P*E[1],h=z[4],y=z[3]-w*z[4],m=z[2]-b*z[3],u=z[1]-g*z[2],j=z[0]-P*z[1]):(w=x[0],b=x[1],g=x[2],P=x[3],k=x[4],c=E[0],n=E[1]-w*E[0],l=E[2]-b*E[1],v=E[3]-g*E[2],p=E[4]-P*E[3],h=z[0],y=z[1]-w*z[0],m=z[2]-b*z[1],u=z[3]-g*z[2],j=z[4]-P*z[3]),A=o.offset,N=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],H=0,F=0;F<k;F++){for(D=0;D<P;D++){for(C=0;C<g;C++){for(B=0;B<b;B++){for(q=0;q<w;q++)void 0!==(G=f.call(t,d(a,A),H,[A,N],[o,r]))&&i(e,N,s(G)),A+=c,N+=h,H+=1;A+=n,N+=y}A+=l,N+=m}A+=v,N+=u}A+=p,N+=j}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L;for(b=o.shape,N=o.strides,q=r.strides,"row-major"===o.order?(g=b[5],P=b[4],k=b[3],E=b[2],z=b[1],A=b[0],c=N[5],n=N[4]-g*N[5],l=N[3]-P*N[4],v=N[2]-k*N[3],p=N[1]-E*N[2],h=N[0]-z*N[1],y=q[5],m=q[4]-g*q[5],u=q[3]-P*q[4],j=q[2]-k*q[3],x=q[1]-E*q[2],w=q[0]-z*q[1]):(g=b[0],P=b[1],k=b[2],E=b[3],z=b[4],A=b[5],c=N[0],n=N[1]-g*N[0],l=N[2]-P*N[1],v=N[3]-k*N[2],p=N[4]-E*N[3],h=N[5]-z*N[4],y=q[0],m=q[1]-g*q[0],u=q[2]-P*q[1],j=q[3]-k*q[2],x=q[4]-E*q[3],w=q[5]-z*q[4]),B=o.offset,C=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],L=0,J=0;J<A;J++){for(I=0;I<z;I++){for(H=0;H<E;H++){for(G=0;G<k;G++){for(F=0;F<P;F++){for(D=0;D<g;D++)void 0!==(K=f.call(t,d(a,B),L,[B,C],[o,r]))&&i(e,C,s(K)),B+=c,C+=y,L+=1;B+=n,C+=m}B+=l,C+=u}B+=v,C+=j}B+=p,C+=x}B+=h,C+=w}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R;for(P=o.shape,C=o.strides,D=r.strides,"row-major"===o.order?(k=P[6],E=P[5],z=P[4],A=P[3],N=P[2],q=P[1],B=P[0],c=C[6],n=C[5]-k*C[6],l=C[4]-E*C[5],v=C[3]-z*C[4],p=C[2]-A*C[3],h=C[1]-N*C[2],y=C[0]-q*C[1],m=D[6],u=D[5]-k*D[6],j=D[4]-E*D[5],x=D[3]-z*D[4],w=D[2]-A*D[3],b=D[1]-N*D[2],g=D[0]-q*D[1]):(k=P[0],E=P[1],z=P[2],A=P[3],N=P[4],q=P[5],B=P[6],c=C[0],n=C[1]-k*C[0],l=C[2]-E*C[1],v=C[3]-z*C[2],p=C[4]-A*C[3],h=C[5]-N*C[4],y=C[6]-q*C[5],m=D[0],u=D[1]-k*D[0],j=D[2]-E*D[1],x=D[3]-z*D[2],w=D[4]-A*D[3],b=D[5]-N*D[4],g=D[6]-q*D[5]),F=o.offset,G=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],R=0,O=0;O<B;O++){for(M=0;M<q;M++){for(L=0;L<N;L++){for(K=0;K<A;K++){for(J=0;J<z;J++){for(I=0;I<E;I++){for(H=0;H<k;H++)void 0!==(Q=f.call(t,d(a,F),R,[F,G],[o,r]))&&i(e,G,s(Q)),F+=c,G+=m,R+=1;F+=n,G+=u}F+=l,G+=j}F+=v,G+=x}F+=p,G+=w}F+=h,G+=b}F+=y,G+=g}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V;for(E=o.shape,G=o.strides,H=r.strides,"row-major"===o.order?(z=E[7],A=E[6],N=E[5],q=E[4],B=E[3],C=E[2],D=E[1],F=E[0],c=G[7],n=G[6]-z*G[7],l=G[5]-A*G[6],v=G[4]-N*G[5],p=G[3]-q*G[4],h=G[2]-B*G[3],y=G[1]-C*G[2],m=G[0]-D*G[1],u=H[7],j=H[6]-z*H[7],x=H[5]-A*H[6],w=H[4]-N*H[5],b=H[3]-q*H[4],g=H[2]-B*H[3],P=H[1]-C*H[2],k=H[0]-D*H[1]):(z=E[0],A=E[1],N=E[2],q=E[3],B=E[4],C=E[5],D=E[6],F=E[7],c=G[0],n=G[1]-z*G[0],l=G[2]-A*G[1],v=G[3]-N*G[2],p=G[4]-q*G[3],h=G[5]-B*G[4],y=G[6]-C*G[5],m=G[7]-D*G[6],u=H[0],j=H[1]-z*H[0],x=H[2]-A*H[1],w=H[3]-N*H[2],b=H[4]-q*H[3],g=H[5]-B*H[4],P=H[6]-C*H[5],k=H[7]-D*H[6]),I=o.offset,J=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],V=0,T=0;T<F;T++){for(S=0;S<D;S++){for(R=0;R<C;R++){for(Q=0;Q<B;Q++){for(O=0;O<q;O++){for(M=0;M<N;M++){for(L=0;L<A;L++){for(K=0;K<z;K++)void 0!==(U=f.call(t,d(a,I),V,[I,J],[o,r]))&&i(e,J,s(U)),I+=c,J+=u,V+=1;I+=n,J+=j}I+=l,J+=x}I+=v,J+=w}I+=p,J+=b}I+=h,J+=g}I+=y,J+=P}I+=m,J+=k}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z;for(A=o.shape,J=o.strides,K=r.strides,"row-major"===o.order?(N=A[8],q=A[7],B=A[6],C=A[5],D=A[4],F=A[3],G=A[2],H=A[1],I=A[0],c=J[8],n=J[7]-N*J[8],l=J[6]-q*J[7],v=J[5]-B*J[6],p=J[4]-C*J[5],h=J[3]-D*J[4],y=J[2]-F*J[3],m=J[1]-G*J[2],u=J[0]-H*J[1],j=K[8],x=K[7]-N*K[8],w=K[6]-q*K[7],b=K[5]-B*K[6],g=K[4]-C*K[5],P=K[3]-D*K[4],k=K[2]-F*K[3],E=K[1]-G*K[2],z=K[0]-H*K[1]):(N=A[0],q=A[1],B=A[2],C=A[3],D=A[4],F=A[5],G=A[6],H=A[7],I=A[8],c=J[0],n=J[1]-N*J[0],l=J[2]-q*J[1],v=J[3]-B*J[2],p=J[4]-C*J[3],h=J[5]-D*J[4],y=J[6]-F*J[5],m=J[7]-G*J[6],u=J[8]-H*J[7],j=K[0],x=K[1]-N*K[0],w=K[2]-q*K[1],b=K[3]-B*K[2],g=K[4]-C*K[3],P=K[5]-D*K[4],k=K[6]-F*K[5],E=K[7]-G*K[6],z=K[8]-H*K[7]),L=o.offset,M=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],Z=0,X=0;X<I;X++){for(W=0;W<H;W++){for(V=0;V<G;V++){for(U=0;U<F;U++){for(T=0;T<D;T++){for(S=0;S<C;S++){for(R=0;R<B;R++){for(Q=0;Q<q;Q++){for(O=0;O<N;O++)void 0!==(Y=f.call(t,d(a,L),Z,[L,M],[o,r]))&&i(e,M,s(Y)),L+=c,M+=j,Z+=1;L+=n,M+=x}L+=l,M+=w}L+=v,M+=b}L+=p,M+=g}L+=h,M+=P}L+=y,M+=k}L+=m,M+=E}L+=u,M+=z}},function(o,r,s,f,t){var a,e,d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro;for(q=o.shape,M=o.strides,O=r.strides,"row-major"===o.order?(B=q[9],C=q[8],D=q[7],F=q[6],G=q[5],H=q[4],I=q[3],J=q[2],K=q[1],L=q[0],c=M[9],n=M[8]-B*M[9],l=M[7]-C*M[8],v=M[6]-D*M[7],p=M[5]-F*M[6],h=M[4]-G*M[5],y=M[3]-H*M[4],m=M[2]-I*M[3],u=M[1]-J*M[2],j=M[0]-K*M[1],x=O[9],w=O[8]-B*O[9],b=O[7]-C*O[8],g=O[6]-D*O[7],P=O[5]-F*O[6],k=O[4]-G*O[5],E=O[3]-H*O[4],z=O[2]-I*O[3],A=O[1]-J*O[2],N=O[0]-K*O[1]):(B=q[0],C=q[1],D=q[2],F=q[3],G=q[4],H=q[5],I=q[6],J=q[7],K=q[8],L=q[9],c=M[0],n=M[1]-B*M[0],l=M[2]-C*M[1],v=M[3]-D*M[2],p=M[4]-F*M[3],h=M[5]-G*M[4],y=M[6]-H*M[5],m=M[7]-I*M[6],u=M[8]-J*M[7],j=M[9]-K*M[8],x=O[0],w=O[1]-B*O[0],b=O[2]-C*O[1],g=O[3]-D*O[2],P=O[4]-F*O[3],k=O[5]-G*O[4],E=O[6]-H*O[5],z=O[7]-I*O[6],A=O[8]-J*O[7],N=O[9]-K*O[8]),Q=o.offset,R=r.offset,a=o.data,e=r.data,d=o.accessors[0],i=r.accessors[1],ro=0,_=0;_<L;_++){for($=0;$<K;$++){for(Z=0;Z<J;Z++){for(Y=0;Y<I;Y++){for(X=0;X<H;X++){for(W=0;W<G;W++){for(V=0;V<F;V++){for(U=0;U<D;U++){for(T=0;T<C;T++){for(S=0;S<B;S++)void 0!==(oo=f.call(t,d(a,Q),ro,[Q,R],[o,r]))&&i(e,R,s(oo)),Q+=c,R+=x,ro+=1;Q+=n,R+=w}Q+=l,R+=b}Q+=v,R+=g}Q+=p,R+=P}Q+=h,R+=k}Q+=y,R+=E}Q+=m,R+=z}Q+=u,R+=A}Q+=j,R+=N}}],v=[function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C;for(m=(q=t(o.shape,o.strides,r.strides)).sh,x=q.sx,w=q.sy,d=a(o.dtype,r.dtype),b=o.offset,g=r.offset,i=o.data,c=r.data,n=x[0],v=w[0],C=0,N=m[1];N>0;)for(N<d?(j=N,N=0):(j=d,N-=d),h=b+N*x[1],y=g+N*w[1],A=m[0];A>0;)for(A<d?(u=A,A=0):(u=d,A-=d),P=h+A*x[0],k=y+A*w[0],l=x[1]-u*x[0],p=w[1]-u*w[0],z=0;z<j;z++){for(E=0;E<u;E++)void 0!==(B=f.call(e,i[P],C,[P,k],[o,r]))&&(c[k]=s(B)),P+=n,k+=v,C+=1;P+=l,k+=p}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K;for(w=(I=t(o.shape,o.strides,r.strides)).sh,k=I.sx,E=I.sy,d=a(o.dtype,r.dtype),z=o.offset,A=r.offset,i=o.data,c=r.data,n=k[0],p=E[0],K=0,H=w[2];H>0;)for(H<d?(P=H,H=0):(P=d,H-=d),u=z+H*k[2],x=A+H*E[2],G=w[1];G>0;)for(G<d?(g=G,G=0):(g=d,G-=d),v=k[2]-g*k[1],y=E[2]-g*E[1],m=u+G*k[1],j=x+G*E[1],F=w[0];F>0;)for(F<d?(b=F,F=0):(b=d,F-=d),N=m+F*k[0],q=j+F*E[0],l=k[1]-b*k[0],h=E[1]-b*E[0],D=0;D<P;D++){for(C=0;C<g;C++){for(B=0;B<b;B++)void 0!==(J=f.call(e,i[N],K,[N,q],[o,r]))&&(c[q]=s(J)),N+=n,q+=p,K+=1;N+=l,q+=h}N+=v,q+=y}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T;for(k=(R=t(o.shape,o.strides,r.strides)).sh,q=R.sx,B=R.sy,d=a(o.dtype,r.dtype),C=o.offset,D=r.offset,i=o.data,c=r.data,n=q[0],h=B[0],T=0,Q=k[3];Q>0;)for(Q<d?(N=Q,Q=0):(N=d,Q-=d),w=C+Q*q[3],P=D+Q*B[3],O=k[2];O>0;)for(O<d?(A=O,O=0):(A=d,O-=d),p=q[3]-A*q[2],u=B[3]-A*B[2],x=w+O*q[2],g=P+O*B[2],M=k[1];M>0;)for(M<d?(z=M,M=0):(z=d,M-=d),v=q[2]-z*q[1],m=B[2]-z*B[1],j=x+M*q[1],b=g+M*B[1],L=k[0];L>0;)for(L<d?(E=L,L=0):(E=d,L-=d),F=j+L*q[0],G=b+L*B[0],l=q[1]-E*q[0],y=B[1]-E*B[0],K=0;K<N;K++){for(J=0;J<A;J++){for(I=0;I<z;I++){for(H=0;H<E;H++)void 0!==(S=f.call(e,i[F],T,[F,G],[o,r]))&&(c[G]=s(S)),F+=n,G+=h,T+=1;F+=l,G+=y}F+=v,G+=m}F+=p,G+=u}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$;for(N=(Y=t(o.shape,o.strides,r.strides)).sh,G=Y.sx,H=Y.sy,d=a(o.dtype,r.dtype),I=o.offset,J=r.offset,i=o.data,c=r.data,n=G[0],y=H[0],$=0,X=N[4];X>0;)for(X<d?(F=X,X=0):(F=d,X-=d),P=I+X*G[4],A=J+X*H[4],W=N[3];W>0;)for(W<d?(D=W,W=0):(D=d,W-=d),h=G[4]-D*G[3],x=H[4]-D*H[3],g=P+W*G[3],z=A+W*H[3],V=N[2];V>0;)for(V<d?(C=V,V=0):(C=d,V-=d),p=G[3]-C*G[2],j=H[3]-C*H[2],b=g+V*G[2],E=z+V*H[2],U=N[1];U>0;)for(U<d?(B=U,U=0):(B=d,U-=d),v=G[2]-B*G[1],u=H[2]-B*H[1],w=b+U*G[1],k=E+U*H[1],T=N[0];T>0;)for(T<d?(q=T,T=0):(q=d,T-=d),K=w+T*G[0],L=k+T*H[0],l=G[1]-q*G[0],m=H[1]-q*H[0],S=0;S<F;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++){for(O=0;O<B;O++){for(M=0;M<q;M++)void 0!==(Z=f.call(e,i[K],$,[K,L],[o,r]))&&(c[L]=s(Z)),K+=n,L+=y,$+=1;K+=l,L+=m}K+=v,L+=u}K+=p,L+=j}K+=h,L+=x}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao;for(D=(fo=t(o.shape,o.strides,r.strides)).sh,L=fo.sx,M=fo.sy,d=a(o.dtype,r.dtype),O=o.offset,Q=r.offset,i=o.data,c=r.data,n=L[0],m=M[0],ao=0,so=D[5];so>0;)for(so<d?(K=so,so=0):(K=d,so-=d),z=O+so*L[5],C=Q+so*M[5],ro=D[4];ro>0;)for(ro<d?(J=ro,ro=0):(J=d,ro-=d),y=L[5]-J*L[4],b=M[5]-J*M[4],E=z+ro*L[4],B=C+ro*M[4],oo=D[3];oo>0;)for(oo<d?(I=oo,oo=0):(I=d,oo-=d),h=L[4]-I*L[3],w=M[4]-I*M[3],k=E+oo*L[3],q=B+oo*M[3],_=D[2];_>0;)for(_<d?(H=_,_=0):(H=d,_-=d),p=L[3]-H*L[2],x=M[3]-H*M[2],P=k+_*L[2],N=q+_*M[2],$=D[1];$>0;)for($<d?(G=$,$=0):(G=d,$-=d),v=L[2]-G*L[1],j=M[2]-G*M[1],g=P+$*L[1],A=N+$*M[1],Z=D[0];Z>0;)for(Z<d?(F=Z,Z=0):(F=d,Z-=d),R=g+Z*L[0],S=A+Z*M[0],l=L[1]-F*L[0],u=M[1]-F*M[0],Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++){for(U=0;U<G;U++){for(T=0;T<F;T++)void 0!==(to=f.call(e,i[R],ao,[R,S],[o,r]))&&(c[S]=s(to)),R+=n,S+=m,ao+=1;R+=l,S+=u}R+=v,S+=j}R+=p,S+=x}R+=h,S+=w}R+=y,S+=b}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po;for(I=(lo=t(o.shape,o.strides,r.strides)).sh,S=lo.sx,T=lo.sy,d=a(o.dtype,r.dtype),U=o.offset,V=r.offset,i=o.data,c=r.data,n=S[0],u=T[0],po=0,no=I[6];no>0;)for(no<d?(R=no,no=0):(R=d,no-=d),q=U+no*S[6],H=V+no*T[6],co=I[5];co>0;)for(co<d?(Q=co,co=0):(Q=d,co-=d),m=S[6]-Q*S[5],P=T[6]-Q*T[5],N=q+co*S[5],G=H+co*T[5],io=I[4];io>0;)for(io<d?(O=io,io=0):(O=d,io-=d),y=S[5]-O*S[4],g=T[5]-O*T[4],A=N+io*S[4],F=G+io*T[4],eo=I[3];eo>0;)for(eo<d?(M=eo,eo=0):(M=d,eo-=d),h=S[4]-M*S[3],b=T[4]-M*T[3],z=A+eo*S[3],D=F+eo*T[3],ao=I[2];ao>0;)for(ao<d?(L=ao,ao=0):(L=d,ao-=d),p=S[3]-L*S[2],w=T[3]-L*T[2],E=z+ao*S[2],C=D+ao*T[2],to=I[1];to>0;)for(to<d?(K=to,to=0):(K=d,to-=d),v=S[2]-K*S[1],x=T[2]-K*T[1],k=E+to*S[1],B=C+to*T[1],fo=I[0];fo>0;)for(fo<d?(J=fo,fo=0):(J=d,fo-=d),W=k+fo*S[0],X=B+fo*T[0],l=S[1]-J*S[0],j=T[1]-J*T[0],so=0;so<R;so++){for(ro=0;ro<Q;ro++){for(oo=0;oo<O;oo++){for(_=0;_<M;_++){for($=0;$<L;$++){for(Z=0;Z<K;Z++){for(Y=0;Y<J;Y++)void 0!==(vo=f.call(e,i[W],po,[W,X],[o,r]))&&(c[X]=s(vo)),W+=n,X+=u,po+=1;W+=l,X+=j}W+=v,X+=x}W+=p,X+=w}W+=h,X+=b}W+=y,X+=g}W+=m,X+=P}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo,mo,uo,jo,xo,wo;for(M=(jo=t(o.shape,o.strides,r.strides)).sh,X=jo.sx,Y=jo.sy,d=a(o.dtype,r.dtype),Z=o.offset,$=r.offset,i=o.data,c=r.data,n=X[0],j=Y[0],wo=0,uo=M[7];uo>0;)for(uo<d?(W=uo,uo=0):(W=d,uo-=d),D=Z+uo*X[7],L=$+uo*Y[7],mo=M[6];mo>0;)for(mo<d?(V=mo,mo=0):(V=d,mo-=d),u=X[7]-V*X[6],E=Y[7]-V*Y[6],C=D+mo*X[6],K=L+mo*Y[6],yo=M[5];yo>0;)for(yo<d?(U=yo,yo=0):(U=d,yo-=d),m=X[6]-U*X[5],k=Y[6]-U*Y[5],B=C+yo*X[5],J=K+yo*Y[5],ho=M[4];ho>0;)for(ho<d?(T=ho,ho=0):(T=d,ho-=d),y=X[5]-T*X[4],P=Y[5]-T*Y[4],q=B+ho*X[4],I=J+ho*Y[4],po=M[3];po>0;)for(po<d?(S=po,po=0):(S=d,po-=d),h=X[4]-S*X[3],g=Y[4]-S*Y[3],N=q+po*X[3],H=I+po*Y[3],vo=M[2];vo>0;)for(vo<d?(R=vo,vo=0):(R=d,vo-=d),p=X[3]-R*X[2],b=Y[3]-R*Y[2],A=N+vo*X[2],G=H+vo*Y[2],lo=M[1];lo>0;)for(lo<d?(Q=lo,lo=0):(Q=d,lo-=d),v=X[2]-Q*X[1],w=Y[2]-Q*Y[1],z=A+lo*X[1],F=G+lo*Y[1],no=M[0];no>0;)for(no<d?(O=no,no=0):(O=d,no-=d),_=z+no*X[0],oo=F+no*Y[0],l=X[1]-O*X[0],x=Y[1]-O*Y[0],co=0;co<W;co++){for(io=0;io<V;io++){for(eo=0;eo<U;eo++){for(ao=0;ao<T;ao++){for(to=0;to<S;to++){for(fo=0;fo<R;fo++){for(so=0;so<Q;so++){for(ro=0;ro<O;ro++)void 0!==(xo=f.call(e,i[_],wo,[_,oo],[o,r]))&&(c[oo]=s(xo)),_+=n,oo+=j,wo+=1;_+=l,oo+=x}_+=v,oo+=w}_+=p,oo+=b}_+=h,oo+=g}_+=y,oo+=P}_+=m,oo+=k}_+=u,oo+=E}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo,mo,uo,jo,xo,wo,bo,go,Po,ko,Eo,zo,Ao;for(S=(Eo=t(o.shape,o.strides,r.strides)).sh,oo=Eo.sx,ro=Eo.sy,d=a(o.dtype,r.dtype),so=o.offset,fo=r.offset,i=o.data,c=r.data,n=oo[0],x=ro[0],Ao=0,ko=S[8];ko>0;)for(ko<d?(_=ko,ko=0):(_=d,ko-=d),H=so+ko*oo[8],R=fo+ko*ro[8],Po=S[7];Po>0;)for(Po<d?($=Po,Po=0):($=d,Po-=d),j=oo[8]-$*oo[7],A=ro[8]-$*ro[7],G=H+Po*oo[7],Q=R+Po*ro[7],go=S[6];go>0;)for(go<d?(Z=go,go=0):(Z=d,go-=d),u=oo[7]-Z*oo[6],z=ro[7]-Z*ro[6],F=G+go*oo[6],O=Q+go*ro[6],bo=S[5];bo>0;)for(bo<d?(Y=bo,bo=0):(Y=d,bo-=d),m=oo[6]-Y*oo[5],E=ro[6]-Y*ro[5],D=F+bo*oo[5],M=O+bo*ro[5],wo=S[4];wo>0;)for(wo<d?(X=wo,wo=0):(X=d,wo-=d),y=oo[5]-X*oo[4],k=ro[5]-X*ro[4],C=D+wo*oo[4],L=M+wo*ro[4],xo=S[3];xo>0;)for(xo<d?(W=xo,xo=0):(W=d,xo-=d),h=oo[4]-W*oo[3],P=ro[4]-W*ro[3],B=C+xo*oo[3],K=L+xo*ro[3],jo=S[2];jo>0;)for(jo<d?(V=jo,jo=0):(V=d,jo-=d),p=oo[3]-V*oo[2],g=ro[3]-V*ro[2],q=B+jo*oo[2],J=K+jo*ro[2],uo=S[1];uo>0;)for(uo<d?(U=uo,uo=0):(U=d,uo-=d),v=oo[2]-U*oo[1],b=ro[2]-U*ro[1],N=q+uo*oo[1],I=J+uo*ro[1],mo=S[0];mo>0;)for(mo<d?(T=mo,mo=0):(T=d,mo-=d),to=N+mo*oo[0],ao=I+mo*ro[0],l=oo[1]-T*oo[0],w=ro[1]-T*ro[0],yo=0;yo<_;yo++){for(ho=0;ho<$;ho++){for(po=0;po<Z;po++){for(vo=0;vo<Y;vo++){for(lo=0;lo<X;lo++){for(no=0;no<W;no++){for(co=0;co<V;co++){for(io=0;io<U;io++){for(eo=0;eo<T;eo++)void 0!==(zo=f.call(e,i[to],Ao,[to,ao],[o,r]))&&(c[ao]=s(zo)),to+=n,ao+=x,Ao+=1;to+=l,ao+=w}to+=v,ao+=b}to+=p,ao+=g}to+=h,ao+=P}to+=y,ao+=k}to+=m,ao+=E}to+=u,ao+=z}to+=j,ao+=A}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo,mo,uo,jo,xo,wo,bo,go,Po,ko,Eo,zo,Ao,No,qo,Bo,Co,Do,Fo,Go;for(W=(Do=t(o.shape,o.strides,r.strides)).sh,ao=Do.sx,eo=Do.sy,d=a(o.dtype,r.dtype),io=o.offset,co=r.offset,i=o.data,c=r.data,n=ao[0],w=eo[0],Go=0,Co=W[9];Co>0;)for(Co<d?(to=Co,Co=0):(to=d,Co-=d),K=io+Co*ao[9],V=co+Co*eo[9],Bo=W[8];Bo>0;)for(Bo<d?(fo=Bo,Bo=0):(fo=d,Bo-=d),x=ao[9]-fo*ao[8],q=eo[9]-fo*eo[8],J=K+Bo*ao[8],U=V+Bo*eo[8],qo=W[7];qo>0;)for(qo<d?(so=qo,qo=0):(so=d,qo-=d),j=ao[8]-so*ao[7],N=eo[8]-so*eo[7],I=J+qo*ao[7],T=U+qo*eo[7],No=W[6];No>0;)for(No<d?(ro=No,No=0):(ro=d,No-=d),u=ao[7]-ro*ao[6],A=eo[7]-ro*eo[6],H=I+No*ao[6],S=T+No*eo[6],Ao=W[5];Ao>0;)for(Ao<d?(oo=Ao,Ao=0):(oo=d,Ao-=d),m=ao[6]-oo*ao[5],z=eo[6]-oo*eo[5],G=H+Ao*ao[5],R=S+Ao*eo[5],zo=W[4];zo>0;)for(zo<d?(_=zo,zo=0):(_=d,zo-=d),y=ao[5]-_*ao[4],E=eo[5]-_*eo[4],F=G+zo*ao[4],Q=R+zo*eo[4],Eo=W[3];Eo>0;)for(Eo<d?($=Eo,Eo=0):($=d,Eo-=d),h=ao[4]-$*ao[3],k=eo[4]-$*eo[3],D=F+Eo*ao[3],O=Q+Eo*eo[3],ko=W[2];ko>0;)for(ko<d?(Z=ko,ko=0):(Z=d,ko-=d),p=ao[3]-Z*ao[2],P=eo[3]-Z*eo[2],C=D+ko*ao[2],M=O+ko*eo[2],Po=W[1];Po>0;)for(Po<d?(Y=Po,Po=0):(Y=d,Po-=d),v=ao[2]-Y*ao[1],g=eo[2]-Y*eo[1],B=C+Po*ao[1],L=M+Po*eo[1],go=W[0];go>0;)for(go<d?(X=go,go=0):(X=d,go-=d),no=B+go*ao[0],lo=L+go*eo[0],l=ao[1]-X*ao[0],b=eo[1]-X*eo[0],bo=0;bo<to;bo++){for(wo=0;wo<fo;wo++){for(xo=0;xo<so;xo++){for(jo=0;jo<ro;jo++){for(uo=0;uo<oo;uo++){for(mo=0;mo<_;mo++){for(yo=0;yo<$;yo++){for(ho=0;ho<Z;ho++){for(po=0;po<Y;po++){for(vo=0;vo<X;vo++)void 0!==(Fo=f.call(e,i[no],Go,[no,lo],[o,r]))&&(c[lo]=s(Fo)),no+=n,lo+=w,Go+=1;no+=l,lo+=b}no+=v,lo+=g}no+=p,lo+=P}no+=h,lo+=k}no+=y,lo+=E}no+=m,lo+=z}no+=u,lo+=A}no+=j,lo+=N}no+=x,lo+=q}}],p=[function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F;for(j=(C=t(o.shape,o.strides,r.strides)).sh,b=C.sx,g=C.sy,d=a(o.dtype,r.dtype),P=o.offset,k=r.offset,i=o.data,c=r.data,v=b[0],h=g[0],n=o.accessors[0],l=r.accessors[1],F=0,B=j[1];B>0;)for(B<d?(w=B,B=0):(w=d,B-=d),m=P+B*b[1],u=k+B*g[1],q=j[0];q>0;)for(q<d?(x=q,q=0):(x=d,q-=d),E=m+q*b[0],z=u+q*g[0],p=b[1]-x*b[0],y=g[1]-x*g[0],N=0;N<w;N++){for(A=0;A<x;A++)void 0!==(D=f.call(e,n(i,E),F,[E,z],[o,r]))&&l(c,z,s(D)),E+=v,z+=h,F+=1;E+=p,z+=y}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M;for(g=(K=t(o.shape,o.strides,r.strides)).sh,z=K.sx,A=K.sy,d=a(o.dtype,r.dtype),N=o.offset,q=r.offset,i=o.data,c=r.data,v=z[0],y=A[0],n=o.accessors[0],l=r.accessors[1],M=0,J=g[2];J>0;)for(J<d?(E=J,J=0):(E=d,J-=d),x=N+J*z[2],b=q+J*A[2],I=g[1];I>0;)for(I<d?(k=I,I=0):(k=d,I-=d),h=z[2]-k*z[1],u=A[2]-k*A[1],j=x+I*z[1],w=b+I*A[1],H=g[0];H>0;)for(H<d?(P=H,H=0):(P=d,H-=d),B=j+H*z[0],C=w+H*A[0],p=z[1]-P*z[0],m=A[1]-P*A[0],G=0;G<E;G++){for(F=0;F<k;F++){for(D=0;D<P;D++)void 0!==(L=f.call(e,n(i,B),M,[B,C],[o,r]))&&l(c,C,s(L)),B+=v,C+=y,M+=1;B+=p,C+=m}B+=h,C+=u}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V;for(z=(T=t(o.shape,o.strides,r.strides)).sh,C=T.sx,D=T.sy,d=a(o.dtype,r.dtype),F=o.offset,G=r.offset,i=o.data,c=r.data,v=C[0],m=D[0],n=o.accessors[0],l=r.accessors[1],V=0,S=z[3];S>0;)for(S<d?(B=S,S=0):(B=d,S-=d),g=F+S*C[3],E=G+S*D[3],R=z[2];R>0;)for(R<d?(q=R,R=0):(q=d,R-=d),y=C[3]-q*C[2],x=D[3]-q*D[2],b=g+R*C[2],k=E+R*D[2],Q=z[1];Q>0;)for(Q<d?(N=Q,Q=0):(N=d,Q-=d),h=C[2]-N*C[1],j=D[2]-N*D[1],w=b+Q*C[1],P=k+Q*D[1],O=z[0];O>0;)for(O<d?(A=O,O=0):(A=d,O-=d),H=w+O*C[0],I=P+O*D[0],p=C[1]-A*C[0],u=D[1]-A*D[0],M=0;M<B;M++){for(L=0;L<q;L++){for(K=0;K<N;K++){for(J=0;J<A;J++)void 0!==(U=f.call(e,n(i,H),V,[H,I],[o,r]))&&l(c,I,s(U)),H+=v,I+=m,V+=1;H+=p,I+=u}H+=h,I+=j}H+=y,I+=x}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo;for(B=($=t(o.shape,o.strides,r.strides)).sh,I=$.sx,J=$.sy,d=a(o.dtype,r.dtype),K=o.offset,L=r.offset,i=o.data,c=r.data,v=I[0],u=J[0],n=o.accessors[0],l=r.accessors[1],oo=0,Z=B[4];Z>0;)for(Z<d?(H=Z,Z=0):(H=d,Z-=d),E=K+Z*I[4],q=L+Z*J[4],Y=B[3];Y>0;)for(Y<d?(G=Y,Y=0):(G=d,Y-=d),m=I[4]-G*I[3],b=J[4]-G*J[3],k=E+Y*I[3],N=q+Y*J[3],X=B[2];X>0;)for(X<d?(F=X,X=0):(F=d,X-=d),y=I[3]-F*I[2],w=J[3]-F*J[2],P=k+X*I[2],A=N+X*J[2],W=B[1];W>0;)for(W<d?(D=W,W=0):(D=d,W-=d),h=I[2]-D*I[1],x=J[2]-D*J[1],g=P+W*I[1],z=A+W*J[1],V=B[0];V>0;)for(V<d?(C=V,V=0):(C=d,V-=d),M=g+V*I[0],O=z+V*J[0],p=I[1]-C*I[0],j=J[1]-C*J[0],U=0;U<H;U++){for(T=0;T<G;T++){for(S=0;S<F;S++){for(R=0;R<D;R++){for(Q=0;Q<C;Q++)void 0!==(_=f.call(e,n(i,M),oo,[M,O],[o,r]))&&l(c,O,s(_)),M+=v,O+=u,oo+=1;M+=p,O+=j}M+=h,O+=x}M+=y,O+=w}M+=m,O+=b}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io;for(G=(ao=t(o.shape,o.strides,r.strides)).sh,O=ao.sx,Q=ao.sy,d=a(o.dtype,r.dtype),R=o.offset,S=r.offset,i=o.data,c=r.data,v=O[0],j=Q[0],n=o.accessors[0],l=r.accessors[1],io=0,to=G[5];to>0;)for(to<d?(M=to,to=0):(M=d,to-=d),N=R+to*O[5],F=S+to*Q[5],fo=G[4];fo>0;)for(fo<d?(L=fo,fo=0):(L=d,fo-=d),u=O[5]-L*O[4],P=Q[5]-L*Q[4],A=N+fo*O[4],D=F+fo*Q[4],so=G[3];so>0;)for(so<d?(K=so,so=0):(K=d,so-=d),m=O[4]-K*O[3],g=Q[4]-K*Q[3],z=A+so*O[3],C=D+so*Q[3],ro=G[2];ro>0;)for(ro<d?(J=ro,ro=0):(J=d,ro-=d),y=O[3]-J*O[2],b=Q[3]-J*Q[2],E=z+ro*O[2],B=C+ro*Q[2],oo=G[1];oo>0;)for(oo<d?(I=oo,oo=0):(I=d,oo-=d),h=O[2]-I*O[1],w=Q[2]-I*Q[1],k=E+oo*O[1],q=B+oo*Q[1],_=G[0];_>0;)for(_<d?(H=_,_=0):(H=d,_-=d),T=k+_*O[0],U=q+_*Q[0],p=O[1]-H*O[0],x=Q[1]-H*Q[0],$=0;$<M;$++){for(Z=0;Z<L;Z++){for(Y=0;Y<K;Y++){for(X=0;X<J;X++){for(W=0;W<I;W++){for(V=0;V<H;V++)void 0!==(eo=f.call(e,n(i,T),io,[T,U],[o,r]))&&l(c,U,s(eo)),T+=v,U+=j,io+=1;T+=p,U+=x}T+=h,U+=w}T+=y,U+=b}T+=m,U+=g}T+=u,U+=P}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo;for(K=(po=t(o.shape,o.strides,r.strides)).sh,U=po.sx,V=po.sy,d=a(o.dtype,r.dtype),W=o.offset,X=r.offset,i=o.data,c=r.data,v=U[0],x=V[0],n=o.accessors[0],l=r.accessors[1],yo=0,vo=K[6];vo>0;)for(vo<d?(T=vo,vo=0):(T=d,vo-=d),C=W+vo*U[6],J=X+vo*V[6],lo=K[5];lo>0;)for(lo<d?(S=lo,lo=0):(S=d,lo-=d),j=U[6]-S*U[5],E=V[6]-S*V[5],B=C+lo*U[5],I=J+lo*V[5],no=K[4];no>0;)for(no<d?(R=no,no=0):(R=d,no-=d),u=U[5]-R*U[4],k=V[5]-R*V[4],q=B+no*U[4],H=I+no*V[4],co=K[3];co>0;)for(co<d?(Q=co,co=0):(Q=d,co-=d),m=U[4]-Q*U[3],P=V[4]-Q*V[3],N=q+co*U[3],G=H+co*V[3],io=K[2];io>0;)for(io<d?(O=io,io=0):(O=d,io-=d),y=U[3]-O*U[2],g=V[3]-O*V[2],A=N+io*U[2],F=G+io*V[2],eo=K[1];eo>0;)for(eo<d?(M=eo,eo=0):(M=d,eo-=d),h=U[2]-M*U[1],b=V[2]-M*V[1],z=A+eo*U[1],D=F+eo*V[1],ao=K[0];ao>0;)for(ao<d?(L=ao,ao=0):(L=d,ao-=d),Y=z+ao*U[0],Z=D+ao*V[0],p=U[1]-L*U[0],w=V[1]-L*V[0],to=0;to<T;to++){for(fo=0;fo<S;fo++){for(so=0;so<R;so++){for(ro=0;ro<Q;ro++){for(oo=0;oo<O;oo++){for(_=0;_<M;_++){for($=0;$<L;$++)void 0!==(ho=f.call(e,n(i,Y),yo,[Y,Z],[o,r]))&&l(c,Z,s(ho)),Y+=v,Z+=x,yo+=1;Y+=p,Z+=w}Y+=h,Z+=b}Y+=y,Z+=g}Y+=m,Z+=P}Y+=u,Z+=k}Y+=j,Z+=E}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo,mo,uo,jo,xo,wo,bo,go;for(Q=(wo=t(o.shape,o.strides,r.strides)).sh,Z=wo.sx,$=wo.sy,d=a(o.dtype,r.dtype),_=o.offset,oo=r.offset,i=o.data,c=r.data,v=Z[0],w=$[0],n=o.accessors[0],l=r.accessors[1],go=0,xo=Q[7];xo>0;)for(xo<d?(Y=xo,xo=0):(Y=d,xo-=d),G=_+xo*Z[7],O=oo+xo*$[7],jo=Q[6];jo>0;)for(jo<d?(X=jo,jo=0):(X=d,jo-=d),x=Z[7]-X*Z[6],A=$[7]-X*$[6],F=G+jo*Z[6],M=O+jo*$[6],uo=Q[5];uo>0;)for(uo<d?(W=uo,uo=0):(W=d,uo-=d),j=Z[6]-W*Z[5],z=$[6]-W*$[5],D=F+uo*Z[5],L=M+uo*$[5],mo=Q[4];mo>0;)for(mo<d?(V=mo,mo=0):(V=d,mo-=d),u=Z[5]-V*Z[4],E=$[5]-V*$[4],C=D+mo*Z[4],K=L+mo*$[4],yo=Q[3];yo>0;)for(yo<d?(U=yo,yo=0):(U=d,yo-=d),m=Z[4]-U*Z[3],k=$[4]-U*$[3],B=C+yo*Z[3],J=K+yo*$[3],ho=Q[2];ho>0;)for(ho<d?(T=ho,ho=0):(T=d,ho-=d),y=Z[3]-T*Z[2],P=$[3]-T*$[2],q=B+ho*Z[2],I=J+ho*$[2],po=Q[1];po>0;)for(po<d?(S=po,po=0):(S=d,po-=d),h=Z[2]-S*Z[1],g=$[2]-S*$[1],N=q+po*Z[1],H=I+po*$[1],vo=Q[0];vo>0;)for(vo<d?(R=vo,vo=0):(R=d,vo-=d),ro=N+vo*Z[0],so=H+vo*$[0],p=Z[1]-R*Z[0],b=$[1]-R*$[0],lo=0;lo<Y;lo++){for(no=0;no<X;no++){for(co=0;co<W;co++){for(io=0;io<V;io++){for(eo=0;eo<U;eo++){for(ao=0;ao<T;ao++){for(to=0;to<S;to++){for(fo=0;fo<R;fo++)void 0!==(bo=f.call(e,n(i,ro),go,[ro,so],[o,r]))&&l(c,so,s(bo)),ro+=v,so+=w,go+=1;ro+=p,so+=b}ro+=h,so+=g}ro+=y,so+=P}ro+=m,so+=k}ro+=u,so+=E}ro+=j,so+=z}ro+=x,so+=A}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo,mo,uo,jo,xo,wo,bo,go,Po,ko,Eo,zo,Ao,No,qo;for(U=(Ao=t(o.shape,o.strides,r.strides)).sh,so=Ao.sx,fo=Ao.sy,d=a(o.dtype,r.dtype),to=o.offset,ao=r.offset,i=o.data,c=r.data,v=so[0],b=fo[0],n=o.accessors[0],l=r.accessors[1],qo=0,zo=U[8];zo>0;)for(zo<d?(ro=zo,zo=0):(ro=d,zo-=d),J=to+zo*so[8],T=ao+zo*fo[8],Eo=U[7];Eo>0;)for(Eo<d?(oo=Eo,Eo=0):(oo=d,Eo-=d),w=so[8]-oo*so[7],q=fo[8]-oo*fo[7],I=J+Eo*so[7],S=T+Eo*fo[7],ko=U[6];ko>0;)for(ko<d?(_=ko,ko=0):(_=d,ko-=d),x=so[7]-_*so[6],N=fo[7]-_*fo[6],H=I+ko*so[6],R=S+ko*fo[6],Po=U[5];Po>0;)for(Po<d?($=Po,Po=0):($=d,Po-=d),j=so[6]-$*so[5],A=fo[6]-$*fo[5],G=H+Po*so[5],Q=R+Po*fo[5],go=U[4];go>0;)for(go<d?(Z=go,go=0):(Z=d,go-=d),u=so[5]-Z*so[4],z=fo[5]-Z*fo[4],F=G+go*so[4],O=Q+go*fo[4],bo=U[3];bo>0;)for(bo<d?(Y=bo,bo=0):(Y=d,bo-=d),m=so[4]-Y*so[3],E=fo[4]-Y*fo[3],D=F+bo*so[3],M=O+bo*fo[3],wo=U[2];wo>0;)for(wo<d?(X=wo,wo=0):(X=d,wo-=d),y=so[3]-X*so[2],k=fo[3]-X*fo[2],C=D+wo*so[2],L=M+wo*fo[2],xo=U[1];xo>0;)for(xo<d?(W=xo,xo=0):(W=d,xo-=d),h=so[2]-W*so[1],P=fo[2]-W*fo[1],B=C+xo*so[1],K=L+xo*fo[1],jo=U[0];jo>0;)for(jo<d?(V=jo,jo=0):(V=d,jo-=d),eo=B+jo*so[0],io=K+jo*fo[0],p=so[1]-V*so[0],g=fo[1]-V*fo[0],uo=0;uo<ro;uo++){for(mo=0;mo<oo;mo++){for(yo=0;yo<_;yo++){for(ho=0;ho<$;ho++){for(po=0;po<Z;po++){for(vo=0;vo<Y;vo++){for(lo=0;lo<X;lo++){for(no=0;no<W;no++){for(co=0;co<V;co++)void 0!==(No=f.call(e,n(i,eo),qo,[eo,io],[o,r]))&&l(c,io,s(No)),eo+=v,io+=b,qo+=1;eo+=p,io+=g}eo+=h,io+=P}eo+=y,io+=k}eo+=m,io+=E}eo+=u,io+=z}eo+=j,io+=A}eo+=x,io+=N}eo+=w,io+=q}},function(o,r,s,f,e){var d,i,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F,G,H,I,J,K,L,M,O,Q,R,S,T,U,V,W,X,Y,Z,$,_,oo,ro,so,fo,to,ao,eo,io,co,no,lo,vo,po,ho,yo,mo,uo,jo,xo,wo,bo,go,Po,ko,Eo,zo,Ao,No,qo,Bo,Co,Do,Fo,Go,Ho,Io;for(Y=(Go=t(o.shape,o.strides,r.strides)).sh,io=Go.sx,co=Go.sy,d=a(o.dtype,r.dtype),no=o.offset,lo=r.offset,i=o.data,c=r.data,v=io[0],g=co[0],n=o.accessors[0],l=r.accessors[1],Io=0,Fo=Y[9];Fo>0;)for(Fo<d?(eo=Fo,Fo=0):(eo=d,Fo-=d),M=no+Fo*io[9],X=lo+Fo*co[9],Do=Y[8];Do>0;)for(Do<d?(ao=Do,Do=0):(ao=d,Do-=d),b=io[9]-ao*io[8],C=co[9]-ao*co[8],L=M+Do*io[8],W=X+Do*co[8],Co=Y[7];Co>0;)for(Co<d?(to=Co,Co=0):(to=d,Co-=d),w=io[8]-to*io[7],B=co[8]-to*co[7],K=L+Co*io[7],V=W+Co*co[7],Bo=Y[6];Bo>0;)for(Bo<d?(fo=Bo,Bo=0):(fo=d,Bo-=d),x=io[7]-fo*io[6],q=co[7]-fo*co[6],J=K+Bo*io[6],U=V+Bo*co[6],qo=Y[5];qo>0;)for(qo<d?(so=qo,qo=0):(so=d,qo-=d),j=io[6]-so*io[5],N=co[6]-so*co[5],I=J+qo*io[5],T=U+qo*co[5],No=Y[4];No>0;)for(No<d?(ro=No,No=0):(ro=d,No-=d),u=io[5]-ro*io[4],A=co[5]-ro*co[4],H=I+No*io[4],S=T+No*co[4],Ao=Y[3];Ao>0;)for(Ao<d?(oo=Ao,Ao=0):(oo=d,Ao-=d),m=io[4]-oo*io[3],z=co[4]-oo*co[3],G=H+Ao*io[3],R=S+Ao*co[3],zo=Y[2];zo>0;)for(zo<d?(_=zo,zo=0):(_=d,zo-=d),y=io[3]-_*io[2],E=co[3]-_*co[2],F=G+zo*io[2],Q=R+zo*co[2],Eo=Y[1];Eo>0;)for(Eo<d?($=Eo,Eo=0):($=d,Eo-=d),h=io[2]-$*io[1],k=co[2]-$*co[1],D=F+Eo*io[1],O=Q+Eo*co[1],ko=Y[0];ko>0;)for(ko<d?(Z=ko,ko=0):(Z=d,ko-=d),vo=D+ko*io[0],po=O+ko*co[0],p=io[1]-Z*io[0],P=co[1]-Z*co[0],Po=0;Po<eo;Po++){for(go=0;go<ao;go++){for(bo=0;bo<to;bo++){for(wo=0;wo<fo;wo++){for(xo=0;xo<so;xo++){for(jo=0;jo<ro;jo++){for(uo=0;uo<oo;uo++){for(mo=0;mo<_;mo++){for(yo=0;yo<$;yo++){for(ho=0;ho<Z;ho++)void 0!==(Ho=f.call(e,n(i,vo),Io,[vo,po],[o,r]))&&l(c,po,s(Ho)),vo+=v,po+=g,Io+=1;vo+=p,po+=P}vo+=h,po+=k}vo+=y,po+=E}vo+=m,po+=z}vo+=u,po+=A}vo+=j,po+=N}vo+=x,po+=q}vo+=w,po+=B}vo+=b,po+=C}}],h=n.length-1;function y(t,a,y,m){var u,j,x,w,b,g,P,k,E,z,A,N,q,B,C,D,F;if(B=f(t[0]),C=f(t[1]),w=B.shape,b=C.shape,(u=w.length)!==b.length)throw new Error("invalid arguments. Arrays must have the same number of dimensions (i.e., same rank). ndims(x) == "+u+". ndims(y) == "+b.length+".");if(0===u)return B.accessorProtocol||C.accessorProtocol?l[u](B,C,a,y,m):n[u](B,C,a,y,m);for(k=1,q=0,F=0;F<u;F++){if((D=w[F])!==b[F])throw new Error(o("1dN0d"));k*=D,1===D&&(q+=1)}if(0!==k){if(1===u)return B.accessorProtocol||C.accessorProtocol?l[u](B,C,a,y,m):n[u](B,C,a,y,m);if(E=B.strides,z=C.strides,q===u-1){for(F=0;F<u&&1===w[F];F++);return B.shape=[w[F]],C.shape=B.shape,B.strides=[E[F]],C.strides=[z[F]],B.accessorProtocol||C.accessorProtocol?l[1](B,C,a,y,m):n[1](B,C,a,y,m)}if(g=r(E),P=r(z),0!==g&&0!==P&&g===P){if(j=s(w,E,B.offset),x=s(b,z,C.offset),k===j[1]-j[0]+1&&k===x[1]-x[0]+1)return A=1===g?j[0]:j[1],N=1===P?x[0]:x[1],B.shape=[k],C.shape=B.shape,B.strides=[g],C.strides=[P],B.offset=A,C.offset=N,B.accessorProtocol||C.accessorProtocol?l[1](B,C,a,y,m):n[1](B,C,a,y,m);if(u<=h)return B.accessorProtocol||C.accessorProtocol?l[u](B,C,a,y,m):n[u](B,C,a,y,m)}return u<=h?B.accessorProtocol||C.accessorProtocol?p[u-2](B,C,a,y,m):v[u-2](B,C,a,y,m):B.accessorProtocol||C.accessorProtocol?function(o,r,s,f,t){var a,c,n,l,v,p,h,y,m,u,j,x,w,b,g,P;for(y=o.shape,v=e(y),a=o.data,c=r.data,m=o.strides,u=r.strides,j=o.offset,x=r.offset,n=o.order,l=r.order,p=o.accessors[0],h=r.accessors[1],P=0;P<v;P++)w=d(y,m,j,n,P,i),b=d(y,u,x,l,P,i),void 0!==(g=f.call(t,p(a,w),P,[w,b],[o,r]))&&h(c,b,s(g))}(B,C,a,y,m):void function(o,r,s,f,t){var a,i,n,l,v,p,h,y,m,u,j,x,w,b;for(p=o.shape,v=e(p),a=o.data,i=r.data,h=o.strides,y=r.strides,m=o.offset,u=r.offset,n=o.order,l=r.order,b=0;b<v;b++)j=d(p,h,m,n,b,c),x=d(p,y,u,l,b,c),void 0!==(w=f.call(t,a[j],b,[j,x],[o,r]))&&(i[x]=s(w))}(B,C,a,y,m)}}export{y as default};
//# sourceMappingURL=index.mjs.map
