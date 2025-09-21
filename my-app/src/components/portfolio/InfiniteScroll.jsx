import React from 'react';

export default function InfiniteScroll({
  width = '30rem',
  items = [],
  autoplaySpeed = 30,
}) {
  return (
    <>
      <style>
        {`
        .infinite-scroll-wrapper {
          width: 100%;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
          mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
        }

        .infinite-scroll-container {
          display: flex;
          width: fit-content;
        }

        .infinite-scroll-inner {
          display: flex;
          animation: scroll ${autoplaySpeed}s linear infinite;
        }
        
        .infinite-scroll-inner:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .infinite-scroll-item {
          flex-shrink: 0;
          width: ${width};
          padding: 1rem;
        }
        `}
      </style>

      <div className="infinite-scroll-wrapper">
        <div className="infinite-scroll-container">
          <div className="infinite-scroll-inner">
            {[...items, ...items].map((item, i) => (
              <div className="infinite-scroll-item" key={i}>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
