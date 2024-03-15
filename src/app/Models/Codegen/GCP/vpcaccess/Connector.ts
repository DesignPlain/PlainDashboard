import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ConnectorSubnet } from "../types/ConnectorSubnet";

export interface ConnectorArgs {
  // Maximum value of instances in autoscaling group underlying the connector.
  MaxInstances?: number;

  // Minimum value of instances in autoscaling group underlying the connector.
  MinInstances?: number;

  // Minimum throughput of the connector in Mbps. Default and min is 200.
  MinThroughput?: number;

  /*
The name of the resource (Max 25 characters).


- - -
*/
  Name?: string;

  // Name or self_link of the VPC network. Required if `ip_cidr_range` is set.
  Network?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
  IpCidrRange?: string;

  // Machine type of VM Instance underlying connector. Default is e2-micro
  MachineType?: string;

  /*
The subnet in which to house the connector
Structure is documented below.
*/
  Subnet?: ConnectorSubnet;

  // Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.
  MaxThroughput?: number;

  // Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  Region?: string;
}
export class Connector extends Resource {
  // List of projects using the connector.
  public ConnectedProjects?: Array<string>;

  // Maximum value of instances in autoscaling group underlying the connector.
  public MaxInstances?: number;

  // The fully qualified name of this VPC connector
  public SelfLink?: string;

  /*
The subnet in which to house the connector
Structure is documented below.
*/
  public Subnet?: ConnectorSubnet;

  // Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.
  public MaxThroughput?: number;

  // Name or self_link of the VPC network. Required if `ip_cidr_range` is set.
  public Network?: string;

  // State of the VPC access connector.
  public State?: string;

  // Minimum value of instances in autoscaling group underlying the connector.
  public MinInstances?: number;

  // Minimum throughput of the connector in Mbps. Default and min is 200.
  public MinThroughput?: number;

  /*
The name of the resource (Max 25 characters).


- - -
*/
  public Name?: string;

  // Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  public Region?: string;

  // The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.
  public IpCidrRange?: string;

  // Machine type of VM Instance underlying connector. Default is e2-micro
  public MachineType?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "MinInstances",
        "Minimum value of instances in autoscaling group underlying the connector.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Network",
        "Name or self_link of the VPC network. Required if `ip_cidr_range` is set.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Subnet",
        "The subnet in which to house the connector\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "Region where the VPC Access connector resides. If it is not provided, the provider region is used.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxInstances",
        "Maximum value of instances in autoscaling group underlying the connector.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the resource (Max 25 characters).\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "IpCidrRange",
        "The range of internal addresses that follows RFC 4632 notation. Example: `10.132.0.0/28`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MachineType",
        "Machine type of VM Instance underlying connector. Default is e2-micro",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MaxThroughput",
        "Maximum throughput of the connector in Mbps, must be greater than `min_throughput`. Default is 300.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "MinThroughput",
        "Minimum throughput of the connector in Mbps. Default and min is 200.",
      ),
    ];
  }
}
