package com.ola.checkstudentapp.controller;

import com.ola.checkstudentapp.model.Student;
import com.ola.checkstudentapp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {

//    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")

    @Autowired
    private StudentService studentService;

    @PostMapping ("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student added on list ";
    }

}
