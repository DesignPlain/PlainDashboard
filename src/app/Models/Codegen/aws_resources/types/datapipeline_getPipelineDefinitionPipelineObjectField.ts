import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datapipeline_getPipelineDefinitionPipelineObjectField {
  // Field identifier.
  key?: string;

  // Field value, expressed as the identifier of another object
  refValue?: string;

  // Field value, expressed as a String.
  stringValue?: string;
}

export function datapipeline_getPipelineDefinitionPipelineObjectField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "Field identifier.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "refValue",
      "Field value, expressed as the identifier of another object",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "Field value, expressed as a String.",
      [],
      true,
      false,
    ),
  ];
}
