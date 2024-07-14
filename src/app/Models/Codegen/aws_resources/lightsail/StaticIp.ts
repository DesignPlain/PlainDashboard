import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface StaticIpArgs {
  // The name for the allocated static IP
  name?: string;
}
export class StaticIp extends Resource {
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
        [],
        false,
        true,
      ),
    ];
  }
}
