import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  verifiedaccess_EndpointSseSpecification,
  verifiedaccess_EndpointSseSpecification_GetTypes,
} from '../types/verifiedaccess_EndpointSseSpecification';
import {
  verifiedaccess_EndpointLoadBalancerOptions,
  verifiedaccess_EndpointLoadBalancerOptions_GetTypes,
} from '../types/verifiedaccess_EndpointLoadBalancerOptions';
import {
  verifiedaccess_EndpointNetworkInterfaceOptions,
  verifiedaccess_EndpointNetworkInterfaceOptions_GetTypes,
} from '../types/verifiedaccess_EndpointNetworkInterfaceOptions';

export interface EndpointArgs {
  // The type of attachment. Currently, only `vpc` is supported.
  attachmentType?: string;

  // A description for the Verified Access endpoint.
  description?: string;

  // The type of Verified Access endpoint to create. Currently `load-balancer` or `network-interface` are supported.
  endpointType?: string;

  // The options in use for server side encryption.
  sseSpecification?: verifiedaccess_EndpointSseSpecification;

  /*
The ID of the Verified Access group to associate the endpoint with.

The following arguments are optional:
*/
  verifiedAccessGroupId?: string;

  // The DNS name for users to reach your application.
  applicationDomain?: string;

  // A custom identifier that is prepended to the DNS name that is generated for the endpoint.
  endpointDomainPrefix?: string;

  // The load balancer details. This parameter is required if the endpoint type is `load-balancer`.
  loadBalancerOptions?: verifiedaccess_EndpointLoadBalancerOptions;

  // The network interface details. This parameter is required if the endpoint type is `network-interface`.
  networkInterfaceOptions?: verifiedaccess_EndpointNetworkInterfaceOptions;

  // The policy document that is associated with this resource.
  policyDocument?: string;

  // List of the the security groups IDs to associate with the Verified Access endpoint.
  securityGroupIds?: Array<string>;

  // Key-value tags for the Verified Access Endpoint. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The ARN of the public TLS/SSL certificate in AWS Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.
  domainCertificateArn?: string;
}
export class Endpoint extends DS_Resource {
  // The type of attachment. Currently, only `vpc` is supported.
  public attachmentType?: string;

  // Returned if endpoint has a device trust provider attached.
  public deviceValidationDomain?: string;

  // A DNS name that is generated for the endpoint.
  public endpointDomain?: string;

  /*
The ID of the Verified Access group to associate the endpoint with.

The following arguments are optional:
*/
  public verifiedAccessGroupId?: string;

  // The DNS name for users to reach your application.
  public applicationDomain?: string;

  // The network interface details. This parameter is required if the endpoint type is `network-interface`.
  public networkInterfaceOptions?: verifiedaccess_EndpointNetworkInterfaceOptions;

  // The ARN of the public TLS/SSL certificate in AWS Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.
  public domainCertificateArn?: string;

  // The policy document that is associated with this resource.
  public policyDocument?: string;

  // The options in use for server side encryption.
  public sseSpecification?: verifiedaccess_EndpointSseSpecification;

  // Key-value tags for the Verified Access Endpoint. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public verifiedAccessInstanceId?: string;

  // A description for the Verified Access endpoint.
  public description?: string;

  // A custom identifier that is prepended to the DNS name that is generated for the endpoint.
  public endpointDomainPrefix?: string;

  // The type of Verified Access endpoint to create. Currently `load-balancer` or `network-interface` are supported.
  public endpointType?: string;

  // The load balancer details. This parameter is required if the endpoint type is `load-balancer`.
  public loadBalancerOptions?: verifiedaccess_EndpointLoadBalancerOptions;

  // List of the the security groups IDs to associate with the Verified Access endpoint.
  public securityGroupIds?: Array<string>;

  //
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'applicationDomain',
        'The DNS name for users to reach your application.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'networkInterfaceOptions',
        'The network interface details. This parameter is required if the endpoint type is `network-interface`.',
        () => verifiedaccess_EndpointNetworkInterfaceOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'securityGroupIds',
        'List of the the security groups IDs to associate with the Verified Access endpoint.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the Verified Access Endpoint. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'attachmentType',
        'The type of attachment. Currently, only `vpc` is supported.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A description for the Verified Access endpoint.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'verifiedAccessGroupId',
        'The ID of the Verified Access group to associate the endpoint with.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loadBalancerOptions',
        'The load balancer details. This parameter is required if the endpoint type is `load-balancer`.',
        () => verifiedaccess_EndpointLoadBalancerOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyDocument',
        'The policy document that is associated with this resource.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainCertificateArn',
        'The ARN of the public TLS/SSL certificate in AWS Certificate Manager to associate with the endpoint. The CN in the certificate must match the DNS name your end users will use to reach your application.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'endpointType',
        'The type of Verified Access endpoint to create. Currently `load-balancer` or `network-interface` are supported.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'sseSpecification',
        'The options in use for server side encryption.',
        () => verifiedaccess_EndpointSseSpecification_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'endpointDomainPrefix',
        'A custom identifier that is prepended to the DNS name that is generated for the endpoint.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
