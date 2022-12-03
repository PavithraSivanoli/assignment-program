<!DOCTYPE html>
<head>
<title> tables using DOM</title>
<style>
*{
margin:0;
padding:0;
}
body
{
overflow:hidden;
color:white;
}
.container
{
width:100%
height:500px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:30px;
}
.top
{
width:400px;
height:10px;
}

</head>
<body>
<div class="container">
<h2>multiplication table</h2>
<div class="top">
<label for="">multiply table </label> <input type="number name="" id="table">
<button>id="arrow" onclick="generate()"><span style="font-size: 20px; font-weight:"bold"<span>&array;</span></button>
</div>

<div id="result">
</div>
</div>
<script>
function generate()
{
var result=document.getElementById("result");
var table=document.getElementById("table").value;
result.innerHTML='';
for (i=1;i<11;i++)
{
result.innerHTML+=table + "x" +i+ "=" +table*i+ "<br>"
console.log(i);
}
}
</script>
</body>
</html>