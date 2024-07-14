import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter,
  clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter";
import {
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategy,
  clouddeploy_DeliveryPipelineSerialPipelineStageStrategy_GetTypes,
} from "./clouddeploy_DeliveryPipelineSerialPipelineStageStrategy";

export interface clouddeploy_DeliveryPipelineSerialPipelineStage {
  // Optional. The deploy parameters to use for the target in this stage.
  deployParameters?: Array<clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter>;

  // Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  profiles?: Array<string>;

  // Optional. The strategy to use for a `Rollout` to this stage.
  strategy?: clouddeploy_DeliveryPipelineSerialPipelineStageStrategy;

  // The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  targetId?: string;
}

export function clouddeploy_DeliveryPipelineSerialPipelineStage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "deployParameters",
      "Optional. The deploy parameters to use for the target in this stage.",
      clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "profiles",
      "Skaffold profiles to use when rendering the manifest for this stage's `Target`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "strategy",
      "Optional. The strategy to use for a `Rollout` to this stage.",
      clouddeploy_DeliveryPipelineSerialPipelineStageStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "targetId",
      "The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.",
      [],
      false,
      false,
    ),
  ];
}
