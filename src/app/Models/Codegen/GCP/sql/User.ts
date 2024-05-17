import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Sql_UserPasswordPolicy,
  Sql_UserPasswordPolicy_GetTypes,
} from "../types/Sql_UserPasswordPolicy";
import {
  Sql_UserSqlServerUserDetail,
  Sql_UserSqlServerUserDetail_GetTypes,
} from "../types/Sql_UserSqlServerUserDetail";

export interface UserArgs {
  /*
The deletion policy for the user.
Setting `ABANDON` allows the resource to be abandoned rather than deleted. This is useful
for Postgres, where users cannot be deleted from the API if they have been granted SQL roles.

Possible values are: `ABANDON`.

- - -
*/
  DeletionPolicy?: string;

  /*
The host the user can connect from. This is only supported
for BUILT_IN users in MySQL instances. Don't set this field for PostgreSQL and SQL Server instances.
Can be an IP address. Changing this forces a new resource to be created.
*/
  Host?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  Instance?: string;

  /*
The name of the user. Changing this forces a new resource
to be created.
*/
  Name?: string;

  /*
The password for the user. Can be updated. For Postgres
instances this is a Required field, unless type is set to either CLOUD_IAM_USER
or CLOUD_IAM_SERVICE_ACCOUNT. Don't set this field for CLOUD_IAM_USER
and CLOUD_IAM_SERVICE_ACCOUNT user types for any Cloud SQL instance.
*/
  Password?: string;

  //
  PasswordPolicy?: Sql_UserPasswordPolicy;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The user type. It determines the method to authenticate the
user during login. The default is the database's built-in user type. Flags
include "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".
*/
  Type?: string;
}
export class User extends Resource {
  /*
The name of the user. Changing this forces a new resource
to be created.
*/
  public Name?: string;

  /*
The password for the user. Can be updated. For Postgres
instances this is a Required field, unless type is set to either CLOUD_IAM_USER
or CLOUD_IAM_SERVICE_ACCOUNT. Don't set this field for CLOUD_IAM_USER
and CLOUD_IAM_SERVICE_ACCOUNT user types for any Cloud SQL instance.
*/
  public Password?: string;

  //
  public PasswordPolicy?: Sql_UserPasswordPolicy;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  //
  public SqlServerUserDetails?: Array<Sql_UserSqlServerUserDetail>;

  /*
The user type. It determines the method to authenticate the
user during login. The default is the database's built-in user type. Flags
include "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".
*/
  public Type?: string;

  /*
The deletion policy for the user.
Setting `ABANDON` allows the resource to be abandoned rather than deleted. This is useful
for Postgres, where users cannot be deleted from the API if they have been granted SQL roles.

Possible values are: `ABANDON`.

- - -
*/
  public DeletionPolicy?: string;

  /*
The host the user can connect from. This is only supported
for BUILT_IN users in MySQL instances. Don't set this field for PostgreSQL and SQL Server instances.
Can be an IP address. Changing this forces a new resource to be created.
*/
  public Host?: string;

  /*
The name of the Cloud SQL instance. Changing this
forces a new resource to be created.
*/
  public Instance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Host",
        "The host the user can connect from. This is only supported\nfor BUILT_IN users in MySQL instances. Don't set this field for PostgreSQL and SQL Server instances.\nCan be an IP address. Changing this forces a new resource to be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "The name of the Cloud SQL instance. Changing this\nforces a new resource to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the user. Changing this forces a new resource\nto be created.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Password",
        "The password for the user. Can be updated. For Postgres\ninstances this is a Required field, unless type is set to either CLOUD_IAM_USER\nor CLOUD_IAM_SERVICE_ACCOUNT. Don't set this field for CLOUD_IAM_USER\nand CLOUD_IAM_SERVICE_ACCOUNT user types for any Cloud SQL instance.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "PasswordPolicy",
        "",
        Sql_UserPasswordPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        'The user type. It determines the method to authenticate the\nuser during login. The default is the database\'s built-in user type. Flags\ninclude "BUILT_IN", "CLOUD_IAM_USER", "CLOUD_IAM_GROUP" or "CLOUD_IAM_SERVICE_ACCOUNT".',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "The deletion policy for the user.\nSetting `ABANDON` allows the resource to be abandoned rather than deleted. This is useful\nfor Postgres, where users cannot be deleted from the API if they have been granted SQL roles.\n\nPossible values are: `ABANDON`.\n\n- - -",
        [],
        false,
        false,
      ),
    ];
  }
}
