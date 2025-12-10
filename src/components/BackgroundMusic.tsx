'use client';

import { useEffect, useRef } from 'react';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { useMusic } from '@/context/MusicContext'; // Ajusta la ruta

const BackgroundMusic = () => {
  const { isPlaying, togglePlay } = useMusic();
  const playerRef = useRef<YouTubePlayer | null>(null);

  // ID del video de YouTube (ej. lofi hip hop)
  const VIDEO_ID = 'd7PbgldMVE8'; 
  const opts = {
    height: '0', // Oculto
    width: '0',  // Oculto
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1, // Loop infinito
      playlist: VIDEO_ID, // Necesario para que funcione el loop
    },
  };

  const onReady = (event: { target: YouTubePlayer }) => {
    playerRef.current = event.target;
    // Opcional: Ajustar volumen (0-100)
    event.target.setVolume(20); 
  };

  // Efecto para reaccionar al switch de la navbar
  useEffect(() => {
    if (!playerRef.current) return;

    if (isPlaying) {
      playerRef.current.playVideo();
    } else {
      playerRef.current.pauseVideo();
    }
  }, [isPlaying]);

  // Manejar cambios de estado del reproductor (por si termina el buffer, etc)
  const onStateChange = (event: { data: number }) => {
    // Si el video se pausa externamente o termina, sincronizamos el estado
    // 1 = Playing, 2 = Paused
    if (event.data === 2 && isPlaying) {
       // Lógica opcional si quieres forzar que siga sonando
    }
  };

  return (
    <div className="hidden">
      <YouTube 
        videoId={VIDEO_ID} 
        opts={opts} 
        onReady={onReady} 
        onStateChange={onStateChange}
      />
    </div>
  );
};

export default BackgroundMusic;