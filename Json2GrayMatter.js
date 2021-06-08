function json2md(obj,tt = ""){
    if( isString(obj) ){
        return [tt + obj]

    }else if( isNumber(obj) ){
        return [tt + obj]

    }
    else if(isArray(obj)){
        let arr = [];
        for(const item of obj){
            if( isString(item) ){
                arr = arr.concat([ tt + "-\t" + item]);

            }else if( isNumber(item) ){
                arr = arr.concat([ tt + "-\t" + item]);

            }else if( isObject(item) ){
                arr = arr.concat([ tt + "-\t" ].concat(json2md(item,"\t" + tt)));

            } 
        }
        return arr;
    }
    else if(isObject(obj) ) {
        let arr = [];
        for(const key in obj){
            if( isString(obj[key]) ){
                arr = arr.concat([ tt + key + " : " + obj[key]]);

            }else if( isNumber(obj[key]) ){
                arr = arr.concat([ tt + key + " : " + obj[key]]);

            }else if( isArray(obj[key]) ){
                arr = arr.concat([ tt + key + " : " ].concat(json2md(obj[key],"\t" + tt)));

            }else if( isObject(obj[key]) ){
                arr = arr.concat([ tt + key + " : " ].concat(json2md(obj[key],"\t" + tt)));

            } 
        }
        return arr;
    }
}

function isArray(obj){
return (typeof obj=='object') && obj.constructor == Array;
}

function isString(str){
return (typeof str=='string') && str.constructor == String;
}

function isNumber(obj){
return (typeof obj=='number') && obj.constructor == Number;
}

function isObject(obj){
return (typeof obj=='object') && obj.constructor == Object;
}

module.exports = (jsonObj)=>{
  const result = json2md(jsonObj);
  console.log("---");
  for (const item of result){
      console.log(item);
  }
  console.log("---");
}