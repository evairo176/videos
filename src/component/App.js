import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (term) => {
    try {
      const respone = await youtube.get("/search", {
        params: {
          q: term,
          maxResults: 1000,
        },
      });

      this.setState({
        videos: respone.data.items,
      });
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  render() {
    console.log(this.state.videos, this.state.selectedVideo);
    return (
      <div className="container mt-2">
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          videos={this.state.videos}
        />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
