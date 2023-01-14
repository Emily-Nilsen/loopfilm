import { motion } from 'framer-motion'

const container = {
  hidden: {
    scale: 3,
    x: '45vw',
    y: '25vh',
  },
  visible: {
    scale: 1,
    x: 0,
    y: 0,
    transition: {
      delay: 4,
      type: 'spring',
      duration: 1.0,
      bounce: 0,
    },
  },
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.01 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 3.0, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export function Logomark(props) {
  return (
    <div>
      <motion.svg
        id="Layer_2"
        data-name="Layer 2"
        aria-hidden="true"
        {...props}
        viewBox="0 0 352 196.61"
        initial="hidden"
        animate="visible"
      >
        <g
          id="loop"
          fill="none"
          strokeWidth="2"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <g>
            <g>
              <motion.path
                variants={draw}
                custom={5.1}
                strokeWidth="1"
                id="_S_"
                data-name="&amp;lt;S&amp;gt;"
                className="cls-2"
                d="m297.6,106.16c-.54-.68-.93-1.24-1.68-1.79-.28-.2-.73-.32-1.07-.26-.7.14-1.21.59-1.44,1.25-.16.46-.01.97.33,1.32.4.42.89.75,1.01,1.39.15.75-.3,1.33-.91,1.77-.27.2-.62.27-.95.22-.95-.16-1.55-1.08-2.11-1.83"
              />
              <g id="_A_" data-name="&amp;lt;A&amp;gt;">
                <motion.path
                  variants={draw}
                  custom={4.5}
                  strokeWidth="1"
                  className="cls-2"
                  d="m285.72,103.71c2.19-.99,4.37-1.98,6.56-2.97.14-.08.31-.08.41,0,.14.11.07.33-.04.58-1.03,2.27-1.98,4.18-2.97,6.27"
                />
                <motion.line
                  variants={draw}
                  custom={4.8}
                  className="cls-2"
                  x1="287.94"
                  y1="102.92"
                  x2="290.34"
                  y2="105.44"
                />
              </g>
              <motion.path
                variants={draw}
                custom={4.2}
                id="_M_"
                data-name="&amp;lt;M&amp;gt;"
                className="cls-1"
                d="m268.8,96.96c3.03-2.9,6.05-5.8,9.08-8.7.6-.62,1.17-.62,1.61-.31.7.5.35,1.24,0,1.82-1.47,2.59-2.85,5.24-4.42,7.78-.34.56-.39.68-.76,1.38-.26.49-.7,1.28-.27,1.88.38.53,1.09.56,1.84.14,3.06-1.66,6.12-3.31,9.18-4.97,1.03-.66,1.4-.47,1.71-.27.55.36.55,1.28,0,1.79-2.98,2.88-5.97,5.76-8.95,8.64"
              />
              <motion.path
                variants={draw}
                custom={3.9}
                id="_L_"
                data-name="&amp;lt;L&amp;gt;"
                className="cls-1"
                d="m272.64,79.53c-2.55,2.47-5.1,4.94-7.65,7.4-.25.18-.81.61-1.09,1.38-.07.18-.23.63-.17,1.2.08.66.42,1.12.64,1.4,1.15,1.47,2.99,3.27,3.28,3.55"
              />
              <motion.line
                variants={draw}
                custom={3.6}
                id="_I_"
                data-name="&amp;lt;I&amp;gt;"
                className="cls-1"
                x1="269.59"
                y1="76.42"
                x2="258.9"
                y2="86.81"
              />
              <g id="_F_" data-name="&amp;lt;F&amp;gt;">
                <motion.path
                  variants={draw}
                  custom={3}
                  className="cls-1"
                  d="m266.66,74.71l-4.54-4.54c-.26-.26-.75-.6-1.4-.66-.7-.07-1.28.23-1.57.41-.03.03-3.23,3.13-3.26,3.16-.08.08-5.07,4.92-5.16,5"
                />
                <motion.line
                  variants={draw}
                  custom={3.3}
                  className="cls-1"
                  x1="261.95"
                  y1="79.16"
                  x2="255.89"
                  y2="73.08"
                />
              </g>
            </g>
            <motion.path
              variants={draw}
              custom={1}
              strokeWidth="7"
              className="cls-3"
              d="m2.48,99.29c27.17,27.28,54.18,54.23,81.35,81.51,1.62,1.9,4.3,4.62,8.25,6.93,2.85,1.67,9.02,5.17,17.16,4.29,5.31-.57,9.2-2.82,12.87-5.28,6.12-4.1,14.6-13.28,28.05-25.41,15.78-14.23,10.73-38.39-3.14-48.76-11.1-8.31-28.33-7.78-39.35,2.72-12.64,12.04-11.72,32.19-.83,43.81,9.24,9.85,23.79,10.79,34.07,7.18,5.88-2.06,9.96-5.48,12.38-7.92l50.24-48.76c4.13-3.55,7.43-10.31,8.47-16.74.07-.44.14-.88.2-1.33.43-3.39,1.7-17.57-9.24-27.8-8.01-7.49-19.22-9.74-28.73-7.22-7.49,1.99-12.01,6.46-12.96,7.36-11.94,11.25-12.83,29.25-3.52,41.2,9.73,12.48,25.54,13.68,35.39,9.82,11.8-4.62,12.71-7.84,17.49-12.13,17.9-16.05,25.44-25.51,47.67-47.04,2.93-2.84,5.39-6.15,7.11-9.85,1.57-3.37,2.29-6.41,2.23-11.92-.03-2.55-.45-11.51-7.15-19.58-5.6-6.75-12.41-9.05-13.86-9.51-4.48-1.43-9.38-1.76-14.52-.83-14.84,2.7-24.02,14.48-25.41,25.63-1.4,11.22,3.82,21.43,7.81,25.58,43.89,45.54,94.71,97.52,134.98,138.94"
            />
          </g>
        </g>
      </motion.svg>
    </div>
  )
}
