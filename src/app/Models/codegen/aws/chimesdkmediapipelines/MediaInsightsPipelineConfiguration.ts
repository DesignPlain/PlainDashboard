import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration_GetTypes,
} from '../types/chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration';
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement_GetTypes,
} from '../types/chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement';

export interface MediaInsightsPipelineConfigurationArgs {
  // Configuration name.
  name?: string;

  // Configuration for real-time alert rules to send EventBridge notifications when certain conditions are met.
  realTimeAlertConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration;

  // ARN of IAM Role used by service to invoke processors and sinks specified by configuration elements.
  resourceAccessRoleArn?: string;

  // Key-value map of tags for the resource.
  tags?: Map<string, string>;

  // Collection of processors and sinks to transform media and deliver data.
  elements?: Array<chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement>;
}
export class MediaInsightsPipelineConfiguration extends DS_Resource {
  //
  public tagsAll?: Map<string, string>;

  // ARN of the Media Insights Pipeline Configuration.
  public arn?: string;

  // Collection of processors and sinks to transform media and deliver data.
  public elements?: Array<chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement>;

  // Configuration name.
  public name?: string;

  // Configuration for real-time alert rules to send EventBridge notifications when certain conditions are met.
  public realTimeAlertConfiguration?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration;

  // ARN of IAM Role used by service to invoke processors and sinks specified by configuration elements.
  public resourceAccessRoleArn?: string;

  // Key-value map of tags for the resource.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'name',
        'Configuration name.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'realTimeAlertConfiguration',
        'Configuration for real-time alert rules to send EventBridge notifications when certain conditions are met.',
        () =>
          chimesdkmediapipelines_MediaInsightsPipelineConfigurationRealTimeAlertConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'resourceAccessRoleArn',
        'ARN of IAM Role used by service to invoke processors and sinks specified by configuration elements.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of tags for the resource.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'elements',
        'Collection of processors and sinks to transform media and deliver data.',
        () =>
          chimesdkmediapipelines_MediaInsightsPipelineConfigurationElement_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
