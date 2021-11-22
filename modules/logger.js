module.exports = {
    name: 'log',
    log()
    {
        console.log(arguments?.join(' '));
    },
    error()
    {
        console.error(arguments?.join(' '));
    },
};
