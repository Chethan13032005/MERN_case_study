const express = require("express");

const InMemoryCourseRepository = require("./repositories/InMemoryCourseRepository");
const CourseService = require("./services/CourseService");
const Course = require("./models/Course");

const app = express();

app.use(express.json());

const courseRepo = new InMemoryCourseRepository();
const courseService = new CourseService(courseRepo);


/* Create Course */
app.post("/courses", async (req, res) => {

  const { id, name, capacity } = req.body;
  const course = new Course(id, name, capacity);
  await courseRepo.save(course);
  res.json({ message: "Course created" });

});


/* Enroll Student */
app.post("/courses/:id/enroll", async (req, res) => {

  try {

    const result = await courseService.enroll(
      req.params.id,
      req.body.studentId
    );

    res.json(result);

  } catch (error) {

    res.status(400).json({ error: error.message });

  }

});


/* Get Student Courses */
app.get("/students/:id/courses", async (req, res) => {

  const courses = await courseService.getStudentCourses(req.params.id);

  res.json(courses);

});

app.delete("/courses/:id", async (req, res) => {

  try {

    const result = await courseService.deleteCourse(
      req.params.id
    );

    res.json(result);

  } catch (error) {

    res.status(400).json({
      error: error.message
    });

  }

});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});