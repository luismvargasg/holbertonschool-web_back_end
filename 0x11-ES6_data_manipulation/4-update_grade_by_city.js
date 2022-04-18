export default function updateStudentGradeByCity(list, city, grad) {
  return list
    .filter((item) => item.location === city)
    .map((student) => {
      const gradeI = grad
        .filter((item) => item.studentId === student.id)
        .map((x) => x.grade)[0];
      const grade = gradeI || 'N/A';
      return { ...student, grade };
    });
}
