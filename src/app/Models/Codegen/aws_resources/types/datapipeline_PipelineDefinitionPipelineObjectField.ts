import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface datapipeline_PipelineDefinitionPipelineObjectField {
  // Field value, expressed as the identifier of another object
  refValue?: string;

  // Field value, expressed as a String.
  stringValue?: string;

  // Field identifier.
  key?: string;
}

export function datapipeline_PipelineDefinitionPipelineObjectField_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "refValue",
      "Field value, expressed as the identifier of another object",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stringValue",
      "Field value, expressed as a String.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Field identifier.",
      [],
      true,
      false,
    ),
  ];
}
