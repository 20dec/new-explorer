## Local Deploy

```powershell
docker run --rm -it -v "${PWD}/src:/web" -p "8080:8080" halverneus/static-file-server:v1.5.0
```