import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference {
  // Name of the referent.
  name?: string;
}

export function cloudrun_ServiceTemplateSpecContainerEnvFromConfigMapRefLocalObjectReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the referent.",
      () => [],
      true,
      false,
    ),
  ];
}
