using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using mywebapp.api.Data;
using mywebapp.api.Models;

namespace mywebapp.api.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly MyAppDbContext context;

        public EmployeeRepository(MyAppDbContext context)
        {
            this.context = context;
        }

        public void DeleteEmployeeById(int id)
        {
            try
            {
                var employee = EmployeeById(id).FirstOrDefault();

                if (employee != null)
                {
                    context.Employees.Remove(employee);
                    Save();
                }
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
        }

        public IQueryable<Employee> EmployeeById(int id)
        {
            return context.Employees.Where(x => x.EmployeeId == id);
        }

        public IEnumerable<Employee> Employees()
        {
            return context.Employees.OrderByDescending(x => x.EmployeeId);
        }

        public void InsertEmployee(Employee employee)
        {
            try
            {
                context.Employees.Add(employee);
                Save();
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
        }

        public void UpdateEmployee(Employee employee)
        {
            try
            {
                context.Employees.Update(employee);
                Save();
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
            }
        }

        private void Save()
        {
            context.SaveChanges();
        }
    }
}