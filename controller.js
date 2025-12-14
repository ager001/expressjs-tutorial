export const usernameController = (req, res)=>{
      const username = req.params.username;
      res.send(`Welcome ${username}`)
}

export const searchController = (req,res)=>{
   const keyword = req.query.keyword;
   res.send(`Searching for ${keyword}`)
}

export const userLogin = (req, res)=>{
    res.send('This is user Login Route')
}

export const userSignup = (req, res)=>{
    res.send('This is user Signup Route')
}

export const aboutPage = (req, res)=>{
  res.send("This is Midenga's Learning Express js'")
}

export const contactPage = (req, res)=>{
    res.send("This is Midenga's contact page")
}