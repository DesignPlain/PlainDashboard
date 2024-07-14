import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vmwareengine_ExternalAccessRuleSourceIpRange,
  vmwareengine_ExternalAccessRuleSourceIpRange_GetTypes,
} from "../types/vmwareengine_ExternalAccessRuleSourceIpRange";
import {
  vmwareengine_ExternalAccessRuleDestinationIpRange,
  vmwareengine_ExternalAccessRuleDestinationIpRange_GetTypes,
} from "../types/vmwareengine_ExternalAccessRuleDestinationIpRange";

export interface ExternalAccessRuleArgs {
  // The IP protocol to which the external access rule applies.
  ipProtocol?: string;

  /*
The resource name of the network policy.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
*/
  parent?: string;

  // External access rule priority, which determines the external access rule to use when multiple rules apply.
  priority?: number;

  /*
If source ranges are specified, the external access rule applies only to
traffic that has a source IP address in these ranges.
Structure is documented below.
*/
  sourceIpRanges?: Array<vmwareengine_ExternalAccessRuleSourceIpRange>;

  /*
The action that the external access rule performs.
Possible values are: `ALLOW`, `DENY`.
*/
  action?: string;

  /*
If destination ranges are specified, the external access rule applies only to
traffic that has a destination IP address in these ranges.
Structure is documented below.
*/
  destinationIpRanges?: Array<vmwareengine_ExternalAccessRuleDestinationIpRange>;

  // The ID of the external access rule.
  name?: string;

  // A list of source ports to which the external access rule applies.
  sourcePorts?: Array<string>;

  // User-provided description for the external access rule.
  description?: string;

  // A list of destination ports to which the external access rule applies.
  destinationPorts?: Array<string>;
}
export class ExternalAccessRule extends Resource {
  // External access rule priority, which determines the external access rule to use when multiple rules apply.
  public priority?: number;

  /*
The action that the external access rule performs.
Possible values are: `ALLOW`, `DENY`.
*/
  public action?: string;

  // User-provided description for the external access rule.
  public description?: string;

  // A list of source ports to which the external access rule applies.
  public sourcePorts?: Array<string>;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public updateTime?: string;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public createTime?: string;

  /*
The resource name of the network policy.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
*/
  public parent?: string;

  // The IP protocol to which the external access rule applies.
  public ipProtocol?: string;

  // The ID of the external access rule.
  public name?: string;

  /*
If source ranges are specified, the external access rule applies only to
traffic that has a source IP address in these ranges.
Structure is documented below.
*/
  public sourceIpRanges?: Array<vmwareengine_ExternalAccessRuleSourceIpRange>;

  // System-generated unique identifier for the resource.
  public uid?: string;

  /*
If destination ranges are specified, the external access rule applies only to
traffic that has a destination IP address in these ranges.
Structure is documented below.
*/
  public destinationIpRanges?: Array<vmwareengine_ExternalAccessRuleDestinationIpRange>;

  // A list of destination ports to which the external access rule applies.
  public destinationPorts?: Array<string>;

  // State of the Cluster.
  public state?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "ipProtocol",
        "The IP protocol to which the external access rule applies.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "priority",
        "External access rule priority, which determines the external access rule to use when multiple rules apply.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sourceIpRanges",
        "If source ranges are specified, the external access rule applies only to\ntraffic that has a source IP address in these ranges.\nStructure is documented below.",
        vmwareengine_ExternalAccessRuleSourceIpRange_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The ID of the external access rule.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "sourcePorts",
        "A list of source ports to which the external access rule applies.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinationPorts",
        "A list of destination ports to which the external access rule applies.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "parent",
        "The resource name of the network policy.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "action",
        "The action that the external access rule performs.\nPossible values are: `ALLOW`, `DENY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "destinationIpRanges",
        "If destination ranges are specified, the external access rule applies only to\ntraffic that has a destination IP address in these ranges.\nStructure is documented below.",
        vmwareengine_ExternalAccessRuleDestinationIpRange_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "User-provided description for the external access rule.",
        [],
        false,
        false,
      ),
    ];
  }
}
