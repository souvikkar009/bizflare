import jwt from "jsonwebtoken";

export const getTokenData = async (request) => {
  try {
    const signInToken = (await request.cookies.get("signInToken")?.value) || "";
    if (!signInToken) {
      return null;
    }
    const decodedToken = jwt.verify(
      signInToken,
      process.env.SIGNIN_TOKEN_SECRET
    );
    console.log(decodedToken);

    return decodedToken.userId;
  } catch (error) {
    console.log(error);
  }
};
