import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PolicyDryRunSpec } from "../types/PolicyDryRunSpec";
import { PolicySpec } from "../types/PolicySpec";

export interface PolicyArgs {
  // Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.
  DryRunSpec?: PolicyDryRunSpec;

  // Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: - `projects/{project_number}/policies/{constraint_name}` - `folders/{folder_id}/policies/{constraint_name}` - `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
  Name?: string;

  /*
The parent of the resource.



- - -
*/
  Parent?: string;

  // Basic information about the Organization Policy.
  Spec?: PolicySpec;
}
export class Policy extends Resource {
  // Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.
  public DryRunSpec?: PolicyDryRunSpec;

  // An opaque tag indicating the current version of the policy, used for concurrency control. This field is ignored if used in a `CreatePolicy` request. When the policy` is returned from either a `GetPolicy` or a `ListPolicies` request, this `etag` indicates the version of the current policy to use when executing a read-modify-write loop. When the policy is returned from a `GetEffectivePolicy` request, the `etag` will be unset.
  public Etag?: string;

  // Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: - `projects/{project_number}/policies/{constraint_name}` - `folders/{folder_id}/policies/{constraint_name}` - `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.
  public Name?: string;

  /*
The parent of the resource.



- - -
*/
  public Parent?: string;

  // Basic information about the Organization Policy.
  public Spec?: PolicySpec;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "DryRunSpec",
        "Dry-run policy. Audit-only policy, can be used to monitor how the policy would have impacted the existing and future resources if it's enforced.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        'Immutable. The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * `projects/{project_number}/policies/{constraint_name}` * `folders/{folder_id}/policies/{constraint_name}` * `organizations/{organization_id}/policies/{constraint_name}` For example, "projects/123/policies/compute.disableSerialPortAccess". Note: `projects/{project_id}/policies/{constraint_name}` is also an acceptable name for API requests, but responses will return the name using the equivalent project number.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the resource.\n\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Spec",
        "Basic information about the Organization Policy.",
      ),
    ];
  }
}
