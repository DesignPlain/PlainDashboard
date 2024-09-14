import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig {
  // The entrypoint used to run the application in the container.
  containerEntrypoints?: Array<string>;

  // The environment variables to set in the container.
  containerEnvironmentVariables?: Map<string, string>;

  // The arguments for the container when you're running the application.
  containerArguments?: Array<string>;
}

export function sagemaker_AppImageConfigCodeEditorAppImageConfigContainerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "containerEntrypoints",
      "The entrypoint used to run the application in the container.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "containerEnvironmentVariables",
      "The environment variables to set in the container.",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "containerArguments",
      "The arguments for the container when you're running the application.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
