import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codestarconnections_HostVpcConfiguration,
  codestarconnections_HostVpcConfiguration_GetTypes,
} from '../types/codestarconnections_HostVpcConfiguration';

export interface HostArgs {
  // The endpoint of the infrastructure to be represented by the host after it is created.
  providerEndpoint?: string;

  // The name of the external provider where your third-party code repository is configured.
  providerType?: string;

  // The VPC configuration to be provisioned for the host. A VPC must be configured, and the infrastructure to be represented by the host must already be connected to the VPC.
  vpcConfiguration?: codestarconnections_HostVpcConfiguration;

  // The name of the host to be created. The name must be unique in the calling AWS account.
  name?: string;
}
export class Host extends DS_Resource {
  // The CodeStar Host ARN.
  public arn?: string;

  // The name of the host to be created. The name must be unique in the calling AWS account.
  public name?: string;

  // The endpoint of the infrastructure to be represented by the host after it is created.
  public providerEndpoint?: string;

  // The name of the external provider where your third-party code repository is configured.
  public providerType?: string;

  // The CodeStar Host status. Possible values are `PENDING`, `AVAILABLE`, `VPC_CONFIG_DELETING`, `VPC_CONFIG_INITIALIZING`, and `VPC_CONFIG_FAILED_INITIALIZATION`.
  public status?: string;

  // The VPC configuration to be provisioned for the host. A VPC must be configured, and the infrastructure to be represented by the host must already be connected to the VPC.
  public vpcConfiguration?: codestarconnections_HostVpcConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'vpcConfiguration',
        'The VPC configuration to be provisioned for the host. A VPC must be configured, and the infrastructure to be represented by the host must already be connected to the VPC.',
        () => codestarconnections_HostVpcConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the host to be created. The name must be unique in the calling AWS account.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'providerEndpoint',
        'The endpoint of the infrastructure to be represented by the host after it is created.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'providerType',
        'The name of the external provider where your third-party code repository is configured.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
