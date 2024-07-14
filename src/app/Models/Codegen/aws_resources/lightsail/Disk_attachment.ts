import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface Disk_attachmentArgs {
  // The name of the Lightsail Disk.
  diskName?: string;

  // The disk path to expose to the instance.
  diskPath?: string;

  // The name of the Lightsail Instance to attach to.
  instanceName?: string;
}
export class Disk_attachment extends Resource {
  // The name of the Lightsail Disk.
  public diskName?: string;

  // The disk path to expose to the instance.
  public diskPath?: string;

  // The name of the Lightsail Instance to attach to.
  public instanceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "The name of the Lightsail Instance to attach to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "diskName",
        "The name of the Lightsail Disk.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "diskPath",
        "The disk path to expose to the instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
