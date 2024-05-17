import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securityposture_PosturePolicySet,
  Securityposture_PosturePolicySet_GetTypes,
} from "../types/Securityposture_PosturePolicySet";

export interface PostureArgs {
  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  Parent?: string;

  /*
List of policy sets for the posture.
Structure is documented below.
*/
  PolicySets?: Array<Securityposture_PosturePolicySet>;

  // Id of the posture. It is an immutable field.
  PostureId?: string;

  /*
State of the posture. Update to state field should not be triggered along with
with other field updates.
Possible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.
*/
  State?: string;

  // Description of the expression
  Description?: string;

  // Location of the resource, eg: global.
  Location?: string;
}
export class Posture extends Resource {
  // Description of the expression
  public Description?: string;

  // Location of the resource, eg: global.
  public Location?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  public Parent?: string;

  /*
List of policy sets for the posture.
Structure is documented below.
*/
  public PolicySets?: Array<Securityposture_PosturePolicySet>;

  // Id of the posture. It is an immutable field.
  public PostureId?: string;

  // Time the Posture was updated in UTC.
  public UpdateTime?: string;

  // Time the Posture was created in UTC.
  public CreateTime?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public Etag?: string;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  public Name?: string;

  // If set, there are currently changes in flight to the posture.
  public Reconciling?: boolean;

  // Revision_id of the posture.
  public RevisionId?: string;

  /*
State of the posture. Update to state field should not be triggered along with
with other field updates.
Possible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.
*/
  public State?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "PolicySets",
        "List of policy sets for the posture.\nStructure is documented below.",
        Securityposture_PosturePolicySet_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "PostureId",
        "Id of the posture. It is an immutable field.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "State",
        "State of the posture. Update to state field should not be triggered along with\nwith other field updates.\nPossible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the expression",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "Location of the resource, eg: global.",
        [],
        true,
        true,
      ),
    ];
  }
}
