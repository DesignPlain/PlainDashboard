import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LogDataProtectionPolicyArgs {
  // The name of the log group under which the log stream is to be created.
  logGroupName?: string;

  // Specifies the data protection policy in JSON. Read more at [Data protection policy syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-start.html#mask-sensitive-log-data-policysyntax).
  policyDocument?: string;
}
export class LogDataProtectionPolicy extends DS_Resource {
  // The name of the log group under which the log stream is to be created.
  public logGroupName?: string;

  // Specifies the data protection policy in JSON. Read more at [Data protection policy syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-start.html#mask-sensitive-log-data-policysyntax).
  public policyDocument?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'logGroupName',
        'The name of the log group under which the log stream is to be created.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyDocument',
        'Specifies the data protection policy in JSON. Read more at [Data protection policy syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data-start.html#mask-sensitive-log-data-policysyntax).',
        () => [],
        true,
        false,
      ),
    ];
  }
}
