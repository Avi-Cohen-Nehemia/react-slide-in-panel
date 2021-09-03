import React from 'react';
import PropTypes from 'prop-types';
import './SlideInPanel.css';

const SlideInPanel = ({
    from,
    size,
    isOpen,
    children,
    panelTransition,
    panelColor,
    backdropTransition,
    handleBackdrop,
    backdropColor,
}) => {
    const isVertical = from === 'top' || from === 'bottom';
    const isHorizontal = from === 'right' || from === 'left';

    const determineWidth = () => {
        if (isVertical) {
            return '100%';
        }

        if (isOpen && isHorizontal) {
            return `${size}%`;
        }

        return '0%';
    };

    const determineHeight = () => {
        if (isHorizontal) {
            return '100%';
        }

        if (isOpen && isVertical) {
            return `${size}%`;
        }

        return '0%';
    };

    return (
        <>
            <div
                className="backdrop"
                onClick={() => handleBackdrop()}
                style={{
                    pointerEvents: isOpen ? 'auto' : 'none',
                    backgroundColor: isOpen ? backdropColor : 'transparent',
                    transition: `all ${backdropTransition}ms`,
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
                        transition: `all ${panelTransition}ms`,
                        backgroundColor: panelColor,
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    )
};

SlideInPanel.propTypes = {
    isOpen: PropTypes.bool,
    size: PropTypes.number,
    from: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    children: PropTypes.node,
    panelTransition: PropTypes.number,
    panelColor: PropTypes.string,
    handleBackdrop: PropTypes.func,
    backdropTransition: PropTypes.number,
    backgroundColor: PropTypes.string,
};

SlideInPanel.defaultProps = {
    isOpen: false,
    size: 40,
    from: 'left',
    panelTransition: 1000,
    panelColor: '#000000',
    backdropTransition: 1000,
    backdropColor: 'rgba(51, 51, 51, 0.7)',
};

export default SlideInPanel;
