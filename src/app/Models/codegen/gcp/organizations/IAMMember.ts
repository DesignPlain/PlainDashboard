import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  organizations_IAMMemberCondition,
  organizations_IAMMemberCondition_GetTypes,
} from '../types/organizations_IAMMemberCondition';

export interface IAMMemberArgs {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  condition?: organizations_IAMMemberCondition;

  //
  member?: string;

  // The organization id of the target organization.
  orgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  role?: string;
}
export class IAMMember extends DS_Resource {
  /*
An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.
Structure is documented below.
*/
  public condition?: organizations_IAMMemberCondition;

  // (Computed) The etag of the organization's IAM policy.
  public etag?: string;

  //
  public member?: string;

  // The organization id of the target organization.
  public orgId?: string;

  /*
The role that should be applied. Only one
`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format
`organizations/{{org_id}}/roles/{{role_id}}`.
*/
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'condition',
        'An [IAM Condition](https://cloud.google.com/iam/docs/conditions-overview) for a given binding.\nStructure is documented below.',
        () => organizations_IAMMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, 'member', '', () => [], true, true),
      new DynamicUIProps(
        InputType.String,
        'orgId',
        'The organization id of the target organization.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'role',
        'The role that should be applied. Only one\n`gcp.organizations.IAMBinding` can be used per role. Note that custom roles must be of the format\n`organizations/{{org_id}}/roles/{{role_id}}`.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
