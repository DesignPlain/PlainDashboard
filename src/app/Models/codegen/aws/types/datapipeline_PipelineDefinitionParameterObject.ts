import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  datapipeline_PipelineDefinitionParameterObjectAttribute,
  datapipeline_PipelineDefinitionParameterObjectAttribute_GetTypes,
} from "./datapipeline_PipelineDefinitionParameterObjectAttribute";

export interface datapipeline_PipelineDefinitionParameterObject {
  // Configuration block for attributes of the parameter object. See below
  attributes?: Array<datapipeline_PipelineDefinitionParameterObjectAttribute>;

  // ID of the parameter object.
  id?: string;
}

export function datapipeline_PipelineDefinitionParameterObject_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "attributes",
      "Configuration block for attributes of the parameter object. See below",
      () => datapipeline_PipelineDefinitionParameterObjectAttribute_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "ID of the parameter object.",
      () => [],
      true,
      false,
    ),
  ];
}
