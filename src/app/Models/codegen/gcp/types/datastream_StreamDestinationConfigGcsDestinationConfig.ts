import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat,
  datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat_GetTypes,
} from './datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat';
import {
  datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat,
  datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat_GetTypes,
} from './datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat';

export interface datastream_StreamDestinationConfigGcsDestinationConfig {
  // AVRO file format configuration.
  avroFileFormat?: datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat;

  /*
The maximum duration for which new events are added before a file is closed and a new file is created.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
*/
  fileRotationInterval?: string;

  // The maximum file size to be saved in the bucket.
  fileRotationMb?: number;

  /*
JSON file format configuration.
Structure is documented below.
*/
  jsonFileFormat?: datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat;

  // Path inside the Cloud Storage bucket to write data to.
  path?: string;
}

export function datastream_StreamDestinationConfigGcsDestinationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'avroFileFormat',
      'AVRO file format configuration.',
      () =>
        datastream_StreamDestinationConfigGcsDestinationConfigAvroFileFormat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileRotationInterval',
      'The maximum duration for which new events are added before a file is closed and a new file is created.\nA duration in seconds with up to nine fractional digits, terminated by \'s\'. Example: "3.5s". Defaults to 900s.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'fileRotationMb',
      'The maximum file size to be saved in the bucket.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'jsonFileFormat',
      'JSON file format configuration.\nStructure is documented below.',
      () =>
        datastream_StreamDestinationConfigGcsDestinationConfigJsonFileFormat_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'path',
      'Path inside the Cloud Storage bucket to write data to.',
      () => [],
      false,
      false,
    ),
  ];
}
