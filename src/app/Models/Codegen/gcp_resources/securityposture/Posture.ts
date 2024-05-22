import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securityposture_PosturePolicySet,
  securityposture_PosturePolicySet_GetTypes,
} from "../types/securityposture_PosturePolicySet";

export interface PostureArgs {
  // Description of the expression
  description?: string;

  // Location of the resource, eg: global.
  location?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  parent?: string;

  /*
List of policy sets for the posture.
Structure is documented below.
*/
  policySets?: Array<securityposture_PosturePolicySet>;

  // Id of the posture. It is an immutable field.
  postureId?: string;

  /*
State of the posture. Update to state field should not be triggered along with
with other field updates.
Possible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.
*/
  state?: string;
}
export class Posture extends Resource {
  /*
List of policy sets for the posture.
Structure is documented below.
*/
  public policySets?: Array<securityposture_PosturePolicySet>;

  // Id of the posture. It is an immutable field.
  public postureId?: string;

  // Time the Posture was updated in UTC.
  public updateTime?: string;

  // Time the Posture was created in UTC.
  public createTime?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public etag?: string;

  // Location of the resource, eg: global.
  public location?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  public parent?: string;

  /*
State of the posture. Update to state field should not be triggered along with
with other field updates.
Possible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.
*/
  public state?: string;

  // Description of the expression
  public description?: string;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  public name?: string;

  // If set, there are currently changes in flight to the posture.
  public reconciling?: boolean;

  // Revision_id of the posture.
  public revisionId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the expression",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the resource, eg: global.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "policySets",
        "List of policy sets for the posture.\nStructure is documented below.",
        securityposture_PosturePolicySet_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "postureId",
        "Id of the posture. It is an immutable field.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "State of the posture. Update to state field should not be triggered along with\nwith other field updates.\nPossible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.",
        [],
        true,
        false,
      ),
    ];
  }
}
