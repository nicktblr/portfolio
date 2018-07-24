var abouttext = [
    {text: 'web developer'},
    {text: '10x coder'},
    {text: 'graduating in may 2019'}
];

var edutext = [
    {text: 'uofa'},
    {text: 'electrical engineering'},
    {text: 'graduating in may 2019'}
]

var menuOptions ={
    menu_about: {text: 'about me.', selected: true},
    menu_education: {text:'education.', selected: false},
    menu_experience: {text: 'experience.', selected: false},
    menu_contact: {text: 'contact me.', selected: false}
};

var about = new Vue({
    el: '#about',
    data: {
        header: 'nick tabler',
        body: abouttext
    }
});

var education = new Vue({
    el: '#education',
    data: {
        header: 'education',
        body: edutext
    }
})

var experience = new Vue({
    el: '#experience',
    data: {
        header: 'experience',
        body: edutext
    }
})

var contact = new Vue({
    el: '#contact',
    data: {
        header: 'contact me',
        body: edutext
    }
})

var menu = new Vue({
    el: '#menu',
    data: {
        options: menuOptions
    }
});
