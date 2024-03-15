import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AiEndpointIAMBindingCondition } from "../types/AiEndpointIAMBindingCondition";

export interface AiEndpointIAMBindingArgs {
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

  //
  Condition?: AiEndpointIAMBindingCondition;
}
export class AiEndpointIAMBinding extends Resource {
  //
  public Endpoint?: string;

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
  public Condition?: AiEndpointIAMBindingCondition;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(InputType.String, "Endpoint", ""),
      new DynamicUIProps(InputType.String, "Location", ""),
      new DynamicUIProps(InputType.DropDown, "Members", ""),
      new DynamicUIProps(InputType.String, "Project", ""),
      new DynamicUIProps(InputType.String, "Role", ""),
      new DynamicUIProps(InputType.String, "Condition", ""),
    ];
  }
}
