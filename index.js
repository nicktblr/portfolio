var bodytext = [
    {text: 'web developer'},
    {text: '10x coder'},
    {text: 'graduating in may 2019'}
];

var menuOptions ={
    menu_about: {text: 'about me.', selected: true},
    menu_edu: {text:'education.', selected: false},
    menu_exp: {text: 'experience.', selected: false},
    menu_cont: {text: 'contact me.', selected: false}
};

var content = new Vue({
    el: '#content-container',
    data: {
        header: 'nick tabler',
        body: bodytext,
        show: true
    }
});

var menu = new Vue({
    el: '#menu',
    data: {
        options: menuOptions
    }
});
