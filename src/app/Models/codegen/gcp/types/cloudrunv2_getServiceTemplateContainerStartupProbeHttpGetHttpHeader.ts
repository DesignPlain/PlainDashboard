import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader {
  // The name of the Cloud Run v2 Service.
  name?: string;

  // The header field value
  value?: string;
}

export function cloudrunv2_getServiceTemplateContainerStartupProbeHttpGetHttpHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the Cloud Run v2 Service.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The header field value',
      () => [],
      true,
      false,
    ),
  ];
}
