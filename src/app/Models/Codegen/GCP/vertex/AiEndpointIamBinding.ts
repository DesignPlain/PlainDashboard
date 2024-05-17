import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiEndpointIamBindingCondition,
  Vertex_AiEndpointIamBindingCondition_GetTypes,
} from "../types/Vertex_AiEndpointIamBindingCondition";

export interface AiEndpointIamBindingArgs {
  //
  Condition?: Vertex_AiEndpointIamBindingCondition;

  //
  Endpoint?: string;

  //
  Location?: string;

  //
  Members?: Array<string>;

  //
  Project?: string;

  //
  Role?: string;
}
export class AiEndpointIamBinding extends Resource {
  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Members?: Array<string>;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Vertex_AiEndpointIamBindingCondition;

  //
  public Endpoint?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Vertex_AiEndpointIamBindingCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Endpoint", "", [], true, true),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
      new DynamicUIProps(
        InputType.Array,
        "Members",
        "",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
    ];
  }
}
