import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceGroupMembershipArgs {
  // A reference to the zone where the instance group resides.
  Zone?: string;

  // An instance being added to the InstanceGroup
  Instance?: string;

  /*
Represents an Instance Group resource name that the instance belongs to.


- - -
*/
  InstanceGroup?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class InstanceGroupMembership extends Resource {
  // An instance being added to the InstanceGroup
  public Instance?: string;

  /*
Represents an Instance Group resource name that the instance belongs to.


- - -
*/
  public InstanceGroup?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // A reference to the zone where the instance group resides.
  public Zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "InstanceGroup",
        "Represents an Instance Group resource name that the instance belongs to.\n\n\n- - -",
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
        "Zone",
        "A reference to the zone where the instance group resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Instance",
        "An instance being added to the InstanceGroup",
        [],
        true,
        true,
      ),
    ];
  }
}
