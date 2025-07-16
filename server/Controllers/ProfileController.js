const UserProfile = require('../Model/Userinfo');
const User = require('../Model/data');

const FormController = async(req,res,next)=>{
  const { Fullname, email, phone, Username, Bio,  } = req.body;
  const profilePicture = req.file ? req.file.path : '';
  try{
    const user = await User.findOne({email,phone});

    if(!user){
      return res.status(404).json({message:"user not found"})
    }
    let profile = await UserProfile.findOne({userId:user._id})
if(profile){
  profile.Fullname=Fullname,
  profile.Username=Username,
  profile.Bio=Bio
  
  if (profilePicture) profile.profilePicture = profilePicture;
}
else{
  profile =new UserProfile({
    userId:user._id,
    Fullname,
    Username,
    
    Bio,
    profilePicture
  })
}
await profile.save();
 res.status(200).json({ message: 'Profile saved successfully', profile });
  }
  catch(e){
    console.log(e)
  }
}
const getForm = async (req, res) => {
  try {
    const userEmail = req.user?.email;

    if (!userEmail) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Step 1: Find the user by email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Step 2: Find the profile using userId and populate email/phone
    const profile = await UserProfile.findOne({ userId: user._id })
      .populate('userId', 'email phone'); // fetch email and phone from User model

    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    // Step 3: Combine profile data with email and phone
    const profileWithContact = {
      ...profile.toObject(),
      email: profile.userId.email,
      phone: profile.userId.phone
    };

    res.status(200).json(profileWithContact);
  } catch (err) {
    console.error("🔥 ERROR in getForm:", err);
    res.status(500).json({ message: 'Server error' });
  }
};




module.exports={
    FormController,
    getForm
}
