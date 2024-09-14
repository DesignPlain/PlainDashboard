import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  vertex_AiEndpointIamBindingCondition,
  vertex_AiEndpointIamBindingCondition_GetTypes,
} from "../types/vertex_AiEndpointIamBindingCondition";

export interface AiEndpointIamBindingArgs {
  //
  condition?: vertex_AiEndpointIamBindingCondition;

  //
  endpoint?: string;

  //
  location?: string;

  //
  members?: Array<string>;

  //
  project?: string;

  //
  role?: string;
}
export class AiEndpointIamBinding extends DS_Resource {
  //
  public condition?: vertex_AiEndpointIamBindingCondition;

  //
  public endpoint?: string;

  //
  public etag?: string;

  //
  public location?: string;

  //
  public members?: Array<string>;

  //
  public project?: string;

  //
  public role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "role", "", () => [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        () => vertex_AiEndpointIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "endpoint",
        "",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "",
        () => [],
        false,
        true,
      ),
    ];
  }
}
