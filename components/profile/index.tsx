import React from "react";
import { Image } from "react-native";

export type ProfilePictureParams = {
  imageUri: string;
  size?: number;
};

export const ProfilePicture = ({
  imageUri,
  size = 50,
}: ProfilePictureParams) => (
  <Image
    source={{ uri: imageUri }}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);
