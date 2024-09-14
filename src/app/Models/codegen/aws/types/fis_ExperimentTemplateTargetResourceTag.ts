import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fis_ExperimentTemplateTargetResourceTag {
  // Tag key.
  key?: string;

  // Tag value.
  value?: string;
}

export function fis_ExperimentTemplateTargetResourceTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Tag key.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Tag value.",
      () => [],
      true,
      false,
    ),
  ];
}
