import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategy {
  // Canary deployment strategy provides progressive percentage based deployments to a Target.
  canary?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary;

  // Standard deployment strategy executes a single deploy and allows verifying the deployment.
  standard?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "canary",
      "Canary deployment strategy provides progressive percentage based deployments to a Target.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanary_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "standard",
      "Standard deployment strategy executes a single deploy and allows verifying the deployment.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard_GetTypes(),
      false,
      false,
    ),
  ];
}
