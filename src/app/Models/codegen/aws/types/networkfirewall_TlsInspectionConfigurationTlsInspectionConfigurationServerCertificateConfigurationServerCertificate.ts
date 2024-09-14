import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate {
  // ARN of the Certificate Manager SSL/TLS server certificate that's used for inbound SSL/TLS inspection.
  resourceArn?: string;
}

export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationServerCertificate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resourceArn",
      "ARN of the Certificate Manager SSL/TLS server certificate that's used for inbound SSL/TLS inspection.",
      () => [],
      false,
      false,
    ),
  ];
}
