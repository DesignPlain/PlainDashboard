import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gkehub_MembershipBindingState,
  gkehub_MembershipBindingState_GetTypes,
} from "../types/gkehub_MembershipBindingState";

export interface MembershipBindingArgs {
  /*
Labels for this Membership binding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
Location of the membership


- - -
*/
  location?: string;

  // The client-provided identifier of the membership binding.
  membershipBindingId?: string;

  // Id of the membership
  membershipId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
A Workspace resource name in the format
`projects/-/locations/-/scopes/-`.
*/
  scope?: string;
}
export class MembershipBinding extends Resource {
  /*
Location of the membership


- - -
*/
  public location?: string;

  // Id of the membership
  public membershipId?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Google-generated UUID for this resource.
  public uid?: string;

  /*
Labels for this Membership binding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The client-provided identifier of the membership binding.
  public membershipBindingId?: string;

  /*
A Workspace resource name in the format
`projects/-/locations/-/scopes/-`.
*/
  public scope?: string;

  // Time the MembershipBinding was updated in UTC.
  public updateTime?: string;

  // Time the MembershipBinding was deleted in UTC.
  public deleteTime?: string;

  // The resource name for the membershipbinding itself
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // Time the MembershipBinding was created in UTC.
  public createTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
State of the membership binding resource.
Structure is documented below.
*/
  public states?: Array<gkehub_MembershipBindingState>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "membershipId",
        "Id of the membership",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "scope",
        "A Workspace resource name in the format\n`projects/*/locations/*/scopes/*`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Labels for this Membership binding.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the membership\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "membershipBindingId",
        "The client-provided identifier of the membership binding.",
        [],
        true,
        true,
      ),
    ];
  }
}
