using System.Linq;
using System.Reflection;
using AddressBook.Api.Services.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace AddressBook.Api.Extensions
{
    public static class ServiceExtensions
    {
        public static void AddServices(this IServiceCollection services)
        {
            var assembly = typeof(Program).GetTypeInfo().Assembly;

            foreach (var type in assembly.GetTypes().Where(type => type.IsSubclassOf(typeof(IService))))
            {
                services.AddTransient(type);
            }
        }
    }
}
