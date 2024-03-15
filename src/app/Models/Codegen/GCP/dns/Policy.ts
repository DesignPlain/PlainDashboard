import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { PolicyAlternativeNameServerConfig } from "../types/PolicyAlternativeNameServerConfig";
import { PolicyNetwork } from "../types/PolicyNetwork";

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
  AlternativeNameServerConfig?: PolicyAlternativeNameServerConfig;

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
  Networks?: Array<PolicyNetwork>;
}
export class Policy extends Resource {
  // A textual description field. Defaults to 'Managed by Pulumi'.
  public Description?: string;

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
  public Networks?: Array<PolicyNetwork>;

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
  public AlternativeNameServerConfig?: PolicyAlternativeNameServerConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableInboundForwarding",
        "Allows networks bound to this policy to receive DNS queries sent\nby VMs or applications over VPN connections. When enabled, a\nvirtual IP address will be allocated from each of the sub-networks\nthat are bound to this policy.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableLogging",
        "Controls whether logging is enabled for the networks bound to this policy.\nDefaults to no logging if not set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "User assigned name for this policy.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Networks",
        "List of network names specifying networks to which this policy is applied.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "AlternativeNameServerConfig",
        "Sets an alternative name server for the associated networks.\nWhen specified, all DNS queries are forwarded to a name server that you choose.\nNames such as .internal are not available when an alternative name server is specified.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "A textual description field. Defaults to 'Managed by Pulumi'.",
      ),
    ];
  }
}
