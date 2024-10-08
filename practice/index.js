const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');  // path 모듈 추가

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// 정적 파일 제공을 위해 'public' 디렉토리를 사용합니다.
app.use(express.static(path.join(__dirname, 'public')));

// GET 방식: 정적인 페이지를 요청할 때 사용하는 통신 방식
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jaewoo', 'index.html'));
});

app.get('/jaewoo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'jaewoo', 'index.html'));
});

// POST 방식: 동적인 페이지 서비스가 필요할 때 사용되는 통신 방식
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
