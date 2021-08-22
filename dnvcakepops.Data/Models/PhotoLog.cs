using System;

namespace dnvcakepops.Data.Models
{
    public class PhotoLog
    {
        public int Id { get; set; }
        public double Aperture { get; set; }
        public int ShutterSpeed { get; set; }
        public int ISO { get; set; }
        public int FocalLength { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
        
        //public string Note { get; }
        //public int JournalId { get; set; }
        //public string UserId { get; set; }
    }
}