﻿using System.ComponentModel.DataAnnotations.Schema;

namespace AngularWebApi.Models
{
    [Table("student")]
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Age { get; set; }

    }
}
