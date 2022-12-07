// 1.	Make class box has width ,height, array contain books 
// and hava Book class has id,name, writer_name and num of pages 
// (a)	make function valueof in  box class and return sum of all pages of books in this box 
// (b)	in this box  make  method to clac area of this box



function  box(_width,_height,_arr){
this.width=_width;
this.height=_height;
this.arr=_arr;



}



function book(_id,_name,_writename,_pages){
    this.id=_id;
    this.name=_name;
    this.writename=_writename;
    this.pages=_pages;
}

var b1=new book("1","Abc","marina",300);
var b2=new book("2","lang","fatma",500);
var b3=new book("3","Abc","esra",400);
var b4=new book("4","Abc","anfal",500);
var b5=new book("5","Abc","shima",400);



var BB=[b1,b2,b3,b4,b5];

var objbox=new box(20,30,BB)

console.log(b1);



var sum=0;
for(let i=0;i<BB.length;i++)
{
sum += objbox .arr[i].pages;

}

console.log(sum)




var area=objbox.height*objbox.width*2;
console.log(area)









//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2-Implement class Point3D using JavaScript 
// Add member variables: x,y,z.
// ◦	Create constructor that takes x,y,z as parameters and make default 0 for each parameter.
// ◦	Add member function print3DPoint(), that prints the point values in console using this format: “3DPoint: X=0, Y=0,Z=0”.

function Point3D(x,y,z) {
    this. x=x||0;
    this. y=y||0;
    this. z=z||0;

Point3D.prototype.print3DPoint=function(p1,p2){
    console.log(this.x,this.y,this.z);
 D=Math.sqrt((p1.x-p2.x)^2+(p1.y-p2.y)^2+(p1.z-p2.z)^2);

 console.log(D);
}


}

var p1=new Point3D(9,8,7);
var p2=new Point3D(3,2,1);


p1.print3DPoint(p1,p2);














////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3-Make new class Course, and make the student class has an array from course objects.
// •	Make function to display all courses in student object
// •	make function to compute  all grades in all courses to student object 




function Course(id, _name) {
    this.id = id;
    this.name = _name;
    this.grade = 0;
}

function student(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
}
var cou1 = new Course(1, "math");
var cou2 = new Course(2, "bio");
var cou3 = new Course(3, "eng");
var x = [cou1, cou2, cou3];
var stu1 = new student(1, 'marina', x);
console.log(stu1);

student.prototype.display = function () {
    console.log(this.id, this.name);
    for (var i = 0; i < this.course.length; i++) {
        console.log(this.course[i].name )
        console.log(this.course[i].grade)
    }
}
student.prototype.grades =function()
{
    for(var i=0; i < this.course.length; i++){
        var z = parseInt(prompt("(Enter your  grade of coursesssss ): "+this.course[i].name))
        this.course[i].grade = z;
    }
}

student.prototype.allgrades=function()
{
    var sum = 0;
    for(var i=0; i < this.courses.length; i++){
        sum += this.courses[i].grade;
    }
    return sum;
}
stu1.grades ()
stu1.display()