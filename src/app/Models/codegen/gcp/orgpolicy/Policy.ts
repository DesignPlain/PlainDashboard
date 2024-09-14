import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  orgpolicy_PolicyDryRunSpec,
  orgpolicy_PolicyDryRunSpec_GetTypes,
} from "../types/orgpolicy_PolicyDryRunSpec";
import {
  orgpolicy_PolicySpec,
  orgpolicy_PolicySpec_GetTypes,
} from "../types/orgpolicy_PolicySpec";

export interface PolicyArgs {
  // Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.
  dryRunSpec?: orgpolicy_PolicyDryRunSpec;

  // Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: - `projects/{project_number}/policies/{constraint_name}` - `folders/{folder_id}/policies/{constraint_name}` - `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
  name?: string;

  /*
The parent of the resource.



- - -
*/
  parent?: string;

  // Basic information about the Organization Policy.
  spec?: orgpolicy_PolicySpec;
}
export class Policy extends DS_Resource {
  /*
The parent of the resource.



- - -
*/
  public parent?: string;

  // Basic information about the Organization Policy.
  public spec?: orgpolicy_PolicySpec;

  // Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.
  public dryRunSpec?: orgpolicy_PolicyDryRunSpec;

  // An opaque tag indicating the current version of the policy, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy` is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policy to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset.
  public etag?: string;

  // Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: - `projects/{project_number}/policies/{constraint_name}` - `folders/{folder_id}/policies/{constraint_name}` - `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "dryRunSpec",
        "Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.",
        () => orgpolicy_PolicyDryRunSpec_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        'Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the resource.\n\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "spec",
        "Basic information about the Organization Policy.",
        () => orgpolicy_PolicySpec_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
