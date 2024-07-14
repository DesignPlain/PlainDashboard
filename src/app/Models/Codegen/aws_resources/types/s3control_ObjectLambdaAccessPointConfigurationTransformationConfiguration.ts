import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation,
  s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation_GetTypes,
} from "./s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation";

export interface s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration {
  // The actions of an Object Lambda Access Point configuration. Valid values: `GetObject`.
  actions?: Array<string>;

  // The content transformation of an Object Lambda Access Point configuration. See Content Transformation below for more details.
  contentTransformation?: s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation;
}

export function s3control_ObjectLambdaAccessPointConfigurationTransformationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "actions",
      "The actions of an Object Lambda Access Point configuration. Valid values: `GetObject`.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "contentTransformation",
      "The content transformation of an Object Lambda Access Point configuration. See Content Transformation below for more details.",
      s3control_ObjectLambdaAccessPointConfigurationTransformationConfigurationContentTransformation_GetTypes(),
      true,
      false,
    ),
  ];
}
