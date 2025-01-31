// Router.js
const Router = (() => {
    const routes = {};
    const init = () => {
        window.addEventListener('popstate', handleLocation);
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                navigateTo(e.target.href);
            }
        });
        handleLocation();
    };

    const addRoute = (path, action) => {
        routes[path] = action;
    };
    const navigateTo = (url) => {
        history.pushState(null, null, url);
        handleLocation();
    };
    const handleLocation = () => {
        const path = window.location.pathname;
        const route = routes[path] || routes['/404'];
        if (route) route();
    };
    return {init, addRoute, navigateTo};
})();
export default Router;