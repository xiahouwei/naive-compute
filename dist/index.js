function a(a){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],e=a-0+1e-10;e=isNaN(e)?0:e;var n=r-0,i=Math.pow(10,n),o=Math.round(e*i)/i+"";if(t&&n>0){var v=o.indexOf(".");~v||(v=(o+=".").length-1);var f=o.length-(v+1),h=n-f;if(f<n)for(var d=0;d<h;d++)o+="0"}return o}export{a as default};