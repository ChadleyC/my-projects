using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace AddressBook.Api
{
    public class Response<T>
    {
        public HttpStatusCode Status { get; set; }
        public T Data { get; set; }
        public Dictionary<string,string> MetaData { get; set; }
    }
}
