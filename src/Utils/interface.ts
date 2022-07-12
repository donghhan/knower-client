import React from "react";

export interface IModal {
  isModalOpen: boolean;
}
export interface RefProp {
  ref: React.Ref<HTMLDivElement>;
}

// react-slick

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
