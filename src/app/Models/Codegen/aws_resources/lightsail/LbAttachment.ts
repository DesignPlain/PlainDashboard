import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface LbAttachmentArgs {
  // The name of the instance to attach to the load balancer.
  instanceName?: string;

  // The name of the Lightsail load balancer.
  lbName?: string;
}
export class LbAttachment extends Resource {
  // The name of the instance to attach to the load balancer.
  public instanceName?: string;

  // The name of the Lightsail load balancer.
  public lbName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "The name of the instance to attach to the load balancer.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "lbName",
        "The name of the Lightsail load balancer.",
        [],
        true,
        true,
      ),
    ];
  }
}
