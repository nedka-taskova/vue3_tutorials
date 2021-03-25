import { createWebHistory, createRouter } from "vue-router";
import Home from "./pages/Home";
import DcHeros from "./pages/DcHeros";
import Calendar from "./pages/Calendar";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import Modal from "./pages/ReusableModal";
import Chat from "./pages/Chat"

const routes = [
    { path: '/' , component: Home },
    { path: '/dc-heros' , component: DcHeros },
    { path: '/calendar' , component: Calendar },
    { path: '/markdown' , component: Markdown },
    { path: '/slider' , component: Slider },
    { path: '/calculator' , component: Calculator },
    { path: '/modal-reusable' , component: Modal },
    { path: '/chat' , component: Chat },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router