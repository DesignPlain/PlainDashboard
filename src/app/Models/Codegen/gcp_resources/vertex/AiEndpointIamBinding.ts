import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  vertex_AiEndpointIamBindingCondition,
  vertex_AiEndpointIamBindingCondition_GetTypes,
} from "../types/vertex_AiEndpointIamBindingCondition";

export interface AiEndpointIamBindingArgs {
  //
  members?: Array<string>;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: vertex_AiEndpointIamBindingCondition;

  //
  endpoint?: string;

  //
  location?: string;
}
export class AiEndpointIamBinding extends Resource {
  //
  public role?: string;

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

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        vertex_AiEndpointIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "endpoint", "", [], true, true),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
      new DynamicUIProps(
        InputType.Array,
        "members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
    ];
  }
}
