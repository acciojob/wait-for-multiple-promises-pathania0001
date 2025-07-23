//your JS code here. If required.
const tbody = document.getElementById("output");
const promise = (time)=>{ 
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{resolve(time/1000)},time)
})};

const exePromise = async()=>{
	const startTime = performance.now();
	const p1 = promise(2000);
	const p2 = promise(1000);
	const p3 = promise(3000);
 Promise.all([p1,p2,p3]).then((data)=>{
	 document.querySelector(".loading").style.display = "none";
	 data.forEach((res,index)=>{
			tbody.innerHTML += `
        <tr>
          <td>Promise ${index + 1}</td>
          <td>${res}</td>
        </tr>
      `;
	 });
	 tbody.innerHTML += `<tr><td>Total</td><td>${((performance.now()-startTime)/1000).toFixed(3
																							 )}</td></tr>`
 })
	
}
exePromise()