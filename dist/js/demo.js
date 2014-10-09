/**!
 * jQuery Progress Timer SITE - v1.0.0 - 10/8/2014
 * http://www.thomasnorberg.com
 * Copyright (c) 2014 Thomas Norberg;
 * Licensed MIT
 */

var progress1 = $(".loading-progress-1").progressTimer({
    timeLimit: 10,
    onFinish: function () {
        alert('completed!');
    }
});
$.ajax({
    url: "http://localhost/"
}).error(function () {
    progress1.progressTimer('error', {
        errorText: 'ERROR!',
        onFinish: function () {
            alert('There was an error processing your information!');
        }
    });
}).done(function () {
    progress1.progressTimer('complete');
});


var progress2 = $(".loading-progress-2").progressTimer({
    timeLimit: 30
});
$.ajax({
    url: "http://www.github.com/"
}).error(function () {
    progress2.progressTimer('error', {
        errorText: 'Cannot connect to github',
        onFinish: function () {
            alert('Cannot connect to github!');
        }
    });
}).done(function () {
    progress2.progressTimer('complete', {
        onFinish: function () {
            alert('With new completion!');
        }
    });
});