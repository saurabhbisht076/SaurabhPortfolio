declare module 'react-animate-on-scroll' {
    import { ReactNode } from 'react';

    interface ScrollAnimationProps {
        children?: ReactNode;
        animateIn: string;
        animateOut?: string;
        offset?: number;
        delay?: number;
        duration?: number;
        animateOnce?: boolean;
        style?: React.CSSProperties;
        scrollableParentSelector?: string;
        afterAnimatedIn?: () => void;
        afterAnimatedOut?: () => void;
        initiallyVisible?: boolean;
        className?: string;
    }

    const ScrollAnimation: React.FC<ScrollAnimationProps>;
    export default ScrollAnimation;
}