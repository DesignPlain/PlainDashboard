import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource {
  // An IP address or a block of IP addresses in CIDR notation. AWS Network Firewall supports all address ranges for IPv4.
  addressDefinition?: string;
}

export function networkfirewall_TlsInspectionConfigurationTlsInspectionConfigurationServerCertificateConfigurationScopeSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'addressDefinition',
      'An IP address or a block of IP addresses in CIDR notation. AWS Network Firewall supports all address ranges for IPv4.',
      () => [],
      true,
      false,
    ),
  ];
}
