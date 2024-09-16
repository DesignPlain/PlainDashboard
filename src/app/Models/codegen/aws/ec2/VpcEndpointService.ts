import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_VpcEndpointServicePrivateDnsNameConfiguration,
  ec2_VpcEndpointServicePrivateDnsNameConfiguration_GetTypes,
} from '../types/ec2_VpcEndpointServicePrivateDnsNameConfiguration';

export interface VpcEndpointServiceArgs {
  // Amazon Resource Names (ARNs) of one or more Network Load Balancers for the endpoint service.
  networkLoadBalancerArns?: Array<string>;

  // The private DNS name for the service.
  privateDnsName?: string;

  // The supported IP address types. The possible values are `ipv4` and `ipv6`.
  supportedIpAddressTypes?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Whether or not VPC endpoint connection requests to the service must be accepted by the service owner - `true` or `false`.
  acceptanceRequired?: boolean;

  // The ARNs of one or more principals allowed to discover the endpoint service.
  allowedPrincipals?: Array<string>;

  // Amazon Resource Names (ARNs) of one or more Gateway Load Balancers for the endpoint service.
  gatewayLoadBalancerArns?: Array<string>;
}
export class VpcEndpointService extends DS_Resource {
  // The supported IP address types. The possible values are `ipv4` and `ipv6`.
  public supportedIpAddressTypes?: Array<string>;

  // List of objects containing information about the endpoint service private DNS name configuration.
  public privateDnsNameConfigurations?: Array<ec2_VpcEndpointServicePrivateDnsNameConfiguration>;

  // A set of DNS names for the service.
  public baseEndpointDnsNames?: Array<string>;

  // Amazon Resource Names (ARNs) of one or more Gateway Load Balancers for the endpoint service.
  public gatewayLoadBalancerArns?: Array<string>;

  // Verification state of the VPC endpoint service. Consumers of the endpoint service can use the private name only when the state is `verified`.
  public state?: string;

  // A set of Availability Zones in which the service is available.
  public availabilityZones?: Array<string>;

  // The ARNs of one or more principals allowed to discover the endpoint service.
  public allowedPrincipals?: Array<string>;

  // Whether or not the service manages its VPC endpoints - `true` or `false`.
  public managesVpcEndpoints?: boolean;

  // The private DNS name for the service.
  public privateDnsName?: string;

  // The service name.
  public serviceName?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Whether or not VPC endpoint connection requests to the service must be accepted by the service owner - `true` or `false`.
  public acceptanceRequired?: boolean;

  // Amazon Resource Names (ARNs) of one or more Network Load Balancers for the endpoint service.
  public networkLoadBalancerArns?: Array<string>;

  // The service type, `Gateway` or `Interface`.
  public serviceType?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Amazon Resource Name (ARN) of the VPC endpoint service.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'privateDnsName',
        'The private DNS name for the service.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'supportedIpAddressTypes',
        'The supported IP address types. The possible values are `ipv4` and `ipv6`.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'acceptanceRequired',
        'Whether or not VPC endpoint connection requests to the service must be accepted by the service owner - `true` or `false`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'allowedPrincipals',
        'The ARNs of one or more principals allowed to discover the endpoint service.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'gatewayLoadBalancerArns',
        'Amazon Resource Names (ARNs) of one or more Gateway Load Balancers for the endpoint service.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'networkLoadBalancerArns',
        'Amazon Resource Names (ARNs) of one or more Network Load Balancers for the endpoint service.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
