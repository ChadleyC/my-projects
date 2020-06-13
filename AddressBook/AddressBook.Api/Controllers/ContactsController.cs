using System.Threading.Tasks;
using AddressBook.Api.Data.Request;
using AddressBook.Api.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace AddressBook.Api.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }
        
        [HttpGet("Contacts")]
        public async Task<IActionResult> GetContacts(GetContactsResponseModel model)
        {
            return Ok(_contactService.GetContacts(model));
        }
    }
}
