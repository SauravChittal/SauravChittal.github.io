import { useEffect, useState } from "react";
import '../../css_files/Helper/Ripple.css';

export default function Ripple ({content, onClick}: {content: string, onClick: (e: React.MouseEvent<HTMLElement>) => void}) {
    const [coords, setCoords] = useState({x: -1, y: -1});
    const [ripple, setRipple] = useState(false);
    const [click, setClick] = useState(false);

    useEffect(() => {
      if (coords.x !== -1 && coords.y !== -1) {
        setRipple(true);
        setTimeout(() => setRipple(false), 300);
      } else {
        setRipple(false);
      }
    }, [coords]);

    useEffect(() => {
      if (!ripple) {
        setCoords({x: -1, y: -1});
      }
    }, [ripple]);

    useEffect(() => {
        if (click) {
            alert("Clicked");
            setClick(false);
        }
    }, [click]);

    const onMouse = () => {
        setClick(true);
        setTimeout(() => setClick(false), 300);
    }

    return (
      <button className='button' onClick={(e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget?.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      onMouseDown={onMouse}>
        {ripple ? (
          <span className='ripple' style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
          }} />
        ): ''}
        <span className="content">{content}</span>
      </button>
    )
  }