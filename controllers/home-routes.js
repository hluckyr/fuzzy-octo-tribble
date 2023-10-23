const router = require('express').Router();
const { Maker, Paddle } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all makers for homepage
router.get('/', async (req, res) => {
  try {
    const dbMakerData = await Maker.findAll({
      include: [
        {
          model: Paddle,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const maker = dbmakerData.map((maker) =>
      gallery.get({ plain: true })
    );

    res.render('homepage', {
      makers,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one maker
// Use the custom middleware before allowing the user to access the maker
router.get('/maker/:id', withAuth, async (req, res) => {
  try {
    const dbMakerData = await Maker.findByPk(req.params.id, {
      include: [
        {
          model: Paddle,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const maker = dbMakerData.get({ plain: true });
    res.render('maker', { maker, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one paddle
// Use the custom middleware before allowing the user to access the paddle
router.get('/paddle/:id', withAuth, async (req, res) => {
  try {
    const dbPaddleData = await Paddle.findByPk(req.params.id);

    const paddle = dbPaddleData.get({ plain: true });

    res.render('paddle', { model, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
