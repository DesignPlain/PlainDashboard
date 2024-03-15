import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface RegionDiskResourcePolicyAttachmentArgs {
  /*
The resource policy to be attached to the disk for scheduling snapshot
creation. Do not specify the self link.
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // A reference to the region where the disk resides.
  Region?: string;

  /*
The name of the regional disk in which the resource policies are attached to.


- - -
*/
  Disk?: string;
}
export class RegionDiskResourcePolicyAttachment extends Resource {
  /*
The name of the regional disk in which the resource policies are attached to.


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

  // A reference to the region where the disk resides.
  public Region?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The resource policy to be attached to the disk for scheduling snapshot\ncreation. Do not specify the self link.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "A reference to the region where the disk resides.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Disk",
        "The name of the regional disk in which the resource policies are attached to.\n\n\n- - -",
      ),
    ];
  }
}
