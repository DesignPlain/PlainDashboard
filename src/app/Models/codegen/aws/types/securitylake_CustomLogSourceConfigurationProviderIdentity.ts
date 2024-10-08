import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface securitylake_CustomLogSourceConfigurationProviderIdentity {
  // The external ID used to estalish trust relationship with the AWS identity.
  externalId?: string;

  // The AWS identity principal.
  principal?: string;
}

export function securitylake_CustomLogSourceConfigurationProviderIdentity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'externalId',
      'The external ID used to estalish trust relationship with the AWS identity.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'principal',
      'The AWS identity principal.',
      () => [],
      true,
      false,
    ),
  ];
}
