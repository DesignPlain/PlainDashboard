import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  networkfirewall_FirewallEncryptionConfiguration,
  networkfirewall_FirewallEncryptionConfiguration_GetTypes,
} from "../types/networkfirewall_FirewallEncryptionConfiguration";
import {
  networkfirewall_FirewallSubnetMapping,
  networkfirewall_FirewallSubnetMapping_GetTypes,
} from "../types/networkfirewall_FirewallSubnetMapping";
import {
  networkfirewall_FirewallFirewallStatus,
  networkfirewall_FirewallFirewallStatus_GetTypes,
} from "../types/networkfirewall_FirewallFirewallStatus";

export interface FirewallArgs {
  // A flag indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. Defaults to `false`.
  subnetChangeProtection?: boolean;

  // The Amazon Resource Name (ARN) of the VPC Firewall policy.
  firewallPolicyArn?: string;

  // A flag indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. Defaults to `false`.
  firewallPolicyChangeProtection?: boolean;

  // KMS encryption configuration settings. See Encryption Configuration below for details.
  encryptionConfiguration?: networkfirewall_FirewallEncryptionConfiguration;

  // A friendly name of the firewall.
  name?: string;

  // Set of configuration blocks describing the public subnets. Each subnet must belong to a different Availability Zone in the VPC. AWS Network Firewall creates a firewall endpoint in each subnet. See Subnet Mapping below for details.
  subnetMappings?: Array<networkfirewall_FirewallSubnetMapping>;

  // Map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The unique identifier of the VPC where AWS Network Firewall should create the firewall.
  vpcId?: string;

  // A flag indicating whether the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. Defaults to `false`.
  deleteProtection?: boolean;

  // A friendly description of the firewall.
  description?: string;
}
export class Firewall extends Resource {
  // The unique identifier of the VPC where AWS Network Firewall should create the firewall.
  public vpcId?: string;

  // Nested list of information about the current status of the firewall.
  public firewallStatuses?: Array<networkfirewall_FirewallFirewallStatus>;

  // A friendly name of the firewall.
  public name?: string;

  // Set of configuration blocks describing the public subnets. Each subnet must belong to a different Availability Zone in the VPC. AWS Network Firewall creates a firewall endpoint in each subnet. See Subnet Mapping below for details.
  public subnetMappings?: Array<networkfirewall_FirewallSubnetMapping>;

  // Map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A string token used when updating a firewall.
  public updateToken?: string;

  // The Amazon Resource Name (ARN) that identifies the firewall.
  public arn?: string;

  // A friendly description of the firewall.
  public description?: string;

  // KMS encryption configuration settings. See Encryption Configuration below for details.
  public encryptionConfiguration?: networkfirewall_FirewallEncryptionConfiguration;

  // A flag indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. Defaults to `false`.
  public subnetChangeProtection?: boolean;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A flag indicating whether the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. Defaults to `false`.
  public deleteProtection?: boolean;

  // The Amazon Resource Name (ARN) of the VPC Firewall policy.
  public firewallPolicyArn?: string;

  // A flag indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. Defaults to `false`.
  public firewallPolicyChangeProtection?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "subnetChangeProtection",
        "A flag indicating whether the firewall is protected against changes to the subnet associations. Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "firewallPolicyArn",
        "The Amazon Resource Name (ARN) of the VPC Firewall policy.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "KMS encryption configuration settings. See Encryption Configuration below for details.",
        networkfirewall_FirewallEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "subnetMappings",
        "Set of configuration blocks describing the public subnets. Each subnet must belong to a different Availability Zone in the VPC. AWS Network Firewall creates a firewall endpoint in each subnet. See Subnet Mapping below for details.",
        networkfirewall_FirewallSubnetMapping_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The unique identifier of the VPC where AWS Network Firewall should create the firewall.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deleteProtection",
        "A flag indicating whether the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "firewallPolicyChangeProtection",
        "A flag indicating whether the firewall is protected against a change to the firewall policy association. Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name of the firewall.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A friendly description of the firewall.",
        [],
        false,
        false,
      ),
    ];
  }
}
