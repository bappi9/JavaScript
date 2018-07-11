var array=[1,2,3,4,5,6,7,8,9]
var total=0

 //////////////For Loop   ///////////////////////////////
for (i=0; i<array.length; i++)
{
   total+=array[i]
}
console.log(total)

 //////////////Foreach Function ///////////////////////////////
 array.forEach(function(element){
     total *=element
 })
 console.log(total);


  //////////////Maping Array ///////////////////////////////

 var maps=array.map(function(element){
     if (element===1)
     {
         return 'One'
     }
     else if(element===2)
     {
         return 'Two'
     }
     else{
         return 'Bappi'
     }
 })
 console.log(maps)


 //////////////filtring Array ///////////////////////////////
 var filtring=array.filter(function(element,Index)
{
    if(element==4)
    {
        return element 
    }
    else{
        return element %2==0
    }
   
})
console.log(filtring);

//////////////Sorting Array ///////////////////////////////

var sorting=array.sort(function(a,b){
    return b-a;
})
console.log(sorting)



 



