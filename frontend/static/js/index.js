const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: '/', vivew: () => console.log('Viewing Dashboard') },
        { path: '/posts', vivew: () => console.log('Viewing Posts') },
        { path: '/settings', vivew: () => console.log('Viewing Settings') },
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route, 
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);

    if (!match) { // Go to default page or error page.
        match = {
            route: routes[0],
            isMatch: true
        };
    }
    console.log(match.route.vivew());
};

document.addEventListener('DOMContentLoaded', () =>{
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});