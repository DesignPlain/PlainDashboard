import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface opsworks_MysqlLayerCloudwatchConfigurationLogStream {
  //
  batchCount?: number;

  //
  batchSize?: number;

  //
  logGroupName?: string;

  //
  multilineStartPattern?: string;

  //
  timeZone?: string;

  //
  bufferDuration?: number;

  //
  datetimeFormat?: string;

  //
  encoding?: string;

  //
  file?: string;

  //
  fileFingerprintLines?: string;

  //
  initialPosition?: string;
}

export function opsworks_MysqlLayerCloudwatchConfigurationLogStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'multilineStartPattern',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'encoding',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, 'file', '', () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      'initialPosition',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'logGroupName',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'batchSize',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'timeZone',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'bufferDuration',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'datetimeFormat',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'fileFingerprintLines',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'batchCount',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
