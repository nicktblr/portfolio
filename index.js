var abouttext = [
    {text: 'web developer'},
    {text: '10x coder'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend sit amet est nec tincidunt. Proin mollis nunc justo, nec feugiat risus ornare sit amet. Etiam nulla lacus, porta ut dapibus id, facilisis ac mi. Nam facilisis convallis tincidunt. Nunc pretium ipsum neque, non aliquam orci sodales et. Proin vulputate porta diam nec interdum. Mauris vel imperdiet libero. Etiam sodales purus tempor varius hendrerit. Vestibulum ornare dui sed ante pulvinar placerat.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend sit amet est nec tincidunt. Proin mollis nunc justo, nec feugiat risus ornare sit amet. Etiam nulla lacus, porta ut dapibus id, facilisis ac mi. Nam facilisis convallis tincidunt. Nunc pretium ipsum neque, non aliquam orci sodales et. Proin vulputate porta diam nec interdum. Mauris vel imperdiet libero. Etiam sodales purus tempor varius hendrerit. Vestibulum ornare dui sed ante pulvinar placerat.'}
];

var edutext = [
    {text: 'uofa'},
    {text: 'electrical engineering'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend sit amet est nec tincidunt. Proin mollis nunc justo, nec feugiat risus ornare sit amet. Etiam nulla lacus, porta ut dapibus id, facilisis ac mi. Nam facilisis convallis tincidunt. Nunc pretium ipsum neque, non aliquam orci sodales et. Proin vulputate porta diam nec interdum. Mauris vel imperdiet libero. Etiam sodales purus tempor varius hendrerit. Vestibulum ornare dui sed ante pulvinar placerat.'},
    {text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend sit amet est nec tincidunt. Proin mollis nunc justo, nec feugiat risus ornare sit amet. Etiam nulla lacus, porta ut dapibus id, facilisis ac mi. Nam facilisis convallis tincidunt. Nunc pretium ipsum neque, non aliquam orci sodales et. Proin vulputate porta diam nec interdum. Mauris vel imperdiet libero. Etiam sodales purus tempor varius hendrerit. Vestibulum ornare dui sed ante pulvinar placerat.'}
];

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
            experience: {header: 'experience', body: edutext},
            contact: {header: 'contact me', body: edutext}
        }
    }
});

var menu = new Vue({
    el: '#menu',
    data: {
        options: menuOptions
    }
});
