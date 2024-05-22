import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_getTaskExecutionOverridesContainerOverrideEnvironment {
  // The name of the key-value pair. For environment variables, this is the name of the environment variable.
  key?: string;

  // The value of the key-value pair. For environment variables, this is the value of the environment variable.
  value?: string;
}

export function ecs_getTaskExecutionOverridesContainerOverrideEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The name of the key-value pair. For environment variables, this is the name of the environment variable.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The value of the key-value pair. For environment variables, this is the value of the environment variable.",
      [],
      true,
      false,
    ),
  ];
}
