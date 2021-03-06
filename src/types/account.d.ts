/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * An account.
 */
export interface Account {
  accountOwner: User;
  /**
   * An explanation about the purpose of this instance.
   */
  accountId: string;
}
/**
 * A User
 */
export interface User {
  /**
   * The users id.
   */
  id: string;
  /**
   * The users full name with id.
   */
  name: string;
  /**
   * The users email address.
   */
  email: string;
  [k: string]: unknown;
}
