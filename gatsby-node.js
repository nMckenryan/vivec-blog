// const fetch = require("node-fetch");

// const NODE_TYPE = "Pokemon";

// exports.sourceNodes = async ({
//   actions,
//   createContentDigest,
//   createNodeId,
// }) => {
//   const { createNode } = actions;

//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//   // "https://pa6bmhahhc.execute-api.ap-southeast-2.amazonaws.com/api/sermons"

//   // console.log(response); OK
//   const json = await response.json();

//   const { results = [] } = json;

//   const pokemon = await Promise.all(
//     results.map(async (result) => {
//       const { url } = result;
//       const pokeResponse = await fetch(url);
//       return await pokeResponse.json();
//     })
//   );
//   console.log("JSON" + pokemon + " TEST");
//   pokemon.forEach((node, index) => {
//     console.log(node);
//     createNode({
//       ...node,
//       id: createNodeId(`${NODE_TYPE}-${node.number}`),
//       parent: null,
//       children: [],
//       internal: {
//         type: NODE_TYPE,
//         content: JSON.stringify(node),
//         contentDigest: createContentDigest(node),
//       },
//     });
//   });
// };

const fetch = require("node-fetch");

const NODE_TYPE = "Pokemon";

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await response.json();
  const { results = [] } = json;

  const pokemon = await Promise.all(
    results.map(async (result) => {
      const { url } = result;
      const pokeResponse = await fetch(url);
      return await pokeResponse.json();
    })
  );

  pokemon.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    });
  });
};
