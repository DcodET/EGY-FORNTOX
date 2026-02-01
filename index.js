// ======================================
// إعداد نظام ToxiTrack تلقائياً
// ======================================

const fs = require('fs');
const path = require('path');

console.log('🚀 بدء إعداد نظام ToxiTrack...');

// 1. إنشاء package.json
const packageJson = {
  "name": "toxitrack-system",
  "version": "1.0.0",
  "description": "نظام إدارة العينات السمية الجنائية",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "setup": "npm install && echo '✅ تم التثبيت بنجاح!'"
  },
  "keywords": ["forensic", "toxicology", "egypt"],
  "author": "ToxiTrack Team",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  }
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('✅ تم إنشاء package.json');

// 2. إنشاء server.js
const serverCode = `// ToxiTrack Server - النسخة البسيطة
const express = require('express');
const app = express();
const PORT = 3000;

// خدمة الملفات الثابتة
app.use(express.static('.'));

// صفحة الترحيب
app.get('/', (req, res) => {
    res.send(\`
        <html dir="rtl">
        <head><title>ToxiTrack</title></head>
        <body style="font-family: Arial; text-align: center; padding: 50px;">
            <h1>🚀 نظام ToxiTrack جاهز!</h1>
            <p>✅ تم تثبيت النظام بنجاح</p>
            <p>🔗 <a href="index.html">افتح صفحة الدخول</a></p>
            <p>📡 السيرفر شغال على: http://localhost:\${PORT}</p>
        </body>
        </html>
    \`);
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log('✅ ToxiTrack Server Started!');
    console.log(\`📡 Open: http://localhost:\${3000PORT}\`);
    console.log(\`📡 Open: http://localhost:\${3000}/index.html\`);
});`;

fs.writeFileSync('server.js', serverCode);
console.log('✅ تم إنشاء server.js');

// 3. إنشاء index.html
const indexHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ToxiTrack</title>
    <style>
        body { background: #f0f2f5; font-family: Arial; text-align: center; padding: 50px; }
        .box { background: white; padding: 30px; border-radius: 10px; display: inline-block; box-shadow: 0 0 20px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; }
        button { background: #3498db; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; }
        button:hover { background: #2980b9; }
        .success { color: #27ae60; font-weight: bold; }
    </style>
</head>
<body>
    <div class="box">
        <h1>🧪 ToxiTrack System</h1>
        <p class="success">✅ النظام يعمل بنجاح!</p>
        <p>Node.js مثبت بشكل صحيح</p>
        <p>السيرفر شغال على المنفذ 3000</p>
        <br>
        <button onclick="window.location.href='dashboard.html'">فتح لوحة التحكم</button>
    </div>
</body>
</html>`;

fs.writeFileSync('index.html', indexHtml);
console.log('✅ تم إنشاء index.html');

// 4. إنشاء dashboard.html
const dashboardHtml = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>لوحة التحكم</title>
    <style>
        body { margin: 0; font-family: Arial; }
        .sidebar { width: 250px; background: #2c3e50; color: white; height: 100vh; float: right; }
        .main { margin-right: 250px; padding: 20px; }
        .card { background: #3498db; color: white; padding: 20px; margin: 10px; border-radius: 10px; }
    </style>
</head>
<body>
    <div class="sidebar">
        <h3 style="padding: 20px;">ToxiTrack</h3>
        <div style="padding: 20px;">
            <a href="#" style="color: white; display: block; padding: 10px;">لوحة التحكم</a>
            <a href="#" style="color: white; display: block; padding: 10px;">العينات</a>
            <a href="index.html" style="color: white; display: block; padding: 10px;">الخروج</a>
        </div>
    </div>
    <div class="main">
        <h1>لوحة التحكم</h1>
        <div class="card">
            <h3>🎉 مبروك!</h3>
            <p>تم تثبيت النظام بنجاح</p>
        </div>
        <div class="card" style="background: #27ae60;">
            <h3>✅ النظام جاهز</h3>
            <p>يمكنك الآن البدء في تطوير ToxiTrack</p>
        </div>
    </div>
</body>
</html>`;

fs.writeFileSync('dashboard.html', dashboardHtml);
console.log('✅ تم إنشاء dashboard.html');

// 5. إنشاء README.txt
const readmeTxt = `🎯 ToxiTrack - نظام إدارة العينات السمية

✅ تم التثبيت بنجاح!

🚀 خطوات التشغيل:
1. npm install    ← تثبيت المكتبات
2. npm start      ← تشغيل السيرفر
3. افتح المتصفح على: http://localhost:3000

📁 الملفات المثبتة:
- package.json   ← إعدادات المشروع
- server.js      ← خادم Node.js
- index.html     ← صفحة الدخول
- dashboard.html ← لوحة التحكم

🔧 للمساعدة: تواصل مع المطور`;

fs.writeFileSync('README.txt', readmeTxt);
console.log('✅ تم إنشاء README.txt');

console.log('\n🎉 تم إنشاء جميع الملفات بنجاح!');
console.log('\n👉 الآن قم بتنفيذ هذه الأوامر:');
console.log('1. npm install');
console.log('2. npm start');