import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator {
  // The number of the accelerator cards of this type exposed to this instance.
  AcceleratorCount?: number;

  // Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.
  AcceleratorType?: string;
}

export function Dataproc_WorkflowTemplatePlacementManagedClusterConfigMasterConfigAccelerator_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "AcceleratorCount",
      "The number of the accelerator cards of this type exposed to this instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "AcceleratorType",
      "Full URL, partial URI, or short name of the accelerator type resource to expose to this instance. See (https://cloud.google.com/dataproc/docs/concepts/configuring-clusters/auto-zone#using_auto_zone_placement) feature, you must use the short name of the accelerator type resource, for example, `nvidia-tesla-k80`.",
      [],
      false,
      true,
    ),
  ];
}
