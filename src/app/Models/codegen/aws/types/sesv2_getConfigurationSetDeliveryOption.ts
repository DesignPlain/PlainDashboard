import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface sesv2_getConfigurationSetDeliveryOption {
  // The name of the dedicated IP pool to associate with the configuration set.
  sendingPoolName?: string;

  // Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
  tlsPolicy?: string;
}

export function sesv2_getConfigurationSetDeliveryOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'sendingPoolName',
      'The name of the dedicated IP pool to associate with the configuration set.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'tlsPolicy',
      'Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).',
      () => [],
      true,
      false,
    ),
  ];
}
