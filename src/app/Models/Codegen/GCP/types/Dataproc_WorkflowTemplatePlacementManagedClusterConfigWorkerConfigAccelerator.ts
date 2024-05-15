import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator {
  // Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  AcceleratorType?: string;

  // The number of the accelerator cards of this type exposed to this instance.
  AcceleratorCount?: number;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigWorkerConfigAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AcceleratorType",
      "Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "AcceleratorCount",
      "The number of the accelerator cards of this type exposed to this instance.",
      [],
      false,
      true,
    ),
  ];
}
