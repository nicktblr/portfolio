
// Best practice is to use an additional vue component instead of raw html

var menuOptions ={
    menu_about: {text: 'about me.', selected: true},
    menu_education: {text:'education.', selected: false},
    menu_experience: {text: 'experience.', selected: false},
    menu_contact: {text: 'contact me.', selected: false}
};

var container = new Vue({
    el: '.container',
    data: {
        pages: {
            about: {header: 'nick tabler.', body: abouttext},
            education: {header: 'education.', body: edutext},
            experience: {header: 'experience.', body: exptext},
            contact: {header: 'contact me.', body: context}
        }
    }
});

var menu = new Vue({
    el: '#menu',
    data: {
        options: menuOptions
    }
});
