import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface StudioArgs {
  // The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials.
  idpAuthUrl?: string;

  // The name that your identity provider (IdP) uses for its RelayState parameter. For example, RelayState or TargetSource. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The RelayState parameter differs by IdP.
  idpRelayStateParameterName?: string;

  // list of tags to apply to the EMR Cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.
  defaultS3Location?: string;

  // A detailed description of the Amazon EMR Studio.
  description?: string;

  // The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `vpc_id`.
  engineSecurityGroupId?: string;

  // A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `vpc_id`. Studio users can create a Workspace in any of the specified subnets.
  subnetIds?: Array<string>;

  // The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a User Role when you use Amazon Web Services SSO authentication. The permissions attached to the User Role can be scoped down for each user or group using session policies.
  userRole?: string;

  // The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
  vpcId?: string;

  /*
The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by `vpc_id`.

The following arguments are optional:
*/
  workspaceSecurityGroupId?: string;

  // Specifies whether the Studio authenticates users using IAM or Amazon Web Services SSO. Valid values are `SSO` or `IAM`.
  authMode?: string;

  // A descriptive name for the Amazon EMR Studio.
  name?: string;

  // The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services.
  serviceRole?: string;
}
export class Studio extends DS_Resource {
  // list of tags to apply to the EMR Cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a User Role when you use Amazon Web Services SSO authentication. The permissions attached to the User Role can be scoped down for each user or group using session policies.
  public userRole?: string;

  // The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
  public vpcId?: string;

  // Specifies whether the Studio authenticates users using IAM or Amazon Web Services SSO. Valid values are `SSO` or `IAM`.
  public authMode?: string;

  // The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.
  public defaultS3Location?: string;

  // A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `vpc_id`. Studio users can create a Workspace in any of the specified subnets.
  public subnetIds?: Array<string>;

  // ARN of the studio.
  public arn?: string;

  // A detailed description of the Amazon EMR Studio.
  public description?: string;

  /*
The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by `vpc_id`.

The following arguments are optional:
*/
  public workspaceSecurityGroupId?: string;

  // The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `vpc_id`.
  public engineSecurityGroupId?: string;

  // The name that your identity provider (IdP) uses for its RelayState parameter. For example, RelayState or TargetSource. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The RelayState parameter differs by IdP.
  public idpRelayStateParameterName?: string;

  // The unique access URL of the Amazon EMR Studio.
  public url?: string;

  // The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials.
  public idpAuthUrl?: string;

  // A descriptive name for the Amazon EMR Studio.
  public name?: string;

  // The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services.
  public serviceRole?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'idpAuthUrl',
        'The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'idpRelayStateParameterName',
        'The name that your identity provider (IdP) uses for its RelayState parameter. For example, RelayState or TargetSource. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The RelayState parameter differs by IdP.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'vpcId',
        'The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'workspaceSecurityGroupId',
        'The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by `vpc_id`.\n\nThe following arguments are optional:',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'authMode',
        'Specifies whether the Studio authenticates users using IAM or Amazon Web Services SSO. Valid values are `SSO` or `IAM`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'A descriptive name for the Amazon EMR Studio.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'list of tags to apply to the EMR Cluster. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultS3Location',
        'The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A detailed description of the Amazon EMR Studio.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineSecurityGroupId',
        'The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `vpc_id`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'subnetIds',
        'A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `vpc_id`. Studio users can create a Workspace in any of the specified subnets.',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'userRole',
        'The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a User Role when you use Amazon Web Services SSO authentication. The permissions attached to the User Role can be scoped down for each user or group using session policies.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceRole',
        'The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
