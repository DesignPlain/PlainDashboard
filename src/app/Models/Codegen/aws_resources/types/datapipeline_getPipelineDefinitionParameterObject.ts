import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  datapipeline_getPipelineDefinitionParameterObjectAttribute,
  datapipeline_getPipelineDefinitionParameterObjectAttribute_GetTypes,
} from "./datapipeline_getPipelineDefinitionParameterObjectAttribute";

export interface datapipeline_getPipelineDefinitionParameterObject {
  //
  attributes?: Array<datapipeline_getPipelineDefinitionParameterObjectAttribute>;

  // ID of the object.
  id?: string;
}

export function datapipeline_getPipelineDefinitionParameterObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "attributes",
      "",
      datapipeline_getPipelineDefinitionParameterObjectAttribute_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the object.",
      [],
      true,
      false,
    ),
  ];
}
