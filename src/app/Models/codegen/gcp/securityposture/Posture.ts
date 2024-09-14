import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securityposture_PosturePolicySet,
  securityposture_PosturePolicySet_GetTypes,
} from "../types/securityposture_PosturePolicySet";

export interface PostureArgs {
  // Id of the posture. It is an immutable field.
  postureId?: string;

  /*
State of the posture. Update to state field should not be triggered along with
with other field updates.
Possible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.
*/
  state?: string;

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
}
export class Posture extends DS_Resource {
  // Revision_id of the posture.
  public revisionId?: string;

  /*
State of the posture. Update to state field should not be triggered along with
with other field updates.
Possible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.
*/
  public state?: string;

  // Time the Posture was updated in UTC.
  public updateTime?: string;

  // Time the Posture was created in UTC.
  public createTime?: string;

  // The parent of the resource, an organization. Format should be `organizations/{organization_id}`.
  public parent?: string;

  /*
List of policy sets for the posture.
Structure is documented below.
*/
  public policySets?: Array<securityposture_PosturePolicySet>;

  // Immutable. The name of the custom constraint. This is unique within the organization.
  public name?: string;

  // Id of the posture. It is an immutable field.
  public postureId?: string;

  // If set, there are currently changes in flight to the posture.
  public reconciling?: boolean;

  // Description of the expression
  public description?: string;

  // For Resource freshness validation (https://google.aip.dev/154)
  public etag?: string;

  // Location of the resource, eg: global.
  public location?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "location",
        "Location of the resource, eg: global.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The parent of the resource, an organization. Format should be `organizations/{organization_id}`.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "policySets",
        "List of policy sets for the posture.\nStructure is documented below.",
        () => securityposture_PosturePolicySet_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "postureId",
        "Id of the posture. It is an immutable field.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "state",
        "State of the posture. Update to state field should not be triggered along with\nwith other field updates.\nPossible values are: `DEPRECATED`, `DRAFT`, `ACTIVE`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the expression",
        () => [],
        false,
        false,
      ),
    ];
  }
}
