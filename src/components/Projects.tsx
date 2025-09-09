import LinkWithArrow from "./LinkWithArrow";

const links = [
  { content: "Meju", url: "git@github.com:EdwardJiazhenTan/meju.git" },
  { content: "GitHub", url: "https://github.com" },
  { content: "Stack Overflow", url: "https://stackoverflow.com" },
];

export default function Projects() {
  return (
    <div>
      <h1>Personal projects</h1>
      {links.map((link, index) => (
        <LinkWithArrow key={index} content={link.content} url={link.url} />
      ))}
    </div>
  );
}
