"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    profileImage: null as string | null,
  });
  const [newProfileImage, setNewProfileImage] = useState<File | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch user data
    axios
      .get("http://127.0.0.1:8000/user/", {
        headers: { Authorization: `Bearer ${localStorage.getItem("access")}` },
      })
      .then((res) => setUserData(res.data))
      .catch((err) =>
        setError(err.response?.data?.message || "Error fetching user data")
      );
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewProfileImage(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    setError("");
    const formData = new FormData();
    formData.append("name", userData.name);
    if (newProfileImage) {
      formData.append("profileImage", newProfileImage);
    }

    try {
      const res = await axios.put("http://127.0.0.1:8000/user/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access")}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setUserData(res.data);
      setIsEditing(false);
      setNewProfileImage(null);
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data?.message || "Error updating profile");
      } else {
        setError("Error updating profile");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex flex-col gap-4">
        {userData.profileImage && (
          <Image
            src={userData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
        )}

        <div>
          <label className="block font-medium">Name:</label>
          {isEditing ? (
            <Input
              type="text"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
              className="border border-gray-300 rounded p-2 w-full"
            />
          ) : (
            <p>{userData.name}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Email:</label>
          <p>{userData.email}</p>
        </div>

        {isEditing && (
          <div>
            <label className="block font-medium">Profile Image:</label>
            <Input type="file" onChange={handleImageChange} />
          </div>
        )}

        <div className="flex gap-4 mt-4">
          {isEditing ? (
            <>
              <Button
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Edit Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
