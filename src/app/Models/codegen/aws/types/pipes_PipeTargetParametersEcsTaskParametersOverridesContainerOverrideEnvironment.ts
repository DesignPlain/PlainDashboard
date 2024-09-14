import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment {
  // Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Value of parameter to start execution of a SageMaker Model Building Pipeline. Maximum length of 1024.
  value?: string;
}

export function pipes_PipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of parameter to start execution of a SageMaker Model Building Pipeline. Maximum length of 1024.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
      () => [],
      false,
      false,
    ),
  ];
}
