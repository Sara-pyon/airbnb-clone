import { useLocation } from 'react-router-dom';

function activePage(link: string){
    const location = useLocation();
    return location.pathname === link;
}
function activePageStyle(onPage: Boolean){
    return onPage ? "text-base bg-primary text-white px-4 py-1 rounded-full border-none" :
                    "text-base";
}

exports.activePage = activePage;
exports.activePageStyle = activePageStyle;