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
      contents,
      number,
    };
  });

  return (
    <Layout>
      {/* SERMON VIEW */}
      {allSermon.map((sermon, index) => {
        return (
          <div class="relative py-3 sm:max-w-5xl sm:mx-auto">
            <div
              class="relative bg-white shadow-lg sm:rounded-3xl sm:p-5 bg-clip-padding bg-opacity-60 border border-gray-200"
              styles="backdrop-filter: blur(20px);"
            >
              <div class="max-w-5xl mx-auto">
                <ul>
                  <li data-testid="t" key={sermon.number}>
                    <h1 class="text-lg text-gold" data-testid="lesson">
                      Lesson {sermon.number}
                    </h1>
                    <p class="text-brightgold text-sm">
                      {sermon.contents}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default IndexPage;
