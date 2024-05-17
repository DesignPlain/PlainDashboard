import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Vertex_AiEndpointIamMemberCondition,
  Vertex_AiEndpointIamMemberCondition_GetTypes,
} from "../types/Vertex_AiEndpointIamMemberCondition";

export interface AiEndpointIamMemberArgs {
  //
  Location?: string;

  //
  Member?: string;

  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: Vertex_AiEndpointIamMemberCondition;

  //
  Endpoint?: string;
}
export class AiEndpointIamMember extends Resource {
  //
  public Location?: string;

  //
  public Member?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  //
  public Condition?: Vertex_AiEndpointIamMemberCondition;

  //
  public Endpoint?: string;

  //
  public Etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Member", "", [], true, true),
      new DynamicUIProps(InputType.String, "Project", "", [], false, true),
      new DynamicUIProps(InputType.String, "Role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "Condition",
        "",
        Vertex_AiEndpointIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "Endpoint", "", [], true, true),
      new DynamicUIProps(InputType.String, "Location", "", [], false, true),
    ];
  }
}
