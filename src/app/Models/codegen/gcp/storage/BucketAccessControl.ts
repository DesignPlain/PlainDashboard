import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface BucketAccessControlArgs {
  // The name of the bucket.
  bucket?: string;

  /*
The entity holding the permission, in one of the following forms:
user-userId
user-email
group-groupId
group-email
domain-domain
project-team-projectId
allUsers
allAuthenticatedUsers
Examples:
The user liz@example.com would be user-liz@example.com.
The group example@googlegroups.com would be
group-example@googlegroups.com.
To refer to all members of the Google Apps for Business domain
example.com, the entity would be domain-example.com.


- - -
*/
  entity?: string;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`, `WRITER`.
*/
  role?: string;
}
export class BucketAccessControl extends DS_Resource {
  // The name of the bucket.
  public bucket?: string;

  // The domain associated with the entity.
  public domain?: string;

  // The email address associated with the entity.
  public email?: string;

  /*
The entity holding the permission, in one of the following forms:
user-userId
user-email
group-groupId
group-email
domain-domain
project-team-projectId
allUsers
allAuthenticatedUsers
Examples:
The user liz@example.com would be user-liz@example.com.
The group example@googlegroups.com would be
group-example@googlegroups.com.
To refer to all members of the Google Apps for Business domain
example.com, the entity would be domain-example.com.


- - -
*/
  public entity?: string;

  /*
The access permission for the entity.
Possible values are: `OWNER`, `READER`, `WRITER`.
*/
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "role",
        "The access permission for the entity.\nPossible values are: `OWNER`, `READER`, `WRITER`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The name of the bucket.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "entity",
        "The entity holding the permission, in one of the following forms:\nuser-userId\nuser-email\ngroup-groupId\ngroup-email\ndomain-domain\nproject-team-projectId\nallUsers\nallAuthenticatedUsers\nExamples:\nThe user liz@example.com would be user-liz@example.com.\nThe group example@googlegroups.com would be\ngroup-example@googlegroups.com.\nTo refer to all members of the Google Apps for Business domain\nexample.com, the entity would be domain-example.com.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
    ];
  }
}
