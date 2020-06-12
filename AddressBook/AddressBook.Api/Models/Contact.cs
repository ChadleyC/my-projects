using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AddressBook.Api.Models
{
    public class Contact : IDataEntity
    {
        public string Id { get; set; }
        public string Firstname { get; set; }
        public string Surname { get; set; }
        [Phone]
        public string Tel { get; set; }
        [Phone]
        public string Cell { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        public DateTime UpdatedDate { get; set; }

        public (bool valid, List<(string key, string message)>) Validate()
        {
            // Do custom validation here.

            return (true, null);
        }
    }
}
