"use client";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) return <p>Please log in to view your profile.</p>;

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Your Profile</h1>
      <img src={session.user.image} alt="Profile" className="w-20 h-20 rounded-full mb-4" />
      <p><strong>Name:</strong> {session.user.name}</p>
      <p><strong>Email:</strong> {session.user.email}</p>
    </div>
  );
}
