import { DeliveryPipelineSerialPipelineStage } from "./DeliveryPipelineSerialPipelineStage";

export interface DeliveryPipelineSerialPipeline {
  // Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.
  Stages?: Array<DeliveryPipelineSerialPipelineStage>;
}
