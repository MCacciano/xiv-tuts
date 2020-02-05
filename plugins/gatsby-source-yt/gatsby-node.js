const axios = require("axios")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processPlaylist = playlist => {
    const nodeId = createNodeId(`yt-playlist-${playlist.snippet.title}`)
    const nodeContent = JSON.stringify(playlist)
    const nodeData = Object.assign({}, playlist, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `YTVideo`,
        content: nodeContent,
        contentDigest: createContentDigest(playlist),
      },
    })
    return nodeData
  }

  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists`,
      {
        params: { part: "snippet,contentDetails", ...configOptions },
      }
    )
    console.log("data", data)

    data.items.forEach(item => createNode(processPlaylist(item)))
  } catch (err) {
    console.log("ERROR", err)
  }
}
