import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vmwareengine_ExternalAccessRuleDestinationIpRange,
  Vmwareengine_ExternalAccessRuleDestinationIpRange_GetTypes,
} from "../types/Vmwareengine_ExternalAccessRuleDestinationIpRange";
import {
  Vmwareengine_ExternalAccessRuleSourceIpRange,
  Vmwareengine_ExternalAccessRuleSourceIpRange_GetTypes,
} from "../types/Vmwareengine_ExternalAccessRuleSourceIpRange";

export interface ExternalAccessRuleArgs {
  /*
If destination ranges are specified, the external access rule applies only to
traffic that has a destination IP address in these ranges.
Structure is documented below.
*/
  DestinationIpRanges?: Array<Vmwareengine_ExternalAccessRuleDestinationIpRange>;

  // The IP protocol to which the external access rule applies.
  IpProtocol?: string;

  // The ID of the external access rule.
  Name?: string;

  // External access rule priority, which determines the external access rule to use when multiple rules apply.
  Priority?: number;

  /*
The action that the external access rule performs.
Possible values are: `ALLOW`, `DENY`.
*/
  Action?: string;

  // User-provided description for the external access rule.
  Description?: string;

  /*
If source ranges are specified, the external access rule applies only to
traffic that has a source IP address in these ranges.
Structure is documented below.
*/
  SourceIpRanges?: Array<Vmwareengine_ExternalAccessRuleSourceIpRange>;

  // A list of source ports to which the external access rule applies.
  SourcePorts?: Array<string>;

  // A list of destination ports to which the external access rule applies.
  DestinationPorts?: Array<string>;

  /*
The resource name of the network policy.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
*/
  Parent?: string;
}
export class ExternalAccessRule extends Resource {
  /*
The resource name of the network policy.
Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy
*/
  public Parent?: string;

  /*
If source ranges are specified, the external access rule applies only to
traffic that has a source IP address in these ranges.
Structure is documented below.
*/
  public SourceIpRanges?: Array<Vmwareengine_ExternalAccessRuleSourceIpRange>;

  // State of the Cluster.
  public State?: string;

  /*
Last updated time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine
fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public UpdateTime?: string;

  /*
Creation time of this resource.
A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and
up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
*/
  public CreateTime?: string;

  // External access rule priority, which determines the external access rule to use when multiple rules apply.
  public Priority?: number;

  /*
The action that the external access rule performs.
Possible values are: `ALLOW`, `DENY`.
*/
  public Action?: string;

  // The ID of the external access rule.
  public Name?: string;

  // A list of source ports to which the external access rule applies.
  public SourcePorts?: Array<string>;

  // User-provided description for the external access rule.
  public Description?: string;

  // A list of destination ports to which the external access rule applies.
  public DestinationPorts?: Array<string>;

  // The IP protocol to which the external access rule applies.
  public IpProtocol?: string;

  // System-generated unique identifier for the resource.
  public Uid?: string;

  /*
If destination ranges are specified, the external access rule applies only to
traffic that has a destination IP address in these ranges.
Structure is documented below.
*/
  public DestinationIpRanges?: Array<Vmwareengine_ExternalAccessRuleDestinationIpRange>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "SourcePorts",
        "A list of source ports to which the external access rule applies.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DestinationIpRanges",
        "If destination ranges are specified, the external access rule applies only to\ntraffic that has a destination IP address in these ranges.\nStructure is documented below.",
        Vmwareengine_ExternalAccessRuleDestinationIpRange_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "Priority",
        "External access rule priority, which determines the external access rule to use when multiple rules apply.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Action",
        "The action that the external access rule performs.\nPossible values are: `ALLOW`, `DENY`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "SourceIpRanges",
        "If source ranges are specified, the external access rule applies only to\ntraffic that has a source IP address in these ranges.\nStructure is documented below.",
        Vmwareengine_ExternalAccessRuleSourceIpRange_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Parent",
        "The resource name of the network policy.\nResource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.\nFor example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpProtocol",
        "The IP protocol to which the external access rule applies.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The ID of the external access rule.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User-provided description for the external access rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "DestinationPorts",
        "A list of destination ports to which the external access rule applies.",
        InputType_String_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
