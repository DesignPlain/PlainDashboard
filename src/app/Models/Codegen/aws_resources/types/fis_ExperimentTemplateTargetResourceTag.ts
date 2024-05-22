import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface fis_ExperimentTemplateTargetResourceTag {
  // Tag key.
  key?: string;

  // Tag value.
  value?: string;
}

export function fis_ExperimentTemplateTargetResourceTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "key", "Tag key.", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Tag value.",
      [],
      true,
      false,
    ),
  ];
}
