using System;
using System.Diagnostics;
using System.Threading.Tasks;
using AutoMapper;
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
        public async Task<IActionResult> Create(EmployeeToCreate employeeToCreate)
        {
            try
            {
                await Task.Run(() =>
                {
                    var employee = mapper.Map<Employee>(employeeToCreate);

                    employeeRepo.InsertEmployee(employee);
                });

                return Ok("Successfully saved");
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                return Ok("Something went wrong. Unsuccessfully save");
            }
        }
    }
}