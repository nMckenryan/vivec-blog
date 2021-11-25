import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allSermon {
      nodes {
        number
        contents
      }
    }
  }
  `);

  const allSermon = data.allSermon.nodes.map((node) => {
    const { contents, number } = node;
    return {
      contents, number
    };
  });

  return (
    <Layout>
      <ul>
        {/* SERMON VIEW */}
        {allSermon.map((sermon, index) => {
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
