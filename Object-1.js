var obj= {}
var obj1= new  Object
 console.log(obj);
 console.log(obj1)

 var laptop={
     brand: 'HP',
     model: 'Probook',
     processor: 'Core i5',
     ram: '12GB',
     hdd: '500 GB',
     display: function () {
         console.log('Monitor dsplay: 15 Inch, Led')
         return 'Monitor dsplay: 15 Inch, Led'
     }
 }
 console.log(laptop)
 console.log(laptop.display())
 console.log(laptop.brand+','+ laptop['model'])

 laptop.Graphics='4Gb'
 console.log(laptop.Graphics+','+laptop['ram'])
//Object Property View
 for (var a in laptop)
 {
     console.log(a+'='+laptop[a])
 }

 




