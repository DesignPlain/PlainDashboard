import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PosturePolicySet } from "../types/PosturePolicySet";

export interface PostureArgs {
  /*
List of policy sets for the posture.
Structure is documented below.
*/
  PolicySets?: Array<PosturePolicySet>;

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

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  Parent?: string;
}
export class Posture extends Resource {
  // Description of the expression
  public Description?: string;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  public Name?: string;

  /*
List of policy sets for the posture.
Structure is documented below.
*/
  public PolicySets?: Array<PosturePolicySet>;

  // Id of the posture. It is an immutable field.
  public PostureId?: string;

  // Revision_id of the posture.
  public RevisionId?: string;

  // Time the Posture was updated in UTC.
  public UpdateTime?: string;

  // Time the Posture was created in UTC.
  public CreateTime?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public Etag?: string;

  // Location of the resource, eg: global.
  public Location?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  public Parent?: string;

  // If set, there are currently changes in flight to the posture.
  public Reconciling?: boolean;

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
        "Location",
        "Location of the resource, eg: global.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "PolicySets",
        "List of policy sets for the posture.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PostureId",
        "Id of the posture. It is an immutable field.",
      ),
      new DynamicUIProps(
        InputType.String,
        "State",
        "State of the posture. Update to state field should not be triggered along with\nwith other field updates.\nPossible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "Description of the expression",
      ),
    ];
  }
}
