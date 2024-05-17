import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig,
  Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig_GetTypes,
} from "./Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig";

export interface Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig {
  /*
Defines a CertificateAuthorityServiceConfig.
Structure is documented below.
*/
  CertificateAuthorityServiceConfig?: Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig;
}

export function Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "CertificateAuthorityServiceConfig",
      "Defines a CertificateAuthorityServiceConfig.\nStructure is documented below.",
      Certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
