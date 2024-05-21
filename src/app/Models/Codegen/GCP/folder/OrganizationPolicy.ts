import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  folder_OrganizationPolicyBooleanPolicy,
  folder_OrganizationPolicyBooleanPolicy_GetTypes,
} from "../types/folder_OrganizationPolicyBooleanPolicy";
import {
  folder_OrganizationPolicyListPolicy,
  folder_OrganizationPolicyListPolicy_GetTypes,
} from "../types/folder_OrganizationPolicyListPolicy";
import {
  folder_OrganizationPolicyRestorePolicy,
  folder_OrganizationPolicyRestorePolicy_GetTypes,
} from "../types/folder_OrganizationPolicyRestorePolicy";

export interface OrganizationPolicyArgs {
  // A boolean policy is a constraint that is either enforced or not. Structure is documented below.
  booleanPolicy?: folder_OrganizationPolicyBooleanPolicy;

  /*
The name of the Constraint the Policy is configuring, for example, `serviceuser.services`. Check out the [complete list of available constraints](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints#available_constraints).

- - -
*/
  constraint?: string;

  // The resource name of the folder to set the policy for. Its format is folders/{folder_id}.
  folder?: string;

  /*
A policy that can define specific values that are allowed or denied for the given constraint. It
can also be used to allow or deny all values. Structure is documented below.
*/
  listPolicy?: folder_OrganizationPolicyListPolicy;

  /*
A restore policy is a constraint to restore the default policy. Structure is documented below.

> --Note:-- If none of [`boolean_policy`, `list_policy`, `restore_policy`] are defined the policy for a given constraint will
effectively be unset. This is represented in the UI as the constraint being 'Inherited'.

- - -
*/
  restorePolicy?: folder_OrganizationPolicyRestorePolicy;

  // Version of the Policy. Default version is 0.
  version?: number;
}
export class OrganizationPolicy extends Resource {
  // (Computed) The timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds, representing when the variable was last updated. Example: "2016-10-09T12:33:37.578138407Z".
  public updateTime?: string;

  // Version of the Policy. Default version is 0.
  public version?: number;

  // A boolean policy is a constraint that is either enforced or not. Structure is documented below.
  public booleanPolicy?: folder_OrganizationPolicyBooleanPolicy;

  /*
The name of the Constraint the Policy is configuring, for example, `serviceuser.services`. Check out the [complete list of available constraints](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints#available_constraints).

- - -
*/
  public constraint?: string;

  // (Computed) The etag of the organization policy. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other.
  public etag?: string;

  // The resource name of the folder to set the policy for. Its format is folders/{folder_id}.
  public folder?: string;

  /*
A policy that can define specific values that are allowed or denied for the given constraint. It
can also be used to allow or deny all values. Structure is documented below.
*/
  public listPolicy?: folder_OrganizationPolicyListPolicy;

  /*
A restore policy is a constraint to restore the default policy. Structure is documented below.

> --Note:-- If none of [`boolean_policy`, `list_policy`, `restore_policy`] are defined the policy for a given constraint will
effectively be unset. This is represented in the UI as the constraint being 'Inherited'.

- - -
*/
  public restorePolicy?: folder_OrganizationPolicyRestorePolicy;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "constraint",
        "The name of the Constraint the Policy is configuring, for example, `serviceuser.services`. Check out the [complete list of available constraints](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints#available_constraints).\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "folder",
        "The resource name of the folder to set the policy for. Its format is folders/{folder_id}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "listPolicy",
        "A policy that can define specific values that are allowed or denied for the given constraint. It\ncan also be used to allow or deny all values. Structure is documented below.",
        folder_OrganizationPolicyListPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restorePolicy",
        "A restore policy is a constraint to restore the default policy. Structure is documented below.\n\n> **Note:** If none of [`boolean_policy`, `list_policy`, `restore_policy`] are defined the policy for a given constraint will\neffectively be unset. This is represented in the UI as the constraint being 'Inherited'.\n\n- - -",
        folder_OrganizationPolicyRestorePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "version",
        "Version of the Policy. Default version is 0.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "booleanPolicy",
        "A boolean policy is a constraint that is either enforced or not. Structure is documented below.",
        folder_OrganizationPolicyBooleanPolicy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
