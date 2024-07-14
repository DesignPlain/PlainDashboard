import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig,
  sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig_GetTypes,
} from "./sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig";

export interface sagemaker_FlowDefinitionHumanLoopActivationConfig {
  // defines under what conditions SageMaker creates a human loop. See Human Loop Activation Conditions Config details below.
  humanLoopActivationConditionsConfig?: sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
}

export function sagemaker_FlowDefinitionHumanLoopActivationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "humanLoopActivationConditionsConfig",
      "defines under what conditions SageMaker creates a human loop. See Human Loop Activation Conditions Config details below.",
      sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
