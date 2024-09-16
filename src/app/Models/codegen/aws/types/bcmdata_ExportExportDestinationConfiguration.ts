import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  bcmdata_ExportExportDestinationConfigurationS3Destination,
  bcmdata_ExportExportDestinationConfigurationS3Destination_GetTypes,
} from './bcmdata_ExportExportDestinationConfigurationS3Destination';

export interface bcmdata_ExportExportDestinationConfiguration {
  // Object that describes the destination of the data exports file. See the `s3_destination` argument reference below.
  s3Destinations?: Array<bcmdata_ExportExportDestinationConfigurationS3Destination>;
}

export function bcmdata_ExportExportDestinationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      's3Destinations',
      'Object that describes the destination of the data exports file. See the `s3_destination` argument reference below.',
      () =>
        bcmdata_ExportExportDestinationConfigurationS3Destination_GetTypes(),
      false,
      false,
    ),
  ];
}
