import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Iam_WorkforcePoolAccessRestrictions,
  Iam_WorkforcePoolAccessRestrictions_GetTypes,
} from "../types/Iam_WorkforcePoolAccessRestrictions";

export interface WorkforcePoolArgs {
  /*
Duration that the Google Cloud access tokens, console sign-in sessions,
and `gcloud` sign-in sessions from this pool are valid.
Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
If `sessionDuration` is not configured, minted credentials have a default duration of one hour (3600s).
A duration in seconds with up to nine fractional digits, ending with '`s`'. Example: "`3.5s`".
*/
  SessionDuration?: string;

  /*
The name of the pool. The ID must be a globally unique string of 6 to 63 lowercase letters,
digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
The prefix `gcp-` is reserved for use by Google, and may not be specified.
*/
  WorkforcePoolId?: string;

  /*
Configure access restrictions on the workforce pool users. This is an optional field. If specified web
sign-in can be restricted to given set of services or programmatic sign-in can be disabled for pool users.
Structure is documented below.
*/
  AccessRestrictions?: Iam_WorkforcePoolAccessRestrictions;

  // A user-specified description of the pool. Cannot exceed 256 characters.
  Description?: string;

  /*
Whether the pool is disabled. You cannot use a disabled pool to exchange tokens,
or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
*/
  Disabled?: boolean;

  // A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.
  DisplayName?: string;

  // The location for the resource.
  Location?: string;

  /*
Immutable. The resource name of the parent. Format: `organizations/{org-id}`.


- - -
*/
  Parent?: string;
}
export class WorkforcePool extends Resource {
  /*
Output only. The state of the pool.
- STATE_UNSPECIFIED: State unspecified.
- ACTIVE: The pool is active, and may be used in Google Cloud policies.
- DELETED: The pool is soft-deleted. Soft-deleted pools are permanently deleted
after approximately 30 days. You can restore a soft-deleted pool using
[workforcePools.undelete](https://cloud.google.com/iam/docs/reference/rest/v1/locations.workforcePools/undelete#google.iam.admin.v1.WorkforcePools.UndeleteWorkforcePool).
You cannot reuse the ID of a soft-deleted pool until it is permanently deleted.
While a pool is deleted, you cannot use it to exchange tokens, or use
existing tokens to access resources. If the pool is undeleted, existing
tokens grant access again.
*/
  public State?: string;

  /*
The name of the pool. The ID must be a globally unique string of 6 to 63 lowercase letters,
digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
The prefix `gcp-` is reserved for use by Google, and may not be specified.
*/
  public WorkforcePoolId?: string;

  /*
Configure access restrictions on the workforce pool users. This is an optional field. If specified web
sign-in can be restricted to given set of services or programmatic sign-in can be disabled for pool users.
Structure is documented below.
*/
  public AccessRestrictions?: Iam_WorkforcePoolAccessRestrictions;

  // A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.
  public DisplayName?: string;

  /*
Output only. The resource name of the pool.
Format: `locations/{location}/workforcePools/{workforcePoolId}`
*/
  public Name?: string;

  /*
Duration that the Google Cloud access tokens, console sign-in sessions,
and `gcloud` sign-in sessions from this pool are valid.
Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
If `sessionDuration` is not configured, minted credentials have a default duration of one hour (3600s).
A duration in seconds with up to nine fractional digits, ending with '`s`'. Example: "`3.5s`".
*/
  public SessionDuration?: string;

  // A user-specified description of the pool. Cannot exceed 256 characters.
  public Description?: string;

  /*
Whether the pool is disabled. You cannot use a disabled pool to exchange tokens,
or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
*/
  public Disabled?: boolean;

  // The location for the resource.
  public Location?: string;

  /*
Immutable. The resource name of the parent. Format: `organizations/{org-id}`.


- - -
*/
  public Parent?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "Immutable. The resource name of the parent. Format: `organizations/{org-id}`.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "SessionDuration",
        "Duration that the Google Cloud access tokens, console sign-in sessions,\nand `gcloud` sign-in sessions from this pool are valid.\nMust be greater than 15 minutes (900s) and less than 12 hours (43200s).\nIf `sessionDuration` is not configured, minted credentials have a default duration of one hour (3600s).\nA duration in seconds with up to nine fractional digits, ending with '`s`'. Example: \"`3.5s`\".",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "WorkforcePoolId",
        "The name of the pool. The ID must be a globally unique string of 6 to 63 lowercase letters,\ndigits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.\nThe prefix `gcp-` is reserved for use by Google, and may not be specified.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "AccessRestrictions",
        "Configure access restrictions on the workforce pool users. This is an optional field. If specified web\nsign-in can be restricted to given set of services or programmatic sign-in can be disabled for pool users.\nStructure is documented below.",
        Iam_WorkforcePoolAccessRestrictions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A user-specified description of the pool. Cannot exceed 256 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "Disabled",
        "Whether the pool is disabled. You cannot use a disabled pool to exchange tokens,\nor use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The location for the resource.",
        [],
        true,
        true,
      ),
    ];
  }
}
