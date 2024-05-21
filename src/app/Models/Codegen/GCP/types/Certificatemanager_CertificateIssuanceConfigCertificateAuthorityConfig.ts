import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig,
  certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig_GetTypes,
} from "./certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig";

export interface certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig {
  /*
Defines a CertificateAuthorityServiceConfig.
Structure is documented below.
*/
  certificateAuthorityServiceConfig?: certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig;
}

export function certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "certificateAuthorityServiceConfig",
      "Defines a CertificateAuthorityServiceConfig.\nStructure is documented below.",
      certificatemanager_CertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
