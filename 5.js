function points(games) {
    let total = 0;
    games.map((g)=>{
      let x = +g[0]
      let y = +g[2]
      if (x>y) {
        total +=3
      } else if(x<y) {
        total +=0
      }else if (x==y) {
        total +=1
      }
    })
    return total
  }