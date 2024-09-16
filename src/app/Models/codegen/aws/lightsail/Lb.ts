import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface LbArgs {
  // The health check path of the load balancer. Default value "/".
  healthCheckPath?: string;

  // The instance port the load balancer will connect.
  instancePort?: number;

  //
  ipAddressType?: string;

  // The name of the Lightsail load balancer.
  name?: string;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Lb extends DS_Resource {
  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The ARN of the Lightsail load balancer.
  public arn?: string;

  // The timestamp when the load balancer was created.
  public createdAt?: string;

  // The health check path of the load balancer. Default value "/".
  public healthCheckPath?: string;

  // The instance port the load balancer will connect.
  public instancePort?: number;

  //
  public ipAddressType?: string;

  // A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The DNS name of the load balancer.
  public dnsName?: string;

  // The name of the Lightsail load balancer.
  public name?: string;

  // The protocol of the load balancer.
  public protocol?: string;

  // The public ports of the load balancer.
  public publicPorts?: Array<number>;

  // The support code for the database. Include this code in your email to support when you have questions about a database in Lightsail. This code enables our support team to look up your Lightsail information more easily.
  public supportCode?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'healthCheckPath',
        'The health check path of the load balancer. Default value "/".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'instancePort',
        'The instance port the load balancer will connect.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddressType',
        '',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the Lightsail load balancer.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
