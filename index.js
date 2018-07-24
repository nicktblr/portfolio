var bodytext = [
    {text: 'web developer'},
    {text: '10x coder'},
    {text: 'graduating in may 2019'}
];

var content = new Vue({
    el: '#content-container',
    data: {
        header: 'nick tabler',
        body: bodytext,
        show: true
    }
});