
import sample from "./video.mp4";
import "./landing.css";


export function Demo() {
  return (
    <div className="video-container">
        <video
            loop
            autoPlay
            muted
            className="video"
            src={sample}
            type="video/mp4"
        />
      <div className="text">
        <p>
          The Best Barbershop To Serve You. We Are Open Everyday
          From 10:00 until 19:00
        </p>
      </div>
    </div>
  );
}
