import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment {
  // Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  Percentages?: Array<number>;

  // Optional. Configuration for the postdeploy job of the last phase. If this is not configured, postdeploy job will not be present.
  Postdeploy?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy;

  // Optional. Configuration for the predeploy job of the first phase. If this is not configured, predeploy job will not be present.
  Predeploy?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy;

  // Whether to run verify tests after each percentage deployment.
  Verify?: boolean;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeployment_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Percentages",
      "Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.",
      InputType_Number_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Postdeploy",
      "Optional. Configuration for the postdeploy job of the last phase. If this is not configured, postdeploy job will not be present.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPostdeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Predeploy",
      "Optional. Configuration for the predeploy job of the first phase. If this is not configured, predeploy job will not be present.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCanaryDeploymentPredeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Verify",
      "Whether to run verify tests after each percentage deployment.",
      [],
      false,
      false,
    ),
  ];
}
