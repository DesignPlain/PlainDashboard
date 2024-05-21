import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceGroupMembershipArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // A reference to the zone where the instance group resides.
  zone?: string;

  // An instance being added to the InstanceGroup
  instance?: string;

  /*
Represents an Instance Group resource name that the instance belongs to.


- - -
*/
  instanceGroup?: string;
}
export class InstanceGroupMembership extends Resource {
  // A reference to the zone where the instance group resides.
  public zone?: string;

  // An instance being added to the InstanceGroup
  public instance?: string;

  /*
Represents an Instance Group resource name that the instance belongs to.


- - -
*/
  public instanceGroup?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
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
        "zone",
        "A reference to the zone where the instance group resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instance",
        "An instance being added to the InstanceGroup",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceGroup",
        "Represents an Instance Group resource name that the instance belongs to.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
