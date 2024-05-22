import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec {
  // The instance type.
  instanceType?: string;

  // The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.
  lifecycleConfigArn?: string;

  // The Amazon Resource Name (ARN) of the SageMaker image created on the instance.
  sagemakerImageArn?: string;

  // The SageMaker Image Version Alias.
  sagemakerImageVersionAlias?: string;

  // The ARN of the image version created on the instance.
  sagemakerImageVersionArn?: string;
}

export function sagemaker_SpaceSpaceSettingsJupyterServerAppSettingsDefaultResourceSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sagemakerImageVersionArn",
      "The ARN of the image version created on the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "instanceType",
      "The instance type.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "lifecycleConfigArn",
      "The Amazon Resource Name (ARN) of the Lifecycle Configuration attached to the Resource.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sagemakerImageArn",
      "The Amazon Resource Name (ARN) of the SageMaker image created on the instance.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sagemakerImageVersionAlias",
      "The SageMaker Image Version Alias.",
      [],
      false,
      false,
    ),
  ];
}
