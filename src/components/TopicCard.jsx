import { Link } from "react-router-dom";


export function TopicCard(props) {

    const { topic } = props;

    return (
        <>
          <section className="topic-card">
            <h2>{topic.slug}</h2>
            <h4>{topic.description}</h4>
            <Link to={`/articles?topic=${topic.slug}`}>
              <button className="view-articles-by-topic">View articles</button>
            </Link>
          </section>
        </>
      );


}