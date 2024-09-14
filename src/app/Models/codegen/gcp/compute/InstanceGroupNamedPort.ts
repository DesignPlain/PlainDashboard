import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface InstanceGroupNamedPortArgs {
  // The port number, which can be a value between 1 and 65535.
  port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The zone of the instance group.
  zone?: string;

  /*
The name of the instance group.


- - -
*/
  group?: string;

  /*
The name for this named port. The name must be 1-63 characters
long, and comply with RFC1035.
*/
  name?: string;
}
export class InstanceGroupNamedPort extends DS_Resource {
  /*
The name of the instance group.


- - -
*/
  public group?: string;

  /*
The name for this named port. The name must be 1-63 characters
long, and comply with RFC1035.
*/
  public name?: string;

  // The port number, which can be a value between 1 and 65535.
  public port?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The zone of the instance group.
  public zone?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "zone",
        "The zone of the instance group.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "group",
        "The name of the instance group.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for this named port. The name must be 1-63 characters\nlong, and comply with RFC1035.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "port",
        "The port number, which can be a value between 1 and 65535.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
