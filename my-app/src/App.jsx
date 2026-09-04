import { useCallback, useEffect, useRef, useState } from "react";
import ClickSparks from "./components/portfolio/ClickSparks";
import Cover from "./components/portfolio/Cover";
import Header from "./components/portfolio/Header";
import QuickMode from "./components/portfolio/QuickMode";
import AboutSection from "./components/portfolio/AboutSection";
import ArsenalSection from "./components/portfolio/ArsenalSection";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import ExperienceSection from "./components/portfolio/ExperienceSection";
import CreativeSection from "./components/portfolio/CreativeSection";
import ContactSection from "./components/portfolio/ContactSection";
import ProjectModal from "./components/portfolio/ProjectModal";
import FolderView from "./components/portfolio/FolderView";
import Lightbox from "./components/portfolio/Lightbox";
import { ROLES, PROJECTS, FOLDERS } from "./data/portfolioData";

const ROLE_INTERVAL_MS = 1900;

export default function App() {
  const [cover, setCover] = useState(true);
  const [mode, setMode] = useState("full");
  const [roleIndex, setRoleIndex] = useState(0);
  const [projectId, setProjectId] = useState(null);
  const [folderIndex, setFolderIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(null);
  const [sound, setSound] = useState(false);

  const audioCtxRef = useRef(null);
  const soundRef = useRef(sound);
  soundRef.current = sound;

  const activeProject = PROJECTS.find((p) => p.id === projectId) ?? null;
  const activeFolder = folderIndex !== null ? FOLDERS[folderIndex] : null;

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, ROLE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  const blip = useCallback((freq) => {
    if (!soundRef.current) return;
    try {
      audioCtxRef.current = audioCtxRef.current || new (window.AudioContext || window.webkitAudioContext)();
      const ctx = audioCtxRef.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "square";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.035, ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.09);
      o.connect(g);
      g.connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.1);
    } catch {
      // WebAudio unavailable — sound is a nice-to-have, fail silently.
    }
  }, []);

  const closeProject = useCallback(() => setProjectId(null), []);
  const closeFolder = useCallback(() => {
    setFolderIndex(null);
    setImageIndex(null);
  }, []);
  const closeImage = useCallback(() => setImageIndex(null), []);

  const stepImage = useCallback(
    (dir) => {
      const folder = folderIndex !== null ? FOLDERS[folderIndex] : null;
      if (!folder) return;
      setImageIndex((i) => (i === null ? i : (i + dir + folder.items.length) % folder.items.length));
    },
    [folderIndex]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (imageIndex !== null) {
        if (e.key === "ArrowRight") stepImage(1);
        else if (e.key === "ArrowLeft") stepImage(-1);
        else if (e.key === "Escape") closeImage();
      } else if (folderIndex !== null) {
        if (e.key === "Escape") closeFolder();
      } else if (projectId !== null) {
        if (e.key === "Escape") closeProject();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [imageIndex, folderIndex, projectId, stepImage, closeImage, closeFolder, closeProject]);

  const openProject = useCallback((id) => {
    blip(660);
    setProjectId(id);
  }, [blip]);

  const openFolder = useCallback((i) => {
    blip(740);
    setFolderIndex(i);
  }, [blip]);

  const openImage = useCallback((i) => setImageIndex(i), []);

  const enterQuick = useCallback(() => {
    blip(880);
    setCover(false);
    setMode("quick");
  }, [blip]);

  const enterFull = useCallback(() => {
    blip(560);
    setCover(false);
    setMode("full");
  }, [blip]);

  const setQuickMode = useCallback(() => {
    blip(880);
    setCover(false);
    setMode("quick");
  }, [blip]);

  const setFullMode = useCallback(() => {
    blip(560);
    setCover(false);
    setMode("full");
  }, [blip]);

  const toggleSound = useCallback(() => setSound((s) => !s), []);

  const navClick = useCallback((href) => {
    const scrollToHref = () => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    setMode((m) => {
      if (m !== "full") {
        requestAnimationFrame(() => requestAnimationFrame(scrollToHref));
        return "full";
      }
      scrollToHref();
      return m;
    });
  }, []);

  return (
    <>
      <ClickSparks />
      {cover && <Cover role={ROLES[roleIndex]} onEnterQuick={enterQuick} onEnterFull={enterFull} />}
      <Header
        mode={mode}
        onSetQuick={setQuickMode}
        onSetFull={setFullMode}
        sound={sound}
        onToggleSound={toggleSound}
        onNavClick={navClick}
      />
      <main id="top" className="mx-auto max-w-[1180px] px-5 pb-[90px] pt-8.5">
        {mode === "quick" ? (
          <QuickMode onOpenProject={openProject} />
        ) : (
          <div>
            <AboutSection />
            <ArsenalSection />
            <ProjectsSection onOpenProject={openProject} />
            <ExperienceSection />
            <CreativeSection onOpenFolder={openFolder} />
            <ContactSection />
          </div>
        )}
      </main>
      <ProjectModal project={activeProject} onClose={closeProject} />
      <FolderView folder={activeFolder} onClose={closeFolder} onOpenItem={openImage} />
      <Lightbox folder={activeFolder} index={imageIndex} onClose={closeImage} onPrev={() => stepImage(-1)} onNext={() => stepImage(1)} />
    </>
  );
}
