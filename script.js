//your JS code here. If required.
const tbody = document.getElementById("output");
const promise = (time)=>{ 
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve(time/1000)},time)
})};

const exePromise = async()=>{
	const startTime = performance.now();
	 const promises = [1000,2000,3000].map((time) => promise(time));

 Promise.all(promises).then((data)=>{
	 const loadingRow = document.getElementById("loading");
      if (loadingRow) loadingRow.remove();
	 data.forEach((res,index)=>{
			tbody.innerHTML += `
        <tr>
          <td>Promise ${index + 1}</td>
          <td>${res}</td>
        </tr>
      `;
	 })
	 tbody.innerHTML += `<tr><td>Total</td><td>${((performance.now()-startTime)/1000).toFixed(3
																							 )}</td></tr>`
 }).catch((error)=>{console.log(error)});
	
}
exePromise()