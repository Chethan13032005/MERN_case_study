class ICourseRepository {

  async findAll() {}

  async findById(id) {}

  async save(course) {}

  async enrollStudent(courseId, studentId) {}

  async findByStudentId(studentId) {}

  async delete(courseId) {}

}

module.exports = ICourseRepository;