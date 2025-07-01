import dbConnection from "@/config/db";
import User from "@/model/userModel";

const authSeller = async (userId) => {
  try {
    await dbConnection();

    const user = await User.findById(userId);

    if (!user) return false;

    return user.role === "seller";
  } catch (error) {
    console.error("authSeller error:", error.message);
    return false;
  }
};

export default authSeller;
