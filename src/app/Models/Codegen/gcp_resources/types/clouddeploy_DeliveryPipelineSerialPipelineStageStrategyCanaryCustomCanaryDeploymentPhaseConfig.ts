import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy";

export interface clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig {
  // Required. Percentage deployment for the phase.
  percentage?: number;

  // Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.
  phaseId?: string;

  // Optional. Configuration for the postdeploy job of this phase. If this is not configured, postdeploy job will not be present for this phase.
  postdeploy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy;

  // Optional. Configuration for the predeploy job of this phase. If this is not configured, predeploy job will not be present for this phase.
  predeploy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy;

  // Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
  profiles?: Array<string>;

  /*
Whether to run verify tests after the deployment.

- - -
*/
  verify?: boolean;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "percentage",
      "Required. Percentage deployment for the phase.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "phaseId",
      "Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postdeploy",
      "Optional. Configuration for the postdeploy job of this phase. If this is not configured, postdeploy job will not be present for this phase.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "predeploy",
      "Optional. Configuration for the predeploy job of this phase. If this is not configured, predeploy job will not be present for this phase.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "profiles",
      "Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "verify",
      "Whether to run verify tests after the deployment.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
