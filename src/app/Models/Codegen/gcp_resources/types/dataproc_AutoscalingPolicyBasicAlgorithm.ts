import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig,
  dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig_GetTypes,
} from "./dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig";

export interface dataproc_AutoscalingPolicyBasicAlgorithm {
  /*
Duration between scaling events. A scaling period starts after the
update operation from the previous event has completed.
Bounds: [2m, 1d]. Default: 2m.
*/
  cooldownPeriod?: string;

  /*
YARN autoscaling configuration.
Structure is documented below.
*/
  yarnConfig?: dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig;
}

export function dataproc_AutoscalingPolicyBasicAlgorithm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "yarnConfig",
      "YARN autoscaling configuration.\nStructure is documented below.",
      dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cooldownPeriod",
      "Duration between scaling events. A scaling period starts after the\nupdate operation from the previous event has completed.\nBounds: [2m, 1d]. Default: 2m.",
      [],
      false,
      false,
    ),
  ];
}
