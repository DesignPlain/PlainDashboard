import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { MembershipBindingState } from "../types/MembershipBindingState";

export interface MembershipBindingArgs {
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

  /*
Location of the membership


- - -
*/
  Location?: string;

  // The client-provided identifier of the membership binding.
  MembershipBindingId?: string;
}
export class MembershipBinding extends Resource {
  // Time the MembershipBinding was created in UTC.
  public CreateTime?: string;

  /*
Location of the membership


- - -
*/
  public Location?: string;

  // The client-provided identifier of the membership binding.
  public MembershipBindingId?: string;

  // The resource name for the membershipbinding itself
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
A Workspace resource name in the format
`projects/-/locations/-/scopes/-`.
*/
  public Scope?: string;

  /*
State of the membership binding resource.
Structure is documented below.
*/
  public States?: Array<MembershipBindingState>;

  // Time the MembershipBinding was updated in UTC.
  public UpdateTime?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  // Id of the membership
  public MembershipId?: string;

  // Time the MembershipBinding was deleted in UTC.
  public DeleteTime?: string;

  /*
Labels for this Membership binding.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Google-generated UUID for this resource.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "MembershipBindingId",
        "The client-provided identifier of the membership binding.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MembershipId",
        "Id of the membership",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Scope",
        "A Workspace resource name in the format\n`projects/*/locations/*/scopes/*`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Labels for this Membership binding.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the membership\n\n\n- - -",
      ),
    ];
  }
}
