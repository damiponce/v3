import { getPositioning } from "../_sections/positioning";

type Props = { lang: string };

const About = ({ lang }: Props) => (
  <div className="mb-4 space-y-6">
    {getPositioning(lang).about.map((paragraph, i) => (
      <p key={i}>{paragraph}</p>
    ))}
  </div>
);

export default About;
