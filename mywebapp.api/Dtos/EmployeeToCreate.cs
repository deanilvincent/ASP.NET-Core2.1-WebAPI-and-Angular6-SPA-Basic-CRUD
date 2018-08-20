namespace mywebapp.api.Dtos
{
    public class EmployeeToCreate
    {
        public string Firstname { get; set; }

        public string Lastname { get; set; }

        public string Position { get; set; }

        public string Department { get; set; }

        public int Age { get; set; }
    }
}