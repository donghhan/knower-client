import React from "react";

// react-slick
export interface ISlick {
  settings: {};
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IUser {
  email: string;
  firstName: string;
  lastName?: string;
  phoneNumber?: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
  accountHolder?: string;
  bankName?: string;
  bankAccountNumber?: string;
}

export interface ILoginForm {
  email: string;
  password: string;
  globalErrors?: string;
}
