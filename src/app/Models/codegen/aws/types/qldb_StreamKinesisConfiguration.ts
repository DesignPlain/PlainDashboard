import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface qldb_StreamKinesisConfiguration {
  // The Amazon Resource Name (ARN) of the Kinesis Data Streams resource.
  streamArn?: string;

  // Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the number of records sent per API call. Default: `true`.
  aggregationEnabled?: boolean;
}

export function qldb_StreamKinesisConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'streamArn',
      'The Amazon Resource Name (ARN) of the Kinesis Data Streams resource.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'aggregationEnabled',
      'Enables QLDB to publish multiple data records in a single Kinesis Data Streams record, increasing the number of records sent per API call. Default: `true`.',
      () => [],
      false,
      true,
    ),
  ];
}
