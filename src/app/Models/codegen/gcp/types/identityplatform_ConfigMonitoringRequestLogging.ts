import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface identityplatform_ConfigMonitoringRequestLogging {
  // Whether logging is enabled for this project or not.
  enabled?: boolean;
}

export function identityplatform_ConfigMonitoringRequestLogging_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enabled',
      'Whether logging is enabled for this project or not.',
      () => [],
      false,
      false,
    ),
  ];
}
