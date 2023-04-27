let str = 'sshss';
let nstr = ''
for(let i=str.length-1; i>=0; i--){
  nstr += str[i];
}
(str===nstr)?console.log('palindrome'):console.log('not palindrome')