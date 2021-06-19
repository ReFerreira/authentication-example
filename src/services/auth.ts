import { v4 as uuid } from "uuid";

type SignInRequestData = {
  email: string;
  password: string;
};

export async function SignInRequest(data: SignInRequestData) {
  return {
    token: uuid(),
    user: {
      name: "Reinaldo Ferreira",
      email: "rgferreira@90gmail.com",
      avatar_url: "https://github.com/ReFerreira.png",
    },
  };
}

export async function recoverUserInformation() {
  return {
    user: {
      name: "Reinaldo Ferreira",
      email: "rgferreira@90gmail.com",
      avatar_url: "https://github.com/ReFerreira.png",
    },
  };
}
