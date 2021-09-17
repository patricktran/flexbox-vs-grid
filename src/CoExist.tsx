import "./CoExist.css";

interface Article {
  href: string;
  backgroundImage: string;
  title: string;
  summary?: string;
  author: string;
}

const Articles: Article[] = [
  {
    href: "https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg",
    title: "International Artist Feature: Malaysia",
    author: "Mary Winkler",
  },
  {
    href: "https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png",
    title: "How to Conduct Remote Usability Testing",
    author: "Harry Brignull",
  },
  {
    href: "https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg",
    title: "Created by You, July Edition",
    summary:
      "Welcome to our monthly feature of fantastic tutorial results created by you, the Envato Tuts+ community!",
    author: "Melody Nieves",
  },
  {
    href: "https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png",
    title: 'How to Code a Scrolling "Alien Lander" Website',
    summary:
      "We'll be putting things together so that as you scroll down from the top of the page you’ll see an “Alien Lander” making its way to touch down.",
    author: "Kezz Bracey",
  },
  {
    href: "https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg",
    title: "How to Create a “Stranger Things” Text Effect in Adobe Photoshop",
    author: "Rose",
  },
  {
    href: "https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg",
    title: "5 Inspirational Business Portraits and How to Make Your Own",
    author: "Marie Gardiner",
  },
  {
    href: "https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281",
    backgroundImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png",
    title: "Notes From Behind the Firewall: The State of Web Design in China",
    author: "Kendra Schaefer",
  },
];

const CardItem = ({ article, index }: { article: Article; index: number }) => {
  return (
    <div className={`item-${index}`}>
      <a href={article.href} className="card">
        <div
          className="thumb"
          style={{ backgroundImage: `url(${article.backgroundImage})` }}
        ></div>
        <article>
          <h1>{article.title}</h1>
          {article.summary && <p>{article.summary}</p>}
          <span>{article.author}</span>
        </article>
      </a>
    </div>
  );
};

const CoExist = () => {
  return (
    <>
      <h4>
        Grid handles our main two-dimensional layout, then Flexbox handled the
        vertical distribution of elements within our cards.{" "}
      </h4>
      <div className="coexist-container">
        {Articles.map((article: Article, index: number) => (
          <CardItem key={index} article={article} index={index + 1} />
        ))}
      </div>
    </>
  );
};

//See: https://webdesign.tutsplus.com/tutorials/solving-problems-with-css-grid-and-flexbox-the-card-ui--cms-27468

export default CoExist;
