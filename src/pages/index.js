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
      // types: types.map((type) => type.type.name),
    };
  });

  return (
    <Layout>
      <ul>
        {allRestApiApiSermons.map((sermon, index) => {
          return (
            <li key={sermon.number}>
              <h1 class="text-lg text-gold">Lesson {sermon.number}</h1>
              <p class="text-brightgold">{sermon.contents}</p>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default IndexPage;
