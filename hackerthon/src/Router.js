import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import VotePage from "./pages/votePage";
import SearchPage from "./pages/searchPage";
import MyPage from "./pages/myPage";
import RequestPage from "./pages/requestPage";
import AddPage from "./pages/addPage";
import AddCompletedPage from "./pages/addCompletedPage";
import BuyListPage from "./pages/buylistPage";
import BuyPendingPage from "./pages/buypendingPage";
import PlayPage from "./pages/playPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/vote" element={<VotePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/request" element={<RequestPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/addcomplete" element={<AddCompletedPage />} />
        <Route path="/buypending" element={<BuyPendingPage />} />
        <Route path="/play" element={<PlayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
