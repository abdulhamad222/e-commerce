"use client";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { isSeller, router } = useAppContext();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between border-b-2 bg-[#393E46] px-6 md:px-16 lg:px-32 py-3 text-white">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
        width={120}
        height={40}
      />

      {/* Desktop Navigation Links */}
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-300 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-300 transition">
          Shop
        </Link>
        <Link href="/about" className="hover:text-gray-300 transition">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-gray-300 transition">
          Contact
        </Link>
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Desktop Account Button */}
      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <Button
          onPress={onOpen}
          className="flex items-center justify-center gap-2 transition"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </Button>
      </ul>

      {/* Mobile Navigation */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        <Button
          onPress={onOpen}
          className="flex items-center justify-center gap-2 transition"
        >
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </Button>

        {/* Drawer / Sidebar for Account */}
        <Drawer
          isOpen={isOpen}
          placement="right"
          onOpenChange={onOpenChange}
          motionProps={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
          }}
        >
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 bg-[#393E46]">
                  Account Options
                </DrawerHeader>
                <DrawerBody className="space-y-4 bg-[#222831]">
                  {session?.user ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-4">
                        <Image
                          src={session.user.image}
                          alt="Profile"
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-medium">{session.user.name}</p>
                          <p className="text-sm">{session.user.email}</p>
                        </div>
                      </div>
                      <Button
                        fullWidth
                        onPress={() => {
                          router.push("/profile");
                          onClose();
                        }}
                      >
                        Go to Profile
                      </Button>
                      <Button
                        fullWidth
                        color="danger"
                        onPress={() => signOut()}
                      >
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <Button fullWidth onPress={() => signIn("google")}>
                        Sign in with Google
                      </Button>
                      <Button fullWidth onPress={() => signIn("github")}>
                        Sign in with GitHub
                      </Button>
                    </div>
                  )}
                </DrawerBody>
                <DrawerFooter className="bg-[#222831]">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
