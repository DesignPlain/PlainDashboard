import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus,
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus_GetTypes,
} from "./networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus";
import {
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope,
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope_GetTypes,
} from "./networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope";
import {
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate,
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate_GetTypes,
} from "./networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate";

export interface networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration {
  // ARN of the imported certificate authority (CA) certificate within Certificate Manager (ACM) to use for outbound SSL/TLS inspection. See [Using SSL/TLS certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) for limitations on CA certificates.
  certificateAuthorityArn?: string;

  // Check Certificate Revocation Status block. Detailed below.
  checkCertificateRevocationStatus?: networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus;

  // Scope block. Detailed below.
  scopes?: Array<networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope>;

  // Server certificates to use for inbound SSL/TLS inspection. See [Using SSL/TLS certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html).
  serverCertificates?: Array<networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate>;
}

export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "serverCertificates",
      "Server certificates to use for inbound SSL/TLS inspection. See [Using SSL/TLS certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html).",
      () =>
        networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "certificateAuthorityArn",
      "ARN of the imported certificate authority (CA) certificate within Certificate Manager (ACM) to use for outbound SSL/TLS inspection. See [Using SSL/TLS certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) for limitations on CA certificates.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "checkCertificateRevocationStatus",
      "Check Certificate Revocation Status block. Detailed below.",
      () =>
        networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationCheckCertificateRevocationStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "scopes",
      "Scope block. Detailed below.",
      () =>
        networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScope_GetTypes(),
      false,
      false,
    ),
  ];
}
