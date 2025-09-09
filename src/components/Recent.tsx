export default function Recent() {
  return (
    <div>
      <h1>Recent Activities of mine</h1>
      <p>My plan for the September</p>
      <h2>Reading List</h2>
      <ul>
        <li>Practical Vim: A book about phelosophy of vim</li>
        <li>Just for fun: The journey of Linus Torvalds </li>
        <li> Rust Programming Language: the official guide to Rust language</li>
      </ul>

      <h2>Project Plans</h2>
      <ul>
        <li>
          {" "}
          Reconstruct LeetTrack. The preivous version was made with AI chatbot
          that i found the code was complete mess. i decide to use Next.js as
          fullstack to reconstruct the old React + fastAPI approach
        </li>
        <li>
          {" "}
          Make a discord Music bot for my friends to share music when playing
          video games
        </li>
        <li>
          {" "}
          follow the "Build your own x" project on github to build a simple
          neural network with vanilla Python (sounds super intersting)
        </li>
      </ul>
    </div>
  );
}
