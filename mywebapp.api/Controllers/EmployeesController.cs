using System;
using System.Diagnostics;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mywebapp.api.Dtos;
using mywebapp.api.Models;
using mywebapp.api.Repositories;

namespace mywebapp.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly IEmployeeRepository employeeRepo;
        private readonly IMapper mapper;

        public EmployeesController(IEmployeeRepository employeeRepo, IMapper mapper)
        {
            this.employeeRepo = employeeRepo;
            this.mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok(await Task.FromResult(employeeRepo.Employees()));
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            return Ok(await employeeRepo.EmployeeById(id).FirstOrDefaultAsync());
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(EmployeeToSave employeeToSave)
        {
            try
            {
                await Task.Run(() =>
                {
                    var employee = mapper.Map<Employee>(employeeToSave);

                    employeeRepo.InsertEmployee(employee);
                });
                return Ok();
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                return BadRequest("Something went wrong. Unsuccessfully save");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, EmployeeToSave employeeToSave)
        {
            if (id == 0)
            {
                return BadRequest("Id is empty");
            }

            try
            {
                await Task.Run(() =>
                {
                    var employee = mapper.Map<Employee>(employeeToSave);
                    employee.EmployeeId = id;

                    employeeRepo.UpdateEmployee(employee);
                });

                return Ok();
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                return BadRequest("Something went wrong. Unsuccessfully save");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteById(int id)
        {
            try
            {
                await Task.Run(() =>
                {
                    employeeRepo.DeleteEmployeeById(id);
                });
                return Ok();
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                return BadRequest("Something went wrong. Unsuccessfully delete");
            }
        }
    }
}