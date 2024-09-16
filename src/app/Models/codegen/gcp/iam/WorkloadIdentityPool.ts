import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface WorkloadIdentityPoolArgs {
  // A display name for the pool. Cannot exceed 32 characters.
  displayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The ID to use for the pool, which becomes the final component of the resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  workloadIdentityPoolId?: string;

  // A description of the pool. Cannot exceed 256 characters.
  description?: string;

  /*
Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.
*/
  disabled?: boolean;
}
export class WorkloadIdentityPool extends DS_Resource {
  /*
Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.
*/
  public disabled?: boolean;

  // A display name for the pool. Cannot exceed 32 characters.
  public displayName?: string;

  /*
The resource name of the pool as
`projects/{project_number}/locations/global/workloadIdentityPools/{workload_identity_pool_id}`.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The state of the pool.
- STATE_UNSPECIFIED: State unspecified.
- ACTIVE: The pool is active, and may be used in Google Cloud policies.
- DELETED: The pool is soft-deleted. Soft-deleted pools are permanently deleted after
approximately 30 days. You can restore a soft-deleted pool using
UndeleteWorkloadIdentityPool. You cannot reuse the ID of a soft-deleted pool until it is
permanently deleted. While a pool is deleted, you cannot use it to exchange tokens, or
use existing tokens to access resources. If the pool is undeleted, existing tokens grant
access again.
*/
  public state?: string;

  /*
The ID to use for the pool, which becomes the final component of the resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  public workloadIdentityPoolId?: string;

  // A description of the pool. Cannot exceed 256 characters.
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description of the pool. Cannot exceed 256 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'disabled',
        'Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use\nexisting tokens to access resources. If the pool is re-enabled, existing tokens grant\naccess again.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'displayName',
        'A display name for the pool. Cannot exceed 32 characters.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'workloadIdentityPoolId',
        'The ID to use for the pool, which becomes the final component of the resource name. This\nvalue should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix\n`gcp-` is reserved for use by Google, and may not be specified.\n\n\n- - -',
        () => [],
        true,
        true,
      ),
    ];
  }
}
