import express from 'express'
import { aboutPage, contactPage, userLogin, userSignup } from './controller.js'

const router = express.Router()

router.get("/login", userLogin)
router.get("/signup", userSignup)
router.get("/about", aboutPage)
router.get("/contact", contactPage)

export default router