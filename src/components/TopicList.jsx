import { useState, useEffect } from "react"
import { getTopics } from "../../api";
import { TopicCard } from "./TopicCard";
import Loading from "./Loading";

export function TopicList () {

const [isLoading, setIsLoading] = useState(false);

const [currentTopics, setCurrentTopics] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        getTopics().then((topics) => {
            setCurrentTopics(topics)
            setIsLoading(false)
        });
      }, []);

      if (isLoading) {
        return <Loading></Loading>;
      } else {
      return (
        <>
          <h2>Topics</h2>
          <section className="topic-list">
            {currentTopics.map((topic) => {
              return <TopicCard key={topic.slug} topic={topic}></TopicCard>
            })}
          </section>
        </>
      );
        }


}
