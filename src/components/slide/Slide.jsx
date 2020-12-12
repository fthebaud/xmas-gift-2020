import './Slide.css';


const isPrevious = (id, currentId) => id === currentId - 1;

const isNext = (id, currentId) => id === currentId + 1;

const isCurrent = (id, currentId) => id === currentId;

const isClose = (id, currentId) => isPrevious(id, currentId) || isCurrent(id, currentId) || isNext(id, currentId);

const getTranslation = (id, currentId) => {
    if (isPrevious(id, currentId)) {
        return '-100vw';
    }
    if (isNext(id, currentId)) {
        return '100vw'
    }
    return 0;
}

const Slide = ({ slideId, currentSlideId, children, css }) => {
    if (isClose(slideId, currentSlideId)) {
        return (
            <div className={`slide ${css ? css : ''}`}
                style={{
                    position: "absolute",
                    transform: `translate(${getTranslation(slideId, currentSlideId)})`,
                }}>
                    {children}
            </div>
        )
    }
    return null;
};
    
export default Slide;