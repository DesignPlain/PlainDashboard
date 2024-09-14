import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface quicksight_TemplateSourceEntitySourceTemplate {
  // The Amazon Resource Name (ARN) of the resource.
  arn?: string;
}

export function quicksight_TemplateSourceEntitySourceTemplate_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "The Amazon Resource Name (ARN) of the resource.",
      () => [],
      true,
      false,
    ),
  ];
}
