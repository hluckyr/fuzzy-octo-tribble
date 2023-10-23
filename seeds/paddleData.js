const { Paddle } = require('../paddles');

const paddledata = [
  {
    title: 'Pro Power Elongated',
    artist: 'Gearbox',
    cost: '274.99'
    maker_id: 1,
    filename: '01gearbox.webp',
    description:
      'Power. Spin. Plush Feel. Touch. Precision. Reach.',
  },
  {
    title: 'Pro Control Elongated',
    artist: 'Gearbox',
    cost: '274.99',
    maker_id: 1,
    filename: '02gearbox.webp',
    description: 'Control. Spin. Plush Feel. Touch. Precision. Reach.',
  },
  {
    title: 'Anna Bright Scorpeus CFS 14 Pickleball Paddle',
    artist: 'Joola',
    cost: '249.95',
    maker_id: 2,
    filename: '03annabright.jpeg',
    description: 'Exerts powerful drives and put-aways',
  },
  {
    title: 'Collin Johns Scorpeus CFS 16',
    artist: 'Joola',
    cost: '249.95',
    maker_id: 2,
    filename: '04collinjohns.jpeg',
    description: 'Crisp feeling and impressive pop for counteracting fast shots',
  },
  
];

const seedPaddles = () => Paddle.bulkCreate(paddledata);

module.exports = seedPaddles;
