import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration,
  networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration_GetTypes,
} from '../types/networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration';
import {
  networkfirewall_TlsInspectionConfigurationCertificateAuthority,
  networkfirewall_TlsInspectionConfigurationCertificateAuthority_GetTypes,
} from '../types/networkfirewall_TlsInspectionConfigurationCertificateAuthority';
import {
  networkfirewall_TlsInspectionConfigurationCertificate,
  networkfirewall_TlsInspectionConfigurationCertificate_GetTypes,
} from '../types/networkfirewall_TlsInspectionConfigurationCertificate';
import {
  networkfirewall_TlsInspectionConfigurationEncryptionConfiguration,
  networkfirewall_TlsInspectionConfigurationEncryptionConfiguration_GetTypes,
} from '../types/networkfirewall_TlsInspectionConfigurationEncryptionConfiguration';
import {
  networkfirewall_TlsInspectionConfigurationTimeouts,
  networkfirewall_TlsInspectionConfigurationTimeouts_GetTypes,
} from '../types/networkfirewall_TlsInspectionConfigurationTimeouts';

export interface TlsInspectionConfigurationArgs {
  // Description of the TLS inspection configuration.
  description?: string;

  // Encryption configuration block. Detailed below.
  encryptionConfigurations?: Array<networkfirewall_TlsInspectionConfigurationEncryptionConfiguration>;

  // Descriptive name of the TLS inspection configuration.
  name?: string;

  //
  tags?: Map<string, string>;

  //
  timeouts?: networkfirewall_TlsInspectionConfigurationTimeouts;

  /*
TLS inspection configuration block. Detailed below.

The following arguments are optional:
*/
  tlsInspectionConfiguration?: networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration;
}
export class TlsInspectionConfiguration extends DS_Resource {
  // A unique identifier for the TLS inspection configuration.
  public tlsInspectionConfigurationId?: string;

  // Certificate Manager certificate block. See Certificate Authority below for details.
  public certificateAuthorities?: Array<networkfirewall_TlsInspectionConfigurationCertificateAuthority>;

  // Descriptive name of the TLS inspection configuration.
  public name?: string;

  //
  public tags?: Map<string, string>;

  /*
TLS inspection configuration block. Detailed below.

The following arguments are optional:
*/
  public tlsInspectionConfiguration?: networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration;

  // Number of firewall policies that use this TLS inspection configuration.
  public numberOfAssociations?: number;

  //
  public tagsAll?: Map<string, string>;

  //
  public timeouts?: networkfirewall_TlsInspectionConfigurationTimeouts;

  // String token used when updating the rule group.
  public updateToken?: string;

  // ARN of the TLS Inspection Configuration.
  public arn?: string;

  // List of certificate blocks describing certificates associated with the TLS inspection configuration. See Certificates below for details.
  public certificates?: Array<networkfirewall_TlsInspectionConfigurationCertificate>;

  // Description of the TLS inspection configuration.
  public description?: string;

  // Encryption configuration block. Detailed below.
  public encryptionConfigurations?: Array<networkfirewall_TlsInspectionConfigurationEncryptionConfiguration>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the TLS inspection configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'encryptionConfigurations',
        'Encryption configuration block. Detailed below.',
        () =>
          networkfirewall_TlsInspectionConfigurationEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'Descriptive name of the TLS inspection configuration.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        '',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'timeouts',
        '',
        () => networkfirewall_TlsInspectionConfigurationTimeouts_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'tlsInspectionConfiguration',
        'TLS inspection configuration block. Detailed below.\n\nThe following arguments are optional:',
        () =>
          networkfirewall_TlsInspectionConfigurationTlsInspectionConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
