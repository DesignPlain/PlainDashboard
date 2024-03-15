import { DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy";
import { DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy } from "./DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy";

export interface DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfig {
  // Required. Percentage deployment for the phase.
  Percentage?: number;

  // Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^a-z?$`.
  PhaseId?: string;

  // Optional. Configuration for the postdeploy job of this phase. If this is not configured, postdeploy job will not be present for this phase.
  Postdeploy?: DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPostdeploy;

  // Optional. Configuration for the predeploy job of this phase. If this is not configured, predeploy job will not be present for this phase.
  Predeploy?: DeliveryPipelineSerialPipelineStageStrategyCanaryCustomCanaryDeploymentPhaseConfigPredeploy;

  // Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
  Profiles?: Array<string>;

  /*
Whether to run verify tests after the deployment.

- - -
*/
  Verify?: boolean;
}
