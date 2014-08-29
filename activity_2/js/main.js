$(function(){
    var eventTime = 1405393200000;
    var $day = $('#day');
    var now = new Date().getTime();
    var diff = parseInt((eventTime - now) / (1000 * 60 * 60 * 24)) + 1;
    $day.text(diff);
});