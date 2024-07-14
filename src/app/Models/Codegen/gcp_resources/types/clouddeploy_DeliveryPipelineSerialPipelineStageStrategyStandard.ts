import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard {
  // Optional. Configuration for the postdeploy job. If this is not configured, postdeploy job will not be present.
  postdeploy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy;

  // Optional. Configuration for the predeploy job. If this is not configured, predeploy job will not be present.
  predeploy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy;

  // Whether to verify a deployment.
  verify?: boolean;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandard_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "postdeploy",
      "Optional. Configuration for the postdeploy job. If this is not configured, postdeploy job will not be present.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPostdeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predeploy",
      "Optional. Configuration for the predeploy job. If this is not configured, predeploy job will not be present.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyStandardPredeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "verify",
      "Whether to verify a deployment.",
      [],
      false,
      false,
    ),
  ];
}
