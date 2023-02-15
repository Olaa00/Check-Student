package com.ola.checkstudentapp.service;

import com.ola.checkstudentapp.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
