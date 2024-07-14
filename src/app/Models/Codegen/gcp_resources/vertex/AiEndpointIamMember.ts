import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vertex_AiEndpointIamMemberCondition,
  vertex_AiEndpointIamMemberCondition_GetTypes,
} from "../types/vertex_AiEndpointIamMemberCondition";

export interface AiEndpointIamMemberArgs {
  //
  endpoint?: string;

  //
  location?: string;

  //
  member?: string;

  //
  project?: string;

  //
  role?: string;

  //
  condition?: vertex_AiEndpointIamMemberCondition;
}
export class AiEndpointIamMember extends Resource {
  //
  public location?: string;

  //
  public member?: string;

  //
  public project?: string;

  //
  public role?: string;

  //
  public condition?: vertex_AiEndpointIamMemberCondition;

  //
  public endpoint?: string;

  //
  public etag?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "member", "", [], true, true),
      new DynamicUIProps(InputType.String, "project", "", [], false, true),
      new DynamicUIProps(InputType.String, "role", "", [], true, true),
      new DynamicUIProps(
        InputType.Object,
        "condition",
        "",
        vertex_AiEndpointIamMemberCondition_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(InputType.String, "endpoint", "", [], true, true),
      new DynamicUIProps(InputType.String, "location", "", [], false, true),
    ];
  }
}
