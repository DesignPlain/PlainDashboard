import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  grafana_WorkspaceNetworkAccessControl,
  grafana_WorkspaceNetworkAccessControl_GetTypes,
} from "../types/grafana_WorkspaceNetworkAccessControl";
import {
  grafana_WorkspaceVpcConfiguration,
  grafana_WorkspaceVpcConfiguration_GetTypes,
} from "../types/grafana_WorkspaceVpcConfiguration";

export interface WorkspaceArgs {
  // Configuration for network access to your workspace.See Network Access Control below.
  networkAccessControl?: grafana_WorkspaceNetworkAccessControl;

  /*
The permission type of the workspace. If `SERVICE_MANAGED` is specified, the IAM roles and IAM policy attachments are generated automatically. If `CUSTOMER_MANAGED` is specified, the IAM roles and IAM policy attachments will not be created.

The following arguments are optional:
*/
  permissionType?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  tags?: Map<string, string>;

  // The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. See VPC Configuration below.
  vpcConfiguration?: grafana_WorkspaceVpcConfiguration;

  // The configuration string for the workspace that you create. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html).
  configuration?: string;

  // The workspace description.
  description?: string;

  // The role name that the workspace uses to access resources through Amazon Organizations.
  organizationRoleName?: string;

  // The Amazon Organizations organizational units that the workspace is authorized to use data sources from.
  organizationalUnits?: Array<string>;

  // The data sources for the workspace. Valid values are `AMAZON_OPENSEARCH_SERVICE`, `ATHENA`, `CLOUDWATCH`, `PROMETHEUS`, `REDSHIFT`, `SITEWISE`, `TIMESTREAM`, `XRAY`
  dataSources?: Array<string>;

  // The Grafana workspace name.
  name?: string;

  // The notification destinations. If a data source is specified here, Amazon Managed Grafana will create IAM roles and permissions needed to use these destinations. Must be set to `SNS`.
  notificationDestinations?: Array<string>;

  // The authentication providers for the workspace. Valid values are `AWS_SSO`, `SAML`, or both.
  authenticationProviders?: Array<string>;

  // Specifies the version of Grafana to support in the new workspace. Supported values are `8.4` and `9.4`. If not specified, defaults to `8.4`.
  grafanaVersion?: string;

  // The IAM role ARN that the workspace assumes.
  roleArn?: string;

  // The AWS CloudFormation stack set name that provisions IAM roles to be used by the workspace.
  stackSetName?: string;

  // The type of account access for the workspace. Valid values are `CURRENT_ACCOUNT` and `ORGANIZATION`. If `ORGANIZATION` is specified, then `organizational_units` must also be present.
  accountAccessType?: string;
}
export class Workspace extends Resource {
  // The Amazon Resource Name (ARN) of the Grafana workspace.
  public arn?: string;

  // The authentication providers for the workspace. Valid values are `AWS_SSO`, `SAML`, or both.
  public authenticationProviders?: Array<string>;

  // The workspace description.
  public description?: string;

  // The endpoint of the Grafana workspace.
  public endpoint?: string;

  // The role name that the workspace uses to access resources through Amazon Organizations.
  public organizationRoleName?: string;

  /*
The permission type of the workspace. If `SERVICE_MANAGED` is specified, the IAM roles and IAM policy attachments are generated automatically. If `CUSTOMER_MANAGED` is specified, the IAM roles and IAM policy attachments will not be created.

The following arguments are optional:
*/
  public permissionType?: string;

  // The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. See VPC Configuration below.
  public vpcConfiguration?: grafana_WorkspaceVpcConfiguration;

  // The type of account access for the workspace. Valid values are `CURRENT_ACCOUNT` and `ORGANIZATION`. If `ORGANIZATION` is specified, then `organizational_units` must also be present.
  public accountAccessType?: string;

  // The configuration string for the workspace that you create. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html).
  public configuration?: string;

  // Configuration for network access to your workspace.See Network Access Control below.
  public networkAccessControl?: grafana_WorkspaceNetworkAccessControl;

  //
  public samlConfigurationStatus?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The data sources for the workspace. Valid values are `AMAZON_OPENSEARCH_SERVICE`, `ATHENA`, `CLOUDWATCH`, `PROMETHEUS`, `REDSHIFT`, `SITEWISE`, `TIMESTREAM`, `XRAY`
  public dataSources?: Array<string>;

  // The Grafana workspace name.
  public name?: string;

  // The Amazon Organizations organizational units that the workspace is authorized to use data sources from.
  public organizationalUnits?: Array<string>;

  // The IAM role ARN that the workspace assumes.
  public roleArn?: string;

  // The AWS CloudFormation stack set name that provisions IAM roles to be used by the workspace.
  public stackSetName?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level
  public tags?: Map<string, string>;

  // Specifies the version of Grafana to support in the new workspace. Supported values are `8.4` and `9.4`. If not specified, defaults to `8.4`.
  public grafanaVersion?: string;

  // The notification destinations. If a data source is specified here, Amazon Managed Grafana will create IAM roles and permissions needed to use these destinations. Must be set to `SNS`.
  public notificationDestinations?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "networkAccessControl",
        "Configuration for network access to your workspace.See Network Access Control below.",
        grafana_WorkspaceNetworkAccessControl_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfiguration",
        "The configuration settings for an Amazon VPC that contains data sources for your Grafana workspace to connect to. See VPC Configuration below.",
        grafana_WorkspaceVpcConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "The workspace description.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "organizationRoleName",
        "The role name that the workspace uses to access resources through Amazon Organizations.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "permissionType",
        "The permission type of the workspace. If `SERVICE_MANAGED` is specified, the IAM roles and IAM policy attachments are generated automatically. If `CUSTOMER_MANAGED` is specified, the IAM roles and IAM policy attachments will not be created.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "grafanaVersion",
        "Specifies the version of Grafana to support in the new workspace. Supported values are `8.4` and `9.4`. If not specified, defaults to `8.4`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "organizationalUnits",
        "The Amazon Organizations organizational units that the workspace is authorized to use data sources from.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The Grafana workspace name.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The IAM role ARN that the workspace assumes.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stackSetName",
        "The AWS CloudFormation stack set name that provisions IAM roles to be used by the workspace.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configuration",
        "The configuration string for the workspace that you create. For more information about the format and configuration options available, see [Working in your Grafana workspace](https://docs.aws.amazon.com/grafana/latest/userguide/AMG-configure-workspace.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dataSources",
        "The data sources for the workspace. Valid values are `AMAZON_OPENSEARCH_SERVICE`, `ATHENA`, `CLOUDWATCH`, `PROMETHEUS`, `REDSHIFT`, `SITEWISE`, `TIMESTREAM`, `XRAY`",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "notificationDestinations",
        "The notification destinations. If a data source is specified here, Amazon Managed Grafana will create IAM roles and permissions needed to use these destinations. Must be set to `SNS`.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "authenticationProviders",
        "The authentication providers for the workspace. Valid values are `AWS_SSO`, `SAML`, or both.",
        InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accountAccessType",
        "The type of account access for the workspace. Valid values are `CURRENT_ACCOUNT` and `ORGANIZATION`. If `ORGANIZATION` is specified, then `organizational_units` must also be present.",
        [],
        true,
        false,
      ),
    ];
  }
}
