import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader {
  // The header field name
  name?: string;

  // The header field value
  value?: string;
}

export function cloudrunv2_ServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'value',
      'The header field value',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'The header field name',
      () => [],
      true,
      false,
    ),
  ];
}
