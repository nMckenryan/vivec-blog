const axios = require('axios');
const crypto = require('crypto');

exports.sourceNodes = async ({
  actions
}) => {
  const { createNode } = actions;

  const fetchRawData = () => axios.get(`https://scrsnyygmf.execute-api.ap-southeast-2.amazonaws.com/api/sermons`);

  // await for results
  const res = await fetchRawData();
  console.log(res.data.results)

  // map into  results and create nodes
  res.data.map((sermon, i) => {
    console.log(sermon);

    const sermonNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Sermon`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      number: sermon.number,
      contents: sermon.contents,
    }

    
    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(sermonNode))
      .digest(`hex`);
    // add it to userNode
    sermonNode.internal.contentDigest = contentDigest;

    // Create node with the gatsby createNode() API
    createNode(sermonNode);
  });

  return;
}