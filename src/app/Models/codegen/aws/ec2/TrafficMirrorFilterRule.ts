import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_TrafficMirrorFilterRuleDestinationPortRange,
  ec2_TrafficMirrorFilterRuleDestinationPortRange_GetTypes,
} from '../types/ec2_TrafficMirrorFilterRuleDestinationPortRange';
import {
  ec2_TrafficMirrorFilterRuleSourcePortRange,
  ec2_TrafficMirrorFilterRuleSourcePortRange_GetTypes,
} from '../types/ec2_TrafficMirrorFilterRuleSourcePortRange';

export interface TrafficMirrorFilterRuleArgs {
  // Description of the traffic mirror filter rule.
  description?: string;

  // Destination CIDR block to assign to the Traffic Mirror rule.
  destinationCidrBlock?: string;

  // Destination port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below
  destinationPortRange?: ec2_TrafficMirrorFilterRuleDestinationPortRange;

  // Action to take (accept | reject) on the filtered traffic. Valid values are `accept` and `reject`
  ruleAction?: string;

  /*
Direction of traffic to be captured. Valid values are `ingress` and `egress`

Traffic mirror port range support following attributes:
*/
  trafficDirection?: string;

  // ID of the traffic mirror filter to which this rule should be added
  trafficMirrorFilterId?: string;

  // Protocol number, for example 17 (UDP), to assign to the Traffic Mirror rule. For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website.
  protocol?: number;

  // Number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
  ruleNumber?: number;

  // Source CIDR block to assign to the Traffic Mirror rule.
  sourceCidrBlock?: string;

  // Source port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below
  sourcePortRange?: ec2_TrafficMirrorFilterRuleSourcePortRange;
}
export class TrafficMirrorFilterRule extends DS_Resource {
  // ARN of the traffic mirror filter rule.
  public arn?: string;

  // Description of the traffic mirror filter rule.
  public description?: string;

  // Destination CIDR block to assign to the Traffic Mirror rule.
  public destinationCidrBlock?: string;

  // Destination port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below
  public destinationPortRange?: ec2_TrafficMirrorFilterRuleDestinationPortRange;

  // Action to take (accept | reject) on the filtered traffic. Valid values are `accept` and `reject`
  public ruleAction?: string;

  // Source CIDR block to assign to the Traffic Mirror rule.
  public sourceCidrBlock?: string;

  // Protocol number, for example 17 (UDP), to assign to the Traffic Mirror rule. For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website.
  public protocol?: number;

  // Number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.
  public ruleNumber?: number;

  // Source port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below
  public sourcePortRange?: ec2_TrafficMirrorFilterRuleSourcePortRange;

  /*
Direction of traffic to be captured. Valid values are `ingress` and `egress`

Traffic mirror port range support following attributes:
*/
  public trafficDirection?: string;

  // ID of the traffic mirror filter to which this rule should be added
  public trafficMirrorFilterId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'ruleAction',
        'Action to take (accept | reject) on the filtered traffic. Valid values are `accept` and `reject`',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'trafficDirection',
        'Direction of traffic to be captured. Valid values are `ingress` and `egress`\n\nTraffic mirror port range support following attributes:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'ruleNumber',
        'Number of the Traffic Mirror rule. This number must be unique for each Traffic Mirror rule in a given direction. The rules are processed in ascending order by rule number.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourceCidrBlock',
        'Source CIDR block to assign to the Traffic Mirror rule.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sourcePortRange',
        'Source port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below',
        () => ec2_TrafficMirrorFilterRuleSourcePortRange_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the traffic mirror filter rule.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'destinationCidrBlock',
        'Destination CIDR block to assign to the Traffic Mirror rule.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'destinationPortRange',
        'Destination port range. Supported only when the protocol is set to TCP(6) or UDP(17). See Traffic mirror port range documented below',
        () => ec2_TrafficMirrorFilterRuleDestinationPortRange_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'trafficMirrorFilterId',
        'ID of the traffic mirror filter to which this rule should be added',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'protocol',
        'Protocol number, for example 17 (UDP), to assign to the Traffic Mirror rule. For information about the protocol value, see [Protocol Numbers](https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml) on the Internet Assigned Numbers Authority (IANA) website.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
