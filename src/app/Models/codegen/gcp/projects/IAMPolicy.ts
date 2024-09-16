import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IAMPolicyArgs {
  /*
The project id of the target project. This is not
inferred from the provider.
*/
  project?: string;

  /*
The `gcp.organizations.getIAMPolicy` data source that represents
the IAM policy that will be applied to the project. The policy will be
merged with any existing policy applied to the project.

Changing this updates the policy.

Deleting this removes all policies from the project, locking out users without
organization-level access.
*/
  policyData?: string;
}
export class IAMPolicy extends DS_Resource {
  // (Computed) The etag of the project's IAM policy.
  public etag?: string;

  /*
The `gcp.organizations.getIAMPolicy` data source that represents
the IAM policy that will be applied to the project. The policy will be
merged with any existing policy applied to the project.

Changing this updates the policy.

Deleting this removes all policies from the project, locking out users without
organization-level access.
*/
  public policyData?: string;

  /*
The project id of the target project. This is not
inferred from the provider.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project id of the target project. This is not\ninferred from the provider.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyData',
        'The `gcp.organizations.getIAMPolicy` data source that represents\nthe IAM policy that will be applied to the project. The policy will be\nmerged with any existing policy applied to the project.\n\nChanging this updates the policy.\n\nDeleting this removes all policies from the project, locking out users without\norganization-level access.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
