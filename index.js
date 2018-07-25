
// Best practice is to use an additional vue component instead of raw html

var abouttext = '<p>engineering student</p>' +
                '<p>computer programmer</p>' +
                '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis nec mauris et sagittis. Nulla dictum pellentesque enim in tristique. Proin sed odio a arcu commodo mattis ac vitae sapien. Ut dui lectus, tempus ac augue pulvinar, sagittis dapibus diam. Nunc lobortis sapien id dolor ornare, a aliquam turpis porta. Quisque eu vulputate mauris. Cras vel purus ut erat porttitor dignissim. Aliquam urna nibh, rutrum vitae mattis et, tempor dignissim felis. Sed sed ligula nisl. Aliquam finibus suscipit ligula sed feugiat.</p>'


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
