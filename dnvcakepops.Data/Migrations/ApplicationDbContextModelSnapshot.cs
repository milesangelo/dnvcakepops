﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using dnvcakepops.Data;

namespace dnvcakepops.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    partial class ApplicationDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.9");

            modelBuilder.Entity("dnvcakepops.Data.Models.PhotoLog", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<double>("Aperture")
                        .HasColumnType("REAL");

                    b.Property<DateTime>("DateCreated")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DateModified")
                        .HasColumnType("TEXT");

                    b.Property<int>("FocalLength")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ISO")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ShutterSpeed")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("PhotoLogs");
                });
#pragma warning restore 612, 618
        }
    }
}
