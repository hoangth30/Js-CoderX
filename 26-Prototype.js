
    /*
  Viết hàm xây dựng các đối tượng student có các thuộc tính sau:
  - name: String,
  - level: String,
  - school: String

  Trong đó, thuộc tính school là thuộc tính dùng chung, có giá trị là "CodersX".
*/

    function Student(name, level) {
        this.name = name;
        this.level = level
    }

    Student.prototype.school = "CodersX";

    var student1 = new Student('Hoang', '2A')
    var student2 = new Student('Kai', '3B')
    console.log(student1.school === student2.school)

    /*
  Viết hàm xây dựng các đối tượng student gồm các thuộc tính:
    diemToan: Number,
    diemLy: Number,
    diemHoa: Number
    average: [function];

    average là hàm tính điểm trung bình 3 môn. 
    average là thuộc tính dùng chung.

  Output: 
    student1.average() = 7
    student2.average() = 8
*/

    function Student(diemToan, diemLy, diemHoa) {
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }

    Student.prototype.average = function () {
        return Math.round((this.diemToan+this.diemHoa+this.diemLy)/3);
    }

    var student1 = new Student(6, 7, 7);
    var student2 = new Student(8, 9, 6);
    console.log('DTB student1: '+student1.average());
    console.log('DTB student2: '+student2.average());
