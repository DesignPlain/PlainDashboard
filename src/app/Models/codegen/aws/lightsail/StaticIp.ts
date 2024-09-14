import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface StaticIpArgs {
  // The name for the allocated static IP
  name?: string;
}
export class StaticIp extends DS_Resource {
  // The ARN of the Lightsail static IP
  public arn?: string;

  // The allocated static IP address
  public ipAddress?: string;

  // The name for the allocated static IP
  public name?: string;

  // The support code.
  public supportCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name for the allocated static IP",
        () => [],
        false,
        true,
      ),
    ];
  }
}
