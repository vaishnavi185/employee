const UserProfile = require('../Model/Userinfo');


const FormController = async(req,res,next)=>{
  const { Fullname, email, phone, Username, Bio,  } = req.body;
  const profilePicture = req.file ? req.file.path : '';
try{
    let profile = await UserProfile.findOne({email});

    if(profile){
        profile.Fullname=Fullname;
        
        profile.phone=phone;
        profile.Username=Username;
        profile.Bio=Bio;
        if (profilePicture) profile.profilePicture = profilePicture;

    }else{
        profile=new UserProfile({
           Fullname,
        email,
        phone,
        Username,
        Bio,
        profilePicture
        })
    }
    await profile.save();
res.status(200).json({ message: 'Profile saved successfully', profile });
  } catch (err) {
   console.error("🔥 ERROR in FormController:", err); 
    res.status(500).json({ message: 'Server error' });
  }
}

module.exports={
    FormController
}
