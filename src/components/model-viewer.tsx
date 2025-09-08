'use client';

import type { ModelViewerElement } from '@google/model-viewer';
import { useEffect, useRef } from 'react';

// We need to extend the JSX namespace to include the custom element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': Partial<ModelViewerElement> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        }
    }
}

interface ModelViewerProps {
  src: string;
  alt: string;
}

export default function ModelViewer({ src, alt }: ModelViewerProps) {
  const modelViewerRef = useRef<ModelViewerElement>(null);

  useEffect(() => {
    // Dynamically import the model-viewer library only on the client-side
    import('@google/model-viewer');
  }, []);

  return (
    <div className="w-full aspect-square relative rounded-lg border bg-card overflow-hidden">
      <model-viewer
        ref={modelViewerRef}
        src={src}
        alt={alt}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        environment-image="neutral"
        className="w-full h-full"
      ></model-viewer>
    </div>
  );
}
