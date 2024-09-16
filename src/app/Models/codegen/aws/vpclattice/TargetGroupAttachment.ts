import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpclattice_TargetGroupAttachmentTarget,
  vpclattice_TargetGroupAttachmentTarget_GetTypes,
} from '../types/vpclattice_TargetGroupAttachmentTarget';

export interface TargetGroupAttachmentArgs {
  // The target.
  target?: vpclattice_TargetGroupAttachmentTarget;

  // The ID or Amazon Resource Name (ARN) of the target group.
  targetGroupIdentifier?: string;
}
export class TargetGroupAttachment extends DS_Resource {
  // The target.
  public target?: vpclattice_TargetGroupAttachmentTarget;

  // The ID or Amazon Resource Name (ARN) of the target group.
  public targetGroupIdentifier?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'target',
        'The target.',
        () => vpclattice_TargetGroupAttachmentTarget_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetGroupIdentifier',
        'The ID or Amazon Resource Name (ARN) of the target group.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
