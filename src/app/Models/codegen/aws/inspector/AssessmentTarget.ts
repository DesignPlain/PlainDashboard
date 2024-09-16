import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface AssessmentTargetArgs {
  // The name of the assessment target.
  name?: string;

  // Inspector Resource Group Amazon Resource Name (ARN) stating tags for instance matching. If not specified, all EC2 instances in the current AWS account and region are included in the assessment target.
  resourceGroupArn?: string;
}
export class AssessmentTarget extends DS_Resource {
  // Inspector Resource Group Amazon Resource Name (ARN) stating tags for instance matching. If not specified, all EC2 instances in the current AWS account and region are included in the assessment target.
  public resourceGroupArn?: string;

  // The target assessment ARN.
  public arn?: string;

  // The name of the assessment target.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the assessment target.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceGroupArn',
        'Inspector Resource Group Amazon Resource Name (ARN) stating tags for instance matching. If not specified, all EC2 instances in the current AWS account and region are included in the assessment target.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
