import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  networkfirewall_FirewallPolicyFirewallPolicy,
  networkfirewall_FirewallPolicyFirewallPolicy_GetTypes,
} from "../types/networkfirewall_FirewallPolicyFirewallPolicy";
import {
  networkfirewall_FirewallPolicyEncryptionConfiguration,
  networkfirewall_FirewallPolicyEncryptionConfiguration_GetTypes,
} from "../types/networkfirewall_FirewallPolicyEncryptionConfiguration";

export interface FirewallPolicyArgs {
  // KMS encryption configuration settings. See Encryption Configuration below for details.
  encryptionConfiguration?: networkfirewall_FirewallPolicyEncryptionConfiguration;

  // A configuration block describing the rule groups and policy actions to use in the firewall policy. See Firewall Policy below for details.
  firewallPolicy?: networkfirewall_FirewallPolicyFirewallPolicy;

  // A friendly name of the firewall policy.
  name?: string;

  // Map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A friendly description of the firewall policy.
  description?: string;
}
export class FirewallPolicy extends DS_Resource {
  // A string token used when updating a firewall policy.
  public updateToken?: string;

  // The Amazon Resource Name (ARN) that identifies the firewall policy.
  public arn?: string;

  // A friendly description of the firewall policy.
  public description?: string;

  // KMS encryption configuration settings. See Encryption Configuration below for details.
  public encryptionConfiguration?: networkfirewall_FirewallPolicyEncryptionConfiguration;

  // A configuration block describing the rule groups and policy actions to use in the firewall policy. See Firewall Policy below for details.
  public firewallPolicy?: networkfirewall_FirewallPolicyFirewallPolicy;

  // A friendly name of the firewall policy.
  public name?: string;

  // Map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "KMS encryption configuration settings. See Encryption Configuration below for details.",
        () => networkfirewall_FirewallPolicyEncryptionConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "firewallPolicy",
        "A configuration block describing the rule groups and policy actions to use in the firewall policy. See Firewall Policy below for details.",
        () => networkfirewall_FirewallPolicyFirewallPolicy_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A friendly name of the firewall policy.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of resource tags to associate with the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A friendly description of the firewall policy.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
