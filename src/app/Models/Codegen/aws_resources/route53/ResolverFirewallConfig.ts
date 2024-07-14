import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ResolverFirewallConfigArgs {
  // Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall blocks queries that it is unable to evaluate properly. If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. Valid values: `ENABLED`, `DISABLED`.
  firewallFailOpen?: string;

  // The ID of the VPC that the configuration is for.
  resourceId?: string;
}
export class ResolverFirewallConfig extends Resource {
  // Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall blocks queries that it is unable to evaluate properly. If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. Valid values: `ENABLED`, `DISABLED`.
  public firewallFailOpen?: string;

  // The AWS account ID of the owner of the VPC that this firewall configuration applies to.
  public ownerId?: string;

  // The ID of the VPC that the configuration is for.
  public resourceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "resourceId",
        "The ID of the VPC that the configuration is for.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "firewallFailOpen",
        "Determines how Route 53 Resolver handles queries during failures, for example when all traffic that is sent to DNS Firewall fails to receive a reply. By default, fail open is disabled, which means the failure mode is closed. This approach favors security over availability. DNS Firewall blocks queries that it is unable to evaluate properly. If you enable this option, the failure mode is open. This approach favors availability over security. DNS Firewall allows queries to proceed if it is unable to properly evaluate them. Valid values: `ENABLED`, `DISABLED`.",
        [],
        false,
        false,
      ),
    ];
  }
}
