import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration,
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration_GetTypes,
} from "./networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration";

export interface networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration {
  // Server certificate configurations that are associated with the TLS configuration. Detailed below.
  serverCertificateConfiguration?: networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration;
}

export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "serverCertificateConfiguration",
      "Server certificate configurations that are associated with the TLS configuration. Detailed below.",
      () =>
        networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
