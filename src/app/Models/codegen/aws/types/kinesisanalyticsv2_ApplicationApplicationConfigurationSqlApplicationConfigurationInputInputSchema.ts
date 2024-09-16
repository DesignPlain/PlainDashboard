import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn_GetTypes,
} from './kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn';
import {
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat,
  kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat_GetTypes,
} from './kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema {
  // Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
  recordColumns?: Array<kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn>;

  // Specifies the encoding of the records in the streaming source. For example, `UTF-8`.
  recordEncoding?: string;

  // Specifies the format of the records on the streaming source.
  recordFormat?: kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchema_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'recordColumns',
      'Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.',
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'recordEncoding',
      'Specifies the encoding of the records in the streaming source. For example, `UTF-8`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'recordFormat',
      'Specifies the format of the records on the streaming source.',
      () =>
        kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordFormat_GetTypes(),
      true,
      false,
    ),
  ];
}
