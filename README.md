#### NodeJs app clustering demo

*Install pakages:*
```bash
npm install
```
*Run simple app:*
```bash
npm start server
```

*Run app with cluster:*
```bash
npm start cluster
```

*Run Load test to verify clustering*
```bash
npm install -g loadtest
loadtest -c 1000 --rps 200 http://localhost:3000/
```

![Alt text](/Selection_001.png?raw=true "Output")
