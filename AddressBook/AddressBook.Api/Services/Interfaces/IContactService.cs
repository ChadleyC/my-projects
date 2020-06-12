using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AddressBook.Api.Models;
using Microsoft.Extensions.Primitives;

namespace AddressBook.Api.Services.Interfaces
{
    public interface IContactService : IService
    {
        Task<IEnumerable<Contact>> GetContacts(Expression<Func<Contact, bool>> where);
        Task<Contact> GetContact(Expression<Func<Contact, bool>> where);
        Task<Contact> SaveContact(Contact contact);
        Task<Contact> UpdateContact(Contact contact);
        Task<bool> DeleteContact(Contact contact);
    }
}
