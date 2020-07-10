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

        [HttpPost("Save")]
        public async Task<IActionResult> SaveContact(SaveContactRequestModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _contactService.SaveContact(model));
            }

            return BadRequest(ModelState);
        }

        [HttpPut("Update")]
        public async Task<IActionResult> UpdateContact(UpdateContactRequestModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _contactService.UpdateContact(model));
            }

            return BadRequest(ModelState);
        }

        [HttpDelete("Delete")]
        public async Task<IActionResult> DeleteContact(DeleteContactRequestModel model)
        {
            if (ModelState.IsValid)
            {
                return Ok(await _contactService.DeleteContact(model));
            }

            return BadRequest(ModelState);
        }
    }
}
