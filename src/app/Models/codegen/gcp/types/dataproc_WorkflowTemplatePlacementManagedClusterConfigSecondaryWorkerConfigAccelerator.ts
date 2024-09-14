import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerator {
  // The number of the accelerator cards of this type exposed to this instance.
  acceleratorCount?: number;

  // Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  acceleratorType?: string;
}

export function dataproc_WorkflowTemplatePlacementManagedClusterConfigSecondaryWorkerConfigAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "acceleratorCount",
      "The number of the accelerator cards of this type exposed to this instance.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "acceleratorType",
      "Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.",
      () => [],
      false,
      true,
    ),
  ];
}
