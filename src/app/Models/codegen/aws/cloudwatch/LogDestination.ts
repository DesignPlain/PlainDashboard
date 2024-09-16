import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LogDestinationArgs {
  // A name for the log destination.
  name?: string;

  // The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to put data into the target.
  roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ARN of the target Amazon Kinesis stream resource for the destination.
  targetArn?: string;
}
export class LogDestination extends DS_Resource {
  // The Amazon Resource Name (ARN) specifying the log destination.
  public arn?: string;

  // A name for the log destination.
  public name?: string;

  // The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to put data into the target.
  public roleArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the target Amazon Kinesis stream resource for the destination.
  public targetArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name for the log destination.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The ARN of an IAM role that grants Amazon CloudWatch Logs permissions to put data into the target.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'targetArn',
        'The ARN of the target Amazon Kinesis stream resource for the destination.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
