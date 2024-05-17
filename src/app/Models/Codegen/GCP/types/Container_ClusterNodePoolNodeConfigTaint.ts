import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolNodeConfigTaint {
  // Key for taint.
  Key?: string;

  // Value for taint.
  Value?: string;

  // Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.
  Effect?: string;
}

export function Container_ClusterNodePoolNodeConfigTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Effect",
      "Effect for taint. Accepted values are `NO_SCHEDULE`, `PREFER_NO_SCHEDULE`, and `NO_EXECUTE`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key for taint.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value for taint.",
      [],
      true,
      false,
    ),
  ];
}
