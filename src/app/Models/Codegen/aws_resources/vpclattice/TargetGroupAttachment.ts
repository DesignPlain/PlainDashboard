import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_TargetGroupAttachmentTarget,
  vpclattice_TargetGroupAttachmentTarget_GetTypes,
} from "../types/vpclattice_TargetGroupAttachmentTarget";

export interface TargetGroupAttachmentArgs {
  // The target.
  target?: vpclattice_TargetGroupAttachmentTarget;

  // The ID or Amazon Resource Name (ARN) of the target group.
  targetGroupIdentifier?: string;
}
export class TargetGroupAttachment extends Resource {
  // The target.
  public target?: vpclattice_TargetGroupAttachmentTarget;

  // The ID or Amazon Resource Name (ARN) of the target group.
  public targetGroupIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "target",
        "The target.",
        vpclattice_TargetGroupAttachmentTarget_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetGroupIdentifier",
        "The ID or Amazon Resource Name (ARN) of the target group.",
        [],
        true,
        true,
      ),
    ];
  }
}
