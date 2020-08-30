document.addEventListener('DOMContentLoaded', function (event) {
  document.getElementById("humanTime").value = ""
  const formatDuration = (s) => {
    const t = [ // Array of times, 0 = value in seconds, 1 = written word, 2 = accumulator
      [31536000,"year",0],[86400,"day",0],[3600,"hour",0],[60,"minute",0],[1,"second",0]
    ]
    let tot = s // Total before s is manipulated
    let str = "" // String value for answer
    t.forEach((v,k)=>{ // Loop to reduce s to time units
      let val = Math.floor(s/v[0])
      v[2] = val
      s -= val * v[0]
      if (val!==1) {v[1]+="s"} // If there's more than one, pluralize the word
    })
    const filt = t.filter(v=>v[2]!==0) // Array without 0 value time units
    filt.forEach((v,k)=>{ // Loop to construct string answer
      if (k == filt.length - 1) {
        str += `${v[2]} ${v[1]}`
      } else if (k == filt.length - 2) {
        str += `${v[2]} ${v[1]} and `
      } else {
        str += `${v[2]} ${v[1]}, `
      }
    })
    return tot==0?`now`:str
  }
  document.getElementById("submit").addEventListener("click", ()=>{
    let oldTime = document.getElementById("humanTime").value
    let newTime = ""
    newTime = formatDuration(oldTime)
    document.getElementById("humanTime").value = newTime
  });
})
