import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dax_ParameterGroupParameter,
  dax_ParameterGroupParameter_GetTypes,
} from "../types/dax_ParameterGroupParameter";

export interface ParameterGroupArgs {
  // A description of the parameter group.
  description?: string;

  // The name of the parameter group.
  name?: string;

  // The parameters of the parameter group.
  parameters?: Array<dax_ParameterGroupParameter>;
}
export class ParameterGroup extends Resource {
  // A description of the parameter group.
  public description?: string;

  // The name of the parameter group.
  public name?: string;

  // The parameters of the parameter group.
  public parameters?: Array<dax_ParameterGroupParameter>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the parameter group.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "The parameters of the parameter group.",
        dax_ParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the parameter group.",
        [],
        false,
        true,
      ),
    ];
  }
}
