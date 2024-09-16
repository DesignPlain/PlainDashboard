import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apprunner_VpcIngressConnectionIngressVpcConfiguration,
  apprunner_VpcIngressConnectionIngressVpcConfiguration_GetTypes,
} from '../types/apprunner_VpcIngressConnectionIngressVpcConfiguration';

export interface VpcIngressConnectionArgs {
  // Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource. See Ingress VPC Configuration below for more details.
  ingressVpcConfiguration?: apprunner_VpcIngressConnectionIngressVpcConfiguration;

  // A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your AWS account in the AWS Region.
  name?: string;

  // The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
  serviceArn?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class VpcIngressConnection extends DS_Resource {
  // The Amazon Resource Name (ARN) of the VPC Ingress Connection.
  public arn?: string;

  // The domain name associated with the VPC Ingress Connection resource.
  public domainName?: string;

  // Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource. See Ingress VPC Configuration below for more details.
  public ingressVpcConfiguration?: apprunner_VpcIngressConnectionIngressVpcConfiguration;

  // A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your AWS account in the AWS Region.
  public name?: string;

  // The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.
  public serviceArn?: string;

  // The current status of the VPC Ingress Connection.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'ingressVpcConfiguration',
        'Specifications for the customer’s Amazon VPC and the related AWS PrivateLink VPC endpoint that are used to create the VPC Ingress Connection resource. See Ingress VPC Configuration below for more details.',
        () => apprunner_VpcIngressConnectionIngressVpcConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A name for the VPC Ingress Connection resource. It must be unique across all the active VPC Ingress Connections in your AWS account in the AWS Region.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceArn',
        'The Amazon Resource Name (ARN) for this App Runner service that is used to create the VPC Ingress Connection resource.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
