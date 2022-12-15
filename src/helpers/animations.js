import { css, keyframes } from 'styled-components';

const appearance = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;

const leftSlide = keyframes`
0%{
    opacity: 0;
    transform: translateX(100%);
}
100%{
    opacity: 1;
    transform: translateX(0%);
}`;

const rightSlide = keyframes`
    0%{
        opacity: 0;
        transform: translateX(0%);
    }
    100%{
        opacity: 1;
        transform: translateX(100%);
    }`;

const downSlide = keyframes`
0%{
    opacity: 0;
    transform: translateY(100%);
}
100%{
    opacity: 1;
    transform: translateY(0%);
}`;

const topSlide = keyframes`
        0%{
            opacity: 0;
            transform: translateY(0%);
        }
        100%{
            opacity: 1;
            transform: translateY(100%);
        }
    `;

export const animations = {
  appearanceAnimation: css`
    animation: ${appearance} 3s;
  `,
  leftSlideAnimation: css`
    animation: ${leftSlide} 3s;
  `,
  rightSlideAnimation: css`
    animation: ${rightSlide} 3s;
  `,
  downSlideAnimation: css`
    animation: ${downSlide} 3s;
  `,
  topSlideAnimation: css`
    animation: ${topSlide} 3s;
  `,
};
