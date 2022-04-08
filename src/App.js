import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ReactPlayerLoader from '@brightcove/react-player-loader';
import "./styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="video-one" element={<VideoOne />} />
          <Route path="video-two" element={<VideoTwo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const Layout = () => (
  <>
    <nav>
      <ul>
        <li><Link to="/video-one">Video One</Link></li>
        <li><Link to="/video-two">Video Two</Link></li>
      </ul>
    </nav>
    <Outlet />
  </>
);

const VideoOne = () => (
  <div>
    <ReactPlayerLoader
      accountId="5245389806001"
      playerId="hbdhSmm0p"
      videoId="6283211976001"
    />
  </div>
);

const VideoTwo = () => (
  <div>
    <ReactPlayerLoader
      accountId="5245389806001"
      playerId="hbdhSmm0p"
      videoId="6280421022001"
    />
  </div>
);

export default App;