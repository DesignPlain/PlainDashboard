import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineConditionPipelineReadyCondition,
  Clouddeploy_DeliveryPipelineConditionPipelineReadyCondition_GetTypes,
} from "./Clouddeploy_DeliveryPipelineConditionPipelineReadyCondition";
import {
  Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition,
  Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition_GetTypes,
} from "./Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition";
import {
  Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition,
  Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition_GetTypes,
} from "./Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition";

export interface Clouddeploy_DeliveryPipelineCondition {
  // Details on the whether the targets enumerated in the pipeline are of the same type.
  TargetsTypeConditions?: Array<Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition>;

  // Details around the Pipeline's overall status.
  PipelineReadyConditions?: Array<Clouddeploy_DeliveryPipelineConditionPipelineReadyCondition>;

  // Details around targets enumerated in the pipeline.
  TargetsPresentConditions?: Array<Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition>;
}

export function Clouddeploy_DeliveryPipelineCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TargetsTypeConditions",
      "Details on the whether the targets enumerated in the pipeline are of the same type.",
      Clouddeploy_DeliveryPipelineConditionTargetsTypeCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "PipelineReadyConditions",
      "Details around the Pipeline's overall status.",
      Clouddeploy_DeliveryPipelineConditionPipelineReadyCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "TargetsPresentConditions",
      "Details around targets enumerated in the pipeline.",
      Clouddeploy_DeliveryPipelineConditionTargetsPresentCondition_GetTypes(),
      false,
      false,
    ),
  ];
}
