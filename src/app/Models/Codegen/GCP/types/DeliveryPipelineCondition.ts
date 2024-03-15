import { DeliveryPipelineConditionTargetsPresentCondition } from "./DeliveryPipelineConditionTargetsPresentCondition";
import { DeliveryPipelineConditionTargetsTypeCondition } from "./DeliveryPipelineConditionTargetsTypeCondition";
import { DeliveryPipelineConditionPipelineReadyCondition } from "./DeliveryPipelineConditionPipelineReadyCondition";

export interface DeliveryPipelineCondition {
  // Details around the Pipeline's overall status.
  PipelineReadyConditions?: Array<DeliveryPipelineConditionPipelineReadyCondition>;

  // Details around targets enumerated in the pipeline.
  TargetsPresentConditions?: Array<DeliveryPipelineConditionTargetsPresentCondition>;

  // Details on the whether the targets enumerated in the pipeline are of the same type.
  TargetsTypeConditions?: Array<DeliveryPipelineConditionTargetsTypeCondition>;
}
