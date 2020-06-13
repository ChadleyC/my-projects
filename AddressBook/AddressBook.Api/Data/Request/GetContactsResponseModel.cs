using System;
using System.Linq.Expressions;
using AddressBook.Api.Models;
using LinqKit;

namespace AddressBook.Api.Data.Request
{
    public class GetContactsResponseModel
    {
        public string FirstName { get; set; }
        public string EmailAddress { get; set; }

        public static implicit operator Expression<Func<Contact, bool>>(GetContactsResponseModel model)
        {
            var predicate = PredicateBuilder.New<Contact>();
            if (!string.IsNullOrEmpty(model.FirstName))
            {
                predicate.And(x => x.Firstname == model.FirstName);
            }

            if (!string.IsNullOrEmpty(model.EmailAddress))
            {
                predicate.And(x => x.Email == model.EmailAddress);
            }

            return predicate;
        }
    }
}
