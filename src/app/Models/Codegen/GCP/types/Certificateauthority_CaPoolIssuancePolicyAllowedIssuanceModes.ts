import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes {
  // When true, allows callers to create Certificates by specifying a CertificateConfig.
  AllowConfigBasedIssuance?: boolean;

  // When true, allows callers to create Certificates by specifying a CSR.
  AllowCsrBasedIssuance?: boolean;
}

export function Certificateauthority_CaPoolIssuancePolicyAllowedIssuanceModes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "AllowConfigBasedIssuance",
      "When true, allows callers to create Certificates by specifying a CertificateConfig.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "AllowCsrBasedIssuance",
      "When true, allows callers to create Certificates by specifying a CSR.",
      [],
      true,
      false,
    ),
  ];
}
