import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DiskResourcePolicyAttachmentArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A reference to the zone where the disk resides.
  Zone?: string;

  /*
The name of the disk in which the resource policies are attached to.


- - -
*/
  Disk?: string;

  /*
The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
*/
  Name?: string;
}
export class DiskResourcePolicyAttachment extends Resource {
  // A reference to the zone where the disk resides.
  public Zone?: string;

  /*
The name of the disk in which the resource policies are attached to.


- - -
*/
  public Disk?: string;

  /*
The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource policy to be attached to the disk for scheduling snapshot\ncreation. Do not specify the self link.",
        [],
        false,
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
        "A reference to the zone where the disk resides.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Disk",
        "The name of the disk in which the resource policies are attached to.\n\n\n- - -",
        [],
        true,
        true,
      ),
    ];
  }
}
