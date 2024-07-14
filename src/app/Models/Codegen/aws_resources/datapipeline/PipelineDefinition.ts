import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  datapipeline_PipelineDefinitionPipelineObject,
  datapipeline_PipelineDefinitionPipelineObject_GetTypes,
} from "../types/datapipeline_PipelineDefinitionPipelineObject";
import {
  datapipeline_PipelineDefinitionParameterObject,
  datapipeline_PipelineDefinitionParameterObject_GetTypes,
} from "../types/datapipeline_PipelineDefinitionParameterObject";
import {
  datapipeline_PipelineDefinitionParameterValue,
  datapipeline_PipelineDefinitionParameterValue_GetTypes,
} from "../types/datapipeline_PipelineDefinitionParameterValue";

export interface PipelineDefinitionArgs {
  // ID of the pipeline.
  pipelineId?: string;

  /*
Configuration block for the objects that define the pipeline. See below

The following arguments are optional:
*/
  pipelineObjects?: Array<datapipeline_PipelineDefinitionPipelineObject>;

  // Configuration block for the parameter objects used in the pipeline definition. See below
  parameterObjects?: Array<datapipeline_PipelineDefinitionParameterObject>;

  // Configuration block for the parameter values used in the pipeline definition. See below
  parameterValues?: Array<datapipeline_PipelineDefinitionParameterValue>;
}
export class PipelineDefinition extends Resource {
  // Configuration block for the parameter values used in the pipeline definition. See below
  public parameterValues?: Array<datapipeline_PipelineDefinitionParameterValue>;

  // ID of the pipeline.
  public pipelineId?: string;

  /*
Configuration block for the objects that define the pipeline. See below

The following arguments are optional:
*/
  public pipelineObjects?: Array<datapipeline_PipelineDefinitionPipelineObject>;

  // Configuration block for the parameter objects used in the pipeline definition. See below
  public parameterObjects?: Array<datapipeline_PipelineDefinitionParameterObject>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "pipelineId",
        "ID of the pipeline.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "pipelineObjects",
        "Configuration block for the objects that define the pipeline. See below\n\nThe following arguments are optional:",
        datapipeline_PipelineDefinitionPipelineObject_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameterObjects",
        "Configuration block for the parameter objects used in the pipeline definition. See below",
        datapipeline_PipelineDefinitionParameterObject_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameterValues",
        "Configuration block for the parameter values used in the pipeline definition. See below",
        datapipeline_PipelineDefinitionParameterValue_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
