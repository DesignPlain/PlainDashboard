import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn {
  // A reference to the data element in the streaming input or the reference data source.
  mapping?: string;

  // The name of the column that is created in the in-application input stream or reference table.
  name?: string;

  // The type of column created in the in-application input stream or reference table.
  sqlType?: string;
}

export function kinesisanalyticsv2_ApplicationApplicationConfigurationSqlApplicationConfigurationInputInputSchemaRecordColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sqlType',
      'The type of column created in the in-application input stream or reference table.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'mapping',
      'A reference to the data element in the streaming input or the reference data source.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the column that is created in the in-application input stream or reference table.',
      () => [],
      true,
      false,
    ),
  ];
}
