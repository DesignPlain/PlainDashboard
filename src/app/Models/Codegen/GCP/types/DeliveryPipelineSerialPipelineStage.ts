import { DeliveryPipelineSerialPipelineStageDeployParameter } from "./DeliveryPipelineSerialPipelineStageDeployParameter";
import { DeliveryPipelineSerialPipelineStageStrategy } from "./DeliveryPipelineSerialPipelineStageStrategy";

export interface DeliveryPipelineSerialPipelineStage {
  // Optional. The deploy parameters to use for the target in this stage.
  DeployParameters?: Array<DeliveryPipelineSerialPipelineStageDeployParameter>;

  // Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  Profiles?: Array<string>;

  // Optional. The strategy to use for a `Rollout` to this stage.
  Strategy?: DeliveryPipelineSerialPipelineStageStrategy;

  // The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  TargetId?: string;
}
