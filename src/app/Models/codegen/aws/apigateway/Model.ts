import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ModelArgs {
  // Description of the model
  description?: string;

  // Name of the model
  name?: string;

  // ID of the associated REST API
  restApi?: string;

  // Schema of the model in a JSON form
  schema?: string;

  // Content type of the model
  contentType?: string;
}
export class Model extends DS_Resource {
  // Content type of the model
  public contentType?: string;

  // Description of the model
  public description?: string;

  // Name of the model
  public name?: string;

  // ID of the associated REST API
  public restApi?: string;

  // Schema of the model in a JSON form
  public schema?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the model",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the model",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the associated REST API",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "schema",
        "Schema of the model in a JSON form",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "contentType",
        "Content type of the model",
        () => [],
        true,
        true,
      ),
    ];
  }
}
