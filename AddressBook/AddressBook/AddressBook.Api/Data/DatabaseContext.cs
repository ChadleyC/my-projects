using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using AddressBook.Api.Models;
using LiteDB;

namespace AddressBook.Api.Data
{
    public sealed class DatabaseContext
    {
        private readonly ILiteDatabase _database;

        public DatabaseContext()
        {
            _database = new LiteDatabase("~/AppData/AddressBook.db");
        }

        public async Task<IEnumerable<T>> GetWhereAsync<T>(Expression<Func<T, bool>> where) where T : IDataEntity
        {
            var collection = GetCollection<T>();

            return await Task.Run(() => collection.Find(where));
        }

        public async Task<T> GetFirstAsync<T>(Expression<Func<T, bool>> where) where T : IDataEntity
        {
            var collection = GetCollection<T>();

            return await Task.Run(() => collection.FindOne(where));
        }

        public async Task<T> InsertAsync<T>(T data) where T : IDataEntity
        {
            var collection = GetCollection<T>();

            return await Task.Run(() =>
            {
                var id = collection.Insert(data);
                data.Id = id;
                collection.Update(data);

                return collection.FindById(id);
            });
        }

        public async Task<T> UpdateAsync<T>(T data) where T : IDataEntity
        {
            var collection = GetCollection<T>();

            return await Task.Run(() =>
            {
                if (collection.Update(data.Id, data))
                {
                    return data;
                }

                return default;
            });
        }

        public async Task<bool> DeleteAsync<T>(T data) where T : IDataEntity
        {
            var collection = GetCollection<T>();

            return await Task.Run(() => collection.Delete(data.Id));
        }

        private ILiteCollection<T> GetCollection<T>()
        {
            return _database.GetCollection<T>(typeof(T).FullName);
        }
    }
}
