import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface PolicyAttachmentArgs {
  // The name of the policy to attach.
  policy?: string;

  // The identity to which the policy is attached.
  target?: string;
}
export class PolicyAttachment extends Resource {
  // The name of the policy to attach.
  public policy?: string;

  // The identity to which the policy is attached.
  public target?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "policy",
        "The name of the policy to attach.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "target",
        "The identity to which the policy is attached.",
        [],
        true,
        true,
      ),
    ];
  }
}
