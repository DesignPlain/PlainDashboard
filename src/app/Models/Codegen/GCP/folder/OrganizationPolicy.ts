import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Folder_OrganizationPolicyListPolicy,
  Folder_OrganizationPolicyListPolicy_GetTypes,
} from "../types/Folder_OrganizationPolicyListPolicy";
import {
  Folder_OrganizationPolicyRestorePolicy,
  Folder_OrganizationPolicyRestorePolicy_GetTypes,
} from "../types/Folder_OrganizationPolicyRestorePolicy";
import {
  Folder_OrganizationPolicyBooleanPolicy,
  Folder_OrganizationPolicyBooleanPolicy_GetTypes,
} from "../types/Folder_OrganizationPolicyBooleanPolicy";

export interface OrganizationPolicyArgs {
  // A boolean policy is a constraint that is either enforced or not. Structure is documented below.
  BooleanPolicy?: Folder_OrganizationPolicyBooleanPolicy;

  /*
The name of the Constraint the Policy is configuring, for example, `serviceuser.services`. Check out the [complete list of available constraints](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints#available_constraints).

- - -
*/
  Constraint?: string;

  // The resource name of the folder to set the policy for. Its format is folders/{folder_id}.
  Folder?: string;

  /*
A policy that can define specific values that are allowed or denied for the given constraint. It
can also be used to allow or deny all values. Structure is documented below.
*/
  ListPolicy?: Folder_OrganizationPolicyListPolicy;

  /*
A restore policy is a constraint to restore the default policy. Structure is documented below.

> --Note:-- If none of [`boolean_policy`, `list_policy`, `restore_policy`] are defined the policy for a given constraint will
effectively be unset. This is represented in the UI as the constraint being 'Inherited'.

- - -
*/
  RestorePolicy?: Folder_OrganizationPolicyRestorePolicy;

  // Version of the Policy. Default version is 0.
  Version?: number;
}
export class OrganizationPolicy extends Resource {
  // Version of the Policy. Default version is 0.
  public Version?: number;

  // A boolean policy is a constraint that is either enforced or not. Structure is documented below.
  public BooleanPolicy?: Folder_OrganizationPolicyBooleanPolicy;

  /*
The name of the Constraint the Policy is configuring, for example, `serviceuser.services`. Check out the [complete list of available constraints](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints#available_constraints).

- - -
*/
  public Constraint?: string;

  // (Computed) The etag of the organization policy. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other.
  public Etag?: string;

  // The resource name of the folder to set the policy for. Its format is folders/{folder_id}.
  public Folder?: string;

  /*
A policy that can define specific values that are allowed or denied for the given constraint. It
can also be used to allow or deny all values. Structure is documented below.
*/
  public ListPolicy?: Folder_OrganizationPolicyListPolicy;

  /*
A restore policy is a constraint to restore the default policy. Structure is documented below.

> --Note:-- If none of [`boolean_policy`, `list_policy`, `restore_policy`] are defined the policy for a given constraint will
effectively be unset. This is represented in the UI as the constraint being 'Inherited'.

- - -
*/
  public RestorePolicy?: Folder_OrganizationPolicyRestorePolicy;

  // (Computed) The timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds, representing when the variable was last updated. Example: "2016-10-09T12:33:37.578138407Z".
  public UpdateTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Version",
        "Version of the Policy. Default version is 0.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "BooleanPolicy",
        "A boolean policy is a constraint that is either enforced or not. Structure is documented below.",
        Folder_OrganizationPolicyBooleanPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Constraint",
        "The name of the Constraint the Policy is configuring, for example, `serviceuser.services`. Check out the [complete list of available constraints](https://cloud.google.com/resource-manager/docs/organization-policy/understanding-constraints#available_constraints).\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Folder",
        "The resource name of the folder to set the policy for. Its format is folders/{folder_id}.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "ListPolicy",
        "A policy that can define specific values that are allowed or denied for the given constraint. It\ncan also be used to allow or deny all values. Structure is documented below.",
        Folder_OrganizationPolicyListPolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RestorePolicy",
        "A restore policy is a constraint to restore the default policy. Structure is documented below.\n\n> **Note:** If none of [`boolean_policy`, `list_policy`, `restore_policy`] are defined the policy for a given constraint will\neffectively be unset. This is represented in the UI as the constraint being 'Inherited'.\n\n- - -",
        Folder_OrganizationPolicyRestorePolicy_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
