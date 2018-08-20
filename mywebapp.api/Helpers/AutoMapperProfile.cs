using AutoMapper;
using mywebapp.api.Dtos;
using mywebapp.api.Models;

namespace mywebapp.api.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Employee, EmployeeToSave>();
        }
    }
}