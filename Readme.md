### Nodejs Api boilerplate

###Dependencies

- express 
- passport 
- passport-http-bearer 
- dotenv
- mysql2
- sequelize

###Setup

```bash
docker-composer up -d
```

### Auth
```bash
curl http://localhost:4455 --header 'Authorization: bearer XYZ....'
```
