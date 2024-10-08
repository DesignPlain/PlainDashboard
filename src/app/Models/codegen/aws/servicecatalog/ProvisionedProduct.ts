import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  servicecatalog_ProvisionedProductProvisioningParameter,
  servicecatalog_ProvisionedProductProvisioningParameter_GetTypes,
} from '../types/servicecatalog_ProvisionedProductProvisioningParameter';
import {
  servicecatalog_ProvisionedProductStackSetProvisioningPreferences,
  servicecatalog_ProvisionedProductStackSetProvisioningPreferences_GetTypes,
} from '../types/servicecatalog_ProvisionedProductStackSetProvisioningPreferences';
import {
  servicecatalog_ProvisionedProductOutput,
  servicecatalog_ProvisionedProductOutput_GetTypes,
} from '../types/servicecatalog_ProvisionedProductOutput';

export interface ProvisionedProductArgs {
  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  acceptLanguage?: string;

  // _Only applies to deleting._ If set to `true`, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources. The default value is `false`.
  ignoreErrors?: boolean;

  // Name of the product. You must provide `product_id` or `product_name`, but not both.
  productName?: string;

  // Configuration block with parameters specified by the administrator that are required for provisioning the product. See `provisioning_parameters` Block for details.
  provisioningParameters?: Array<servicecatalog_ProvisionedProductProvisioningParameter>;

  // Identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both.
  provisioningArtifactId?: string;

  // Name of the provisioning artifact. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both.
  provisioningArtifactName?: string;

  /*
User-friendly name of the provisioned product.

The following arguments are optional:
*/
  name?: string;

  // _Only applies to deleting._ Whether to delete the Service Catalog provisioned product but leave the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is `false`.
  retainPhysicalResources?: boolean;

  // Tags to apply to the provisioned product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
  notificationArns?: Array<string>;

  // Path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use `aws.servicecatalog.getLaunchPaths`. When required, you must provide `path_id` or `path_name`, but not both.
  pathId?: string;

  // Name of the path. You must provide `path_id` or `path_name`, but not both.
  pathName?: string;

  // Product identifier. For example, `prod-abcdzk7xy33qa`. You must provide `product_id` or `product_name`, but not both.
  productId?: string;

  // Configuration block with information about the provisioning preferences for a stack set. See `stack_set_provisioning_preferences` Block for details.
  stackSetProvisioningPreferences?: servicecatalog_ProvisionedProductStackSetProvisioningPreferences;
}
export class ProvisionedProduct extends DS_Resource {
  // Name of the provisioning artifact. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both.
  public provisioningArtifactName?: string;

  // _Only applies to deleting._ Whether to delete the Service Catalog provisioned product but leave the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is `false`.
  public retainPhysicalResources?: boolean;

  // Type of provisioned product. Valid values are `CFN_STACK` and `CFN_STACKSET`.
  public type?: string;

  // Time when the provisioned product was created.
  public createdTime?: string;

  // Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.
  public notificationArns?: Array<string>;

  // Product identifier. For example, `prod-abcdzk7xy33qa`. You must provide `product_id` or `product_name`, but not both.
  public productId?: string;

  /*
User-friendly name of the provisioned product.

The following arguments are optional:
*/
  public name?: string;

  // Configuration block with parameters specified by the administrator that are required for provisioning the product. See `provisioning_parameters` Block for details.
  public provisioningParameters?: Array<servicecatalog_ProvisionedProductProvisioningParameter>;

  // Configuration block with information about the provisioning preferences for a stack set. See `stack_set_provisioning_preferences` Block for details.
  public stackSetProvisioningPreferences?: servicecatalog_ProvisionedProductStackSetProvisioningPreferences;

  // Current status message of the provisioned product.
  public statusMessage?: string;

  // ARN of the provisioned product.
  public arn?: string;

  // _Only applies to deleting._ If set to `true`, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources. The default value is `false`.
  public ignoreErrors?: boolean;

  // Record identifier of the last request performed on this provisioned product.
  public lastRecordId?: string;

  // Name of the path. You must provide `path_id` or `path_name`, but not both.
  public pathName?: string;

  // Current status of the provisioned product. See meanings below.
  public status?: string;

  // Tags to apply to the provisioned product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Record identifier of the last request performed on this provisioned product of the following types: `ProvisionedProduct`, `UpdateProvisionedProduct`, `ExecuteProvisionedProductPlan`, `TerminateProvisionedProduct`.
  public lastProvisioningRecordId?: string;

  // Record identifier of the last successful request performed on this provisioned product of the following types: `ProvisionedProduct`, `UpdateProvisionedProduct`, `ExecuteProvisionedProductPlan`, `TerminateProvisionedProduct`.
  public lastSuccessfulProvisioningRecordId?: string;

  // ARN of the launch role associated with the provisioned product.
  public launchRoleArn?: string;

  // Path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use `aws.servicecatalog.getLaunchPaths`. When required, you must provide `path_id` or `path_name`, but not both.
  public pathId?: string;

  // Name of the product. You must provide `product_id` or `product_name`, but not both.
  public productName?: string;

  // Identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both.
  public provisioningArtifactId?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.
  public acceptLanguage?: string;

  // Set of CloudWatch dashboards that were created when provisioning the product.
  public cloudwatchDashboardNames?: Array<string>;

  // The set of outputs for the product created.
  public outputs?: Array<servicecatalog_ProvisionedProductOutput>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'provisioningParameters',
        'Configuration block with parameters specified by the administrator that are required for provisioning the product. See `provisioning_parameters` Block for details.',
        () => servicecatalog_ProvisionedProductProvisioningParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'productId',
        'Product identifier. For example, `prod-abcdzk7xy33qa`. You must provide `product_id` or `product_name`, but not both.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'stackSetProvisioningPreferences',
        'Configuration block with information about the provisioning preferences for a stack set. See `stack_set_provisioning_preferences` Block for details.',
        () =>
          servicecatalog_ProvisionedProductStackSetProvisioningPreferences_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'retainPhysicalResources',
        '_Only applies to deleting._ Whether to delete the Service Catalog provisioned product but leave the CloudFormation stack, stack set, or the underlying resources of the deleted provisioned product. The default value is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Tags to apply to the provisioned product. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'pathId',
        'Path identifier of the product. This value is optional if the product has a default path, and required if the product has more than one path. To list the paths for a product, use `aws.servicecatalog.getLaunchPaths`. When required, you must provide `path_id` or `path_name`, but not both.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'notificationArns',
        'Passed to CloudFormation. The SNS topic ARNs to which to publish stack-related events.',
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'acceptLanguage',
        'Language code. Valid values: `en` (English), `jp` (Japanese), `zh` (Chinese). Default value is `en`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'ignoreErrors',
        '_Only applies to deleting._ If set to `true`, AWS Service Catalog stops managing the specified provisioned product even if it cannot delete the underlying resources. The default value is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'User-friendly name of the provisioned product.\n\nThe following arguments are optional:',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'pathName',
        'Name of the path. You must provide `path_id` or `path_name`, but not both.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'productName',
        'Name of the product. You must provide `product_id` or `product_name`, but not both.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'provisioningArtifactId',
        'Identifier of the provisioning artifact. For example, `pa-4abcdjnxjj6ne`. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'provisioningArtifactName',
        'Name of the provisioning artifact. You must provide the `provisioning_artifact_id` or `provisioning_artifact_name`, but not both.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
