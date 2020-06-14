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
        public async Task<IActionResult> GetContacts(GetContactsRequestModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _contactService.GetContacts(model));
            }

            return BadRequest(ModelState);
        }

        [HttpPost]
        public async Task<IActionResult> SaveContact(SaveContactRequestModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _contactService.SaveContact(model));
            }

            return BadRequest(ModelState);
        }
    }
}
