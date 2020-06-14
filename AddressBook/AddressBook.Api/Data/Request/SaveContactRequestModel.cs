using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using AddressBook.Api.Models;
using Foolproof;

namespace AddressBook.Api.Data.Request
{
    public class SaveContactRequestModel
    {
        [Required]
        public string Firstname { get; set; }
        [Required]
        public string Surname { get; set; }
        [Phone]
        public string Tel { get; set; }
        [Phone]
        public string Cell { get; set; }
        [EmailAddress]
        public string Email { get; set; }

        public static implicit operator Contact(SaveContactRequestModel model) => new Contact
        {
            Cell = model.Cell,
            Email = model.Email,
            Firstname = model.Firstname,
            Surname = model.Surname,
            Tel = model.Tel
        };
    }
}
