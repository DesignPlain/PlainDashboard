import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ApplicationUrlDispatchRulesDispatchRule } from "../types/ApplicationUrlDispatchRulesDispatchRule";

export interface ApplicationUrlDispatchRulesArgs {
  /*
Rules to match an HTTP request and dispatch that request to a service.
Structure is documented below.
*/
  DispatchRules?: Array<ApplicationUrlDispatchRulesDispatchRule>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class ApplicationUrlDispatchRules extends Resource {
  /*
Rules to match an HTTP request and dispatch that request to a service.
Structure is documented below.
*/
  public DispatchRules?: Array<ApplicationUrlDispatchRulesDispatchRule>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.DropDown,
        "DispatchRules",
        "Rules to match an HTTP request and dispatch that request to a service.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
