import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkehub_MembershipBindingState,
  Gkehub_MembershipBindingState_GetTypes,
} from "../types/Gkehub_MembershipBindingState";

export interface MembershipBindingArgs {
  /*
Location of the membership


- - -
*/
  Location?: string;

  // The client-provided identifier of the membership binding.
  MembershipBindingId?: string;

  // Id of the membership
  MembershipId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
A Workspace resource name in the format
`projects/-/locations/-/scopes/-`.
*/
  Scope?: string;

  /*
Labels for this Membership binding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;
}
export class MembershipBinding extends Resource {
  // Time the MembershipBinding was created in UTC.
  public CreateTime?: string;

  // Time the MembershipBinding was deleted in UTC.
  public DeleteTime?: string;

  // Id of the membership
  public MembershipId?: string;

  /*
A Workspace resource name in the format
`projects/-/locations/-/scopes/-`.
*/
  public Scope?: string;

  // The client-provided identifier of the membership binding.
  public MembershipBindingId?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
State of the membership binding resource.
Structure is documented below.
*/
  public States?: Array<Gkehub_MembershipBindingState>;

  // Google-generated UUID for this resource.
  public Uid?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // Time the MembershipBinding was updated in UTC.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Labels for this Membership binding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Location of the membership


- - -
*/
  public Location?: string;

  // The resource name for the membershipbinding itself
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the membership\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipBindingId",
        "The client-provided identifier of the membership binding.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipId",
        "Id of the membership",
        [],
        true,
        true,
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
        "Scope",
        "A Workspace resource name in the format\n`projects/*/locations/*/scopes/*`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Labels for this Membership binding.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
