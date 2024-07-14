import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment {
  // Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Value of parameter to start execution of a SageMaker Model Building Pipeline. Maximum length of 1024.
  value?: string;
}

export function pipes_PipeTargetParametersBatchJobParametersContainerOverridesEnvironment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the pipe. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of parameter to start execution of a SageMaker Model Building Pipeline. Maximum length of 1024.",
      [],
      false,
      false,
    ),
  ];
}
