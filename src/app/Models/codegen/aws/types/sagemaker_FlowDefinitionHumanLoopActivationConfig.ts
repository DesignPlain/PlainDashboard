import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
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
      () =>
        sagemaker_FlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig_GetTypes(),
      false,
      true,
    ),
  ];
}
