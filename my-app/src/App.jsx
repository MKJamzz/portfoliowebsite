import { useState, useEffect, useRef, useCallback } from 'react';

// ══════════════════════════════════════════════════════
// DATA
// ══════════════════════════════════════════════════════
const D = {
  name: "MICHAEL W.",
  roles: ["FULL-STACK DEVELOPER","GAME DEVELOPER","EMBEDDED DEVELOPER","COMP. ENG. STUDENT","CONTENT CREATOR"],
  bio: `I'm a Computer Engineering student at the University of Waterloo with a passion for creating innovative technology solutions. My journey spans from teaching coding to young minds by breaking down complex systems, founding my own streetwear brand, and even developing software in a professional environment in multiple different contexts (which I thought I would never do).

What drives me is the vast world of creativity and technology. Whether I'm developing a game, building a hobby project like the rc car, optimizing data structures for better performance, or even just drawing characters, I'm always looking for new things to learn and to push boundaries and change my perspective of my pre-existing knowledge.

My experience ranges from low-level hardware programming to high-level software architecture, with a special interest in game development, embedded systems, and creating tools that make complex tasks simple and elegant.`,
  level: 4, xp: 9800, xpMax: 10000,
  stats: [
    {l:"LANGUAGES",v:90},{l:"GAME DEV",v:88},{l:"EMBEDDED",v:82},
    {l:"WEB / FULL-STACK",v:75},{l:"CREATIVITY",v:96},
  ],
  skillCats: [
    {cat:"LANGUAGES",   items:["C/C++","C#","JavaScript","Python","HTML/CSS","Lua","VHDL","ARM Assembly"]},
    {cat:"FRAMEWORKS",  items:["Unity","React","Vue.js","Linux", "Roblox Studio","Node.js","Express","Tailwind CSS"]},
    {cat:"EMBEDDED",    items:["Raspberry Pi","RISC-V","Quartus Prime","STMCube32 IDE","COMSOL","Arduino"]},
    {cat:"TOOLS",       items:["Git/GitHub","VSCode","Visual Studio","Valgrind","Postman API","AutoCAD Fusion","3D Printing","Krita","ClickUP", "Slack"]},
    {cat:"DATABASE",    items:["MySQL","SQLite3","CROW API","Shopify"]},
    {cat:"HARDWARE",    items:["Soldering","Oscilloscope","Multimeter","Function Generator","PC Building","SmartCut","CircuitCam8"]},
  ],
  projects: [
    {id:1,name:"CTRL'D",sub:"UWDGC Fall 2025 Game Jam",
     desc:"2D puzzle game built around controlling multiple robots through signal-based inputs. Designed, coded, and illustrated all game systems and assets independently. Focused on gameplay clarity, responsive mechanics, and cohesive level progression.",
     highlights:[
       "Created for UWDGC Fall 2025 Game Jam (Theme: Mixed Signals)",
       "Developed player switching & robot control using ScriptableObjects and inheritance",
       "Implemented level design, UI transitions, and interaction logic in Unity with C#",
       "Designed all art assets, animations, and puzzle layouts from scratch",
     ],
     tech:["Unity","C#","ScriptableObjects","DOTween","Krita"],diff:4,status:"COMPLETE",
     github:null,demo:"https://mkjamzz.itch.io/ctrld"},
    {id:2,name:"OOP TIME SERIES FRAMEWORK",sub:"High-Performance C++ Framework",
     desc:"Built a high-performance C++ framework for parsing and analyzing large-scale time series data with advanced optimization techniques and object-oriented architecture.",
     highlights:[
       "Processed CSV files with 13,000+ lines using efficient custom data structures",
       "Implemented double hashing achieving 60% reduction in instruction count",
       "Created recursive binary tree operations for search and delete functions",
       "Ensured memory safety using Valgrind in Linux environment",
     ],
     tech:["C++","Linux","Valgrind","Data Structures","Algorithm Optimization"],diff:4,status:"COMPLETE",
     github:null,demo:null},
    {id:3,name:"INFINITE RANGE RC CAR",sub:"Raspberry Pi 4 + SIM7600",
     desc:"Designed and assembled an RC car system with unlimited control range using Raspberry Pi 4 and SIM7600 cellular module — controllable from anywhere in the world over a cellular network.",
     highlights:[
       "Created client-server architecture in C++ for real-time control streaming",
       "Applied advanced soldering and wiring for high-current drive components",
       "Integrated Raspberry Pi 4 with SIM7600 cellular module for unlimited range",
       "Ensured stable operation under load with 3D-modelled component mounts",
     ],
     tech:["C++","Linux","Raspberry Pi 4","Soldering","3D Modelling","GitHub"],diff:5,status:"COMPLETE",
     github:"https://github.com/MKJamzz/ControllerProgram",
     demo:"https://www.linkedin.com/feed/update/urn:li:activity:7370184142619115520/"},
    {id:4,name:"MEDICATION DISPENSER",sub:"Embedded C++ / STM32 / Arduino",
     desc:"Built a medication dispenser using C++ and STM electronics that helps patients maintain their medication schedule with precision timing and automated alerts.",
     highlights:[
       "Created an interface in C++ to manage patient medication schedules",
       "Implemented LCD + LED alerts for on-time dose reminders",
       "Integrated conveyor belt with sensor detection for accurate dispensing",
       "Developed pill sizing detection logic for single-dose release",
     ],
     tech:["C++","Arduino","STM32","VSCode","GitHub"],diff:3,status:"COMPLETE",
     github:null,demo:null},
    {id:5,name:"STEAMED",sub:"Unity Roguelike Game",
     desc:"Developing a complete roguelike game with procedural generation, ensuring unique gameplay experiences every run. Full progression system with hand-crafted enemy AI and shop mechanics.",
     highlights:[
       "Implemented procedural dungeon generation algorithm for infinite replayability",
       "Designed responsive 2D player controls and combat mechanics",
       "Built comprehensive resource systems and player progression mechanics",
       "Created shop systems, enemy AI, and loot drop mechanics",
     ],
     tech:["Unity","C#","Procedural Gen","Krita","GitHub","Itch.io"],diff:5,status:"IN PROGRESS",
     github:null,demo:null},
    {id:6,name:"PERSONAL PORTFOLIO WEBSITE",sub:"React + Vite + Cloudflare Pages",
     desc:"Designed and developed a responsive personal portfolio website showcasing projects, technical experience, and skills. Built with modern web technologies and deployed on Cloudflare Pages with a custom domain.",
     highlights:[
       "Built with React and Vite for fast, modular component-driven development",
       "Styled with Tailwind CSS and custom components for a techy aesthetic",
       "Deployed on Cloudflare Pages with custom domain (michaelw.cool)",
       "Features CRT / retro OS theme with radial navigation and boot sequence",
     ],
     tech:["React","Vite","Tailwind CSS","Cloudflare","GitHub"],diff:3,status:"COMPLETE",
     github:"https://github.com/MKJamzz/portfoliowebsite",
     demo:"https://michaelw.cool"},
  ],
  socials: [
    {id:"em",label:"COMMS // EMAIL",       val:"mjwhitem@uwaterloo.ca",             icon:"✉",href:"mailto:mjwhitem@uwaterloo.ca",                       hint:"SEND MESSAGE"},
    {id:"li",label:"NETWORK // LINKEDIN",  val:"linkedin.com/in/michael-j-whiteman",icon:"◈",href:"https://www.linkedin.com/in/michael-j-whiteman/",    hint:"OPEN PROFILE"},
    {id:"gh",label:"CODE // GITHUB",       val:"github.com/MKJamzz",               icon:"◇",href:"https://github.com/MKJamzz",                          hint:"VIEW REPOS"},
    {id:"cv",label:"DATAFILE // RESUME",   val:"whiteman_resume.pdf",              icon:"▤",href:"#",                                                   hint:"DOWNLOAD PDF"},
  ],
  questLog: [
    {year:"2026",title:"SOFTWARE ENGINEER",org:"PINKBYTE",
     period:"Jan 2026 – Apr 2026",location:"Vaughan, Ontario",
     desc:"Hired as a software engineer and contributed across fullstack development, embedded systems, and 3D modelling on multiple concurrent projects.",
     achievements:[
       "Built a fullstack web application using React, JavaScript, CSS, C++, MySQL, and SQLite3",
       "Implemented a multithreaded alert system to handle real-time event notifications",
       "Developed secure user authentication with JWT-based login and session management",
       "Created a live database interface allowing admins to connect, query, and modify records through the web UI",
       "Prototyped wireless serial communication via Raspberry Pi, translating commands into opcodes for a HERO robot",
       "3D modelled a carbon fibre Raspberry Pi enclosure for internal company use",
     ]},
    {year:"2024",title:"CODING INSTRUCTOR",org:"CODE NINJAS RICHMOND HILL",
     period:"Sept 2024 – Dec 2024",location:"Richmond Hill, Ontario",
     desc:"Mentored 30+ students aged 6–13 through key coding concepts, game development, and competitive programming.",
     achievements:[
       "Taught C++, C#, JavaScript, and Lua to diverse age groups",
       "Created custom learning materials and ran workshops on 3D modeling and game creation",
       "Prepared high school students for the Waterloo CCC contest with algorithm optimization",
       "Developed curriculum for Roblox Studio, Unity, and Minecraft modding",
     ]},
    {year:"2024",title:"FOUNDER",org:"SIMPL — STREETWEAR BRAND",
     period:"Jan 2024 – May 2024",location:"Newmarket, Ontario",
     desc:"Founded and operated a streetwear clothing brand focused on creativity, quality, and affordability — handled everything from product design to fulfillment.",
     achievements:[
       "Built e-commerce website using Shopify, CSS, and HTML with custom UI elements",
       "Created all brand designs including logos, clothing concepts, and marketing graphics",
       "Grew social media presence to 280+ followers in 4 months through data-driven content",
       "Managed full business operations from product design to customer fulfillment",
     ]},
    {year:"2023",title:"LASER MACHINE OPERATOR",org:"BLUERING",
     period:"June 2023 – Sept 2023",location:"Newmarket, Ontario",
     desc:"Operated precision laser cutting equipment to produce high-quality aluminum stencils for various industrial applications.",
     achievements:[
       "Efficiently fulfilled client orders using high-end laser cutting equipment",
       "Maintained quality standards through meticulous inspection processes",
       "Demonstrated precision in producing aluminum stencils for various applications",
       "Operated SmartCut, CircuitCam8, and VCam software systems",
     ]},
    {year:"2022",title:"FRONT END WORKER",org:"FOOD BASICS",
     period:"Dec 2022 – Jun 2023",location:"Newmarket, Ontario",
     desc:"Provided exceptional customer service on the store floor, ensuring a smooth and positive shopping experience.",
     achievements:[
       "Assisted customers with product location, inquiries, and checkout processes",
       "Maintained organized and well-stocked front-end areas throughout shifts",
       "Collaborated with team members to meet daily operational targets",
     ]},
  ],
  lore: [
    {year:"2023→",type:"EDU",title:"B.ENG COMPUTER ENGINEERING",org:"UNIVERSITY OF WATERLOO",
     period:"2023 – 2028",location:"Waterloo, Ontario",
     desc:"Pursuing a Computer Engineering degree at one of Canada's top engineering universities. The program combines theoretical CS foundations with practical hardware and software engineering skills.",
     courses:[
       "Computer Systems Architecture","Software Engineering Principles",
       "Digital Logic Design","Embedded Systems Programming",
       "Algorithm Design & Analysis","Operating Systems",
       "Computer Networks","Signal Processing",
     ],
     notes:[
       "Expected graduation 2028",
     ]},
    {year:"2025",type:"AWARD",title:"GAME JAM ENTRY — CTRL'D",org:"UWDGC FALL 2025",
     period:"Oct 2025",location:"University of Waterloo",
     desc:"Competed in the UWDGC Fall Game Jam, submitting CTRL'D — a signal-based robot puzzle game designed, coded, and illustrated independently in under 72 hours.",
     courses:[],
     notes:[
       "Theme: Mixed Signals",
       "Developed solo in under 72 hours",
       "Published on itch.io",
     ]},
  ],
  // ── ADD NEW FOLDERS HERE — one object per folder ──────────────────────────
  // Fields: id, icon, name, sub, count, color ("g"|"t"), thumb (FolderThumb kind), tags[], items[]
  // To use a real image instead of SVG: add thumbUrl:"/path/to/img.jpg" — FolderThumb renders it automatically
  creativeFolders: [
    {id:"trips",    icon:"▲", name:"TRIPS",      sub:"TRAVEL // FIELD CAPTURE",   count:24, color:"g", thumb:"trips",
     tags:["KYOTO","ICELAND","NYC","LISBON"],
     items:Array.from({length:12},(_,i)=>({label:`IMG_${String(2031+i).padStart(4,'0')}`,kind:"PHOTO"}))},
    {id:"drawings", icon:"◇", name:"DRAWINGS",   sub:"SKETCHES // INK & DIGITAL", count:18, color:"t", thumb:"drawings",
     tags:["INK","DIGITAL","PROCREATE","STUDY"],
     items:Array.from({length:9}, (_,i)=>({label:`SKETCH_${String(i+1).padStart(2,'0')}`, kind:"DRAWING"}))},
    {id:"devlogs",  icon:"▣", name:"DEVLOGS",    sub:"VIDEO // PROCESS LOGS",     count:7,  color:"g", thumb:"devlogs",
     tags:["UNITY","STM32","ROBOTICS"],
     items:Array.from({length:6}, (_,i)=>({label:`DEVLOG_EP${String(i+1).padStart(2,'0')}`,kind:"VIDEO"}))},
    {id:"wear",     icon:"◆", name:"STREETWEAR", sub:"BRAND // GARMENT & PRINT",  count:14, color:"t", thumb:"wear",
     tags:["TEES","HOODIES","LOOKBOOK","GRAPHICS"],
     items:Array.from({length:8}, (_,i)=>({label:`DROP_${String(i+1).padStart(2,'0')}`,   kind:"DESIGN"}))},
    {id:"gameart",  icon:"◉", name:"GAME ART",   sub:"PIXEL // CONCEPT // UI",    count:21, color:"g", thumb:"gameart",
     tags:["CTRL'D","STEAMED","SPRITES"],
     items:Array.from({length:10},(_,i)=>({label:`ASSET_${String(i+1).padStart(2,'0')}`,  kind:"ART"}))},
    {id:"photo",    icon:"◈", name:"PHOTO",       sub:"35MM // LIFESTYLE",         count:32, color:"t", thumb:"photo",
     tags:["FILM","STREET","PORTRAIT"],
     items:Array.from({length:12},(_,i)=>({label:`ROLL_${String(i+1).padStart(2,'0')}`,   kind:"FILM"}))},
    {id:"japan2026",icon:"▲", name:"JAPAN 2026",  sub:"TRAVEL // SPRING CAPTURE",  count:43, color:"g", thumb:"japan2026",
     thumbUrl:"/Japan2026Pics/IMG_1001.jpg",
     tags:["JAPAN","TOKYO","2026","SPRING"],
     items:[
       {label:"IMG_1001",kind:"PHOTO",url:"/Japan2026Pics/IMG_1001.jpg"},
       {label:"IMG_1008",kind:"PHOTO",url:"/Japan2026Pics/IMG_1008.jpg"},
       {label:"IMG_1059",kind:"PHOTO",url:"/Japan2026Pics/IMG_1059.jpg"},
       {label:"IMG_1093",kind:"PHOTO",url:"/Japan2026Pics/IMG_1093.jpg"},
       {label:"IMG_1096",kind:"PHOTO",url:"/Japan2026Pics/IMG_1096.jpg"},
       {label:"IMG_1149",kind:"PHOTO",url:"/Japan2026Pics/IMG_1149.jpg"},
       {label:"IMG_1161",kind:"PHOTO",url:"/Japan2026Pics/IMG_1161.jpg"},
       {label:"IMG_1200",kind:"PHOTO",url:"/Japan2026Pics/IMG_1200.jpg"},
       {label:"IMG_1207",kind:"PHOTO",url:"/Japan2026Pics/IMG_1207.jpg"},
       {label:"IMG_1228",kind:"PHOTO",url:"/Japan2026Pics/IMG_1228.jpg"},
       {label:"IMG_1233",kind:"PHOTO",url:"/Japan2026Pics/IMG_1233.jpg"},
       {label:"IMG_1298",kind:"PHOTO",url:"/Japan2026Pics/IMG_1298.jpg"},
       {label:"IMG_1329",kind:"PHOTO",url:"/Japan2026Pics/IMG_1329.jpg"},
       {label:"IMG_1346",kind:"PHOTO",url:"/Japan2026Pics/IMG_1346.jpg"},
       {label:"IMG_1376",kind:"PHOTO",url:"/Japan2026Pics/IMG_1376.jpg"},
       {label:"IMG_1394",kind:"PHOTO",url:"/Japan2026Pics/IMG_1394.jpg"},
       {label:"IMG_1414",kind:"PHOTO",url:"/Japan2026Pics/IMG_1414.jpg"},
       {label:"IMG_1438",kind:"PHOTO",url:"/Japan2026Pics/IMG_1438.jpg"},
       {label:"IMG_1448",kind:"PHOTO",url:"/Japan2026Pics/IMG_1448.jpg"},
       {label:"IMG_1482",kind:"PHOTO",url:"/Japan2026Pics/IMG_1482.jpg"},
       {label:"IMG_1491",kind:"PHOTO",url:"/Japan2026Pics/IMG_1491.jpg"},
       {label:"IMG_1506",kind:"PHOTO",url:"/Japan2026Pics/IMG_1506.jpg"},
       {label:"IMG_1530",kind:"PHOTO",url:"/Japan2026Pics/IMG_1530.jpg"},
       {label:"IMG_1547",kind:"PHOTO",url:"/Japan2026Pics/IMG_1547.jpg"},
       {label:"IMG_1607",kind:"PHOTO",url:"/Japan2026Pics/IMG_1607.jpg"},
       {label:"IMG_1623",kind:"PHOTO",url:"/Japan2026Pics/IMG_1623.jpg"},
       {label:"IMG_1653",kind:"PHOTO",url:"/Japan2026Pics/IMG_1653.jpg"},
       {label:"IMG_1667",kind:"PHOTO",url:"/Japan2026Pics/IMG_1667.jpg"},
       {label:"IMG_1684",kind:"PHOTO",url:"/Japan2026Pics/IMG_1684.jpg"},
       {label:"IMG_1746",kind:"PHOTO",url:"/Japan2026Pics/IMG_1746.jpg"},
       {label:"IMG_1749",kind:"PHOTO",url:"/Japan2026Pics/IMG_1749.jpg"},
       {label:"IMG_1759",kind:"PHOTO",url:"/Japan2026Pics/IMG_1759.jpg"},
       {label:"IMG_1788",kind:"PHOTO",url:"/Japan2026Pics/IMG_1788.jpg"},
       {label:"IMG_1821",kind:"PHOTO",url:"/Japan2026Pics/IMG_1821.jpg"},
       {label:"IMG_1828",kind:"PHOTO",url:"/Japan2026Pics/IMG_1828.jpg"},
       {label:"IMG_1833",kind:"PHOTO",url:"/Japan2026Pics/IMG_1833.jpg"},
       {label:"IMG_1837",kind:"PHOTO",url:"/Japan2026Pics/IMG_1837.jpg"},
       {label:"IMG_1857",kind:"PHOTO",url:"/Japan2026Pics/IMG_1857.jpg"},
       {label:"IMG_1861",kind:"PHOTO",url:"/Japan2026Pics/IMG_1861.jpg"},
       {label:"IMG_1871",kind:"PHOTO",url:"/Japan2026Pics/IMG_1871.jpg"},
       {label:"IMG_1876",kind:"PHOTO",url:"/Japan2026Pics/IMG_1876.jpg"},
       {label:"IMG_1878",kind:"PHOTO",url:"/Japan2026Pics/IMG_1878.jpg"},
       {label:"IMG_1889",kind:"PHOTO",url:"/Japan2026Pics/IMG_1889.jpg"},
     ]},
  ],
};

// ══════════════════════════════════════════════════════
// AUDIO
// ══════════════════════════════════════════════════════
let _ac=null;
const beep=(f=440,d=.06,type='square',v=.04)=>{
  try{
    if(!_ac)_ac=new AudioContext();
    const o=_ac.createOscillator(),g=_ac.createGain();
    o.connect(g);g.connect(_ac.destination);
    o.frequency.value=f;o.type=type;
    g.gain.setValueAtTime(v,_ac.currentTime);
    g.gain.exponentialRampToValueAtTime(.001,_ac.currentTime+d);
    o.start();o.stop(_ac.currentTime+d);
  }catch(e){}
};
const sndNav=()=>beep(560,.04);
const sndSel=()=>{beep(780,.05);setTimeout(()=>beep(1080,.07),55)};
const sndBack=()=>beep(340,.08);

// ══════════════════════════════════════════════════════
// ANIMATION UTILITIES
// ══════════════════════════════════════════════════════
const GLYPHS='!<>-_\\/[]{}—=+*^?#◈◇◆▣▤◉01';
const DecryptText=({text,speed=22,style,className,delay=0})=>{
  const [out,setOut]=useState(()=>text.split('').map(c=>c===' '?' ':GLYPHS[~~(Math.random()*GLYPHS.length)]).join(''));
  const iter=useRef(0);
  useEffect(()=>{
    iter.current=0;
    const t=setTimeout(()=>{
      const iv=setInterval(()=>{
        iter.current+=0.55;
        setOut(text.split('').map((c,i)=>{
          if(i<iter.current)return c;
          if(c===' ')return ' ';
          return GLYPHS[~~(Math.random()*GLYPHS.length)];
        }).join(''));
        if(iter.current>=text.length)clearInterval(iv);
      },speed);
      return()=>clearInterval(iv);
    },delay);
    return()=>clearTimeout(t);
  },[text,delay]);
  return <span style={style} className={className}>{out}</span>;
};

const TypeText=({text,speed=38,delay=0,style,className})=>{
  const [n,setN]=useState(0);
  useEffect(()=>{
    const t=setTimeout(()=>{
      const iv=setInterval(()=>setN(p=>{if(p>=text.length){clearInterval(iv);return p;}return p+1;}),speed);
      return()=>clearInterval(iv);
    },delay);
    return()=>clearTimeout(t);
  },[text,delay]);
  return(
    <span style={style} className={className}>
      {text.slice(0,n)}{n<text.length&&<span style={{animation:'blink .7s infinite'}}>▌</span>}
    </span>
  );
};

const StaggerIn=({children,step=65,base=0})=>{
  const arr=Array.isArray(children)?children:[children];
  return arr.map((child,i)=>(
    <div key={i} style={{animation:`fadeUp .28s ${base+i*step}ms ease both`}}>{child}</div>
  ));
};

// ══════════════════════════════════════════════════════
// CINEMATIC BOOT
// ══════════════════════════════════════════════════════
const LOAD_STEPS=[
  {p:12,msg:"USER PROFILE: MICHAEL.W"},
  {p:26,msg:"FILESYSTEM MOUNTED"},
  {p:42,msg:"SKILL MODULES LOADED (40)"},
  {p:58,msg:"NETWORK CONNECTIONS OK"},
  {p:74,msg:"RENDER ENGINE ACTIVE"},
  {p:88,msg:"INTERFACE CALIBRATED"},
  {p:100,msg:"BOOT COMPLETE — WELCOME"},
];

const BootSequence=({onDone})=>{
  const [phase,setPhase]=useState('logo');
  const [prog,setProg]=useState(0);
  const [msgs,setMsgs]=useState([]);
  const [flash,setFlash]=useState(false);

  useEffect(()=>{
    if(sessionStorage.getItem('booted')==='1'){onDone();return;}
    setTimeout(()=>setPhase('load'),1100);
  },[]);

  useEffect(()=>{
    if(phase!=='load')return;
    const start=Date.now(),dur=3400;
    let raf;
    const tick=()=>{
      const p=Math.min(100,Math.round((Date.now()-start)/dur*100));
      setProg(p);
      setMsgs(LOAD_STEPS.filter(s=>s.p<=p));
      if(p<100){raf=requestAnimationFrame(tick);}
      else{
        beep(900,.06);setTimeout(()=>beep(1200,.1),80);setTimeout(()=>beep(1600,.18),180);
        setTimeout(()=>setFlash(true),400);
        setTimeout(()=>{sessionStorage.setItem('booted','1');onDone();},1000);
      }
    };
    raf=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf);
  },[phase]);

  return(
    <div style={{position:'fixed',inset:0,background:'#040806',display:'flex',flexDirection:'column',
      alignItems:'center',justifyContent:'center',zIndex:2000,overflow:'hidden',
      opacity:flash?0:1,transition:flash?'opacity .6s':'none'}}>
      {flash&&<div style={{position:'absolute',inset:0,background:'var(--g)',opacity:.18,pointerEvents:'none'}}/>}
      <div className="scanlines"/><div className="vignette"/>
      <div style={{position:'relative',width:'130px',height:'130px',marginBottom:'26px',animation:'fadeIn .7s ease both'}}>
        <svg width="130" height="130" viewBox="0 0 130 130">
          <circle cx="65" cy="65" r="60" stroke="var(--bd)" strokeWidth="1" fill="none"/>
          <circle cx="65" cy="65" r="50" stroke="rgba(0,255,136,.08)" strokeWidth="1" fill="none" strokeDasharray="3 8"/>
          <g style={{transformOrigin:'65px 65px',animation:'spin 10s linear infinite'}}>
            <circle cx="65" cy="65" r="55" stroke="rgba(0,255,136,.06)" strokeWidth="1" fill="none" strokeDasharray="2 14"/>
          </g>
          <g style={{transformOrigin:'65px 65px',animation:'spinRev 16s linear infinite'}}>
            <circle cx="65" cy="65" r="58" stroke="rgba(0,212,212,.04)" strokeWidth="1" fill="none" strokeDasharray="3 20"/>
          </g>
          <circle cx="65" cy="65" r="36" stroke="var(--g)" strokeWidth="1" fill="rgba(0,255,136,.04)"
            style={{filter:'drop-shadow(0 0 10px var(--g))',animation:'pulse 2s infinite'}}/>
          {Array.from({length:12},(_,i)=>{const a=i*30*Math.PI/180,r1=50,r2=54;return(
            <line key={i} x1={65+Math.cos(a)*r1} y1={65+Math.sin(a)*r1} x2={65+Math.cos(a)*r2} y2={65+Math.sin(a)*r2} stroke="var(--bd)" strokeWidth="1"/>
          )})}
          <text x="65" y="75" textAnchor="middle" fill="var(--g)" fontSize="30"
            fontFamily="'VT323',monospace" style={{filter:'drop-shadow(0 0 8px var(--g))'}}>◈</text>
        </svg>
      </div>
      <div className="px glow" style={{fontSize:'12px',letterSpacing:'4px',marginBottom:'6px',animation:'fadeUp .5s .2s ease both'}}>
        MICHAEL W.
      </div>
      <div style={{fontSize:'18px',color:'var(--vd)',letterSpacing:'3px',marginBottom:'36px',animation:'fadeUp .5s .4s ease both'}}>
        PORTFOLIO_OS v2.0
      </div>
      {phase==='load'&&(
        <div style={{width:'min(420px,78vw)',animation:'fadeIn .3s ease'}}>
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'6px',fontSize:'16px'}}>
            <span style={{color:'var(--vd)',letterSpacing:'2px'}}>INITIALIZING</span>
            <span className="glow" style={{fontFamily:'monospace',minWidth:'46px',textAlign:'right'}}>
              {String(prog).padStart(3,' ')}%
            </span>
          </div>
          <div style={{height:'5px',background:'#0a1a0e',border:'1px solid var(--bd)',overflow:'hidden',marginBottom:'18px',position:'relative'}}>
            <div style={{position:'absolute',inset:0,width:`${prog}%`,background:'var(--g)',boxShadow:'0 0 12px var(--g)',transition:'width .06s'}}/>
            <div style={{position:'absolute',top:0,bottom:0,left:`${prog}%`,width:'3px',background:'#fff',opacity:.6,boxShadow:'0 0 6px #fff',transform:'translateX(-1px)'}}/>
          </div>
          <div style={{fontSize:'16px',minHeight:'110px'}}>
            {msgs.map((m,i)=>(
              <div key={m.msg} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'5px',
                animation:'fadeUp .2s ease both',color:i===msgs.length-1?'var(--g)':'var(--vd)'}}>
                <span style={{color:i===msgs.length-1?'var(--t)':'var(--vd)',fontSize:'12px'}}>
                  {i===msgs.length-1?'▶':'✓'}
                </span>
                {i===msgs.length-1
                  ?<DecryptText text={m.msg} speed={18}/>
                  :<span>{m.msg}</span>
                }
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════
// CURSOR
// ══════════════════════════════════════════════════════
const Cursor=()=>{
  const [p,setP]=useState({x:-100,y:-100});
  const [dn,setDn]=useState(false);
  useEffect(()=>{
    const mv=e=>setP({x:e.clientX,y:e.clientY});
    const d=()=>setDn(true),u=()=>setDn(false);
    window.addEventListener('mousemove',mv);
    window.addEventListener('mousedown',d);
    window.addEventListener('mouseup',u);
    return()=>{window.removeEventListener('mousemove',mv);window.removeEventListener('mousedown',d);window.removeEventListener('mouseup',u)};
  },[]);
  return(
    <div style={{position:'fixed',left:p.x,top:p.y,transform:`translate(-50%,-50%) scale(${dn?.72:1})`,
      pointerEvents:'none',zIndex:99999,transition:'transform .08s',willChange:'transform'}}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{filter:'drop-shadow(0 0 4px var(--g))'}}>
        <line x1="14" y1="1" x2="14" y2="10" stroke="var(--g)" strokeWidth="1.5"/>
        <line x1="14" y1="18" x2="14" y2="27" stroke="var(--g)" strokeWidth="1.5"/>
        <line x1="1" y1="14" x2="10" y2="14" stroke="var(--g)" strokeWidth="1.5"/>
        <line x1="18" y1="14" x2="27" y2="14" stroke="var(--g)" strokeWidth="1.5"/>
        <circle cx="14" cy="14" r="3" stroke="var(--g)" strokeWidth="1" fill="none"/>
      </svg>
    </div>
  );
};

// ══════════════════════════════════════════════════════
// STAT BAR
// ══════════════════════════════════════════════════════
const StatBar=({label,val,color='var(--g)'})=>{
  const [go,setGo]=useState(false);
  useEffect(()=>{const t=setTimeout(()=>setGo(true),80);return()=>clearTimeout(t)},[]);
  return(
    <div style={{marginBottom:'13px'}}>
      <div style={{display:'flex',justifyContent:'space-between',marginBottom:'4px',fontSize:'18px',color,textShadow:'0 0 6px currentColor'}}>
        <span>{label}</span><span>{val}<span style={{color:'var(--dm)',fontSize:'14px'}}>/100</span></span>
      </div>
      <div className="sb-track">
        <div className="sb-fill" style={{width:go?`${val}%`:'0%',background:color,boxShadow:`0 0 8px ${color}`}}/>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════
// SCREENS
// ══════════════════════════════════════════════════════
const CharacterScreen=()=>(
  <div className="sy" style={{height:'100%',padding:'20px 10px 20px 20px'}} data-screen-label="CHARACTER">
    <div style={{display:'flex',gap:'20px',marginBottom:'20px'}}>
      <div style={{flexShrink:0,width:'118px'}}>
        <div style={{position:'relative',border:'1px solid var(--bd)',background:'var(--bg)',overflow:'hidden',boxShadow:'0 0 12px rgba(0,255,136,0.3),0 0 3px var(--g)'}}>
          <img src="/images/character.png" alt="Michael Whiteman" loading="lazy" decoding="async" style={{width:'100%',display:'block',filter:'grayscale(0.45) sepia(0.25) hue-rotate(100deg) contrast(1.15) brightness(0.82)'}}/>
          <div style={{position:'absolute',inset:0,background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.18) 2px,rgba(0,0,0,0.18) 3px)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',inset:0,background:'radial-gradient(ellipse at center,transparent 50%,rgba(0,255,136,0.06) 100%)',pointerEvents:'none'}}/>
        </div>
        <div style={{marginTop:'9px',border:'1px solid var(--bd)',padding:'9px',background:'var(--bg)',display:'grid',gap:'8px'}}>
          {[{l:'CLASS',v:'ENG',c:'var(--t)'},{l:'LEVEL',v:'04',c:'var(--g)'},{l:'XP',v:'9,800',c:'var(--g)'}].map(r=>(
            <div key={r.l}>
              <div style={{fontSize:'10px',color:'var(--vd)',marginBottom:'2px'}}>{r.l}</div>
              <div style={{fontSize:'17px',color:r.c,textShadow:`0 0 6px ${r.c}`}}>{r.v}</div>
            </div>
          ))}
          <div>
            <div style={{fontSize:'10px',color:'var(--vd)',marginBottom:'3px'}}>XP BAR</div>
            <div className="sb-track"><div className="sb-fill" style={{width:'98%'}}/></div>
          </div>
        </div>
      </div>
      <div style={{flex:1,minWidth:0}}>
        <div className="px glow" style={{fontSize:'8.5px',marginBottom:'4px',letterSpacing:'1px',animation:'staggerUp .35s .05s ease both'}}>
          <DecryptText text="MICHAEL W." speed={14}/>
        </div>
        <div className="glowt" style={{fontSize:'20px',marginBottom:'14px',animation:'staggerUp .35s .15s ease both'}}>
          <TypeText text="COMP. ENG. STUDENT" speed={30} delay={120}/>
        </div>
        <StaggerIn base={300} step={80}>
          {D.bio.split('\n\n').map((p,i)=>(
            <div key={i} style={{fontSize:'17px',color:'var(--dm)',lineHeight:'1.55',marginBottom:'10px',borderLeft:'2px solid var(--bd)',paddingLeft:'10px'}}>{p}</div>
          ))}
        </StaggerIn>
        <div className="sec-label" style={{marginTop:'16px'}}><span className="glowt">▲</span> ATTRIBUTES</div>
        {D.stats.map(s=><StatBar key={s.l} label={s.l} val={s.v}/>)}
      </div>
    </div>
    <div className="sec-label"><span className="glowt">◆</span> SKILL TREE</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(230px,1fr))',gap:'9px'}}>
      {D.skillCats.map(cat=>(
        <div key={cat.cat} style={{border:'1px solid var(--bd)',padding:'10px',background:'var(--bg)'}}>
          <div className="px" style={{fontSize:'5.5px',color:'var(--t)',textShadow:'0 0 5px var(--t)',marginBottom:'8px',letterSpacing:'1px'}}>{cat.cat}</div>
          <div style={{display:'flex',flexWrap:'wrap',gap:'4px'}}>
            {cat.items.map(sk=>(
              <span key={sk} style={{fontSize:'15px',color:'var(--g)',border:'1px solid var(--bd)',padding:'1px 7px',background:'var(--pb)'}}>{sk}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const LevelsScreen=()=>{
  const [sel,setSel]=useState(null);
  return(
    <div style={{height:'100%',padding:'20px 10px 20px 20px',display:'flex',flexDirection:'column',gap:'12px',overflow:'hidden'}} data-screen-label="LEVELS">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0}}>
        <div className="sec-label" style={{marginBottom:0,flex:1}}><span className="glow">◈</span> SELECT LEVEL</div>
        <div style={{fontSize:'15px',color:'var(--dm)'}}>{D.projects.length} STAGES FOUND</div>
      </div>
      <div className="sy" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'9px',flex:1}}>
        {D.projects.map((p,i)=>(
          <div key={p.id} className={`card${sel===i?' sel':''}`} style={{animation:`staggerUp .3s ${i*70}ms ease both`}}
            onClick={()=>{setSel(sel===i?null:i);sndSel()}} onMouseEnter={sndNav}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px'}}>
              <div style={{display:'flex',alignItems:'center',gap:'6px'}}>
                <span style={{fontSize:'13px',color:'var(--vd)'}}>{['◈','◇','◆','◉','▤','▣'][i]}</span>
                <div className="px" style={{fontSize:'6px',color:'var(--vd)'}}>STAGE {String(i+1).padStart(2,'0')}</div>
              </div>
              <span style={{fontSize:'12px',color:p.status==='COMPLETE'?'var(--t)':'#ffaa00',textShadow:p.status==='COMPLETE'?'0 0 5px var(--t)':'0 0 5px #ffaa00'}}>{p.status}</span>
            </div>
            <div className="px glow" style={{fontSize:'6px',marginBottom:'5px',lineHeight:'1.7'}}>{p.name}</div>
            <div style={{fontSize:'16px',color:'var(--dm)',marginBottom:'8px'}}>{p.sub}</div>
            {sel===i&&(
              <div style={{animation:'fadeIn .15s ease'}}>
                <div style={{fontSize:'15px',color:'var(--dm)',opacity:.85,lineHeight:'1.5',marginBottom:'9px',borderTop:'1px solid var(--bd)',paddingTop:'8px'}}>
                  {p.desc}
                </div>
                {p.highlights&&p.highlights.length>0&&(
                  <div style={{marginBottom:'9px'}}>
                    <div style={{fontSize:'11px',color:'var(--vd)',letterSpacing:'2px',marginBottom:'5px'}}>KEY HIGHLIGHTS</div>
                    {p.highlights.map((h,hi)=>(
                      <div key={hi} style={{display:'flex',gap:'6px',marginBottom:'4px',fontSize:'14px',color:'var(--dm)',lineHeight:'1.4'}}>
                        <span style={{color:'var(--g)',flexShrink:0}}>›</span>{h}
                      </div>
                    ))}
                  </div>
                )}
                {(p.github||p.demo)&&(
                  <div style={{display:'flex',gap:'8px',flexWrap:'wrap',marginBottom:'6px'}}>
                    {p.github&&<a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{fontSize:'13px',color:'var(--t)',border:'1px solid rgba(0,212,212,.35)',padding:'2px 9px',background:'rgba(0,212,212,.04)',textDecoration:'none'}}>
                      [ GITHUB ]
                    </a>}
                    {p.demo&&<a href={p.demo} target="_blank" rel="noopener noreferrer"
                      style={{fontSize:'13px',color:'var(--g)',border:'1px solid rgba(0,255,136,.35)',padding:'2px 9px',background:'rgba(0,255,136,.04)',textDecoration:'none'}}>
                      [ DEMO / VIDEO ]
                    </a>}
                  </div>
                )}
              </div>
            )}
            <div style={{display:'flex',flexWrap:'wrap',gap:'4px',marginBottom:'9px',marginTop:sel===i?'4px':'0'}}>
              {p.tech.map(t=>(
                <span key={t} style={{fontSize:'13px',color:'var(--t)',border:'1px solid rgba(0,212,212,.2)',padding:'1px 6px',background:'rgba(0,212,212,.04)'}}>{t}</span>
              ))}
            </div>
            <div>{Array.from({length:5},(_,j)=>(
              <span key={j} style={{fontSize:'14px',color:j<p.diff?'var(--g)':'var(--bd)',textShadow:j<p.diff?'0 0 4px var(--g)':'none'}}>★</span>
            ))}</div>
          </div>
        ))}
      </div>
      <div style={{flexShrink:0,fontSize:'14px',color:'var(--vd)'}}>[ CLICK CARD ] EXPAND DETAILS &nbsp;·&nbsp; CLICK AGAIN TO COLLAPSE</div>
    </div>
  );
};

const MapScreen=()=>{
  const [hov,setHov]=useState(null);
  return(
    <div style={{height:'100%',padding:'20px',display:'flex',flexDirection:'column',gap:'14px'}} data-screen-label="MAP">
      <div className="sec-label" style={{flexShrink:0}}><span className="glowt">◇</span> COMMUNICATION CHANNELS</div>
      <div style={{flexShrink:0,border:'1px solid var(--bd)',background:'var(--bg)',padding:'12px',fontFamily:'monospace',fontSize:'11px',color:'var(--vd)',lineHeight:'1.7',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(var(--bd) 1px,transparent 1px),linear-gradient(90deg,var(--bd) 1px,transparent 1px)',backgroundSize:'26px 26px',opacity:.4}}/>
        <div style={{position:'relative',display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2px 20px',fontSize:'14px',lineHeight:'1.9'}}>
          <div><span className="glow">◉</span> <span style={{color:'var(--vd)'}}>LOCATION</span> <span style={{color:'var(--dm)'}}>WATERLOO, ON</span></div>
          <div><span className="glow">◈</span> <span style={{color:'var(--vd)'}}>TIMEZONE</span> <span style={{color:'var(--dm)'}}>UTC-5</span></div>
          <div><span className="glow">◇</span> <span style={{color:'var(--vd)'}}>SCHOOL</span> <span style={{color:'var(--dm)'}}>U. WATERLOO</span></div>
          <div><span className="glow">●</span> <span style={{color:'var(--vd)'}}>STATUS</span> <span className="glowt" style={{animation:'pulse 2.5s infinite'}}>OPEN TO WORK</span></div>
        </div>
      </div>
      <div style={{flex:1,display:'flex',flexDirection:'column',gap:'9px',justifyContent:'center'}}>
        {D.socials.map((s,si)=>(
          <a key={s.id} href={s.href} target="_blank" rel="noopener noreferrer" className="lcard"
            style={{animation:`staggerUp .3s ${si*80+100}ms ease both`}}
            onMouseEnter={()=>{sndNav();setHov(s.id)}} onMouseLeave={()=>setHov(null)} onClick={sndSel}>
            <div style={{width:'38px',height:'38px',borderRadius:'50%',border:`1px solid ${hov===s.id?'var(--t)':'var(--bd)'}`,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,background:'var(--bg)',boxShadow:hov===s.id?'0 0 12px rgba(0,212,212,.3)':undefined,transition:'all .15s'}}>
              <span style={{fontSize:'20px',color:'var(--t)',textShadow:'0 0 6px var(--t)'}}>{s.icon}</span>
            </div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:'12px',color:'var(--vd)',letterSpacing:'1px',marginBottom:'1px'}}>{s.label}</div>
              <div style={{fontSize:'20px',color:'var(--g)',textShadow:'0 0 5px rgba(0,255,136,.4)',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                <DecryptText text={s.val} speed={18} delay={si*80+200}/>
              </div>
            </div>
            <div style={{fontSize:'13px',color:hov===s.id?'var(--t)':'var(--vd)',border:'1px solid currentColor',padding:'3px 8px',flexShrink:0,transition:'color .15s'}}>{s.hint} ›</div>
          </a>
        ))}
      </div>
    </div>
  );
};

const QuestLogScreen=()=>(
  <div className="sy" style={{height:'100%',padding:'20px 10px 20px 20px'}} data-screen-label="QUEST LOG">
    <div className="sec-label"><span className="glow">▤</span> WORK EXPERIENCE</div>
    {D.questLog.map((e,i)=>(
      <div key={i} style={{display:'flex',gap:'14px',marginBottom:'20px',animation:`staggerUp .3s ${i*90}ms ease both`}}>
        <div style={{width:'56px',flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div className="px" style={{fontSize:'5.5px',color:'var(--g)',textShadow:'0 0 5px var(--g)',textAlign:'center',lineHeight:'1.9'}}>{e.year}</div>
          <div style={{flex:1,width:'2px',background:'linear-gradient(var(--g),var(--bd))',boxShadow:'0 0 4px var(--g)',margin:'5px 0',minHeight:'30px'}}/>
          <div style={{fontSize:'11px',color:'var(--g)',border:'1px solid var(--g)',padding:'2px 3px',textShadow:'0 0 4px var(--g)'}}>WORK</div>
        </div>
        <div style={{flex:1,border:'1px solid var(--bd)',padding:'12px',background:'var(--bg)'}}>
          <div className="px glow" style={{fontSize:'6px',marginBottom:'4px',lineHeight:'1.7'}}>{e.title}</div>
          <div className="glowt" style={{fontSize:'17px',marginBottom:'4px'}}>{e.org}</div>
          {e.period&&(
            <div style={{fontSize:'14px',color:'var(--vd)',marginBottom:'8px',letterSpacing:'1px'}}>
              {e.period}{e.location?` · ${e.location}`:''}
            </div>
          )}
          <div style={{fontSize:'16px',color:'var(--dm)',lineHeight:'1.5',marginBottom:'8px'}}>{e.desc}</div>
          {e.achievements&&e.achievements.length>0&&(
            <div>
              <div style={{fontSize:'11px',color:'var(--vd)',letterSpacing:'2px',marginBottom:'5px'}}>ACHIEVEMENTS</div>
              {e.achievements.map((a,ai)=>(
                <div key={ai} style={{display:'flex',gap:'6px',marginBottom:'4px',fontSize:'14px',color:'var(--dm)',lineHeight:'1.4'}}>
                  <span style={{color:'var(--g)',flexShrink:0}}>›</span>{a}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

const LoreScreen=()=>(
  <div className="sy" style={{height:'100%',padding:'20px 10px 20px 20px'}} data-screen-label="LORE">
    <div className="sec-label"><span className="glowt">▣</span> EDUCATION & ACHIEVEMENTS</div>
    {D.lore.map((e,i)=>(
      <div key={i} style={{display:'flex',gap:'14px',marginBottom:'20px',animation:`staggerUp .3s ${i*90}ms ease both`}}>
        <div style={{width:'56px',flexShrink:0,display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div className="px" style={{fontSize:'5.5px',color:'var(--t)',textShadow:'0 0 5px var(--t)',textAlign:'center',lineHeight:'1.9'}}>{e.year}</div>
          <div style={{flex:1,width:'2px',background:'linear-gradient(var(--t),var(--bd))',boxShadow:'0 0 4px var(--t)',margin:'5px 0',minHeight:'30px'}}/>
          <div style={{fontSize:'11px',color:'var(--t)',border:'1px solid var(--t)',padding:'2px 3px',textShadow:'0 0 4px var(--t)'}}>{e.type}</div>
        </div>
        <div style={{flex:1,border:'1px solid var(--bd)',padding:'12px',background:'var(--bg)'}}>
          <div className="px glowt" style={{fontSize:'6px',marginBottom:'4px',lineHeight:'1.7'}}>{e.title}</div>
          <div className="glow" style={{fontSize:'17px',marginBottom:'4px'}}>{e.org}</div>
          {e.period&&(
            <div style={{fontSize:'14px',color:'var(--vd)',marginBottom:'8px',letterSpacing:'1px'}}>
              {e.period}{e.location?` · ${e.location}`:''}
            </div>
          )}
          <div style={{fontSize:'16px',color:'var(--dm)',lineHeight:'1.5',marginBottom:'8px'}}>{e.desc}</div>
          {e.courses&&e.courses.length>0&&(
            <div style={{marginBottom:'10px'}}>
              <div style={{fontSize:'11px',color:'var(--vd)',letterSpacing:'2px',marginBottom:'6px'}}>CORE AREAS OF STUDY</div>
              <div style={{display:'flex',flexWrap:'wrap',gap:'4px'}}>
                {e.courses.map((c,ci)=>(
                  <span key={ci} style={{fontSize:'13px',color:'var(--t)',border:'1px solid rgba(0,212,212,.2)',padding:'1px 6px',background:'rgba(0,212,212,.04)'}}>{c}</span>
                ))}
              </div>
            </div>
          )}
          {e.notes&&e.notes.length>0&&(
            <div>
              {e.notes.map((n,ni)=>(
                <div key={ni} style={{display:'flex',gap:'6px',marginBottom:'4px',fontSize:'14px',color:'var(--dm)',lineHeight:'1.4'}}>
                  <span style={{color:'var(--t)',flexShrink:0}}>›</span>{n}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);

// ── Folder SVG thumbnails ─────────────────────────────────
// To use a real image: add thumbUrl to the folder data object; FolderThumb renders <img> when present
const FolderThumb=({kind,accent,thumbUrl})=>{
  const base={width:'100%',height:'100%',display:'block'};
  if(thumbUrl)return <img src={thumbUrl} alt={kind} loading="lazy" decoding="async" style={{...base,objectFit:'cover'}}/>;
  if(kind==='trips')return(
    <svg viewBox="0 0 120 70" style={base} preserveAspectRatio="none">
      <line x1="0" y1="58" x2="120" y2="58" stroke={accent} strokeWidth=".6" strokeDasharray="2 3" opacity=".4"/>
      <polyline points="0,58 18,38 32,46 52,22 70,34 88,18 104,32 120,26" stroke={accent} strokeWidth="1" fill="none" style={{filter:`drop-shadow(0 0 2px ${accent})`}}/>
      <circle cx="78" cy="16" r="5" stroke={accent} strokeWidth=".8" fill="none" opacity=".7"/>
      <circle cx="78" cy="16" r="2" fill={accent} opacity=".5"/>
      {[10,30,50,70,90,110].map(x=><line key={x} x1={x} y1="62" x2={x} y2="68" stroke={accent} strokeWidth=".5" opacity=".3"/>)}
    </svg>
  );
  if(kind==='drawings')return(
    <svg viewBox="0 0 120 70" style={base} preserveAspectRatio="none">
      {Array.from({length:14},(_,i)=>(
        <line key={i} x1={-10+i*10} y1="0" x2={20+i*10} y2="70" stroke={accent} strokeWidth=".4" opacity=".22"/>
      ))}
      <path d="M 18 50 Q 32 18, 48 38 T 78 30 T 104 44" stroke={accent} strokeWidth="1.2" fill="none" style={{filter:`drop-shadow(0 0 2px ${accent})`}}/>
      <circle cx="22" cy="20" r="2.5" fill={accent}/>
      <path d="M 90 14 L 96 8 L 100 12 L 94 18 Z" stroke={accent} strokeWidth=".7" fill="none"/>
    </svg>
  );
  if(kind==='devlogs')return(
    <svg viewBox="0 0 120 70" style={base} preserveAspectRatio="none">
      {[8,18,28,42,56].map((y,i)=><line key={i} x1="0" x2="120" y1={y} y2={y} stroke={accent} strokeWidth=".5" opacity=".18"/>)}
      <rect x="36" y="18" width="48" height="34" stroke={accent} strokeWidth=".8" fill="none" opacity=".7"/>
      <polygon points="54,26 54,44 70,35" fill={accent} style={{filter:`drop-shadow(0 0 3px ${accent})`}}/>
      <text x="6" y="66" fill={accent} fontFamily="monospace" fontSize="6" opacity=".55">REC ● 00:42:18</text>
      <circle cx="98" cy="64" r="1.6" fill={accent}/>
    </svg>
  );
  if(kind==='wear')return(
    <svg viewBox="0 0 120 70" style={base} preserveAspectRatio="none">
      <path d="M 46 14 L 36 22 L 32 36 L 38 38 L 38 60 L 82 60 L 82 38 L 88 36 L 84 22 L 74 14 L 68 18 Q 60 24, 52 18 Z" stroke={accent} strokeWidth="1" fill="none" style={{filter:`drop-shadow(0 0 2px ${accent})`}}/>
      <line x1="60" y1="20" x2="60" y2="34" stroke={accent} strokeWidth=".5" opacity=".5"/>
      <rect x="50" y="40" width="20" height="10" stroke={accent} strokeWidth=".7" fill="none" opacity=".7"/>
      <text x="60" y="48" textAnchor="middle" fill={accent} fontFamily="monospace" fontSize="5" opacity=".8">MJW</text>
    </svg>
  );
  if(kind==='gameart')return(
    <svg viewBox="0 0 120 70" style={base} preserveAspectRatio="none">
      {Array.from({length:7*4},(_,i)=>{
        const x=(i%7)*16+6,y=Math.floor(i/7)*16+6;
        const filled=[2,5,8,9,10,12,14,15,16,17,19,22,25].includes(i);
        return <rect key={i} x={x} y={y} width="12" height="12" stroke={accent} strokeWidth=".4" fill={filled?accent:'none'} opacity={filled?.7:.25}/>;
      })}
    </svg>
  );
  if(kind==='photo')return(
    <svg viewBox="0 0 120 70" style={base} preserveAspectRatio="none">
      <rect x="0" y="6" width="120" height="58" stroke={accent} strokeWidth=".6" fill="none" opacity=".5"/>
      {[8,28,48,68,88,108].map(x=>(<g key={x}><rect x={x} y="10" width="6" height="5" fill={accent} opacity=".5"/><rect x={x} y="55" width="6" height="5" fill={accent} opacity=".5"/></g>))}
      <rect x="20" y="22" width="34" height="28" stroke={accent} strokeWidth=".7" fill="none" opacity=".6"/>
      <rect x="66" y="22" width="34" height="28" stroke={accent} strokeWidth=".7" fill="none" opacity=".6"/>
      <circle cx="37" cy="36" r="5" stroke={accent} strokeWidth=".6" fill="none"/>
      <circle cx="83" cy="36" r="5" stroke={accent} strokeWidth=".6" fill="none"/>
    </svg>
  );
  return null;
};

// ── Lazy image — only loads when scrolled into view inside the archive ───────
const LazyImg=({src,alt,style,scrollRoot})=>{
  const [visible,setVisible]=useState(false);
  const wrapRef=useRef(null);
  useEffect(()=>{
    const el=wrapRef.current;
    if(!el)return;
    const obs=new IntersectionObserver(
      ([e])=>{if(e.isIntersecting){setVisible(true);obs.disconnect();}},
      {root:scrollRoot?.current??null,rootMargin:'300px'}
    );
    obs.observe(el);
    return()=>obs.disconnect();
  },[scrollRoot]);
  return(
    <div ref={wrapRef} style={{position:'absolute',inset:0,background:'var(--pb)'}}>
      {visible&&<img src={src} alt={alt} decoding="async" style={style}/>}
    </div>
  );
};

// ── Lightbox — fullscreen viewer that loads the full-res image on demand ─────
const LightboxImage=({item})=>{
  const thumbSrc=item.url.replace('/Japan2026Pics/','/Japan2026Pics/thumbs/');
  const [loaded,setLoaded]=useState(false);
  return(
    <div style={{position:'relative',maxWidth:'90vw',maxHeight:'90vh',display:'flex',alignItems:'center',justifyContent:'center'}}
      onClick={e=>e.stopPropagation()}>
      <img src={thumbSrc} alt={item.label} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'contain',filter:'blur(12px)',transform:'scale(1.06)',opacity:loaded?0:1,transition:'opacity .4s'}}/>
      <img src={item.url} alt={item.label} decoding="async" onLoad={()=>setLoaded(true)}
        style={{maxWidth:'90vw',maxHeight:'90vh',objectFit:'contain',opacity:loaded?1:0,transition:'opacity .4s',position:'relative',zIndex:1}}/>
    </div>
  );
};

// ── Creative Archive — full-screen takeover ───────────────
const CA_LOAD_STEPS=[
  {p:14, msg:"MOUNTING /VAR/CREATIVE"},
  {p:30, msg:"INDEXING MEDIA NODES"},
  {p:48, msg:"DECRYPTING THUMBNAILS"},
  {p:66, msg:"LOADING METADATA TAGS"},
  {p:84, msg:"CALIBRATING GALLERY VIEW"},
  {p:100,msg:"ARCHIVE READY"},
];

const CreativeArchive=({onClose})=>{
  const [phase,setPhase]=useState('load');
  const [prog,setProg]=useState(0);
  const [msgs,setMsgs]=useState([]);
  const [folder,setFolder]=useState(null);
  const [hov,setHov]=useState(null);
  const [closing,setClosing]=useState(false);
  const [lightbox,setLightbox]=useState(null); // {items, idx}
  const scrollRef=useRef(null);

  useEffect(()=>{
    document.body.classList.add('creative-open');
    return()=>document.body.classList.remove('creative-open');
  },[]);

  useEffect(()=>{
    if(phase!=='load')return;
    const start=Date.now(),dur=800;
    let raf;
    const tick=()=>{
      const p=Math.min(100,Math.round((Date.now()-start)/dur*100));
      setProg(p);
      setMsgs(CA_LOAD_STEPS.filter(s=>s.p<=p));
      if(p<100)raf=requestAnimationFrame(tick);
      else{
        beep(900,.06);setTimeout(()=>beep(1300,.1),80);
        setTimeout(()=>setPhase('browse'),520);
      }
    };
    raf=requestAnimationFrame(tick);
    return()=>cancelAnimationFrame(raf);
  },[phase]);

  const doClose=useCallback(()=>{
    if(closing)return;
    setClosing(true);sndBack();
    setTimeout(onClose,260);
  },[closing,onClose]);

  useEffect(()=>{
    const h=e=>{
      if(lightbox){
        if(e.key==='Escape'){setLightbox(null);sndBack();}
        else if(e.key==='ArrowRight')setLightbox(l=>l.idx<l.items.length-1?{...l,idx:l.idx+1}:l);
        else if(e.key==='ArrowLeft')setLightbox(l=>l.idx>0?{...l,idx:l.idx-1}:l);
        return;
      }
      if(e.key!=='Escape')return;
      if(folder){setFolder(null);sndBack();}
      else doClose();
    };
    window.addEventListener('keydown',h);
    return()=>window.removeEventListener('keydown',h);
  },[folder,lightbox,doClose]);

  const openFolder=f=>{setFolder(f);sndSel();};

  return(
    <div style={{position:'fixed',inset:0,zIndex:600,background:'var(--bg)',display:'flex',flexDirection:'column',
      animation:closing?'fadeOut .26s ease forwards':'fadeIn .25s ease',overflow:'hidden'}}>
      <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,255,136,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.025) 1px,transparent 1px)',backgroundSize:'46px 46px',pointerEvents:'none'}}/>

      {/* Header */}
      <div style={{position:'relative',borderBottom:'1px solid var(--bd)',padding:'12px 26px',display:'flex',alignItems:'center',justifyContent:'space-between',background:'rgba(0,0,0,.5)',flexShrink:0,zIndex:2}}>
        <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
          <div style={{position:'relative',width:'44px',height:'44px'}}>
            <div style={{position:'absolute',inset:0,borderRadius:'50%',border:'1px solid var(--g)',animation:'pulse 2s infinite',boxShadow:'0 0 12px rgba(0,255,136,.25)'}}/>
            <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span className="glow" style={{fontSize:'22px'}}>◆</span>
            </div>
          </div>
          <div>
            <div className="px glow" style={{fontSize:'9px',letterSpacing:'2px'}}>
              <DecryptText text="CREATIVE_ARCHIVE.SYS" speed={14}/>
            </div>
            <div style={{fontSize:'16px',color:'var(--dm)',marginTop:'3px',letterSpacing:'1px'}}>
              {phase==='load'?'INITIALIZING':folder?`/ ${folder.name}`:'/ROOT — SELECT MODULE'}
            </div>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          {folder&&(
            <button className="ca-back-btn" onClick={()=>{setFolder(null);sndBack();}} onMouseEnter={sndNav}>[ ← BACK ]</button>
          )}
          <button className="ca-back-btn" onClick={doClose} onMouseEnter={sndNav}>[ ESC // EXIT ]</button>
        </div>
      </div>

      {/* Scrollable body */}
      <div ref={scrollRef} className="sy" style={{flex:1,overflow:'auto',position:'relative',zIndex:2}}>

        {/* Load phase */}
        {phase==='load'&&(
          <div style={{minHeight:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'40px 20px'}}>
            <div style={{position:'relative',width:'150px',height:'150px',marginBottom:'30px'}}>
              <svg width="150" height="150" viewBox="0 0 150 150">
                <circle cx="75" cy="75" r="68" stroke="var(--bd)" strokeWidth="1" fill="none"/>
                <g style={{transformOrigin:'75px 75px',animation:'spin 9s linear infinite'}}>
                  <circle cx="75" cy="75" r="62" stroke="rgba(0,255,136,.18)" strokeWidth="1" fill="none" strokeDasharray="4 10"/>
                </g>
                <g style={{transformOrigin:'75px 75px',animation:'spinRev 14s linear infinite'}}>
                  <circle cx="75" cy="75" r="56" stroke="rgba(0,212,212,.14)" strokeWidth="1" fill="none" strokeDasharray="2 18"/>
                </g>
                {Array.from({length:8},(_,i)=>{const a=i*45*Math.PI/180;return(
                  <line key={i} x1={75+Math.cos(a)*40} y1={75+Math.sin(a)*40} x2={75+Math.cos(a)*48} y2={75+Math.sin(a)*48} stroke="var(--g)" strokeWidth="1" opacity=".5"/>
                )})}
                <circle cx="75" cy="75" r="32" stroke="var(--g)" strokeWidth="1" fill="rgba(0,255,136,.06)"
                  style={{filter:'drop-shadow(0 0 12px var(--g))',animation:'pulse 2s infinite'}}/>
                <text x="75" y="86" textAnchor="middle" fill="var(--g)" fontSize="34"
                  fontFamily="'VT323',monospace" style={{filter:'drop-shadow(0 0 8px var(--g))'}}>◆</text>
              </svg>
            </div>
            <div className="px glow" style={{fontSize:'10px',letterSpacing:'3px',marginBottom:'6px'}}>ACCESSING ARCHIVE</div>
            <div style={{fontSize:'17px',color:'var(--vd)',letterSpacing:'2px',marginBottom:'30px'}}>decrypting creative payload</div>
            <div style={{width:'min(520px,80vw)'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'8px',fontSize:'17px'}}>
                <span style={{color:'var(--vd)',letterSpacing:'2px'}}>LOADING</span>
                <span className="glow" style={{fontFamily:'monospace',minWidth:'50px',textAlign:'right'}}>{String(prog).padStart(3,' ')}%</span>
              </div>
              <div style={{height:'6px',background:'#0a1a0e',border:'1px solid var(--bd)',overflow:'hidden',marginBottom:'20px',position:'relative'}}>
                <div style={{position:'absolute',inset:0,width:`${prog}%`,background:'var(--g)',boxShadow:'0 0 14px var(--g)',transition:'width .08s'}}/>
                <div style={{position:'absolute',top:0,bottom:0,left:`${prog}%`,width:'3px',background:'#fff',opacity:.7,boxShadow:'0 0 8px #fff',transform:'translateX(-1px)'}}/>
              </div>
              <div style={{fontSize:'16px',minHeight:'130px'}}>
                {msgs.map((m,i)=>(
                  <div key={m.msg} style={{display:'flex',alignItems:'center',gap:'9px',marginBottom:'6px',
                    animation:'fadeUp .2s ease both',color:i===msgs.length-1?'var(--g)':'var(--vd)'}}>
                    <span style={{color:i===msgs.length-1?'var(--t)':'var(--vd)',fontSize:'13px'}}>{i===msgs.length-1?'▶':'✓'}</span>
                    {i===msgs.length-1?<DecryptText text={m.msg} speed={16}/>:<span>{m.msg}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Browse root — folder grid */}
        {phase==='browse'&&!folder&&(
          <div style={{padding:'28px 32px 40px',animation:'fadeIn .35s ease'}}>
            <div style={{display:'flex',gap:'12px',marginBottom:'22px',flexWrap:'wrap'}}>
              {[
                {l:'MODULES', v:D.creativeFolders.length},
                {l:'ASSETS',  v:D.creativeFolders.reduce((a,f)=>a+f.count,0)},
                {l:'STATUS',  v:'LIVE', c:'var(--t)'},
                {l:'LAST_SYNC',v:'JUST NOW'},
              ].map(s=>(
                <div key={s.l} style={{border:'1px solid var(--bd)',background:'var(--pb)',padding:'8px 14px',minWidth:'130px'}}>
                  <div style={{fontSize:'12px',color:'var(--vd)',letterSpacing:'2px',marginBottom:'2px'}}>{s.l}</div>
                  <div style={{fontSize:'19px',color:s.c||'var(--g)',textShadow:`0 0 6px ${s.c||'var(--g)'}`}}>{s.v}</div>
                </div>
              ))}
            </div>
            <div className="sec-label"><span className="glow">◆</span> SELECT MODULE</div>
            <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'14px'}}>
              {D.creativeFolders.map((f,i)=>{
                const isHov=hov===f.id;
                const accent=f.color==='t'?'var(--t)':'var(--g)';
                const glow=f.color==='t'?'rgba(0,212,212,.5)':'rgba(0,255,136,.5)';
                const rawAccent=f.color==='t'?'#00d4d4':'#00ff88';
                return(
                  <div key={f.id} className="ca-folder"
                    style={{animation:`staggerUp .35s ${i*60}ms ease both`,
                      ...(isHov?{borderColor:accent,boxShadow:`0 0 22px ${glow},inset 0 0 18px rgba(255,255,255,.02)`,transform:'translateY(-2px)'}:{})}}
                    onClick={()=>openFolder(f)}
                    onMouseEnter={()=>{setHov(f.id);sndNav();}}
                    onMouseLeave={()=>setHov(null)}>
                    {/* Thumbnail */}
                    <div style={{position:'relative',aspectRatio:'16/9',background:'var(--bg)',borderBottom:'1px solid var(--bd)',overflow:'hidden'}}>
                      <div style={{position:'absolute',inset:0,backgroundImage:'repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0,rgba(0,0,0,.18) 1px,transparent 1px,transparent 3px)',pointerEvents:'none',opacity:.5}}/>
                      <FolderThumb kind={f.thumb} accent={rawAccent} thumbUrl={f.thumbUrl}/>
                      <div style={{position:'absolute',top:6,left:6,fontFamily:'monospace',fontSize:'10px',color:accent,letterSpacing:'1px',textShadow:`0 0 4px ${accent}`}}>
                        ◉ REC // {String(i+1).padStart(2,'0')}
                      </div>
                      <div style={{position:'absolute',top:6,right:6,fontFamily:'monospace',fontSize:'10px',color:'var(--vd)'}}>
                        {String(f.count).padStart(3,'0')} FILES
                      </div>
                      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'2px',background:`linear-gradient(90deg,transparent,${accent},transparent)`,opacity:.6}}/>
                    </div>
                    {/* Card body */}
                    <div style={{padding:'12px 14px',display:'flex',flexDirection:'column',gap:'9px',flex:1}}>
                      <div style={{display:'flex',alignItems:'center',gap:'9px'}}>
                        <div style={{width:'30px',height:'30px',border:`1px solid ${isHov?accent:'var(--bd)'}`,
                          background:'var(--bg)',display:'flex',alignItems:'center',justifyContent:'center',
                          boxShadow:isHov?`0 0 10px ${accent}`:'none',transition:'all .15s',flexShrink:0}}>
                          <span style={{fontSize:'17px',color:accent,textShadow:`0 0 6px ${accent}`}}>{f.icon}</span>
                        </div>
                        <div style={{minWidth:0,flex:1}}>
                          <div className="px" style={{fontSize:'7px',color:accent,textShadow:`0 0 6px ${accent}`,letterSpacing:'1px',marginBottom:'2px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{f.name}</div>
                          <div style={{fontSize:'13px',color:'var(--vd)',letterSpacing:'1px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{f.sub}</div>
                        </div>
                      </div>
                      <div style={{display:'flex',flexWrap:'wrap',gap:'3px',marginTop:'auto'}}>
                        {f.tags.slice(0,3).map(t=>(
                          <span key={t} style={{fontSize:'12px',color:accent,border:`1px solid ${accent}`,opacity:.65,padding:'0 6px',background:'var(--bg)'}}>{t}</span>
                        ))}
                      </div>
                      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'13px',color:'var(--vd)',borderTop:'1px solid var(--bd)',paddingTop:'7px'}}>
                        <span style={{fontFamily:'monospace'}}>/{f.id}</span>
                        <span style={{color:isHov?accent:'var(--vd)',transition:'color .15s'}}>[ OPEN ] ›</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Browse detail — folder contents */}
        {phase==='browse'&&folder&&(
          <div style={{padding:'26px 32px 40px',animation:'fadeIn .25s ease'}} key={folder.id}>
            <div style={{display:'flex',gap:'14px',alignItems:'center',marginBottom:'18px'}}>
              <div style={{width:'52px',height:'52px',border:'1px solid var(--g)',background:'var(--g2)',
                display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 14px rgba(0,255,136,.2)'}}>
                <span className="glow" style={{fontSize:'28px'}}>{folder.icon}</span>
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div className="px glow" style={{fontSize:'10px',letterSpacing:'2px',marginBottom:'4px'}}>
                  <DecryptText text={folder.name} speed={14}/>
                </div>
                <div style={{fontSize:'16px',color:'var(--dm)',letterSpacing:'1px'}}>{folder.sub}</div>
              </div>
              <div style={{textAlign:'right',fontSize:'14px',color:'var(--vd)',fontFamily:'monospace'}}>
                <div style={{fontSize:'19px',color:'var(--t)',textShadow:'0 0 5px var(--t)'}}>{folder.items.length}/{folder.count}</div>
                <div>VISIBLE</div>
              </div>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'5px',marginBottom:'18px'}}>
              {folder.tags.map(t=>(
                <span key={t} style={{fontSize:'13px',color:'var(--t)',border:'1px solid rgba(0,212,212,.4)',padding:'2px 8px',background:'rgba(0,212,212,.05)'}}>#{t}</span>
              ))}
            </div>
            <div className="sec-label"><span className="glowt">▣</span> CONTENTS</div>
            {folder.items.some(it=>it.url)?(
              <div style={{display:'grid',gridTemplateColumns:'repeat(4,minmax(0,1fr))',gap:'10px'}}>
                {folder.items.filter(it=>it.url).map((it,i,arr)=>{
                  const thumbSrc=it.url.replace('/Japan2026Pics/','/Japan2026Pics/thumbs/');
                  return(
                  <div key={i} className="ca-thumb" style={{animation:`ca-thumb-in .3s ${i*40}ms ease both`,cursor:'pointer'}}
                    onMouseEnter={sndNav} onClick={()=>{sndSel();setLightbox({items:arr,idx:i});}}>
                    <div className="ca-thumb-stripes"/>
                    <div style={{position:'absolute',top:4,left:4,width:9,height:9,borderTop:'1px solid var(--t)',borderLeft:'1px solid var(--t)',opacity:.6,zIndex:2}}/>
                    <div style={{position:'absolute',bottom:4,right:4,width:9,height:9,borderBottom:'1px solid var(--t)',borderRight:'1px solid var(--t)',opacity:.6,zIndex:2}}/>
                    <LazyImg src={thumbSrc} alt={it.label} scrollRoot={scrollRef} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,height:'2px',background:'linear-gradient(90deg,transparent,var(--g),transparent)',opacity:.4,zIndex:2}}/>
                  </div>
                );})}
              </div>
            ):(
              <div style={{marginTop:'22px',padding:'32px 16px',border:'1px dashed var(--bd)',background:'rgba(0,0,0,.3)',
                fontSize:'15px',color:'var(--vd)',textAlign:'center',letterSpacing:'1px'}}>
                — CONTENT COMING SOON // NO ASSETS LOADED YET —
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{position:'relative',borderTop:'1px solid var(--bd)',padding:'8px 26px',display:'flex',gap:'18px',
        fontSize:'14px',color:'var(--dm)',background:'rgba(0,0,0,.5)',flexShrink:0,zIndex:2,alignItems:'center'}}>
        <span style={{color:'var(--vd)'}}>◆</span>
        <span>[ <span className="glow">↵</span> {folder?'CLICK ITEM':'OPEN FOLDER'} ]</span>
        <span>[ <span className="glow">⎋</span> {folder?'BACK':'EXIT'} ]</span>
        <span style={{marginLeft:'auto',color:'var(--vd)',fontSize:'12px',letterSpacing:'1px'}}>
          {phase==='load'?'STATE: BOOTING':folder?`STATE: VIEWING ${folder.name}`:'STATE: ROOT'}
        </span>
      </div>

      {/* Lightbox */}
      {lightbox&&(
        <div style={{position:'fixed',inset:0,zIndex:800,background:'rgba(0,0,0,.93)',display:'flex',alignItems:'center',
          justifyContent:'center',animation:'fadeIn .2s ease'}}
          onClick={()=>setLightbox(null)}>
          <LightboxImage key={lightbox.items[lightbox.idx].url} item={lightbox.items[lightbox.idx]}/>
          {lightbox.idx>0&&(
            <button onClick={e=>{e.stopPropagation();sndNav();setLightbox(l=>({...l,idx:l.idx-1}));}}
              style={{position:'absolute',left:'20px',top:'50%',transform:'translateY(-50%)',background:'rgba(0,0,0,.6)',
                border:'1px solid var(--bd)',color:'var(--g)',fontSize:'28px',padding:'8px 18px',cursor:'pointer',fontFamily:'monospace',lineHeight:1}}>
              ‹
            </button>
          )}
          {lightbox.idx<lightbox.items.length-1&&(
            <button onClick={e=>{e.stopPropagation();sndNav();setLightbox(l=>({...l,idx:l.idx+1}));}}
              style={{position:'absolute',right:'20px',top:'50%',transform:'translateY(-50%)',background:'rgba(0,0,0,.6)',
                border:'1px solid var(--bd)',color:'var(--g)',fontSize:'28px',padding:'8px 18px',cursor:'pointer',fontFamily:'monospace',lineHeight:1}}>
              ›
            </button>
          )}
          <div style={{position:'absolute',bottom:'20px',left:'50%',transform:'translateX(-50%)',
            color:'var(--dm)',fontSize:'12px',letterSpacing:'2px',fontFamily:'monospace',pointerEvents:'none'}}>
            {lightbox.idx+1} / {lightbox.items.length}
          </div>
          <button onClick={()=>setLightbox(null)}
            style={{position:'absolute',top:'16px',right:'22px',background:'none',border:'none',
              color:'var(--g)',fontSize:'18px',cursor:'pointer',letterSpacing:'2px',fontFamily:'monospace'}}>
            [×]
          </button>
        </div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════
// RADIAL MENU
// ══════════════════════════════════════════════════════
const SECS=[
  {id:'CHARACTER',label:'CHARACTER',sub:'ABOUT & SKILLS',   icon:'◉',angle:0  },
  {id:'LEVELS',   label:'LEVELS',   sub:'PROJECTS',         icon:'◈',angle:60 },
  {id:'MAP',      label:'MAP',      sub:'CONTACT & SOCIALS',icon:'◇',angle:120},
  {id:'CREATIVE', label:'CREATIVE', sub:'CONTENT HUB',      icon:'◆',angle:180},
  {id:'LORE',     label:'LORE',     sub:'EDUCATION',        icon:'▣',angle:240},
  {id:'QUESTLOG', label:'QUEST LOG',sub:'WORK EXPERIENCE',  icon:'▤',angle:300},
];

const SCREEN_MAP={
  CHARACTER:<CharacterScreen/>,LEVELS:<LevelsScreen/>,MAP:<MapScreen/>,
  LORE:<LoreScreen/>,QUESTLOG:<QuestLogScreen/>,
};

const SZ=540, CX=270, CY=270, RAD=196;
const getPos=a=>{const r=(a-90)*Math.PI/180;return{x:CX+Math.cos(r)*RAD,y:CY+Math.sin(r)*RAD}};

const RoleCycler=()=>{
  const [idx,setIdx]=useState(0);
  const [fade,setFade]=useState(false);
  useEffect(()=>{
    const t=setInterval(()=>{
      setFade(true);
      setTimeout(()=>{setIdx(i=>(i+1)%D.roles.length);setFade(false)},380);
    },2800);
    return()=>clearInterval(t);
  },[]);
  return(
    <div className="glowt" style={{fontSize:'14px',marginTop:'3px',height:'18px',opacity:fade?0:1,transition:'opacity .35s',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'140px',textAlign:'center'}}>
      {D.roles[idx]}
    </div>
  );
};

const RadialMenu=({onSelect})=>{
  const [hov,setHov]=useState(null);
  return(
    <div style={{position:'relative',width:`${SZ}px`,height:`${SZ}px`,flexShrink:0}}>
      <svg width={SZ} height={SZ} style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'visible'}}>
        <circle cx={CX} cy={CY} r={RAD+38} stroke="var(--bd)" strokeWidth="1" fill="none"/>
        <circle cx={CX} cy={CY} r={RAD+30} stroke="rgba(0,255,136,.05)" strokeWidth="1" fill="none" strokeDasharray="3 7"/>
        {Array.from({length:36},(_,i)=>{
          const a=i*10*Math.PI/180;
          const r1=RAD+30,r2=i%3===0?RAD+20:RAD+25;
          return <line key={i} x1={CX+Math.cos(a)*r1} y1={CY+Math.sin(a)*r1} x2={CX+Math.cos(a)*r2} y2={CY+Math.sin(a)*r2} stroke="var(--bd)" strokeWidth="1"/>;
        })}
        <circle cx={CX} cy={CY} r="64" stroke="var(--bd)" strokeWidth="1" fill="var(--bg)"/>
        <circle cx={CX} cy={CY} r="57" stroke="rgba(0,255,136,.1)" strokeWidth="1" fill="var(--bg)"/>
        <g style={{transformOrigin:`${CX}px ${CY}px`,animation:'spin 22s linear infinite'}}>
          <circle cx={CX} cy={CY} r="68" stroke="rgba(0,255,136,.05)" strokeWidth="1" fill="none" strokeDasharray="2 16"/>
        </g>
        <g style={{transformOrigin:`${CX}px ${CY}px`,animation:'spinRev 34s linear infinite'}}>
          <circle cx={CX} cy={CY} r="72" stroke="rgba(0,212,212,.04)" strokeWidth="1" fill="none" strokeDasharray="3 20"/>
        </g>
        {SECS.map(s=>{
          const p=getPos(s.angle);
          const on=hov===s.id;
          return(
            <line key={s.id} x1={CX} y1={CY} x2={p.x} y2={p.y}
              stroke={on?'var(--g)':'var(--bd)'}
              strokeWidth={on?1.5:1}
              strokeDasharray={on?'none':'3 5'}
              opacity={on?.75:.5}
              style={{transition:'all .2s'}}/>
          );
        })}
      </svg>
      <div style={{position:'absolute',left:'50%',top:'calc(50% + 33px)',transform:'translate(-50%,-50%)',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',zIndex:2,pointerEvents:'none',width:'160px'}}>
        <div style={{position:'relative',width:'80px',height:'80px',flexShrink:0,borderRadius:'50%',overflow:'hidden',border:'1px solid var(--g)',boxShadow:'0 0 12px rgba(0,255,136,0.4),0 0 3px var(--g)'}}>
          <img src="/images/profile.png" alt="Michael Whiteman" loading="eager" decoding="async" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',filter:'grayscale(0.35) sepia(0.2) hue-rotate(100deg) contrast(1.1) brightness(0.85)'}}/>
          <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.15) 2px,rgba(0,0,0,0.15) 3px)',pointerEvents:'none'}}/>
          <div style={{position:'absolute',inset:0,borderRadius:'50%',background:'radial-gradient(ellipse at center,transparent 50%,rgba(0,255,136,0.08) 100%)',pointerEvents:'none'}}/>
        </div>
        <div className="px glow" style={{fontSize:'6.5px',marginTop:'14px',letterSpacing:'1px'}}>MICHAEL W.</div>
        <RoleCycler/>
        <div style={{height:'18px',marginTop:'4px'}}>
          {hov&&(
            <div style={{fontSize:'13px',color:'var(--vd)',animation:'fadeIn .12s ease',letterSpacing:'1px'}}>
              {SECS.find(s=>s.id===hov)?.sub}
            </div>
          )}
        </div>
      </div>
      {SECS.map((s,i)=>{
        const p=getPos(s.angle);
        const on=hov===s.id;
        return(
          <div key={s.id} className={`node${on?' on':''}`}
            style={{left:`${p.x}px`,top:`${p.y}px`,animation:`nodeIn .4s ${i*.07}s ease both`}}
            onMouseEnter={()=>{setHov(s.id);sndNav()}}
            onMouseLeave={()=>setHov(null)}
            onClick={()=>onSelect(s.id)}>
            <div className="node-ring">
              <span style={{fontSize:'22px',color:on?'var(--g)':'var(--dm)',textShadow:on?'0 0 10px var(--g)':undefined,transition:'all .2s'}}>
                {s.icon}
              </span>
            </div>
            <div className="node-lbl" style={{marginTop:'7px'}}>{s.label}</div>
          </div>
        );
      })}
    </div>
  );
};

// ══════════════════════════════════════════════════════
// CONTENT OVERLAY
// ══════════════════════════════════════════════════════
const ContentOverlay=({secId,onClose})=>{
  const sec=SECS.find(s=>s.id===secId);
  const [closing,setClosing]=useState(false);
  const doClose=useCallback(()=>{if(closing)return;setClosing(true);sndBack();setTimeout(onClose,220);},[closing]);
  useEffect(()=>{
    const h=e=>{if(e.key==='Escape')doClose();};
    window.addEventListener('keydown',h);
    return()=>window.removeEventListener('keydown',h);
  },[doClose]);
  return(
    <div className="ov">
      <div className="ov-bg" onClick={doClose}/>
      <div className={`ov-panel${closing?' closing':''}`}>
        <div className="ov-head">
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <div style={{position:'relative',width:'42px',height:'42px',flexShrink:0}}>
              <div style={{position:'absolute',inset:0,borderRadius:'50%',border:'1px solid var(--t)',
                animation:'pulse 2s infinite',boxShadow:'0 0 10px rgba(0,212,212,.2)'}}/>
              <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className="glowt" style={{fontSize:'22px'}}>{sec?.icon}</span>
              </div>
            </div>
            <div>
              <div className="px glow" style={{fontSize:'8px',letterSpacing:'1px'}}>
                <DecryptText text={sec?.label||''} speed={16}/>
              </div>
              <div style={{fontSize:'15px',color:'var(--dm)',marginTop:'3px'}}>
                <TypeText text={sec?.sub||''} speed={28} delay={200}/>
              </div>
            </div>
          </div>
          <button onClick={doClose}
            style={{background:'none',border:'1px solid var(--bd)',color:'var(--g)',fontFamily:"'VT323',monospace",fontSize:'18px',padding:'4px 12px',cursor:'none',transition:'all .15s'}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--g)';e.currentTarget.style.background='var(--g2)'}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--bd)';e.currentTarget.style.background='none'}}>
            [ ESC ]
          </button>
        </div>
        <div className="ov-body">{SCREEN_MAP[secId]}</div>
        <div className="ov-foot" style={{display:'flex',gap:'16px',alignItems:'center'}}>
          <span>[ <span style={{color:'var(--g)'}}>⎋</span> ESC ] BACK TO MENU</span>
          <span style={{marginLeft:'auto',color:'var(--vd)',fontSize:'12px'}}>{sec?.label} // PORTFOLIO_OS</span>
        </div>
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════
// TWEAKS PANEL
// ══════════════════════════════════════════════════════
const TWEAK_DEFAULTS={primaryColor:"#00ff88",secondaryColor:"#00d4d4",scanlines:"light"};
const SCAN_MAP={off:'0',light:'.07',medium:'.12',heavy:'.22'};

const TweaksPanel=({vis})=>{
  const [tw,setTw]=useState(()=>{try{return JSON.parse(localStorage.getItem('ptw'))||TWEAK_DEFAULTS}catch{return TWEAK_DEFAULTS}});
  const apply=useCallback(next=>{
    setTw(next);
    localStorage.setItem('ptw',JSON.stringify(next));
    document.documentElement.style.setProperty('--g',next.primaryColor);
    document.documentElement.style.setProperty('--t',next.secondaryColor);
    document.documentElement.style.setProperty('--scan',SCAN_MAP[next.scanlines]||'.07');
    window.parent.postMessage({type:'__edit_mode_set_keys',edits:next},'*');
  },[]);
  const set=(k,v)=>apply({...tw,[k]:v});
  useEffect(()=>apply(tw),[]);
  const G=['#00ff88','#39ff14','#b0ff00'];
  const T=['#00d4d4','#00aaff','#aa88ff'];
  return(
    <div id="tp" className={vis?'vis':''}>
      <div className="px glow" style={{fontSize:'7px',marginBottom:'14px',letterSpacing:'1px'}}>TWEAKS</div>
      <div style={{marginBottom:'12px'}}>
        <div style={{fontSize:'15px',color:'var(--vd)',marginBottom:'6px'}}>PRIMARY</div>
        {G.map(c=><button key={c} className={`tw-sw${tw.primaryColor===c?' on':''}`} onClick={()=>set('primaryColor',c)} style={{background:c,boxShadow:`0 0 7px ${c}`}}/>)}
      </div>
      <div style={{marginBottom:'12px'}}>
        <div style={{fontSize:'15px',color:'var(--vd)',marginBottom:'6px'}}>SECONDARY</div>
        {T.map(c=><button key={c} className={`tw-sw${tw.secondaryColor===c?' on':''}`} onClick={()=>set('secondaryColor',c)} style={{background:c,boxShadow:`0 0 7px ${c}`}}/>)}
      </div>
      <div>
        <div style={{fontSize:'15px',color:'var(--vd)',marginBottom:'6px'}}>SCANLINES</div>
        {Object.keys(SCAN_MAP).map(k=><button key={k} className={`tw-btn${tw.scanlines===k?' on':''}`} onClick={()=>set('scanlines',k)}>{k.toUpperCase()}</button>)}
      </div>
    </div>
  );
};

// ══════════════════════════════════════════════════════
// MAIN MENU
// ══════════════════════════════════════════════════════
const MainMenu=()=>{
  const [sel,setSel]=useState(null);
  const [creativeOpen,setCreativeOpen]=useState(false);
  const [tweaksVis,setTweaksVis]=useState(false);
  const [now,setNow]=useState(new Date());
  useEffect(()=>{const t=setInterval(()=>setNow(new Date()),30000);return()=>clearInterval(t)},[]);
  useEffect(()=>{
    const h=e=>{
      if(e.data?.type==='__activate_edit_mode')setTweaksVis(true);
      if(e.data?.type==='__deactivate_edit_mode')setTweaksVis(false);
    };
    window.addEventListener('message',h);
    window.parent.postMessage({type:'__edit_mode_available'},'*');
    return()=>window.removeEventListener('message',h);
  },[]);
  const dateStr=now.toLocaleString('en-US',{month:'short',day:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit'}).toUpperCase();
  return(
    <div style={{width:'100vw',height:'100vh',display:'flex',flexDirection:'column',background:'var(--bg)',overflow:'hidden',animation:'flicker 12s infinite'}}>
      <div style={{borderBottom:'1px solid var(--bd)',padding:'8px 22px',display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0,background:'rgba(0,0,0,.4)'}}>
        <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
          <span className="glowt" style={{fontSize:'18px'}}>◈</span>
          <div className="px glow" style={{fontSize:'7.5px',letterSpacing:'1.5px'}}>MICHAEL.W // PORTFOLIO_OS v2.0</div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'18px',fontSize:'17px'}}>
          <div style={{display:'flex',alignItems:'flex-end',gap:'2px',height:'16px'}}>
            {[4,7,10,13,16].map((h,i)=>(
              <div key={i} style={{width:'4px',height:`${h}px`,background:'var(--g)',boxShadow:'0 0 4px var(--g)',opacity:i<4?1:.3,borderRadius:'1px'}}/>
            ))}
          </div>
          <span style={{color:'var(--dm)'}}>{dateStr}</span>
          <div style={{display:'flex',alignItems:'center',gap:'6px',color:'var(--g)',textShadow:'0 0 6px var(--g)',animation:'pulse 3s infinite'}}>
            <span style={{fontSize:'10px'}}>●</span><span>ONLINE</span>
          </div>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'14px',fontSize:'15px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'8px',color:'var(--dm)'}}>
            <span>HP</span>
            <span className="glow" style={{letterSpacing:'1px'}}>████████</span>
            <span style={{color:'var(--vd)'}}>100%</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'2px'}}>
            <div style={{width:'22px',height:'11px',border:'1px solid var(--dm)',borderRadius:'2px',padding:'2px',display:'flex',gap:'1px',alignItems:'center'}}>
              {[1,1,1,1].map((_,i)=><div key={i} style={{flex:1,height:'100%',background:'var(--g)',boxShadow:'0 0 3px var(--g)',borderRadius:'1px'}}/>)}
            </div>
            <div style={{width:'3px',height:'5px',background:'var(--dm)',borderRadius:'0 1px 1px 0'}}/>
          </div>
        </div>
      </div>

      <div style={{flex:1,display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',position:'relative'}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(0,255,136,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,136,.02) 1px,transparent 1px)',backgroundSize:'46px 46px',pointerEvents:'none'}}/>
        <RadialMenu onSelect={id=>{sndSel();if(id==='CREATIVE')setCreativeOpen(true);else setSel(id);}}/>
      </div>

      <div style={{borderTop:'1px solid var(--bd)',padding:'7px 22px',display:'flex',gap:'20px',fontSize:'15px',color:'var(--dm)',flexShrink:0,background:'rgba(0,0,0,.4)',alignItems:'center'}}>
        <span style={{color:'var(--vd)'}}>◈</span>
        <span>[ <span className="glow" style={{fontSize:'13px'}}>↕</span> HOVER ]</span>
        <span>[ <span className="glow" style={{fontSize:'13px'}}>↵</span> ENTER ]</span>
        <span>[ <span className="glow" style={{fontSize:'13px'}}>⎋</span> ESC ]</span>
        <span style={{marginLeft:'auto',color:'var(--vd)',fontSize:'13px'}}>michaelw.cool</span>
      </div>

      {[['0,0','tl'],['0,auto','bl'],['auto,0','tr'],['auto,auto','br']].map(([pos,id])=>{
        const [t,b]=pos.split(',');
        const isRight=id.includes('r');
        const isBottom=id.includes('b');
        return(
          <div key={id} style={{position:'absolute',top:b==='auto'?undefined:'44px',bottom:b==='auto'?'36px':undefined,[isRight?'right':'left']:'0px',
            width:'28px',height:'28px',pointerEvents:'none',zIndex:10,
            borderTop:isBottom?'none':'1px solid var(--g)',
            borderBottom:isBottom?'1px solid var(--g)':'none',
            borderLeft:isRight?'none':'1px solid var(--g)',
            borderRight:isRight?'1px solid var(--g)':'none',
            opacity:.4}}/>
        );
      })}

      {sel&&<ContentOverlay secId={sel} onClose={()=>setSel(null)}/>}
      {creativeOpen&&<CreativeArchive onClose={()=>setCreativeOpen(false)}/>}
      <TweaksPanel vis={tweaksVis}/>
    </div>
  );
};

// ══════════════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════════════
export default function App() {
  const [phase,setPhase]=useState('boot');
  return(
    <>
      <Cursor/>
      <div className="scanlines"/>
      <div className="vignette"/>
      <div className="crt-scan"/>
      {phase==='boot'&&<BootSequence onDone={()=>setPhase('main')}/>}
      {phase==='main'&&<MainMenu/>}
    </>
  );
}
