import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface StaticIpAttachmentArgs {
  // The name of the Lightsail instance to attach the IP to
  instanceName?: string;

  // The name of the allocated static IP
  staticIpName?: string;
}
export class StaticIpAttachment extends Resource {
  // The name of the Lightsail instance to attach the IP to
  public instanceName?: string;

  // The allocated static IP address
  public ipAddress?: string;

  // The name of the allocated static IP
  public staticIpName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "staticIpName",
        "The name of the allocated static IP",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "The name of the Lightsail instance to attach the IP to",
        [],
        true,
        true,
      ),
    ];
  }
}
