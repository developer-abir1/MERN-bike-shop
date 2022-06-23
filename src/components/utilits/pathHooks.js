
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const PathHooks = () => {
    const [pageTitle, setPageTitle] = useState(null);

    const titleMap = [
        { path: '/admin', title: 'Admin' },
        { path: '/admin/add-products', title: 'Add Product' },
        { path: '/admin/mange-products', title: 'Mange Product' },
        { path: '/admin/make-admin', title: 'Make Admin' },
        { path: '/dashboard', title: 'Dashboard' },
        { path: '/dashboard/payment', title: 'Payment' },
        { path: '/dashboard/castomerReview', title: 'Review' },

    ]
    let curLoc = useLocation();
    useEffect(() => {
        const curTitle = titleMap.find(item => item.path === curLoc.pathname)
        if (curTitle && curTitle.title)
        {
            setPageTitle(curTitle.title)
            document.title = curTitle.title
        }

    }, [curLoc])

    return [pageTitle]
};

export default PathHooks;