const axios = require("axios")
const uuid = require("uuid/v4")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  delete configOptions.plugins

  const processPlaylist = playlist => {
    const nodeId = createNodeId(`yt-playlist-${uuid()}`)
    const nodeContent = JSON.stringify(playlist)
    const nodeData = Object.assign({}, playlist, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `YTPlaylist`,
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
        params: { part: "id,snippet", ...configOptions },
      }
    )

    const mizzteqTuts = data.items.filter(item =>
      item.snippet.title.includes("XIV")
    )

    return new Promise((resolve, reject) => {
      mizzteqTuts.forEach(async item => {
        // console.log(item.snippet.title)
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              playlistId: item.id,
              maxResults: "50",
              part: "id,status,snippet,contentDetails",
              ...configOptions,
            },
          }
        )
        // the title for the playlist doesn't come in the response for the playlist items so
        // construct a new object with the title from the previous playlist response item
        const newPlaylist = {
          ...res.data,
          title: item.snippet.title,
        }

        resolve(createNode(processPlaylist(newPlaylist)))
      })
    })
  } catch (err) {
    console.log("ERROR", err)
  }
}
