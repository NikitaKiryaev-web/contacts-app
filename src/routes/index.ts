import React from "react";
import Login from "../pages/Login";
import Contacts from "../pages/Contacts";

interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RootPaths {
  LOGIN = "/login",
  CONTACTS = "/",
}

export const publicRoutes: IRoute[] = [
  {
    path: RootPaths.LOGIN,
    element: Login,
  },
];

export const privateRoutes: IRoute[] = [
  {
    path: RootPaths.CONTACTS,
    element: Contacts,
  },
];
