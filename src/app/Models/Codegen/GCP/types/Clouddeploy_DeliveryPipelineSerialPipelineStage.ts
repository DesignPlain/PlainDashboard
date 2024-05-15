import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy,
  Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy";
import {
  Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter,
  Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter_GetTypes,
} from "./Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter";

export interface Clouddeploy_DeliveryPipelineSerialPipelineStage {
  // Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  Profiles?: Array<string>;

  // Optional. The strategy to use for a `Rollout` to this stage.
  Strategy?: Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy;

  // The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  TargetId?: string;

  // Optional. The deploy parameters to use for the target in this stage.
  DeployParameters?: Array<Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter>;
}

export function Clouddeploy_DeliveryPipelineSerialPipelineStage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Profiles",
      "Skaffold profiles to use when rendering the manifest for this stage's `Target`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "Strategy",
      "Optional. The strategy to use for a `Rollout` to this stage.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageStrategy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "TargetId",
      "The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "DeployParameters",
      "Optional. The deploy parameters to use for the target in this stage.",
      Clouddeploy_DeliveryPipelineSerialPipelineStageDeployParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
