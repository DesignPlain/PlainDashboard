import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy {
  // Canary deployment strategy provides progressive percentage based deployments to a Target.
  Canary?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary;

  // Standard deployment strategy executes a single deploy and allows verifying the deployment.
  Standard?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Canary",
      "Canary deployment strategy provides progressive percentage based deployments to a Target.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Standard",
      "Standard deployment strategy executes a single deploy and allows verifying the deployment.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard_GetTypes(),
      false,
      false,
    ),
  ];
}
