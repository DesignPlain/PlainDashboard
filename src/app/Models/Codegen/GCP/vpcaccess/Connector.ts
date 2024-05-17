import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vpcaccess_ConnectorSubnet,
  Vpcaccess_ConnectorSubnet_GetTypes,
} from "../types/Vpcaccess_ConnectorSubnet";

export interface ConnectorArgs {
  // Machine type of VM Instance underlying connector. Default is e2-micro
  MachineType?: string;

  // Maximum value of instances in autoscaling group underlying the connector.
  MaxInstances?: number;

  // Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.
  MaxThroughput?: number;

  // Minimum throughput of the connector in Mbps. Default and min is 200.
  MinThroughput?: number;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The subnet in which to house the connector
Structure is documented below.
*/
  Subnet?: Vpcaccess_ConnectorSubnet;

  // The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
  IpCidrRange?: string;

  // Minimum value of instances in autoscaling group underlying the connector.
  MinInstances?: number;

  /*
The name of the resource (Max 25 characters).


- - -
*/
  Name?: string;

  // Name or self_link of the VPC network. Required if `ip_cidr_range` is set.
  Network?: string;

  // Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  Region?: string;
}
export class Connector extends Resource {
  /*
The name of the resource (Max 25 characters).


- - -
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.
  public MaxThroughput?: number;

  // Minimum value of instances in autoscaling group underlying the connector.
  public MinInstances?: number;

  // State of the VPC access connector.
  public State?: string;

  /*
The subnet in which to house the connector
Structure is documented below.
*/
  public Subnet?: Vpcaccess_ConnectorSubnet;

  // Machine type of VM Instance underlying connector. Default is e2-micro
  public MachineType?: string;

  // Name or self_link of the VPC network. Required if `ip_cidr_range` is set.
  public Network?: string;

  // Maximum value of instances in autoscaling group underlying the connector.
  public MaxInstances?: number;

  // Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  public Region?: string;

  // The fully qualified name of this VPC connector
  public SelfLink?: string;

  // List of projects using the connector.
  public ConnectedProjects?: Array<string>;

  // The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
  public IpCidrRange?: string;

  // Minimum throughput of the connector in Mbps. Default and min is 200.
  public MinThroughput?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the resource (Max 25 characters).\n\n\n- - -",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "Name or self_link of the VPC network. Required if `ip_cidr_range` is set.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the VPC Access connector resides. If it is not provided, the provider region is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxInstances",
        "Maximum value of instances in autoscaling group underlying the connector.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinThroughput",
        "Minimum throughput of the connector in Mbps. Default and min is 200.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "Subnet",
        "The subnet in which to house the connector\nStructure is documented below.",
        Vpcaccess_ConnectorSubnet_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "IpCidrRange",
        "The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinInstances",
        "Minimum value of instances in autoscaling group underlying the connector.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "Machine type of VM Instance underlying connector. Default is e2-micro",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxThroughput",
        "Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.",
        [],
        false,
        true,
      ),
    ];
  }
}
