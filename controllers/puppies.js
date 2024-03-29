import { Puppy } from '../models/puppy.js'

async function create(req, res) {
  try {
    const puppy = await Puppy.create(req.body)
    res.json(puppy)
  } catch (err) {
    console.log(err)
    res.json(err)
  }
}

async function index(req, res) {
  try {
    const puppies = await Puppy.find({}).sort({ createdAt: 'desc' })
    res.json(puppies)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function deletePuppy(req, res) {
  try {
    const deletedPuppy = await Puppy.findByIdAndDelete(req.params.puppyId)
    res.json(deletedPuppy)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function update(req, res) {
  try {
    const updatedPuppy = await Puppy.findByIdAndUpdate(req.params.puppyId, req.body, {new: true})
    res.json(updatedPuppy)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

async function show(req, res) {
  try {
    const puppy = await Puppy.findById(req.params.puppyId)
    res.json(puppy)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

export {
  create,
  index,
  deletePuppy as delete,
  update,
  show
}