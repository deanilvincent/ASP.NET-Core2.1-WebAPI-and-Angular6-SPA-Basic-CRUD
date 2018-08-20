using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace mywebapp.api.Models
{
    public class Employee
    {
        [Key]
        public int EmployeeId { get; set; }

        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Position { get; set; }

        public string Department { get; set; }

        public int Age { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.Now;

        [NotMapped]
        public string Fullname => $"{Firstname} {Lastname}";
    }
}