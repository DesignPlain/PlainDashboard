import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dax_ParameterGroupParameter,
  dax_ParameterGroupParameter_GetTypes,
} from "../types/dax_ParameterGroupParameter";

export interface ParameterGroupArgs {
  // The name of the parameter group.
  name?: string;

  // The parameters of the parameter group.
  parameters?: Array<dax_ParameterGroupParameter>;

  // A description of the parameter group.
  description?: string;
}
export class ParameterGroup extends DS_Resource {
  // The parameters of the parameter group.
  public parameters?: Array<dax_ParameterGroupParameter>;

  // A description of the parameter group.
  public description?: string;

  // The name of the parameter group.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the parameter group.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "parameters",
        "The parameters of the parameter group.",
        () => dax_ParameterGroupParameter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the parameter group.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
