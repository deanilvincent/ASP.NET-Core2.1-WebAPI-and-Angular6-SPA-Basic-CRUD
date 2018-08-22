using System.Threading.Tasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Mvc;

namespace mywebapp.api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AntiXsrfController : ControllerBase
    {
        private readonly IAntiforgery antiForgery;
        public AntiXsrfController(IAntiforgery antiForgery)
        {
            this.antiForgery = antiForgery;
        }

        [HttpGet]
        public async Task<IActionResult> GetToken()
        {
            return Ok(await Task.FromResult(
                new
                {
                    token = antiForgery.GetAndStoreTokens(HttpContext).RequestToken
                }));
        }
    }
}