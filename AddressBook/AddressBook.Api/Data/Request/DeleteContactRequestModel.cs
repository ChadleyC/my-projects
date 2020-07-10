using System;
using System.Linq.Expressions;
using AddressBook.Api.Models;

namespace AddressBook.Api.Data.Request
{
    public class DeleteContactRequestModel
    {
        public string Id { get; set; }

        public static implicit operator Expression<Func<Contact, bool>>(DeleteContactRequestModel model)
        {
            if (string.IsNullOrEmpty(model.Id))
            {
                throw new ArgumentNullException(nameof(Id));
            }

            var predicate = PredicateBuilder.New<Contact>();

            predicate.Add(x => x.Id.Equals(model.Id));
          
            return predicate;
        }
    }
}
