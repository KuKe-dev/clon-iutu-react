import './Thumb.css';
import imagenThumb from '../Assets/img/thumb-img/1.png';
import videoThumb from '../Assets/img/thumb-video/1.webp';
function Thumb (){
return(
<>
    <div className="Thumb">
        <a href="https://www.youtube.com/watch?v=67nMSEkEcio" target='blank_'>
                <img src={imagenThumb} alt="a" className="Thumb-img"/>
                <img src={videoThumb} alt="" class="video-thumb"/>
                <strong>aaaaa</strong>
                <p>10 visualizaciones • hace 10 días</p>
        </a>
    </div>
</>
);
}

export default Thumb;