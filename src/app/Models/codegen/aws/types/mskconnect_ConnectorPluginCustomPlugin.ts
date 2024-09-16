import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface mskconnect_ConnectorPluginCustomPlugin {
  // The Amazon Resource Name (ARN) of the custom plugin.
  arn?: string;

  // The revision of the custom plugin.
  revision?: number;
}

export function mskconnect_ConnectorPluginCustomPlugin_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'The Amazon Resource Name (ARN) of the custom plugin.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'revision',
      'The revision of the custom plugin.',
      () => [],
      true,
      true,
    ),
  ];
}
