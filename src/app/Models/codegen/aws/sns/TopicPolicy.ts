import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface TopicPolicyArgs {
  // The ARN of the SNS topic
  arn?: string;

  // The fully-formed AWS policy as JSON.
  policy?: string;
}
export class TopicPolicy extends DS_Resource {
  // The ARN of the SNS topic
  public arn?: string;

  // The AWS Account ID of the SNS topic owner
  public owner?: string;

  // The fully-formed AWS policy as JSON.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'arn',
        'The ARN of the SNS topic',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policy',
        'The fully-formed AWS policy as JSON.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
