import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  qldb_StreamKinesisConfiguration,
  qldb_StreamKinesisConfiguration_GetTypes,
} from '../types/qldb_StreamKinesisConfiguration';

export interface StreamArgs {
  // The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it. It must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.
  exclusiveEndTime?: string;

  // The inclusive start date and time from which to start streaming journal data. This parameter must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.  This cannot be in the future and must be before `exclusive_end_time`.  If you provide a value that is before the ledger's `CreationDateTime`, QLDB effectively defaults it to the ledger's `CreationDateTime`.
  inclusiveStartTime?: string;

  // The configuration settings of the Kinesis Data Streams destination for your stream request. Documented below.
  kinesisConfiguration?: qldb_StreamKinesisConfiguration;

  // The name of the QLDB ledger.
  ledgerName?: string;

  // The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.
  roleArn?: string;

  // The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.  Your stream name must be unique among other active streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in the [Amazon QLDB Developer Guide](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming).
  streamName?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Stream extends DS_Resource {
  // The ARN of the QLDB Stream.
  public arn?: string;

  // The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.
  public roleArn?: string;

  // The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.  Your stream name must be unique among other active streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in the [Amazon QLDB Developer Guide](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming).
  public streamName?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The exclusive date and time that specifies when the stream ends. If you don't define this parameter, the stream runs indefinitely until you cancel it. It must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.
  public exclusiveEndTime?: string;

  // The inclusive start date and time from which to start streaming journal data. This parameter must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.  This cannot be in the future and must be before `exclusive_end_time`.  If you provide a value that is before the ledger's `CreationDateTime`, QLDB effectively defaults it to the ledger's `CreationDateTime`.
  public inclusiveStartTime?: string;

  // The configuration settings of the Kinesis Data Streams destination for your stream request. Documented below.
  public kinesisConfiguration?: qldb_StreamKinesisConfiguration;

  // The name of the QLDB ledger.
  public ledgerName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'exclusiveEndTime',
        'The exclusive date and time that specifies when the stream ends. If you don\'t define this parameter, the stream runs indefinitely until you cancel it. It must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'inclusiveStartTime',
        'The inclusive start date and time from which to start streaming journal data. This parameter must be in ISO 8601 date and time format and in Universal Coordinated Time (UTC). For example: `"2019-06-13T21:36:34Z"`.  This cannot be in the future and must be before `exclusive_end_time`.  If you provide a value that is before the ledger\'s `CreationDateTime`, QLDB effectively defaults it to the ledger\'s `CreationDateTime`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'kinesisConfiguration',
        'The configuration settings of the Kinesis Data Streams destination for your stream request. Documented below.',
        () => qldb_StreamKinesisConfiguration_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ledgerName',
        'The name of the QLDB ledger.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The Amazon Resource Name (ARN) of the IAM role that grants QLDB permissions for a journal stream to write data records to a Kinesis Data Streams resource.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'streamName',
        'The name that you want to assign to the QLDB journal stream. User-defined names can help identify and indicate the purpose of a stream.  Your stream name must be unique among other active streams for a given ledger. Stream names have the same naming constraints as ledger names, as defined in the [Amazon QLDB Developer Guide](https://docs.aws.amazon.com/qldb/latest/developerguide/limits.html#limits.naming).',
        () => [],
        true,
        true,
      ),
    ];
  }
}
