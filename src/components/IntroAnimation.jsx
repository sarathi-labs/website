import { useEffect, useRef, useState } from "react";

export default function IntroAnimation() {
  const [mounted, setMounted] = useState(false);
  const [going, setGoing] = useState(false);
  const [done, setDone] = useState(false);
  const trackRef = useRef(null);
  const finishedRef = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    if (sessionStorage.getItem("sl-intro")) return; // already seen this session
    sessionStorage.setItem("sl-intro", "1");
    setMounted(true);
    document.documentElement.classList.add("intro-lock");
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const finish = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setDone(true);
      document.documentElement.classList.remove("intro-lock");
      timers.current.push(setTimeout(() => setMounted(false), 750));
    };

    let revealed = false;
    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setGoing(true);
      timers.current.push(setTimeout(finish, 1700));
    };

    const track = trackRef.current;
    const onAnimEnd = () => reveal();
    if (track) track.addEventListener("animationend", onAnimEnd, { once: true });
    const t1 = setTimeout(reveal, 1600);
    timers.current.push(t1);

    return () => {
      if (track) track.removeEventListener("animationend", onAnimEnd);
      timers.current.forEach(clearTimeout);
    };
  }, [mounted]);

  const skip = () => {
    timers.current.forEach(clearTimeout);
    setGoing(true);
    setDone(true);
    document.documentElement.classList.remove("intro-lock");
    setTimeout(() => setMounted(false), 750);
  };

  if (!mounted) return null;

  return (
    <div
      id="intro-curtain"
      aria-hidden="true"
      className={
        "fixed inset-0 z-[9999] bg-[var(--ink)] flex items-center justify-center overflow-hidden" +
        (going ? " go" : "") +
        (done ? " done" : "")
      }
    >
      <div className="stage relative w-full h-full flex items-center justify-center">
        <div className="track" ref={trackRef}>
          <div className="bob">
            <img src="/assets/horse-run.gif" alt="" />
          </div>
        </div>
        <div className="reveal">
          <img src="/assets/logo-lockup-cream.png" alt="Sarathi Labs" />
        </div>
      </div>
      <button className="skip" id="skip" type="button" onClick={skip}>
        Skip
      </button>
    </div>
  );
}
