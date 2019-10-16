function toAmericanGrade(grade) {
    switch(true) {
        case grade >= 9:  
          return "A";
          break;

        case grade >= 8:  
          return "B";
          break;

        case grade >= 7:  
          return "C";
          break;

        case grade >= 6:  
          return "D";
          break;

        default: 
          return "F";
      }
  }
  
  // tests
  function test (num, should_become) {
    if (toAmericanGrade(num) === should_become) {
      console.log("test passed")
    } else {
      console.log(`toAmericanGrade(${num}) should have been ${should_become} but was ${toAmericanGrade(num)}`)
    }
  }
  test(9, "A")
  test(10, "A")
  test(1, "F")
  test(5.9, "F")
  test(6, "D")
  test(6.9, "D")

  function toAmericanGrades(grades) {
    return grades.map(toAmericanGrade); // replace this with your answer
  }
  
  // test
  const grades1 = [9, 5.5, 6, 7.3]
  const res = toAmericanGrades(grades1)[3]
  console.log(`last is C? ${'C' == res ? "yes" : `no: ${res}`}`)

  function averageAmericanGrade(grades) {
    const gradesSum = grades.reduce((sum, current) => sum + current);
  
    const gradesAverageDutch = gradesSum / grades.length;
  
    return toAmericanGrade(gradesAverageDutch);
}
  // test
  // This array was already declared in the previous section. 
  // You might get an error if you run it again.
  const grades1 = [9, 5.5, 6, 7.3]
  const res = averageAmericanGrade(grades1)
  console.log(`average is D? ${'D' == res ? "yes" : `no: ${res}`}`)