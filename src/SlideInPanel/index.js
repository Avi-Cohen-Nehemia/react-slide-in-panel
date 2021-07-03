import React from 'react';
import './SlideInPanel.css';

const SlideInPanel = ({ from, size, isOpen }) => {

    const isVertical = from === 'top' || from === 'bottom';
    const isHorizontal = from === 'right' || from === 'left';

    const determineWidth = () => {
        if (isVertical) {
            return '100%';
        }

        if (isOpen && isHorizontal) {
            return `${size}%`;
        }

        return '0';
    };

    const determineHeight = () => {
        if (isHorizontal) {
            return '100%';
        }

        if (isOpen && isVertical) {
            return `${size}%`;
        }

        return '0';
    };

    

    return (
        <div
            className="backdrop"
            style={{
                width: isOpen ? `100vw` : 0,
            }}
        >
            <div
                className="panel"
                style={{
                    width: determineWidth(),
                    height: determineHeight(),
                    top: from === 'top' ? 0 : '',
                    right: from === 'right' ? 0 : '',
                    bottom: from === 'bottom' ? 0 : '',
                    left: from === 'left' ? 0 : '',
                }}
            >

            </div>
        </div>
    )
};

SlideInPanel.defaultProps = {
    isOpen: false,
    size: 60,
    from: 'left',
};

export default SlideInPanel;
