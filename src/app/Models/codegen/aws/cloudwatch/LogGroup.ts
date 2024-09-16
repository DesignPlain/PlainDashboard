import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LogGroupArgs {
  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;

  /*
Specifies the number of days
you want to retain log events in the specified log group.  Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, 3653, and 0.
If you select 0, the events in the log group are always retained and never expire.
*/
  retentionInDays?: number;

  // Set to true if you do not wish the log group (and any logs it may contain) to be deleted at destroy time, and instead just remove the log group from the state.
  skipDestroy?: boolean;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group,
AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires
permissions for the CMK whenever the encrypted data is requested.
*/
  kmsKeyId?: string;

  // Specified the log class of the log group. Possible values are: `STANDARD` or `INFREQUENT_ACCESS`.
  logGroupClass?: string;

  // The name of the log group. If omitted, this provider will assign a random, unique name.
  name?: string;
}
export class LogGroup extends DS_Resource {
  // The Amazon Resource Name (ARN) specifying the log group. Any `:-` suffix added by the API, denoting all CloudWatch Log Streams under the CloudWatch Log Group, is removed for greater compatibility with other AWS services that do not accept the suffix.
  public arn?: string;

  /*
The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group,
AWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires
permissions for the CMK whenever the encrypted data is requested.
*/
  public kmsKeyId?: string;

  // The name of the log group. If omitted, this provider will assign a random, unique name.
  public name?: string;

  /*
Specifies the number of days
you want to retain log events in the specified log group.  Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, 3653, and 0.
If you select 0, the events in the log group are always retained and never expire.
*/
  public retentionInDays?: number;

  // Set to true if you do not wish the log group (and any logs it may contain) to be deleted at destroy time, and instead just remove the log group from the state.
  public skipDestroy?: boolean;

  // Specified the log class of the log group. Possible values are: `STANDARD` or `INFREQUENT_ACCESS`.
  public logGroupClass?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'retentionInDays',
        'Specifies the number of days\nyou want to retain log events in the specified log group.  Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, 3653, and 0.\nIf you select 0, the events in the log group are always retained and never expire.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'skipDestroy',
        'Set to true if you do not wish the log group (and any logs it may contain) to be deleted at destroy time, and instead just remove the log group from the state.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'kmsKeyId',
        'The ARN of the KMS Key to use when encrypting log data. Please note, after the AWS KMS CMK is disassociated from the log group,\nAWS CloudWatch Logs stops encrypting newly ingested data for the log group. All previously ingested data remains encrypted, and AWS CloudWatch Logs requires\npermissions for the CMK whenever the encrypted data is requested.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'logGroupClass',
        'Specified the log class of the log group. Possible values are: `STANDARD` or `INFREQUENT_ACCESS`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the log group. If omitted, this provider will assign a random, unique name.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'namePrefix',
        'Creates a unique name beginning with the specified prefix. Conflicts with `name`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
