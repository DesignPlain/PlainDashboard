import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  sagemaker_FeatureGroupFeatureDefinition,
  sagemaker_FeatureGroupFeatureDefinition_GetTypes,
} from '../types/sagemaker_FeatureGroupFeatureDefinition';
import {
  sagemaker_FeatureGroupOnlineStoreConfig,
  sagemaker_FeatureGroupOnlineStoreConfig_GetTypes,
} from '../types/sagemaker_FeatureGroupOnlineStoreConfig';
import {
  sagemaker_FeatureGroupOfflineStoreConfig,
  sagemaker_FeatureGroupOfflineStoreConfig_GetTypes,
} from '../types/sagemaker_FeatureGroupOfflineStoreConfig';

export interface FeatureGroupArgs {
  // A list of Feature names and types. See Feature Definition Below.
  featureDefinitions?: Array<sagemaker_FeatureGroupFeatureDefinition>;

  // The Online Feature Store Configuration. See Online Store Config Below.
  onlineStoreConfig?: sagemaker_FeatureGroupOnlineStoreConfig;

  // The name of the Feature whose value uniquely identifies a Record defined in the Feature Store. Only the latest record per identifier value will be stored in the Online Store.
  recordIdentifierFeatureName?: string;

  // Map of resource tags for the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // A free-form description of a Feature Group.
  description?: string;

  // The name of the feature that stores the EventTime of a Record in a Feature Group.
  eventTimeFeatureName?: string;

  // The name of the Feature Group. The name must be unique within an AWS Region in an AWS account.
  featureGroupName?: string;

  // The Offline Feature Store Configuration. See Offline Store Config Below.
  offlineStoreConfig?: sagemaker_FeatureGroupOfflineStoreConfig;

  // The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the Offline Store if an `offline_store_config` is provided.
  roleArn?: string;
}
export class FeatureGroup extends DS_Resource {
  // The Amazon Resource Name (ARN) assigned by AWS to this feature_group.
  public arn?: string;

  // A free-form description of a Feature Group.
  public description?: string;

  // The name of the feature that stores the EventTime of a Record in a Feature Group.
  public eventTimeFeatureName?: string;

  // A list of Feature names and types. See Feature Definition Below.
  public featureDefinitions?: Array<sagemaker_FeatureGroupFeatureDefinition>;

  // The name of the Feature Group. The name must be unique within an AWS Region in an AWS account.
  public featureGroupName?: string;

  // The name of the Feature whose value uniquely identifies a Record defined in the Feature Store. Only the latest record per identifier value will be stored in the Online Store.
  public recordIdentifierFeatureName?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Offline Feature Store Configuration. See Offline Store Config Below.
  public offlineStoreConfig?: sagemaker_FeatureGroupOfflineStoreConfig;

  // The Online Feature Store Configuration. See Online Store Config Below.
  public onlineStoreConfig?: sagemaker_FeatureGroupOnlineStoreConfig;

  // The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the Offline Store if an `offline_store_config` is provided.
  public roleArn?: string;

  // Map of resource tags for the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'featureDefinitions',
        'A list of Feature names and types. See Feature Definition Below.',
        () => sagemaker_FeatureGroupFeatureDefinition_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'onlineStoreConfig',
        'The Online Feature Store Configuration. See Online Store Config Below.',
        () => sagemaker_FeatureGroupOnlineStoreConfig_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of resource tags for the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'featureGroupName',
        'The name of the Feature Group. The name must be unique within an AWS Region in an AWS account.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'roleArn',
        'The Amazon Resource Name (ARN) of the IAM execution role used to persist data into the Offline Store if an `offline_store_config` is provided.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'recordIdentifierFeatureName',
        'The name of the Feature whose value uniquely identifies a Record defined in the Feature Store. Only the latest record per identifier value will be stored in the Online Store.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'A free-form description of a Feature Group.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'eventTimeFeatureName',
        'The name of the feature that stores the EventTime of a Record in a Feature Group.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'offlineStoreConfig',
        'The Offline Feature Store Configuration. See Offline Store Config Below.',
        () => sagemaker_FeatureGroupOfflineStoreConfig_GetTypes(),
        false,
        true,
      ),
    ];
  }
}
