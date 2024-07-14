import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface iot_DomainConfigurationTlsConfig {
  // The security policy for a domain configuration.
  securityPolicy?: string;
}

export function iot_DomainConfigurationTlsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "securityPolicy",
      "The security policy for a domain configuration.",
      [],
      false,
      false,
    ),
  ];
}
