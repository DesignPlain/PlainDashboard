import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface WorkloadIdentityPoolArgs {
  // A description of the pool. Cannot exceed 256 characters.
  Description?: string;

  /*
Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.
*/
  Disabled?: boolean;

  // A display name for the pool. Cannot exceed 32 characters.
  DisplayName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The ID to use for the pool, which becomes the final component of the resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  WorkloadIdentityPoolId?: string;
}
export class WorkloadIdentityPool extends Resource {
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
  public State?: string;

  /*
The ID to use for the pool, which becomes the final component of the resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
`gcp-` is reserved for use by Google, and may not be specified.


- - -
*/
  public WorkloadIdentityPoolId?: string;

  // A description of the pool. Cannot exceed 256 characters.
  public Description?: string;

  /*
Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use
existing tokens to access resources. If the pool is re-enabled, existing tokens grant
access again.
*/
  public Disabled?: boolean;

  // A display name for the pool. Cannot exceed 32 characters.
  public DisplayName?: string;

  /*
The resource name of the pool as
`projects/{project_number}/locations/global/workloadIdentityPools/{workload_identity_pool_id}`.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A description of the pool. Cannot exceed 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens, or use\nexisting tokens to access resources. If the pool is re-enabled, existing tokens grant\naccess again.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A display name for the pool. Cannot exceed 32 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkloadIdentityPoolId",
        "The ID to use for the pool, which becomes the final component of the resource name. This\nvalue should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix\n`gcp-` is reserved for use by Google, and may not be specified.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
