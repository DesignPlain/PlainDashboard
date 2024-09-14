import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface AccountArgs {
  /*
A text description of the service account.
Must be less than or equal to 256 UTF-8 bytes.
*/
  description?: string;

  /*
Whether a service account is disabled or not. Defaults to `false`. This field has no effect during creation.
Must be set after creation to disable a service account.
*/
  disabled?: boolean;

  /*
The display name for the service account.
Can be updated without creating a new resource.
*/
  displayName?: string;

  /*
The ID of the project that the service account will be created in.
Defaults to the provider project configuration.
*/
  project?: string;

  /*
The account id that is used to generate the service
account email address and a stable unique id. It is unique within a project,
must be 6-30 characters long, and match the regular expression `a-z`
to comply with RFC1035. Changing this forces a new service account to be created.
*/
  accountId?: string;

  // If set to true, skip service account creation if a service account with the same email already exists.
  createIgnoreAlreadyExists?: boolean;
}
export class Account extends DS_Resource {
  /*
The display name for the service account.
Can be updated without creating a new resource.
*/
  public displayName?: string;

  /*
The e-mail address of the service account. This value
should be referenced from any `gcp.organizations.getIAMPolicy` data sources
that would grant the service account privileges.
*/
  public email?: string;

  // The unique id of the service account.
  public uniqueId?: string;

  /*
The account id that is used to generate the service
account email address and a stable unique id. It is unique within a project,
must be 6-30 characters long, and match the regular expression `a-z`
to comply with RFC1035. Changing this forces a new service account to be created.
*/
  public accountId?: string;

  /*
A text description of the service account.
Must be less than or equal to 256 UTF-8 bytes.
*/
  public description?: string;

  /*
Whether a service account is disabled or not. Defaults to `false`. This field has no effect during creation.
Must be set after creation to disable a service account.
*/
  public disabled?: boolean;

  /*
The ID of the project that the service account will be created in.
Defaults to the provider project configuration.
*/
  public project?: string;

  // If set to true, skip service account creation if a service account with the same email already exists.
  public createIgnoreAlreadyExists?: boolean;

  // The Identity of the service account in the form `serviceAccount:{email}`. This value is often used to refer to the service account in order to grant IAM permissions.
  public member?: string;

  // The fully-qualified name of the service account.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Whether a service account is disabled or not. Defaults to `false`. This field has no effect during creation.\nMust be set after creation to disable a service account.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The display name for the service account.\nCan be updated without creating a new resource.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project that the service account will be created in.\nDefaults to the provider project configuration.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountId",
        "The account id that is used to generate the service\naccount email address and a stable unique id. It is unique within a project,\nmust be 6-30 characters long, and match the regular expression `a-z`\nto comply with RFC1035. Changing this forces a new service account to be created.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "createIgnoreAlreadyExists",
        "If set to true, skip service account creation if a service account with the same email already exists.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A text description of the service account.\nMust be less than or equal to 256 UTF-8 bytes.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
