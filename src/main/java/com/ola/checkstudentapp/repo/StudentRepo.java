package com.ola.checkstudentapp.repo;

import com.ola.checkstudentapp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepo extends JpaRepository <Student, Integer > {
}
