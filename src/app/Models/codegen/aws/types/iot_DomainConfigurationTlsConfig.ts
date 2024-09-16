import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_DomainConfigurationTlsConfig {
  // The security policy for a domain configuration.
  securityPolicy?: string;
}

export function iot_DomainConfigurationTlsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'securityPolicy',
      'The security policy for a domain configuration.',
      () => [],
      false,
      false,
    ),
  ];
}
