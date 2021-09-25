import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

// markup
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allRestApiApiSermons {
        nodes {
          number
          contents
        }
      }
    }
  `);

  console.log(data.allRestApiApiSermons);

  const allRestApiApiSermons = data.allRestApiApiSermons.nodes.map((node) => {
    const { number, contents } = node;
    return {
      number,
      contents,
    };
  });

  return (
    <Layout>
      <ul>
        {allRestApiApiSermons.map((sermon, index) => {
          return (
            <li data-testid="t" key={sermon.number} className="w-1/2 mx-auto">
              <h1 class="text-lg text-gold" data-testid="lesson">
                Lesson {sermon.number}
              </h1>
              <p class="text-brightgold text-baseline">{sermon.contents}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;
