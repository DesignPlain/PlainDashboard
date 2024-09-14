import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kms_getKeyXksKeyConfiguration {
  // The globally unique identifier for the key
  id?: string;
}

export function kms_getKeyXksKeyConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The globally unique identifier for the key",
      () => [],
      true,
      false,
    ),
  ];
}
