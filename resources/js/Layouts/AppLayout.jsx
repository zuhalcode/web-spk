import { Head } from "@inertiajs/inertia-react";
import Sidebar from "./Sidebar";
import Content from "./Content";

export default function AppLayout({ children, title, titleContent = "" }) {
    return (
        <div className="container w-full min-h-screen overflow-hidden flex bg-white">
            <Head title={title || "SPK"} />
            <Sidebar />
            <Content children={children} titleContent={titleContent} />
        </div>
    );
}
