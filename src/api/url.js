const prefix = process.env.NODE_ENV === 'production' ? 'http://ec2-3-92-166-88.compute-1.amazonaws.com' : 'http://localhost';

module.exports = {
    apiUrl: {
        comingSoon: `${prefix}:9000/comingSoon/v1`,
    },
};
