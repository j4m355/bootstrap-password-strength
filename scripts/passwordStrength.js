var getPasswordStrength;getPasswordStrength=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;f=a.length;g=0;if(f>=8){g=3}if(f>=5&&f<8){g=2}if(f<6){g=0}l=a.split("");c=[];for(n=0,p=l.length;n<p;n++){b=l[n];if(b===b.toUpperCase()){c.push(b)}}m=0;if(c.length===0){m=0}if(c.length===1){m=2}if(c.length>1){m=3}i=new RegExp("^(a-z|A-Z|0-9)*[^#$%^&*()'*$!\"£]");e=a.split("");d=0;for(o=0,q=e.length;o<q;o++){b=e[o];if(b.match(i)){d++}}k=a.length-d;if(k>0){j=3}else{j=1}h=g+m+j;return h};$(document).ready(function(){return $("#passwordStrength").keyup(function(){var a;a=getPasswordStrength($("#passwordStrength").val());$("#passwordStrength").removeClass("passwordWeak");$("#passwordStrength").removeClass("passwordMedium");$("#passwordStrength").removeClass("passwordStrong");if(a<=3){$("#passwordStrength").addClass("passwordWeak")}if(a>3&&a<7){$("#passwordStrength").addClass("passwordMedium")}if(a>=7){return $("#passwordStrength").addClass("passwordStrong")}})})