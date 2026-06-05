const ICourseRepository = require("./interfaces/ICourseRepository");

class InMemoryCourseRepository extends ICourseRepository {

  constructor() {
    super();
    this.courses = [];
  }

  async findAll() {
    return this.courses;
  }

  async findById(id) {
    return this.courses.find(c => c.id === id) || null;
  }

  async save(course) {

    const index = this.courses.findIndex(
      c => c.id === course.id
    );

    if (index >= 0) {
      this.courses[index] = course;
    } else {
      this.courses.push(course);
    }

  }

  async enrollStudent(courseId, studentId) {

    const course = await this.findById(courseId);

    if (course && !course.students.includes(studentId)) {

      course.students.push(studentId);

      await this.save(course);

    }

  }

  async findByStudentId(studentId) {

    return this.courses.filter(
      course => course.students.includes(studentId)
    );

  }

  async delete(courseId) {

    const index = this.courses.findIndex(
      course => course.id === courseId
    );

    if (index >= 0) {
      this.courses.splice(index, 1);
    }

  }

}

module.exports = InMemoryCourseRepository;