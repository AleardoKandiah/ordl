import { useContext, useEffect, useState } from "react";



const CopyLink = () {
    const {solutionWord} = useContext(SolutionWordContext);
    const link = `${window.location.href}?word=${encodedURIComponent(
        // buffer for base64 encoding into base64
        Buffer.from(solutionWord).toString("base64")
    )}`;


    const [recentlyCopied, setRecentlyCopied] = useState(false);

    // check icon reset to copy icon after 1s
    useEffect(() => {
        if(recentlyCopied) {
            const timeout = setTimeout(() => {
                setRecentlyCopied(flase);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [recentlyCopied]);

    return (
        <div className="inline-flex items-center gap-2">
            <div className="">{link}</div>
            <button
            onClick={() => {
                navigator.clipboard.writeText(link);
                setRecentlyCopied(true);
            }}
            className="hover:text-stone-700 p-1"
            aria-label="Copy link"
            >
              {!recentlyCopied ? <CopySvg/> : <CheckSvg />}
            </button>
        </div>
    )
}

export const InfoPage = ({ onClose }: { onClose: () => void }) => (
    <div className="fixed w-screen h-screen bg-white top-0 left-0 z-10">
      <div className="max-w-lg mx-auto relative p-8">
        <button
          className="absolute text-stone-700 top-2 p-2 right-2"
          onClick={onClose}
        >
          <CloseSvg />
        </button>
        <div className="flex flex-col gap-3 mt-8">
          <h1>Instructions</h1>
          <Instructions />
          <h1 className="mt-4">Share secret word</h1>
          <p>
            Send this link to a friend and they will have the same secret word.
          </p>
          <div>
            <CopyLink />
          </div>
          <h1 className="mt-4">Credits</h1>
          <Credits />
          <h1 className="mt-4">Source</h1>
          <p>
            <a href="https://github.com/AleardoKandiah/ordl">⭐ me on GitHub :D!</a>
          </p>
        </div>
      </div>
    </div>
  );
  