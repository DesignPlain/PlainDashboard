import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AccountArgs {
  /*
A text description of the service account.
Must be less than or equal to 256 UTF-8 bytes.
*/
  Description?: string;

  /*
Whether a service account is disabled or not. Defaults to `false`. This field has no effect during creation.
Must be set after creation to disable a service account.
*/
  Disabled?: boolean;

  /*
The display name for the service account.
Can be updated without creating a new resource.
*/
  DisplayName?: string;

  /*
The ID of the project that the service account will be created in.
Defaults to the provider project configuration.
*/
  Project?: string;

  /*
The account id that is used to generate the service
account email address and a stable unique id. It is unique within a project,
must be 6-30 characters long, and match the regular expression `a-z`
to comply with RFC1035. Changing this forces a new service account to be created.
*/
  AccountId?: string;

  // If set to true, skip service account creation if a service account with the same email already exists.
  CreateIgnoreAlreadyExists?: boolean;
}
export class Account extends Resource {
  // The Identity of the service account in the form `serviceAccount:{email}`. This value is often used to refer to the service account in order to grant IAM permissions.
  public Member?: string;

  /*
The ID of the project that the service account will be created in.
Defaults to the provider project configuration.
*/
  public Project?: string;

  // The unique id of the service account.
  public UniqueId?: string;

  /*
The account id that is used to generate the service
account email address and a stable unique id. It is unique within a project,
must be 6-30 characters long, and match the regular expression `a-z`
to comply with RFC1035. Changing this forces a new service account to be created.
*/
  public AccountId?: string;

  /*
Whether a service account is disabled or not. Defaults to `false`. This field has no effect during creation.
Must be set after creation to disable a service account.
*/
  public Disabled?: boolean;

  /*
The display name for the service account.
Can be updated without creating a new resource.
*/
  public DisplayName?: string;

  // The fully-qualified name of the service account.
  public Name?: string;

  // If set to true, skip service account creation if a service account with the same email already exists.
  public CreateIgnoreAlreadyExists?: boolean;

  /*
A text description of the service account.
Must be less than or equal to 256 UTF-8 bytes.
*/
  public Description?: string;

  /*
The e-mail address of the service account. This value
should be referenced from any `gcp.organizations.getIAMPolicy` data sources
that would grant the service account privileges.
*/
  public Email?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A text description of the service account.\nMust be less than or equal to 256 UTF-8 bytes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "Whether a service account is disabled or not. Defaults to `false`. This field has no effect during creation.\nMust be set after creation to disable a service account.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The display name for the service account.\nCan be updated without creating a new resource.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project that the service account will be created in.\nDefaults to the provider project configuration.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "AccountId",
        "The account id that is used to generate the service\naccount email address and a stable unique id. It is unique within a project,\nmust be 6-30 characters long, and match the regular expression `a-z`\nto comply with RFC1035. Changing this forces a new service account to be created.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "CreateIgnoreAlreadyExists",
        "If set to true, skip service account creation if a service account with the same email already exists.",
        [],
        false,
        false,
      ),
    ];
  }
}
