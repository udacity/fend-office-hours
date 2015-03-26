// Lint your files with jslint!
// Install jslint and use it to lint your JS Files
// Open up the command pallette and run jslint


var student = new array()
student[1] = 23
student[2] = 34
student[3] = 67
student[4] = 76
student[5] = 51
student[6] = 72

document.writeln("<h2>Student results</h2>")
document.writeln("<ul>")

numStudents=0
sum=0
ans=0
for(i in student) {
	document.writeln("<li>Student "+i+": "+student[i]+"%")
	numStudents++
	sum=sum+student[i]
}

document.writeln("</ul>")
ans=Math.round(sum/numStudents)
document.writeln("student average is "+ans+"%")