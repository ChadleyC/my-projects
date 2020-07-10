using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AddressBook.Api.Data;
using AddressBook.Api.Models;
using AddressBook.Api.Services.Interfaces;

namespace AddressBook.Api.Services
{
    public class ContactService : IContactService
    {
        private readonly DatabaseContext _context;

        public ContactService(DatabaseContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Contact>> GetContacts(Expression<Func<Contact, bool>> @where)
        {
            return await _context.GetWhereAsync(where);
        }

        public async Task<Contact> GetContact(Expression<Func<Contact, bool>> @where)
        {
            return await _context.GetFirstAsync(where);
        }

        public async Task<Contact> SaveContact(Contact contact)
        {
            return await _context.InsertAsync(contact);
        }

        public async Task<Contact> UpdateContact(Contact contact)
        {
            return await _context.UpdateAsync(contact);
        }

        public async Task<bool> DeleteContact(Expression<Func<Contact, bool>> where)
        {
            var contact = await _context.GetFirstAsync(where);
            return await _context.DeleteAsync(contact);
        }
    }
}
