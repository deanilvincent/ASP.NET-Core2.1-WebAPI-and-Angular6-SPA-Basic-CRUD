using Microsoft.EntityFrameworkCore;
using mywebapp.api.Models;

namespace mywebapp.api.Data
{
    public class MyAppDbContext : DbContext
    {
        public MyAppDbContext(DbContextOptions<MyAppDbContext> options) : base(options)
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=.;Database=MyAppDb;Integrated Security=True");
        }

        public DbSet<Employee> Employees { get; set; }
    }
}