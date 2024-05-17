import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig,
  Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig_GetTypes,
} from "./Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig";

export interface Dataproc_AutoscalingPolicyBasicAlgorithm {
  /*
Duration between scaling events. A scaling period starts after the
update operation from the previous event has completed.
Bounds: [2m, 1d]. Default: 2m.
*/
  CooldownPeriod?: string;

  /*
YARN autoscaling configuration.
Structure is documented below.
*/
  YarnConfig?: Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig;
}

export function Dataproc_AutoscalingPolicyBasicAlgorithm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "CooldownPeriod",
      "Duration between scaling events. A scaling period starts after the\nupdate operation from the previous event has completed.\nBounds: [2m, 1d]. Default: 2m.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "YarnConfig",
      "YARN autoscaling configuration.\nStructure is documented below.",
      Dataproc_AutoscalingPolicyBasicAlgorithmYarnConfig_GetTypes(),
      true,
      false,
    ),
  ];
}
