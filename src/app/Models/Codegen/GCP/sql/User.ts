import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sql_UserPasswordPolicy,
  sql_UserPasswordPolicy_GetTypes,
} from "../types/sql_UserPasswordPolicy";
import {
  sql_UserSqlServerUserDetail,
  sql_UserSqlServerUserDetail_GetTypes,
} from "../types/sql_UserSqlServerUserDetail";

export interface UserArgs {
  /*
The user type. It determines the method to authenticate the
user during login. The default is the database's built-in user type. Flags
include "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".
*/
  type?: string;

  /*
The deletion policy for the user.
Setting `ABANDON` allows the resource to be abandoned rather than deleted. This is useful
for Postgres, where users cannot be deleted from the API if they have been granted SQL roles.

Possible values are: `ABANDON`.

- - -
*/
  deletionPolicy?: string;

  /*
The host the user can connect from. This is only supported
for BUILT_IN users in MySQL instances. Don't set this field for PostgreSQL and SQL Server instances.
Can be an IP address. Changing this forces a new resource to be created.
*/
  host?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  instance?: string;

  /*
The name of the user. Changing this forces a new resource
to be created.
*/
  name?: string;

  /*
The password for the user. Can be updated. For Postgres
instances this is a Required field, unless type is set to either CLOUD_IAM_USER
or CLOUD_IAM_SERVICE_ACCOUNT. Don't set this field for CLOUD_IAM_USER
and CLOUD_IAM_SERVICE_ACCOUNT user types for any Cloud SQL instance.
*/
  password?: string;

  //
  passwordPolicy?: sql_UserPasswordPolicy;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;
}
export class User extends Resource {
  /*
The deletion policy for the user.
Setting `ABANDON` allows the resource to be abandoned rather than deleted. This is useful
for Postgres, where users cannot be deleted from the API if they have been granted SQL roles.

Possible values are: `ABANDON`.

- - -
*/
  public deletionPolicy?: string;

  /*
The name of the user. Changing this forces a new resource
to be created.
*/
  public name?: string;

  //
  public sqlServerUserDetails?: Array<sql_UserSqlServerUserDetail>;

  /*
The user type. It determines the method to authenticate the
user during login. The default is the database's built-in user type. Flags
include "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".
*/
  public type?: string;

  /*
The host the user can connect from. This is only supported
for BUILT_IN users in MySQL instances. Don't set this field for PostgreSQL and SQL Server instances.
Can be an IP address. Changing this forces a new resource to be created.
*/
  public host?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  public instance?: string;

  /*
The password for the user. Can be updated. For Postgres
instances this is a Required field, unless type is set to either CLOUD_IAM_USER
or CLOUD_IAM_SERVICE_ACCOUNT. Don't set this field for CLOUD_IAM_USER
and CLOUD_IAM_SERVICE_ACCOUNT user types for any Cloud SQL instance.
*/
  public password?: string;

  //
  public passwordPolicy?: sql_UserPasswordPolicy;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "host",
        "The host the user can connect from. This is only supported\nfor BUILT_IN users in MySQL instances. Don't set this field for PostgreSQL and SQL Server instances.\nCan be an IP address. Changing this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "The name of the Cloud SQL instance. Changing this\nforces a new resource to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the user. Changing this forces a new resource\nto be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "password",
        "The password for the user. Can be updated. For Postgres\ninstances this is a Required field, unless type is set to either CLOUD_IAM_USER\nor CLOUD_IAM_SERVICE_ACCOUNT. Don't set this field for CLOUD_IAM_USER\nand CLOUD_IAM_SERVICE_ACCOUNT user types for any Cloud SQL instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "passwordPolicy",
        "",
        sql_UserPasswordPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        'The user type. It determines the method to authenticate the\nuser during login. The default is the database\'s built-in user type. Flags\ninclude "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "The deletion policy for the user.\nSetting `ABANDON` allows the resource to be abandoned rather than deleted. This is useful\nfor Postgres, where users cannot be deleted from the API if they have been granted SQL roles.\n\nPossible values are: `ABANDON`.\n\n- - -",
        [],
        false,
        false,
      ),
    ];
  }
}
