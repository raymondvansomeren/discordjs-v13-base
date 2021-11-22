module.exports = {
    name: 'logger',
    log()
    {
        console.log(arguments?.join(' '));
    },
    error()
    {
        console.error(arguments?.join(' '));
    },
};
