const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('../DB/conn');
const User = require('../DB/schema');
const College = require('../DB/collegeSchema');

router.get('/' , (req ,res)=>{
    res.send("Hello router");
})

//using promises
// router.post('/register' , (req ,res )=>{

//     const {username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone} = req.body;
//            console.log(confirmPassword);
//            console.log(companyspocphone);
    
//            User.findOne({companyspocemail : companyspocemail})
//            .then((userExist) =>{
//             if(userExist){
//                 return res.status(422).json({error : "Email already Exists"});
//             }
//            const user = new User({username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone});

//            user.save()
//            .then(()=>{
//             res.status(201).json({message : "user registered successfully"});
//            }).catch((err)=>{
//             res.status(500).json({error : "Failed to register"})
//            })
//            }).catch(err => {console.log(err);});
//     //  console.log(req.body);
    
// });
router.post('/signup' , async (req ,res )=>{

    
    
          
 
          try{
            const {companyspocemail , password , confirmPassword , companyname ,companyspocname , companyspocphone} = req.body;
            console.log(password)
            if( !password || !confirmPassword || !companyname || !companyspocemail || !companyspocname || !companyspocphone || confirmPassword != password){
              return res.status(422).json({error : "Please Fill the fields"});
             }
            const userExist = await User.findOne({companyspocemail : companyspocemail});
            
            if(userExist){
                return res.status(422).json({error : "User already Exists"});
            }
            else{
              const user = new User({companyspocemail , password , confirmPassword , companyname ,companyspocname , companyspocphone});
             
              await user.save();
              console.log(password);
              res.status(201).json({message : "user registered successfully"});

            }
           
            // if(userRegister){
            //     res.status(201).json({message : "user registered successfully"});
            // }else{
            //     res.status(500).json({error : "Failed to register"});
            // }
          }catch (err){
            console.log(err);}
          }

    //        .then((userExist) =>{
    //         if(userExist){
    //             return res.status(422).json({error : "Email already Exists"});
    //         }
    //        const user = new User({username , password , confirmPassword , companyname ,companyspocname ,companyspocemail , companyspocphone});

    //        user.save()
    //        .then(()=>{
    //         res.status(201).json({message : "user registered successfully"});
    //        }).catch((err)=>{
    //         res.status(500).json({error : "Failed to register"})
    //        })
    //        }).catch(err => {console.log(err);});
    // console.log(req.body);
    
);

router.post('/signin' , async (req ,res) =>{
  
  try{
    let token;
    const {email , password} = req.body;
    console.log(password);
    console.log(email);
    
  
 if(!email || !password){
  return res.status(422).json({error : "Please Fill the fields"});
 }
    const userExist = await User.findOne({companyspocemail : email});
    const collegeUser = await College.findOne({collegespocemail : email});
   console.log(userExist);
   console.log(collegeUser);
   
    if(userExist && !collegeUser){
      const isMatch = await bcrypt.compare(password , userExist.password);
       token = await userExist.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken" , token , {
        expires : new Date(Date.now()+ 25892000000),
        httpOnly: true
      });

      if(isMatch){
        return res.status(201).json({message : "company"});
        }else{
        return  res.status(422).json({message : "Invalid Credentials"});
        }
    }else if(!userExist && collegeUser){
      const isMatch = await bcrypt.compare(password , collegeUser.password);
      if(isMatch){
        return res.status(201).json({message : "college"});
        }else{
        return  res.status(422).json({message : "Invalid Credentials"});
    }}
    else {
      return res.status(422).json({message : "Invalid Credentials"});
    }

     
  
  }catch(err){
     console.log(err);
  }
});

router.get('/allUsers' , async (req , res)=>{
try {
  const allUsers = await User.find({});
  res.json(allUsers);

} catch (error) {
 console.log(error); 
}
});

router.post('/deleteUser', async (req , res)=>{
  const {uid} = req.body;
  try {
    await User.deleteOne({_id : uid} );
     res.status(200).json({message: 'deleted'});
  } catch (error) {
    console.log(error);
  }
});

router.post('/collegesignup' , async (req ,res )=>{
 
  try{
    const { collegespocemail ,password , confirmPassword , collegename,collegeaddress,collegespocname , collegespocphone,collegeregid,degreeoffered} = req.body;
    console.log(password)
    if( !password || !confirmPassword || !collegename || !collegeaddress ||!collegespocemail || !collegespocname || !collegespocphone|| !collegeregid|| !degreeoffered || confirmPassword != password){
      return res.status(422).json({error : "Please Fill the fields"});
     }
    const userExists = await College.findOne({collegespocemail : collegespocemail});
    
    if(userExists){
        return res.status(422).json({error : "User already Exists"});
    }
    else{
      const user = new College({ collegespocemail , password , confirmPassword , collegename,collegeaddress,collegespocname , collegespocphone,collegeregid,degreeoffered});
     
      await user.save();
      console.log(password);
      res.status(201).json({message : "user registered successfully"});

    }
   
    // if(userRegister){
    //     res.status(201).json({message : "user registered successfully"});
    // }else{
    //     res.status(500).json({error : "Failed to register"});
    // }
  }catch (err){
    console.log(err);}
  }
  );
  router.get('/allColleges' , async (req , res)=>{
    try {
      const allUsers = await College.find({});
      res.json(allUsers);
    
    } catch (error) {
     console.log(error); 
    }
    });

    router.post('/deleteCollege', async (req , res)=>{
      const {uid} = req.body;
      try {
        await College.deleteOne({_id : uid} );
         res.status(200).json({message: 'deleted'});
      } catch (error) {
        console.log(error);
      }
    });

module.exports = router;