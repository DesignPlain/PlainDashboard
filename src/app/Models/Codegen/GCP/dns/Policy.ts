import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dns_PolicyAlternativeNameServerConfig,
  Dns_PolicyAlternativeNameServerConfig_GetTypes,
} from "../types/Dns_PolicyAlternativeNameServerConfig";
import {
  Dns_PolicyNetwork,
  Dns_PolicyNetwork_GetTypes,
} from "../types/Dns_PolicyNetwork";

export interface PolicyArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Sets an alternative name server for the associated networks.
When specified, all DNS queries are forwarded to a name server that you choose.
Names such as .internal are not available when an alternative name server is specified.
Structure is documented below.
*/
  AlternativeNameServerConfig?: Dns_PolicyAlternativeNameServerConfig;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  Description?: string;

  /*
Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.
*/
  EnableInboundForwarding?: boolean;

  /*
Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set.
*/
  EnableLogging?: boolean;

  /*
User assigned name for this policy.


- - -
*/
  Name?: string;

  /*
List of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  Networks?: Array<Dns_PolicyNetwork>;
}
export class Policy extends Resource {
  /*
Allows networks bound to this policy to receive DNS queries sent
by VMs or applications over VPN connections. When enabled, a
virtual IP address will be allocated from each of the sub-networks
that are bound to this policy.
*/
  public EnableInboundForwarding?: boolean;

  /*
Controls whether logging is enabled for the networks bound to this policy.
Defaults to no logging if not set.
*/
  public EnableLogging?: boolean;

  /*
User assigned name for this policy.


- - -
*/
  public Name?: string;

  /*
List of network names specifying networks to which this policy is applied.
Structure is documented below.
*/
  public Networks?: Array<Dns_PolicyNetwork>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Sets an alternative name server for the associated networks.
When specified, all DNS queries are forwarded to a name server that you choose.
Names such as .internal are not available when an alternative name server is specified.
Structure is documented below.
*/
  public AlternativeNameServerConfig?: Dns_PolicyAlternativeNameServerConfig;

  // A textual description field. Defaults to 'Managed by Pulumi'.
  public Description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "AlternativeNameServerConfig",
        "Sets an alternative name server for the associated networks.\nWhen specified, all DNS queries are forwarded to a name server that you choose.\nNames such as .internal are not available when an alternative name server is specified.\nStructure is documented below.",
        Dns_PolicyAlternativeNameServerConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A textual description field. Defaults to 'Managed by Pulumi'.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableInboundForwarding",
        "Allows networks bound to this policy to receive DNS queries sent\nby VMs or applications over VPN connections. When enabled, a\nvirtual IP address will be allocated from each of the sub-networks\nthat are bound to this policy.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "EnableLogging",
        "Controls whether logging is enabled for the networks bound to this policy.\nDefaults to no logging if not set.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User assigned name for this policy.\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Networks",
        "List of network names specifying networks to which this policy is applied.\nStructure is documented below.",
        Dns_PolicyNetwork_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
