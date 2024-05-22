import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lightsail_InstanceAddOn,
  lightsail_InstanceAddOn_GetTypes,
} from "../types/lightsail_InstanceAddOn";

export interface InstanceArgs {
  /*
The ID for a virtual private server image. A list of available
blueprint IDs can be obtained using the AWS CLI command:
[`aws lightsail get-blueprints`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-blueprints.html).
*/
  blueprintId?: string;

  /*
The bundle of specification information. A list of available
bundle IDs can be obtained using the AWS CLI command:
[`aws lightsail get-bundles`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-bundles.html).
*/
  bundleId?: string;

  // The IP address type of the Lightsail Instance. Valid Values: `dualstack` | `ipv4`.
  ipAddressType?: string;

  /*
The name of your key pair. Created in the
Lightsail console (cannot use `aws.ec2.KeyPair` at this time)
*/
  keyPairName?: string;

  /*
The Availability Zone in which to create your instance. A
list of available zones can be obtained using the AWS CLI command:
[`aws lightsail get-regions --include-availability-zones`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-regions.html).
*/
  availabilityZone?: string;

  // The name of the Lightsail Instance. Names must be unique within each AWS Region in your Lightsail account.
  name?: string;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Single lined launch script as a string to configure server with additional user data
  userData?: string;

  // The add on configuration for the instance. Detailed below.
  addOn?: lightsail_InstanceAddOn;
}
export class Instance extends Resource {
  // The number of vCPUs the instance has.
  public cpuCount?: number;

  // The private IP address of the instance.
  public privateIpAddress?: string;

  // The ARN of the Lightsail instance (matches `id`).
  public arn?: string;

  // The IP address type of the Lightsail Instance. Valid Values: `dualstack` | `ipv4`.
  public ipAddressType?: string;

  // The name of the Lightsail Instance. Names must be unique within each AWS Region in your Lightsail account.
  public name?: string;

  // Single lined launch script as a string to configure server with additional user data
  public userData?: string;

  /*
The bundle of specification information. A list of available
bundle IDs can be obtained using the AWS CLI command:
[`aws lightsail get-bundles`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-bundles.html).
*/
  public bundleId?: string;

  // The timestamp when the instance was created.
  public createdAt?: string;

  // List of IPv6 addresses for the Lightsail instance.
  public ipv6Addresses?: Array<string>;

  // A Boolean value indicating whether this instance has a static IP assigned to it.
  public isStaticIp?: boolean;

  /*
The name of your key pair. Created in the
Lightsail console (cannot use `aws.ec2.KeyPair` at this time)
*/
  public keyPairName?: string;

  // The public IP address of the instance.
  public publicIpAddress?: string;

  // The amount of RAM in GB on the instance (e.g., 1.0).
  public ramSize?: number;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The add on configuration for the instance. Detailed below.
  public addOn?: lightsail_InstanceAddOn;

  /*
The Availability Zone in which to create your instance. A
list of available zones can be obtained using the AWS CLI command:
[`aws lightsail get-regions --include-availability-zones`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-regions.html).
*/
  public availabilityZone?: string;

  /*
The ID for a virtual private server image. A list of available
blueprint IDs can be obtained using the AWS CLI command:
[`aws lightsail get-blueprints`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-blueprints.html).
*/
  public blueprintId?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The user name for connecting to the instance (e.g., ec2-user).
  public username?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "availabilityZone",
        "The Availability Zone in which to create your instance. A\nlist of available zones can be obtained using the AWS CLI command:\n[`aws lightsail get-regions --include-availability-zones`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-regions.html).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "userData",
        "Single lined launch script as a string to configure server with additional user data",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "keyPairName",
        "The name of your key pair. Created in the\nLightsail console (cannot use `aws.ec2.KeyPair` at this time)",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the Lightsail Instance. Names must be unique within each AWS Region in your Lightsail account.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "addOn",
        "The add on configuration for the instance. Detailed below.",
        lightsail_InstanceAddOn_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "blueprintId",
        "The ID for a virtual private server image. A list of available\nblueprint IDs can be obtained using the AWS CLI command:\n[`aws lightsail get-blueprints`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-blueprints.html).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "bundleId",
        "The bundle of specification information. A list of available\nbundle IDs can be obtained using the AWS CLI command:\n[`aws lightsail get-bundles`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/lightsail/get-bundles.html).",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ipAddressType",
        "The IP address type of the Lightsail Instance. Valid Values: `dualstack` | `ipv4`.",
        [],
        false,
        false,
      ),
    ];
  }
}
