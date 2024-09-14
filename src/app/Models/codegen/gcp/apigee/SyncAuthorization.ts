import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface SyncAuthorizationArgs {
  /*
Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:service-account-name`.
The `service-account-name` is formatted like an email address. For example: my-synchronizer-manager-serviceAccount@my_project_id.iam.gserviceaccount.com
You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.
The service accounts must have --Apigee Synchronizer Manager-- role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).
*/
  identities?: Array<string>;

  /*
Name of the Apigee organization.


- - -
*/
  name?: string;
}
export class SyncAuthorization extends DS_Resource {
  /*
Name of the Apigee organization.


- - -
*/
  public name?: string;

  /*
Entity tag (ETag) used for optimistic concurrency control as a way to help prevent simultaneous updates from overwriting each other.
Used internally during updates.
*/
  public etag?: string;

  /*
Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:service-account-name`.
The `service-account-name` is formatted like an email address. For example: my-synchronizer-manager-serviceAccount@my_project_id.iam.gserviceaccount.com
You might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.
The service accounts must have --Apigee Synchronizer Manager-- role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).
*/
  public identities?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "identities",
        "Array of service accounts to grant access to control plane resources, each specified using the following format: `serviceAccount:service-account-name`.\nThe `service-account-name` is formatted like an email address. For example: my-synchronizer-manager-serviceAccount@my_project_id.iam.gserviceaccount.com\nYou might specify multiple service accounts, for example, if you have multiple environments and wish to assign a unique service account to each one.\nThe service accounts must have **Apigee Synchronizer Manager** role. See also [Create service accounts](https://cloud.google.com/apigee/docs/hybrid/v1.8/sa-about#create-the-service-accounts).",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the Apigee organization.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
    ];
  }
}
