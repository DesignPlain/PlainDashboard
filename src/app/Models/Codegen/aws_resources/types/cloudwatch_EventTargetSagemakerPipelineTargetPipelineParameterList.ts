import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList {
  // Name of parameter to start execution of a SageMaker Model Building Pipeline.
  name?: string;

  // Value of parameter to start execution of a SageMaker Model Building Pipeline.
  value?: string;
}

export function cloudwatch_EventTargetSagemakerPipelineTargetPipelineParameterList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of parameter to start execution of a SageMaker Model Building Pipeline.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value of parameter to start execution of a SageMaker Model Building Pipeline.",
      [],
      true,
      false,
    ),
  ];
}
