import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStage,
  Clouddeploy_DeliveryPipelineSerialPipelineStage_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStage";

export interface Clouddeploy_DeliveryPipelineSerialPipeline {
  // Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.
  Stages?: Array<Clouddeploy_DeliveryPipelineSerialPipelineStage>;
}

export function Clouddeploy_DeliveryPipelineSerialPipeline_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Stages",
      "Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.",
      Clouddeploy_DeliveryPipelineSerialPipelineStage_GetTypes(),
      false,
      false,
    ),
  ];
}
