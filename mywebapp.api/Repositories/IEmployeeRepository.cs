using System.Collections.Generic;
using System.Linq;
using mywebapp.api.Models;

namespace mywebapp.api.Repositories
{
    public interface IEmployeeRepository
    {
        IEnumerable<Employee> Employees();

        IQueryable<Employee> EmployeeById(int id);

        void InsertEmployee(Employee employee);

        void UpdateEmployee(Employee employee);

        void DeleteEmployeeById(int id);
    }
}