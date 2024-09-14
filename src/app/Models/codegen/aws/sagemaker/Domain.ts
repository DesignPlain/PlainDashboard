import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sagemaker_DomainDefaultSpaceSettings,
  sagemaker_DomainDefaultSpaceSettings_GetTypes,
} from "../types/sagemaker_DomainDefaultSpaceSettings";
import {
  sagemaker_DomainDefaultUserSettings,
  sagemaker_DomainDefaultUserSettings_GetTypes,
} from "../types/sagemaker_DomainDefaultUserSettings";
import {
  sagemaker_DomainDomainSettings,
  sagemaker_DomainDomainSettings_GetTypes,
} from "../types/sagemaker_DomainDomainSettings";
import {
  sagemaker_DomainRetentionPolicy,
  sagemaker_DomainRetentionPolicy_GetTypes,
} from "../types/sagemaker_DomainRetentionPolicy";

export interface DomainArgs {
  // The VPC subnets that Studio uses for communication.
  subnetIds?: Array<string>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

The following arguments are optional:
*/
  vpcId?: string;

  // The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Valid values are `Service` and `Customer`.
  appSecurityGroupManagement?: string;

  // The default space settings. See `default_space_settings` Block below.
  defaultSpaceSettings?: sagemaker_DomainDefaultSpaceSettings;

  // The default user settings. See `default_user_settings` Block below.
  defaultUserSettings?: sagemaker_DomainDefaultUserSettings;

  // The domain settings. See `domain_settings` Block below.
  domainSettings?: sagemaker_DomainDomainSettings;

  // The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained. See `retention_policy` Block below.
  retentionPolicy?: sagemaker_DomainRetentionPolicy;

  // Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`. Valid values are `PublicInternetOnly` and `VpcOnly`.
  appNetworkAccessType?: string;

  // The mode of authentication that members use to access the domain. Valid values are `IAM` and `SSO`.
  authMode?: string;

  // The domain name.
  domainName?: string;

  // The AWS KMS customer managed CMK used to encrypt the EFS volume attached to the domain.
  kmsKeyId?: string;
}
export class Domain extends DS_Resource {
  // The ID of the Amazon Elastic File System (EFS) managed by this Domain.
  public homeEfsFileSystemId?: string;

  // The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app.
  public securityGroupIdForDomainBoundary?: string;

  // The SSO managed application instance ID.
  public singleSignOnManagedApplicationInstanceId?: string;

  // The domain's URL.
  public url?: string;

  // The default user settings. See `default_user_settings` Block below.
  public defaultUserSettings?: sagemaker_DomainDefaultUserSettings;

  // The domain settings. See `domain_settings` Block below.
  public domainSettings?: sagemaker_DomainDomainSettings;

  // The ARN of the application managed by SageMaker in IAM Identity Center. This value is only returned for domains created after September 19, 2023.
  public singleSignOnApplicationArn?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The AWS KMS customer managed CMK used to encrypt the EFS volume attached to the domain.
  public kmsKeyId?: string;

  // The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained. See `retention_policy` Block below.
  public retentionPolicy?: sagemaker_DomainRetentionPolicy;

  // The VPC subnets that Studio uses for communication.
  public subnetIds?: Array<string>;

  // The Amazon Resource Name (ARN) assigned by AWS to this Domain.
  public arn?: string;

  // The mode of authentication that members use to access the domain. Valid values are `IAM` and `SSO`.
  public authMode?: string;

  // The default space settings. See `default_space_settings` Block below.
  public defaultSpaceSettings?: sagemaker_DomainDefaultSpaceSettings;

  // The domain name.
  public domainName?: string;

  /*
The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

The following arguments are optional:
*/
  public vpcId?: string;

  // Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`. Valid values are `PublicInternetOnly` and `VpcOnly`.
  public appNetworkAccessType?: string;

  // The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Valid values are `Service` and `Customer`.
  public appSecurityGroupManagement?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "subnetIds",
        "The VPC subnets that Studio uses for communication.",
        () => InputType_String_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "appSecurityGroupManagement",
        "The entity that creates and manages the required security groups for inter-app communication in `VPCOnly` mode. Valid values are `Service` and `Customer`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultSpaceSettings",
        "The default space settings. See `default_space_settings` Block below.",
        () => sagemaker_DomainDefaultSpaceSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultUserSettings",
        "The default user settings. See `default_user_settings` Block below.",
        () => sagemaker_DomainDefaultUserSettings_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "The domain name.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyId",
        "The AWS KMS customer managed CMK used to encrypt the EFS volume attached to the domain.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "vpcId",
        "The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.\n\nThe following arguments are optional:",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "domainSettings",
        "The domain settings. See `domain_settings` Block below.",
        () => sagemaker_DomainDomainSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "retentionPolicy",
        "The retention policy for this domain, which specifies whether resources will be retained after the Domain is deleted. By default, all resources are retained. See `retention_policy` Block below.",
        () => sagemaker_DomainRetentionPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "appNetworkAccessType",
        "Specifies the VPC used for non-EFS traffic. The default value is `PublicInternetOnly`. Valid values are `PublicInternetOnly` and `VpcOnly`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "authMode",
        "The mode of authentication that members use to access the domain. Valid values are `IAM` and `SSO`.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
