// Array.prototype.mapu = function(callback){
//    let newArr = []
//    for(let i=0;i<this.length;i++){
//       newArr.push(callback(this[i],i,this))
//    }
//    return newArr

// }
// Array.prototype.forEachu = function(callback){
//    for(let i=0;i<this.length;i++){
//       callback(this[i],i,this)
//    }

// }

// Array.prototype.lengthu = function(){
//    let count = 0
//    while(this[count]!=undefined){
//       count++

//    }
//    return count
// }
// let ar = [1,2,3,4]
// console.log(ar.lengthu());

// Array.prototype.add = function(){
//    let addNUmber = 0
//    for(let i=0;i<this.length;i++){
//       addNUmber+=this[i]

//    }
//    return addNUmber
// }
//  let ar = [1,2,3,4]
// console.log(ar.add());

// Array.prototype.filteru = function(callback){
//    let arr = []
//    for(i=0;i<this.length;i++){
//    callback(this[i],i,this)
//    if(true){
//       arr = [this[i]]
      
//    }
//    break;
//    }
//    return arr

// }
// let ar = [1,2,3,4]
// let val = ar.filter(v=>v>2)
// console.log(val);


// ar.forEachu((val,i,arr)=>console.log(val,i,arr)
// )

let replace = (val)=>{
let ans = val.replace(/[^A-Za-z0-9 ]/g,'')
console.log(ans);

}
replace('Anto peppin')

