"use client";

import React from "react";
import data from "@emoji-mart/data";
import { Picker } from "emoji-mart";

export const EmojiPicker = ({ onSelect }) => {
  return (
    <div className="emoji-picker">
      <Picker data={data} onEmojiSelect={onSelect} />
    </div>
  );
};