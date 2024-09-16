import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dns_PolicyAlternativeNameServerConfig,
  dns_PolicyAlternativeNameServerConfig_GetTypes,
} from '../types/dns_PolicyAlternativeNameServerConfig';
import {
  dns_PolicyNetwork,
  dns_PolicyNetwork_GetTypes,
} from '../types/dns_PolicyNetwork';

export interface PolicyArgs {
  /*
Sets an alternative name server for the associated networks.
When specified, all DNS queries are forwarded to a name server that you choose.
Names such as .internal are not available when an alternative name server is specified.
Structure is documented below.
*/
  alternativeNameServerConfig?: dns_PolicyAlternativeNameServerConfig;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  description?: string;

  /*
Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.
*/
  enableInboundForwarding?: boolean;

  /*
Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set.
*/
  enableLogging?: boolean;

  /*
User assigned name for this policy.


- - -
*/
  name?: string;

  /*
List of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  networks?: Array<dns_PolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Policy extends DS_Resource {
  /*
Sets an alternative name server for the associated networks.
When specified, all DNS queries are forwarded to a name server that you choose.
Names such as .internal are not available when an alternative name server is specified.
Structure is documented below.
*/
  public alternativeNameServerConfig?: dns_PolicyAlternativeNameServerConfig;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  public description?: string;

  /*
Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.
*/
  public enableInboundForwarding?: boolean;

  /*
Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set.
*/
  public enableLogging?: boolean;

  /*
User assigned name for this policy.


- - -
*/
  public name?: string;

  /*
List of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  public networks?: Array<dns_PolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'User assigned name for this policy.\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'networks',
        'List of network names specifying networks to which this policy is applied.\nStructure is documented below.',
        () => dns_PolicyNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'alternativeNameServerConfig',
        'Sets an alternative name server for the associated networks.\nWhen specified, all DNS queries are forwarded to a name server that you choose.\nNames such as .internal are not available when an alternative name server is specified.\nStructure is documented below.',
        () => dns_PolicyAlternativeNameServerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        "A textual description field. Defaults to 'Managed by Pulumi'.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableInboundForwarding',
        'Allows networks bound to this policy to receive DNS queries sent\nby VMs or applications over VPN connections. When enabled, a\nvirtual IP address will be allocated from each of the sub-networks\nthat are bound to this policy.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'enableLogging',
        'Controls whether logging is enabled for the networks bound to this policy.\nDefaults to no logging if not set.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
