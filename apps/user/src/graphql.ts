
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAuthInput {
    exampleField?: Nullable<number>;
}

export class UpdateAuthInput {
    id: number;
}

export class CreateUserInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email: string;
}

export class UpdateUserInput {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email?: Nullable<string>;
}

export class Auth {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    auth?: Nullable<Auth>;
    users: Nullable<User>[];
    user?: Nullable<User>;
}

export abstract class IMutation {
    createAuth?: Auth;
    updateAuth?: Auth;
    removeAuth?: Nullable<Auth>;
    createUser?: User;
    updateUser?: User;
    removeUser?: Nullable<User>;
}

export class User {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    email: string;
    id: number;
}

type Nullable<T> = T | null;
