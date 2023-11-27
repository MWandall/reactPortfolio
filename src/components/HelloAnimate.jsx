import { TypeAnimation } from 'react-type-animation';

export default function Hello () {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        '<helloWorld>',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        '<holaMundo>',
        2000,
        '<bonjourLeMonde>',
        2000,
        `<kon'nichiwaSekai>`,
        2000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};