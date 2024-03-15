import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface InstanceGroupNamedPortArgs {
  // The port number, which can be a value between 1 and 65535.
  Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The zone of the instance group.
  Zone?: string;

  /*
The name of the instance group.


- - -
*/
  Group?: string;

  /*
The name for this named port. The name must be 1-63 characters
long, and comply with RFC1035.
*/
  Name?: string;
}
export class InstanceGroupNamedPort extends Resource {
  /*
The name of the instance group.


- - -
*/
  public Group?: string;

  /*
The name for this named port. The name must be 1-63 characters
long, and comply with RFC1035.
*/
  public Name?: string;

  // The port number, which can be a value between 1 and 65535.
  public Port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The zone of the instance group.
  public Zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "Port",
        "The port number, which can be a value between 1 and 65535.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Zone",
        "The zone of the instance group.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Group",
        "The name of the instance group.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name for this named port. The name must be 1-63 characters\nlong, and comply with RFC1035.",
      ),
    ];
  }
}
