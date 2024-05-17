import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_TargetMultiTarget {
  // Required. The target_ids of this multiTarget.
  TargetIds?: Array<string>;
}

export function Clouddeploy_TargetMultiTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "TargetIds",
      "Required. The target_ids of this multiTarget.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
