sayHi();

function sayHi() {
    console.log('Hello');
};

// Callbacks
function doHomework(callback) {
    console.log('Doing homework...');
    callback();
}

doHomework(function() {
    console.log('Done with homework');
});
