// ============================================
// 🎬 BRONX TEXT TO VIDEO V5.0 – ULTIMATE
// Real AI Video Generation • 4K Support
// ============================================
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const CREDIT = "BRONX_ULTRA";

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    if (req.method === 'OPTIONS') return res.sendStatus(200);
    next();
});
app.use(express.json());

// ============ HOME DASHBOARD ============
app.get('/', (req, res) => {
    const H = `${req.protocol}://${req.get('host')}`;
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>🎬 BRONX VIDEO GEN V5</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        :root{--bg:#000814;--s:rgba(5,15,35,.92);--b:rgba(255,105,180,.08);--t:#d0d8f0;--a:#ff4500;--a2:#ff8c00;--g:#00ff88;--r:#ff3366;--p:#8b5cf6}
        *{margin:0;padding:0;box-sizing:border-box}
        body{background:var(--bg);color:var(--t);font-family:'Rajdhani',sans-serif;min-height:100vh;overflow-x:hidden}
        body::before{content:'';position:fixed;inset:0;background:radial-gradient(ellipse at 30% -20%,rgba(255,69,0,.06),transparent 50%),radial-gradient(ellipse at 70% 100%,rgba(138,43,226,.05),transent 50%),radial-gradient(ellipse at 50% 50%,rgba(0,150,255,.03),transparent 60%);pointer-events:none;z-index:0}
        
        .particles{position:fixed;inset:0;pointer-events:none;z-index:0}
        .particle{position:absolute;width:2px;height:2px;background:var(--a);border-radius:50%;animation:floatUp 6s infinite;opacity:0}
        @keyframes floatUp{0%{transform:translateY(100vh) scale(0);opacity:0}20%{opacity:.8}80%{opacity:.8}100%{transform:translateY(-10vh) scale(1);opacity:0}}
        
        .container{max-width:900px;margin:0 auto;padding:15px;position:relative;z-index:1}
        .header{text-align:center;padding:25px 0 15px}
        .header .logo{font-size:55px;animation:bounce 2s infinite}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
        .header h1{font-family:'Orbitron',sans-serif;font-size:clamp(22px,5vw,34px);background:linear-gradient(90deg,var(--a),var(--a2),var(--p),#0096ff,#00d4ff);background-size:300% 100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation:rb 4s linear infinite}@keyframes rb{0%{background-position:0% 50%}100%{background-position:300% 50%}}
        .header .ver{color:var(--a);font-size:10px;letter-spacing:6px;margin-top:4px}
        .badge-row{display:flex;justify-content:center;flex-wrap:wrap;gap:5px;margin:10px 0}
        .badge{background:rgba(255,69,0,.06);color:var(--a);padding:4px 14px;border-radius:20px;font-size:9px;border:1px solid rgba(255,69,0,.12);letter-spacing:1px}
        .badge.glow{background:var(--a);color:#fff;animation:glowPulse 2s infinite}@keyframes glowPulse{0%,100%{box-shadow:0 0 8px rgba(255,69,0,.3)}50%{box-shadow:0 0 25px rgba(255,69,0,.6)}}
        
        .main-grid{display:grid;grid-template-columns:1fr 300px;gap:12px}
        @media(max-width:768px){.main-grid{grid-template-columns:1fr}}
        
        .card{background:var(--s);border:1px solid var(--b);border-radius:18px;padding:20px;margin-bottom:12px;backdrop-filter:blur(20px);transition:.3s}
        .card:hover{border-color:rgba(255,69,0,.15)}
        .card h3{color:#fff;font-size:14px;margin-bottom:12px;display:flex;align-items:center;gap:8px}
        .card h3 i{color:var(--a);font-size:16px}
        
        textarea,select,input[type=text],input[type=number]{width:100%;padding:11px;background:rgba(0,0,0,.4);border:1px solid var(--b);border-radius:10px;color:#fff;font-size:12px;outline:none;margin:5px 0;font-family:'Rajdhani',sans-serif;resize:vertical;transition:.3s}
        textarea:focus,select:focus,input:focus{border-color:var(--a);box-shadow:0 0 20px rgba(255,69,0,.1)}
        
        .btn{width:100%;padding:13px;border:none;border-radius:10px;font-weight:700;cursor:pointer;font-family:'Orbitron',sans-serif;font-size:13px;margin:5px 0;transition:.3s;letter-spacing:1px;text-transform:uppercase}
        .btn:hover:not(:disabled){transform:translateY(-2px)}
        .btn:disabled{opacity:.4;cursor:not-allowed}
        .btn-primary{background:linear-gradient(135deg,var(--a),var(--a2));color:#fff}
        .btn-primary:hover:not(:disabled){box-shadow:0 0 35px rgba(255,69,0,.3)}
        .btn-success{background:linear-gradient(135deg,#00c853,#009624);color:#fff}
        .btn-dark{background:rgba(255,255,255,.04);color:#888}
        
        .quality-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:5px}
        .qbtn{background:rgba(255,69,0,.04);color:#888;padding:10px 6px;border-radius:8px;font-size:9px;cursor:pointer;border:1px solid rgba(255,69,0,.06);text-align:center;transition:.2s}
        .qbtn:hover{background:rgba(255,69,0,.1);color:#fff}
        .qbtn.on{background:linear-gradient(135deg,var(--a),var(--a2));color:#fff;border-color:transparent;font-weight:700}
        
        .scene-list{max-height:200px;overflow-y:auto;padding:4px}
        .scene-list::-webkit-scrollbar{width:3px}.scene-list::-webkit-scrollbar-thumb{background:var(--a);border-radius:6px}
        .scene-item{background:rgba(0,0,0,.3);padding:10px;border-radius:8px;margin:4px 0;font-size:10px;color:#aaa;display:flex;justify-content:space-between;align-items:center}
        .scene-item .num{color:var(--a);font-weight:700;margin-right:8px}
        .scene-item .del{color:var(--r);cursor:pointer;font-size:14px}
        
        .result{display:none}.result.show{display:block}
        .frame-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:6px;margin:8px 0}
        .frame-card{background:rgba(0,0,0,.4);border-radius:10px;overflow:hidden;border:1px solid rgba(255,69,0,.08)}
        .frame-card img{width:100%;height:auto;display:block}
        .frame-card .fn{font-size:8px;color:#667;padding:4px 6px;text-align:center}
        
        .loading{display:none;text-align:center;padding:25px}.loading.show{display:block}
        .spinner{width:40px;height:40px;border:3px solid rgba(255,69,0,.1);border-top:3px solid var(--a);border-radius:50%;animation:spin .7s linear infinite;margin:10px auto}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
        .progress-bar{width:100%;height:4px;background:rgba(255,69,0,.1);border-radius:4px;overflow:hidden;margin:8px 0}
        .progress-fill{height:100%;background:linear-gradient(90deg,var(--a),var(--a2));width:0%;transition:width .3s;border-radius:4px}
        
        video{width:100%;border-radius:12px;border:2px solid rgba(255,69,0,.1);margin:8px 0}
        
        .tips{font-size:10px;color:#667;padding:10px;background:rgba(255,180,0,.03);border-radius:8px;margin:8px 0;border-left:2px solid #ffb400}
    </style>
</head>
<body>
<div class="particles" id="particles"></div>
<div class="container">
    <div class="header">
        <div class="logo">🎬</div>
        <h1>BRONX VIDEO GEN</h1>
        <div class="ver">VERSION 5.0 • ULTIMATE • 4K</div>
        <div class="badge-row">
            <span class="badge glow">🤖 AI GENERATED</span>
            <span class="badge">🎬 4K SUPPORT</span>
            <span class="badge">⚡ REAL-TIME</span>
            <span class="badge">🎨 10 STYLES</span>
            <span class="badge">📥 DOWNLOAD</span>
        </div>
    </div>

    <div class="main-grid">
        <div>
            <div class="card">
                <h3><i>📝</i> CREATE YOUR VIDEO</h3>
                <textarea id="prompt" rows="3" placeholder="Describe your video scene by scene...&#10;Example:&#10;Scene 1: Sunset over mountains&#10;Scene 2: Stars in night sky&#10;Scene 3: Sunrise with birds">Scene 1: Beautiful sunset over calm ocean with golden reflections, cinematic 4K
Scene 2: Night sky with millions of stars and purple nebula
Scene 3: Tropical beach with palm trees at sunrise
Scene 4: Waterfall in green forest with rainbow
Scene 5: Mountain peak with snow and clouds</textarea>
                
                <div class="quality-grid">
                    <div class="qbtn on" onclick="setQuality('low',this)">⚡ LOW<br><small>360p</small></div>
                    <div class="qbtn" onclick="setQuality('medium',this)">📺 MED<br><small>720p</small></div>
                    <div class="qbtn" onclick="setQuality('high',this)">🎬 HIGH<br><small>1080p</small></div>
                    <div class="qbtn" onclick="setQuality('4k',this)">🚀 4K<br><small>2160p</small></div>
                </div>
                
                <select id="style">
                    <option value="">🎨 Realistic (Default)</option>
                    <option value="anime">🎌 Anime Style</option>
                    <option value="3d">🧊 3D Render</option>
                    <option value="cinematic">🎥 Cinematic</option>
                    <option value="cartoon">🎭 Cartoon</option>
                    <option value="painting">🖼️ Oil Painting</option>
                    <option value="cyberpunk">🌃 Cyberpunk</option>
                    <option value="fantasy">🧙 Fantasy</option>
                </select>
                
                <button class="btn btn-primary" id="genBtn" onclick="generateVideo()">🎬 GENERATE VIDEO</button>
            </div>
            
            <div class="loading" id="loading">
                <div class="spinner"></div>
                <p style="color:var(--a);font-size:14px">🎬 Creating your video frames...</p>
                <div class="progress-bar"><div class="progress-fill" id="progressFill"></div></div>
                <p style="color:#667;font-size:10px" id="progressText">Starting...</p>
            </div>
            
            <div class="result" id="result">
                <div class="card">
                    <h3><i style="color:var(--g)">✅</i> VIDEO FRAMES READY!</h3>
                    <div class="frame-grid" id="frameGrid"></div>
                    <p style="color:#667;font-size:10px;margin:8px 0">📥 Download frames and combine into video using free tools below</p>
                    <button class="btn btn-success" onclick="downloadAll()">📥 DOWNLOAD ALL FRAMES</button>
                    <button class="btn btn-dark" onclick="createVideo()">🎬 COMBINE INTO VIDEO</button>
                </div>
            </div>
        </div>
        
        <div>
            <div class="card">
                <h3><i>🎯</i> QUICK PROMPTS</h3>
                <div style="display:flex;flex-direction:column;gap:4px">
                    <button class="btn btn-dark" onclick="setQuick('sunset')" style="font-size:10px">🌅 Sunset Ocean</button>
                    <button class="btn btn-dark" onclick="setQuick('city')" style="font-size:10px">🌃 Cyberpunk City</button>
                    <button class="btn btn-dark" onclick="setQuick('space')" style="font-size:10px">🌌 Space Galaxy</button>
                    <button class="btn btn-dark" onclick="setQuick('nature')" style="font-size:10px">🏞️ Nature Forest</button>
                    <button class="btn btn-dark" onclick="setQuick('anime')" style="font-size:10px">🎌 Anime Fight</button>
                    <button class="btn btn-dark" onclick="setQuick('car')" style="font-size:10px">🏎️ Sports Car</button>
                </div>
            </div>
            
            <div class="card">
                <h3><i>🛠️</i> FREE VIDEO TOOLS</h3>
                <div style="display:flex;flex-direction:column;gap:4px">
                    <button class="btn btn-dark" onclick="window.open('https://ezgif.com/maker','_blank')" style="font-size:10px">🎞️ Ezgif (GIF/Video)</button>
                    <button class="btn btn-dark" onclick="window.open('https://clideo.com/video-maker','_blank')" style="font-size:10px">🎬 Clideo Video Maker</button>
                    <button class="btn btn-dark" onclick="window.open('https://www.canva.com/create/videos/','_blank')" style="font-size:10px">🎨 Canva Video</button>
                    <button class="btn btn-dark" onclick="window.open('https://www.kapwing.com/studio/editor','_blank')" style="font-size:10px">✂️ Kapwing Editor</button>
                </div>
            </div>
            
            <div class="card">
                <h3><i>🔗</i> API ENDPOINTS</h3>
                <code style="font-size:9px;background:rgba(0,0,0,.4);padding:8px;border-radius:6px;color:var(--g);display:block;word-break:break-all">GET /generate?prompt=DESC&quality=high&style=cinematic</code>
                <code style="font-size:9px;background:rgba(0,0,0,.4);padding:8px;border-radius:6px;color:var(--g);display:block;word-break:break-all;margin-top:4px">GET /api/generate?prompt=DESC (JSON)</code>
            </div>
        </div>
    </div>
    
    <div class="tips">
        <b>💡 PRO TIP:</b> Write multiple scenes separated by new lines • Each scene = 1 frame • Use descriptive words • Add "4K, cinematic, detailed" for best quality • Combine frames into video using Ezgif or Canva!
    </div>
</div>

<script>
var currentQuality = 'low';
var qualityMap = { low:512, medium:768, high:1024, '4k':2048 };
var generatedFrames = [];

// Particles
for(var i=0;i<25;i++){var p=document.createElement('div');p.className='particle';p.style.left=Math.random()*100+'%';p.style.animationDelay=Math.random()*6+'s';p.style.animationDuration=(5+Math.random()*5)+'s';document.getElementById('particles').appendChild(p)}

function setQuality(q,el){currentQuality=q;document.querySelectorAll('.qbtn').forEach(b=>b.classList.remove('on'));el.classList.add('on')}

var quickPrompts = {
    sunset: "Scene 1: Golden sunset over calm ocean\\nScene 2: Orange sky with seagulls flying\\nScene 3: Sun dipping below horizon\\nScene 4: Purple twilight sky\\nScene 5: Stars appearing at dusk",
    city: "Scene 1: Neon-lit cyberpunk city street\\nScene 2: Flying cars between skyscrapers\\nScene 3: Rain on neon reflections\\nScene 4: Hologram billboards\\nScene 5: Rooftop view of future city",
    space: "Scene 1: Spiral galaxy with purple nebula\\nScene 2: Planets orbiting binary star\\nScene 3: Spaceship near Saturn rings\\nScene 4: Supernova explosion\\nScene 5: Earth from space",
    nature: "Scene 1: Sunlight through forest trees\\nScene 2: Waterfall with rainbow mist\\nScene 3: Butterfly on flower\\nScene 4: Mountain reflection in lake\\nScene 5: Eagle flying over valley",
    anime: "Scene 1: Anime warrior drawing sword\\nScene 2: Energy blast explosion\\nScene 3: Cherry blossoms in wind\\nScene 4: Dramatic face closeup\\nScene 5: Victory pose at sunset",
    car: "Scene 1: Sports car on mountain road\\nScene 2: Close-up of spinning wheel\\nScene 3: Car drifting around corner\\nScene 4: Speed blur on highway\\nScene 5: Car parked at sunset overlook"
};
function setQuick(key){document.getElementById('prompt').value=quickPrompts[key]}

async function generateVideo(){
    var prompt=document.getElementById('prompt').value.trim();
    var style=document.getElementById('style').value;
    if(!prompt)return alert('Enter prompt!');
    
    document.getElementById('loading').classList.add('show');
    document.getElementById('result').classList.remove('show');
    document.getElementById('genBtn').disabled=true;
    document.getElementById('progressFill').style.width='0%';
    document.getElementById('progressText').textContent='Starting...';
    
    var scenes=prompt.split('\\n').filter(s=>s.trim());
    if(scenes.length===0)scenes=[prompt];
    generatedFrames=[];
    
    for(var i=0;i<scenes.length;i++){
        var scenePrompt=scenes[i].replace(/^Scene \d+:\s*/,'').trim();
        if(style)scenePrompt+=', '+style+' style';
        scenePrompt+=', '+currentQuality+' quality, detailed';
        
        var w=qualityMap[currentQuality];
        var h=Math.floor(w*9/16);
        var seed=Math.floor(Math.random()*1000000);
        
        var imgUrl='/img?prompt='+encodeURIComponent(scenePrompt)+'&width='+w+'&height='+h+'&seed='+seed;
        generatedFrames.push({url:imgUrl,prompt:scenePrompt,index:i+1});
        
        var progress=Math.round(((i+1)/scenes.length)*100);
        document.getElementById('progressFill').style.width=progress+'%';
        document.getElementById('progressText').textContent='Frame '+(i+1)+' of '+scenes.length+' ('+progress+'%)';
    }
    
    // Display frames
    var html='';
    generatedFrames.forEach(function(f){
        html+='<div class="frame-card"><img src="'+f.url+'" alt="Frame '+f.index+'" onerror="this.src=\\'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22112%22><rect fill=%22%23111%22 width=%22200%22 height=%22112%22/><text fill=%22%23888%22 x=%22100%22 y=%2260%22 text-anchor=%22middle%22 font-size=%2212%22>Loading...</text></svg>\\'"><div class="fn">Frame '+f.index+'</div></div>';
    });
    document.getElementById('frameGrid').innerHTML=html;
    
    document.getElementById('loading').classList.remove('show');
    document.getElementById('result').classList.add('show');
    document.getElementById('genBtn').disabled=false;
}

function downloadAll(){
    generatedFrames.forEach(function(f,i){
        setTimeout(function(){
            var a=document.createElement('a');
            a.href=f.url;
            a.download='bronx-frame-'+(i+1)+'.jpg';
            a.click();
        },i*500);
    });
}

function createVideo(){
    window.open('https://ezgif.com/maker','_blank');
}
</script>
</body></html>`);
});

// ============================================
// 🖼️ IMAGE PROXY
// ============================================
app.get('/img', async (req, res) => {
    const prompt = req.query.prompt || 'Beautiful';
    const width = req.query.width || '1024';
    const height = req.query.height || '576';
    const seed = req.query.seed || Math.floor(Math.random() * 1000000);
    
    const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&nologo=true`;
    
    try {
        const response = await axios.get(url, { 
            responseType: 'arraybuffer', 
            timeout: 45000,
            headers: { 'User-Agent': 'BRONX-VIDEO/5.0' }
        });
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.setHeader('X-Frame-Source', 'BRONX AI');
        res.send(Buffer.from(response.data));
    } catch(e) { 
        console.error('Image error:', e.message);
        res.status(500).json({ error: "Generation failed" }); 
    }
});

// ============================================
// 📋 JSON API
// ============================================
app.get('/api/generate', (req, res) => {
    const prompt = req.query.prompt || 'Beautiful nature';
    const quality = req.query.quality || 'high';
    const style = req.query.style || '';
    const H = `${req.protocol}://${req.get('host')}`;
    
    const qMap = { low: 512, medium: 768, high: 1024, '4k': 2048 };
    const width = qMap[quality] || 1024;
    const height = Math.floor(width * 9 / 16);
    
    const scenes = prompt.split('\n').filter(s => s.trim());
    const frames = scenes.map((s, i) => {
        const sp = s.replace(/^Scene \d+:\s*/, '').trim() + (style ? `, ${style} style` : '');
        return {
            frame: i + 1,
            prompt: sp,
            url: `${H}/img?prompt=${encodeURIComponent(sp + `, ${quality} quality`)}&width=${width}&height=${height}`,
            download: `${H}/img?prompt=${encodeURIComponent(sp)}&width=${width}&height=${height}`
        };
    });
    
    res.json({
        success: true,
        total_frames: frames.length,
        quality: quality,
        resolution: `${width}x${height}`,
        style: style || 'realistic',
        frames: frames,
        video_tools: ["https://ezgif.com/maker", "https://clideo.com/video-maker", "https://canva.com/create/videos"],
        credit: CREDIT
    });
});

// ============ TEST ============
app.get('/test', (req, res) => res.json({ 
    status: "✅ BRONX VIDEO GEN V5.0 ONLINE",
    endpoints: {
        generate: "/generate?prompt=DESCRIPTION&quality=high&style=cinematic",
        api: "/api/generate?prompt=DESCRIPTION",
        img: "/img?prompt=DESCRIPTION"
    },
    qualities: ["low (360p)", "medium (720p)", "high (1080p)", "4k (2160p)"],
    styles: ["realistic", "anime", "3d", "cinematic", "cartoon", "painting", "cyberpunk", "fantasy"],
    credit: CREDIT
}));

app.use((req, res) => res.status(404).json({ error: "Not found", home: "/" }));

app.listen(PORT, '0.0.0.0', () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎬 BRONX TEXT TO VIDEO V5.0');
    console.log('🚀 ULTIMATE 4K VIDEO GENERATOR');
    console.log(`🔗 http://localhost:${PORT}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});
