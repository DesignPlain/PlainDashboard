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
  Cluster?: string;

  // List of database roles this database user has.
  DatabaseRoles?: Array<string>;

  // Password for this database user.
  Password?: string;

  // The database role name of the user.
  UserId?: string;

  /*
The type of this user.
Possible values are: `ALLOYDB_BUILT_IN`, `ALLOYDB_IAM_USER`.


- - -
*/
  UserType?: string;
}
export class User extends Resource {
  /*
The type of this user.
Possible values are: `ALLOYDB_BUILT_IN`, `ALLOYDB_IAM_USER`.


- - -
*/
  public UserType?: string;

  /*
Identifies the alloydb cluster. Must be in the format
'projects/{project}/locations/{location}/clusters/{cluster_id}'
*/
  public Cluster?: string;

  // List of database roles this database user has.
  public DatabaseRoles?: Array<string>;

  // Name of the resource in the form of projects/{project}/locations/{location}/clusters/{cluster}/users/{user}.
  public Name?: string;

  // Password for this database user.
  public Password?: string;

  // The database role name of the user.
  public UserId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "Identifies the alloydb cluster. Must be in the format\n'projects/{project}/locations/{location}/clusters/{cluster_id}'",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DatabaseRoles",
        "List of database roles this database user has.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Password",
        "Password for this database user.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "UserId",
        "The database role name of the user.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "UserType",
        "The type of this user.\nPossible values are: `ALLOYDB_BUILT_IN`, `ALLOYDB_IAM_USER`.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
