import heroImage from '../../public/images/hero.png';
import Hero from './_components/hero';

export default function Page() {
  return (
    <Hero
      title="For System Development"
      description={`This website is an information site on system development and programming related to IT.
        I provide information on software that handles data, such as DB and BI tools, as well as coding-related topics such as C#, VBA, Python, Javascript, and Typescript.`}
      heroImage={heroImage}
    />
  );
}
