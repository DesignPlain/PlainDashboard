import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration,
  s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration_GetTypes,
} from './s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration';

export interface s3control_ObjectLambdaAccessPointConfiguration {
  // Allowed features. Valid values: `GetObject-Range`, `GetObject-PartNumber`.
  allowedFeatures?: Array<string>;

  // Whether or not the CloudWatch metrics configuration is enabled.
  cloudWatchMetricsEnabled?: boolean;

  // Standard access point associated with the Object Lambda Access Point.
  supportingAccessPoint?: string;

  // List of transformation configurations for the Object Lambda Access Point. See Transformation Configuration below for more details.
  transformationConfigurations?: Array<s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration>;
}

export function s3control_ObjectLambdaAccessPointConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'allowedFeatures',
      'Allowed features. Valid values: `GetObject-Range`, `GetObject-PartNumber`.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'cloudWatchMetricsEnabled',
      'Whether or not the CloudWatch metrics configuration is enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'supportingAccessPoint',
      'Standard access point associated with the Object Lambda Access Point.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'transformationConfigurations',
      'List of transformation configurations for the Object Lambda Access Point. See Transformation Configuration below for more details.',
      () =>
        s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration_GetTypes(),
      true,
      false,
    ),
  ];
}
