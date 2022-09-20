var str=prompt('enter any name ').toLowerCase();
// var lowerstr=str.toLowerCase();
// console.log(lowerstr);
console.log('No. of letters in given string');
var length=str.length;
console.log(length);

var count=0;
for(i=0;i<length;i++)
{
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' )
    {
        count++;
    }
}
console.log('No. of vowels in given string');
console.log(count);




