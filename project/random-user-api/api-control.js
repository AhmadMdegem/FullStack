const a = new APIManager()
const r = new Renderer()
a.loadData();


$("#ahmad").on("click",function(){a.loadData()})
$("#slamh").on("click",function(){r.renderAll(a.getData())})
$("#s3ed").on("click",function(){   
localStorage.user = JSON.stringify(a.getData())
})
$("#3mr").on("click",function(){r.renderAll(JSON.parse(localStorage.user))})



