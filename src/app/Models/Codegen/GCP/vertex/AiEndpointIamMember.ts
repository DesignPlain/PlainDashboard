import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiEndpointIAMMemberCondition } from "../types/AiEndpointIAMMemberCondition";

export interface AiEndpointIAMMemberArgs {
  //
  Project?: string;

  //
  Role?: string;

  //
  Condition?: AiEndpointIAMMemberCondition;

  //
  Endpoint?: string;

  //
  Location?: string;

  //
  Member?: string;
}
export class AiEndpointIAMMember extends Resource {
  //
  public Condition?: AiEndpointIAMMemberCondition;

  //
  public Endpoint?: string;

  //
  public Etag?: string;

  //
  public Location?: string;

  //
  public Member?: string;

  //
  public Project?: string;

  //
  public Role?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
      new DynamicUIProps(InputType.String, "Endpoint", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.String, "Member", ""),
    ];
  }
}
