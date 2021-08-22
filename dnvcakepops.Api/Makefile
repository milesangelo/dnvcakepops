# Project Variables
PROJECT_NAME ?= dnvcakepops

.PHONY: migrations db build release

migrations:
	- cd ./dnvcakepops.Data \
	    && dotnet ef --startup-project ../dnvcakepops.Web/ migrations add $(mname) \
	    && cd ..

db:
	- cd ./LightLib.Data \
	    && dotnet ef --startup-project ../dnvcakepops.Web/ database update \
	    && cd ..

build:
	- dotnet clean && dotnet build

run-sonar:
	- sonar-scanner

release:
	- dotnet publish ./dnvcakepops.sln -c Release -o release
