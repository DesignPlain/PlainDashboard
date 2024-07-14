import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStage,
  clouddeploy_DeliveryPipelineSerialPipelineStage_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStage";

export interface clouddeploy_DeliveryPipelineSerialPipeline {
  // Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.
  stages?: Array<clouddeploy_DeliveryPipelineSerialPipelineStage>;
}

export function clouddeploy_DeliveryPipelineSerialPipeline_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "stages",
      "Each stage specifies configuration for a `Target`. The ordering of this list defines the promotion flow.",
      clouddeploy_DeliveryPipelineSerialPipelineStage_GetTypes(),
      false,
      false,
    ),
  ];
}
