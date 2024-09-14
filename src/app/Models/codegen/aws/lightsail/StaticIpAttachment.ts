import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface StaticIpAttachmentArgs {
  // The name of the Lightsail instance to attach the IP to
  instanceName?: string;

  // The name of the allocated static IP
  staticIpName?: string;
}
export class StaticIpAttachment extends DS_Resource {
  // The allocated static IP address
  public ipAddress?: string;

  // The name of the allocated static IP
  public staticIpName?: string;

  // The name of the Lightsail instance to attach the IP to
  public instanceName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "The name of the Lightsail instance to attach the IP to",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "staticIpName",
        "The name of the allocated static IP",
        () => [],
        true,
        true,
      ),
    ];
  }
}
