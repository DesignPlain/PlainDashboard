import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  msk_ServerlessClusterVpcConfig,
  msk_ServerlessClusterVpcConfig_GetTypes,
} from '../types/msk_ServerlessClusterVpcConfig';
import {
  msk_ServerlessClusterClientAuthentication,
  msk_ServerlessClusterClientAuthentication_GetTypes,
} from '../types/msk_ServerlessClusterClientAuthentication';

export interface ServerlessClusterArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // VPC configuration information. See below.
  vpcConfigs?: Array<msk_ServerlessClusterVpcConfig>;

  // Specifies client authentication information for the serverless cluster. See below.
  clientAuthentication?: msk_ServerlessClusterClientAuthentication;

  // The name of the serverless cluster.
  clusterName?: string;
}
export class ServerlessCluster extends DS_Resource {
  // UUID of the serverless cluster, for use in IAM policies.
  public clusterUuid?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // VPC configuration information. See below.
  public vpcConfigs?: Array<msk_ServerlessClusterVpcConfig>;

  // The ARN of the serverless cluster.
  public arn?: string;

  // Specifies client authentication information for the serverless cluster. See below.
  public clientAuthentication?: msk_ServerlessClusterClientAuthentication;

  // The name of the serverless cluster.
  public clusterName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'vpcConfigs',
        'VPC configuration information. See below.',
        () => msk_ServerlessClusterVpcConfig_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clientAuthentication',
        'Specifies client authentication information for the serverless cluster. See below.',
        () => msk_ServerlessClusterClientAuthentication_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'clusterName',
        'The name of the serverless cluster.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
