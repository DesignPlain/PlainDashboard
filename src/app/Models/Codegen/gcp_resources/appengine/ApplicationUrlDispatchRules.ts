import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  appengine_ApplicationUrlDispatchRulesDispatchRule,
  appengine_ApplicationUrlDispatchRulesDispatchRule_GetTypes,
} from "../types/appengine_ApplicationUrlDispatchRulesDispatchRule";

export interface ApplicationUrlDispatchRulesArgs {
  /*
Rules to match an HTTP request and dispatch that request to a service.
Structure is documented below.
*/
  dispatchRules?: Array<appengine_ApplicationUrlDispatchRulesDispatchRule>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class ApplicationUrlDispatchRules extends Resource {
  /*
Rules to match an HTTP request and dispatch that request to a service.
Structure is documented below.
*/
  public dispatchRules?: Array<appengine_ApplicationUrlDispatchRulesDispatchRule>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "dispatchRules",
        "Rules to match an HTTP request and dispatch that request to a service.\nStructure is documented below.",
        appengine_ApplicationUrlDispatchRulesDispatchRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
