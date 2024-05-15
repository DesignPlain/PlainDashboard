import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_AwsNodePoolConfigTaint {
  // Key for the taint.
  Key?: string;

  // Value for the taint.
  Value?: string;

  // The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE
  Effect?: string;
}

export function Container_AwsNodePoolConfigTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Key for the taint.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Value for the taint.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "Effect",
      "The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE",
      [],
      true,
      true,
    ),
  ];
}
