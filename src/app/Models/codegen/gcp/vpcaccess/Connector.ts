import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  vpcaccess_ConnectorSubnet,
  vpcaccess_ConnectorSubnet_GetTypes,
} from '../types/vpcaccess_ConnectorSubnet';

export interface ConnectorArgs {
  // Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.
  maxThroughput?: number;

  // Name or self_link of the VPC network. Required if `ip_cidr_range` is set.
  network?: string;

  // Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  region?: string;

  /*
The subnet in which to house the connector
Structure is documented below.
*/
  subnet?: vpcaccess_ConnectorSubnet;

  // The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
  ipCidrRange?: string;

  // Machine type of VM Instance underlying connector. Default is e2-micro
  machineType?: string;

  // Maximum value of instances in autoscaling group underlying the connector.
  maxInstances?: number;

  // Minimum value of instances in autoscaling group underlying the connector.
  minInstances?: number;

  // Minimum throughput of the connector in Mbps. Default and min is 200.
  minThroughput?: number;

  /*
The name of the resource (Max 25 characters).


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class Connector extends DS_Resource {
  /*
The name of the resource (Max 25 characters).


- - -
*/
  public name?: string;

  // State of the VPC access connector.
  public state?: string;

  // Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.
  public maxThroughput?: number;

  // Minimum throughput of the connector in Mbps. Default and min is 200.
  public minThroughput?: number;

  // List of projects using the connector.
  public connectedProjects?: Array<string>;

  /*
The subnet in which to house the connector
Structure is documented below.
*/
  public subnet?: vpcaccess_ConnectorSubnet;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The fully qualified name of this VPC connector
  public selfLink?: string;

  // The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
  public ipCidrRange?: string;

  // Minimum value of instances in autoscaling group underlying the connector.
  public minInstances?: number;

  // Name or self_link of the VPC network. Required if `ip_cidr_range` is set.
  public network?: string;

  // Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  public region?: string;

  // Machine type of VM Instance underlying connector. Default is e2-micro
  public machineType?: string;

  // Maximum value of instances in autoscaling group underlying the connector.
  public maxInstances?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'maxThroughput',
        'Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'network',
        'Name or self_link of the VPC network. Required if `ip_cidr_range` is set.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipCidrRange',
        'The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'machineType',
        'Machine type of VM Instance underlying connector. Default is e2-micro',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'maxInstances',
        'Maximum value of instances in autoscaling group underlying the connector.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minThroughput',
        'Minimum throughput of the connector in Mbps. Default and min is 200.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'Region where the VPC Access connector resides. If it is not provided, the provider region is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'subnet',
        'The subnet in which to house the connector\nStructure is documented below.',
        () => vpcaccess_ConnectorSubnet_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        'minInstances',
        'Minimum value of instances in autoscaling group underlying the connector.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the resource (Max 25 characters).\n\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
