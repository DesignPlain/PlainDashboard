import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface UserArgs {
  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  cluster?: string;

  // List of database roles this database user has.
  databaseRoles?: Array<string>;

  // Password for this database user.
  password?: string;

  // The database role name of the user.
  userId?: string;

  /*
The type of this user.
Possible values are: `ALLOYDB_BUILT_IN`, `ALLOYDB_IAM_USER`.


- - -
*/
  userType?: string;
}
export class User extends Resource {
  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  public cluster?: string;

  // List of database roles this database user has.
  public databaseRoles?: Array<string>;

  // Name of the resource in the form of projects/{project}/locations/{location}/clusters/{cluster}/users/{user}.
  public name?: string;

  // Password for this database user.
  public password?: string;

  // The database role name of the user.
  public userId?: string;

  /*
The type of this user.
Possible values are: `ALLOYDB_BUILT_IN`, `ALLOYDB_IAM_USER`.


- - -
*/
  public userType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "databaseRoles",
        "List of database roles this database user has.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "Password for this database user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userId",
        "The database role name of the user.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "userType",
        "The type of this user.\nPossible values are: `ALLOYDB_BUILT_IN`, `ALLOYDB_IAM_USER`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "Identifies the alloydb cluster. Must be in the format\n'projects/{project}/locations/{location}/clusters/{cluster_id}'",
        [],
        true,
        true,
      ),
    ];
  }
}
