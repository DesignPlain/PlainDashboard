import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface iot_DomainConfigurationAuthorizerConfig {
  // A Boolean that specifies whether the domain configuration's authorization service can be overridden.
  allowAuthorizerOverride?: boolean;

  // The name of the authorization service for a domain configuration.
  defaultAuthorizerName?: string;
}

export function iot_DomainConfigurationAuthorizerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowAuthorizerOverride',
      "A Boolean that specifies whether the domain configuration's authorization service can be overridden.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'defaultAuthorizerName',
      'The name of the authorization service for a domain configuration.',
      () => [],
      false,
      false,
    ),
  ];
}
