import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd,
  sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd_GetTypes,
} from "./sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd";

export interface sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice {
  // Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars. See Amount In Usd details below.
  amountInUsd?: sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
}

export function sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "amountInUsd",
      "Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars. See Amount In Usd details below.",
      sagemaker_FlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd_GetTypes(),
      false,
      true,
    ),
  ];
}
