"use client";
import {
  Modal,
  ModalOverlay,
  Button,
  Input,
  ModalBody,
  ModalContent,
  useBoolean,
} from "@chakra-ui/react";
import axios from "axios";

import { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdLogin } from "react-icons/md";

const AuthForm = ({ onClose, isOpen }) => {
  const initialState = {
    fullName: "",
    password: "",
    email: "",
  };

  const [userInputs, setuserInputs] = useState(initialState);

  const [flag, setFlag] = useBoolean(false); // sign in is true

  const handleSignUp = async () => {
    for (let input in userInputs) {
      if (!userInputs[input]) {
        alert("all fields are required");
        return;
      }
    }
    const { success, message } = await axios
      .post("http://localhost:3000/api/auth/signup", {
        userFullName: userInputs.fullName,
        userEmail: userInputs.email,
        userPassword: userInputs.password,
      })
      .then((response) => {
        return response.data;
      });

    if (!success) {
      setuserInputs(initialState);
      alert(message);
      return;
    }

    alert(response.data.message);
    setuserInputs(initialState);
    onClose();
  };

  const handleSignIn = async () => {
    if (!userInputs.email || !userInputs.password) {
      alert("All fields are required");
      return;
    }

    const { success, message, userData } = await axios
      .post(`http://localhost:3000/api/auth/signin`, {
        userEmail: userInputs.email,
        userPassword: userInputs.password,
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    if (!success) {
      alert(message);
      return;
    }
    localStorage.setItem("isSignedIn", true);
    localStorage.setItem("userData", JSON.stringify(userData));
    alert(message);
    onClose();
    window.location.reload();
  };

  const handleAuth = (e) => {
    e.preventDefault();
    flag ? handleSignUp() : handleSignIn();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setuserInputs(initialState);
          onClose();
        }}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent bg={"brand.bg4"}>
          <ModalBody fontWeight={"500"}>
            <div className="text-brand-1 flex items-center justify-end mr-4 mt-4 text-3xl">
              <GoHome onClick={onClose} className="cursor-pointer" />
            </div>
            <div className="flex items-center text-center justify-between text-brand-1 text-lg mt-4">
              <div
                onClick={() => {
                  if (flag) {
                    return;
                  }

                  setuserInputs(initialState);
                  setFlag.on();
                }}
                className={`grow py-2 ${flag && `border-t-2 border-brand-1`} ${
                  !flag && `bg-brand-bg1 cursor-pointer rounded`
                }`}
              >
                Sign Up
              </div>
              <div
                onClick={() => {
                  if (!flag) {
                    return;
                  }
                  setuserInputs(initialState);
                  setFlag.off();
                }}
                className={`grow py-2 ${!flag && `border-t-2 border-brand-1`} ${
                  flag && `bg-brand-bg1 cursor-pointer rounded`
                }`}
              >
                Sign In
              </div>
            </div>
            <form onSubmit={handleAuth} className="flex flex-col">
              {flag && (
                <>
                  <div className="text-brand-1 text-lg my-2">Full Name</div>
                  <div className="px-4 py-2 rounded bg-brand-bg1">
                    <Input
                      variant="unstyled"
                      placeholder="Enter Your Name"
                      textColor={"brand.1"}
                      name="fullName"
                      onChange={(e) =>
                        setuserInputs({
                          ...userInputs,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={userInputs.fullName}
                    />
                  </div>
                  {/* <div className="text-brand-1 text-lg my-2">Company Name</div>
                  <div className="px-4 py-2 rounded bg-brand-bg1">
                    <Input
                      variant="unstyled"
                      placeholder="Enter Your Company Name"
                      textColor={"brand.1"}
                      name="companyName"
                      onChange={(e) =>
                        setuserInputs({
                          ...userInputs,
                          [e.target.name]: e.target.value,
                        })
                      }
                      value={userInputs.companyName}
                    />
                  </div> */}
                </>
              )}
              <div className="text-brand-1 text-lg my-2">Email</div>
              <div className="px-4 py-2 rounded bg-brand-bg1">
                <Input
                  type="email"
                  variant="unstyled"
                  placeholder="Enter Your Email"
                  textColor={"brand.1"}
                  name="email"
                  onChange={(e) =>
                    setuserInputs({
                      ...userInputs,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={userInputs.email}
                />
              </div>
              <div className="text-brand-1 text-lg my-2">Password</div>
              <div className="px-4 py-2 rounded bg-brand-bg1">
                <Input
                  type="password"
                  variant="unstyled"
                  placeholder="Enter Your Password"
                  textColor={"brand.1"}
                  name="password"
                  onChange={(e) =>
                    setuserInputs({
                      ...userInputs,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={userInputs.password}
                />
              </div>
              <div className="mt-4 mb-2 flex justify-center items-center">
                <Button
                  type="submit"
                  bg={"brand.3"}
                  _hover={{
                    bg: "brand.1",
                  }}
                  color={"brand.bg1"}
                  w={"50%"}
                  rightIcon={<MdLogin />}
                  fontSize={"large"}
                >
                  {flag ? <span>Sing Up</span> : <span>Sign In</span>}
                </Button>
              </div>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AuthForm;
