import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard {
  // Optional. Configuration for the predeploy job. If this is not configured, predeploy job will not be present.
  Predeploy?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy;

  // Whether to verify a deployment.
  Verify?: boolean;

  // Optional. Configuration for the postdeploy job. If this is not configured, postdeploy job will not be present.
  Postdeploy?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "Postdeploy",
      "Optional. Configuration for the postdeploy job. If this is not configured, postdeploy job will not be present.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Predeploy",
      "Optional. Configuration for the predeploy job. If this is not configured, predeploy job will not be present.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "Verify",
      "Whether to verify a deployment.",
      [],
      false,
      false,
    ),
  ];
}
