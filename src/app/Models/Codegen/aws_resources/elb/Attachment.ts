import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface AttachmentArgs {
  // Instance ID to place in the ELB pool.
  instance?: string;

  // The name of the ELB.
  elb?: string;
}
export class Attachment extends Resource {
  // The name of the ELB.
  public elb?: string;

  // Instance ID to place in the ELB pool.
  public instance?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "instance",
        "Instance ID to place in the ELB pool.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "elb",
        "The name of the ELB.",
        [],
        true,
        true,
      ),
    ];
  }
}
