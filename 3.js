function well(x){
    const result = x.filter(x=> x == 'good').length
    if (result<=2 & result>0){
     return 'Publish!'
    }else if(result>2) {
      return 'I smell a series!'
    } else {
      return  'Fail!'
    }
   }