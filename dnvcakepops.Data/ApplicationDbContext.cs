using Microsoft.EntityFrameworkCore;
using dnvcakepops.Data.Models;

namespace dnvcakepops.Data
{
    public class ApplicationDbContext: DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }
        
        public DbSet<PhotoLog> PhotoLogs { get; set; }
    }
}