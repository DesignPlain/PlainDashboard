import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AwsNodePoolConfigTaint {
  // The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE
  effect?: string;

  // Key for the taint.
  key?: string;

  // Value for the taint.
  value?: string;
}

export function container_AwsNodePoolConfigTaint_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value for the taint.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "effect",
      "The taint effect. Possible values: EFFECT_UNSPECIFIED, NO_SCHEDULE, PREFER_NO_SCHEDULE, NO_EXECUTE",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Key for the taint.",
      [],
      true,
      true,
    ),
  ];
}
