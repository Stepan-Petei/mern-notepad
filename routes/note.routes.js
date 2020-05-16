const { Router } = require('express');
const config = require('config');
const Note = require('../models/Note');
const router = Router()
const auth = require('../middleware/auth.middleware');

router.post('/write', auth, async (req, res) => {
  try {
    
    
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again!' })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const notes = await Note.find({ owner: req.user.userId })
    res.json(notes)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again!' })
  }
})

router.get('/:id', auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
    res.json(note)
  } catch (e) {
    res.status(500).json({ message: 'Something went wrong, try again!' })
  }
})

module.exports = router