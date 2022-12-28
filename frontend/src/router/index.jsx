import React from "react";
import { Route, Routes } from "react-router-dom";
import Clubs from "../pages/clubs/Clubs";
import Club from "../pages/clubs/Club";
import Home from "../pages/Home";
import Players from "../pages/players/Players";
import Player from "../pages/players/Player";
import StatPlayer from "../pages/players/statPlayer";
import Sponsors from "../pages/sponsors/Sponsors";
import Sponsor from "../pages/sponsors/Sponsor";
import NotFound from "../pages/NotFound";
import DefaultLayout from "../layouts/DefaultLayout";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} exact />
        <Route path="*" element={<NotFound />} />
        <Route path="/players" element={<Players />} />
        <Route path="players/:id" element={<Player />} />
        <Route path="players/stat/:id" element={<StatPlayer />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:slug" element={<Club />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/sponsors/:id" element={<Sponsor />} />
      </Route>
    </Routes>
  );
};

export default MainRouter;
