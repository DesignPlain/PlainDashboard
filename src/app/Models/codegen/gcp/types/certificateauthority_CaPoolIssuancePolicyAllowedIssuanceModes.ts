import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes {
  // When true, allows callers to create Certificates by specifying a CertificateConfig.
  allowConfigBasedIssuance?: boolean;

  // When true, allows callers to create Certificates by specifying a CSR.
  allowCsrBasedIssuance?: boolean;
}

export function certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'allowConfigBasedIssuance',
      'When true, allows callers to create Certificates by specifying a CertificateConfig.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'allowCsrBasedIssuance',
      'When true, allows callers to create Certificates by specifying a CSR.',
      () => [],
      true,
      false,
    ),
  ];
}
