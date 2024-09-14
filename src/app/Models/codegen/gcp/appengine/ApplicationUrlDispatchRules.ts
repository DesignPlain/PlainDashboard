import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  appengine_ApplicationUrlDispatchRulesDispatchRule,
  appengine_ApplicationUrlDispatchRulesDispatchRule_GetTypes,
} from "../types/appengine_ApplicationUrlDispatchRulesDispatchRule";

export interface ApplicationUrlDispatchRulesArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Rules to match an HTTP request and dispatch that request to a service.
Structure is documented below.
*/
  dispatchRules?: Array<appengine_ApplicationUrlDispatchRulesDispatchRule>;
}
export class ApplicationUrlDispatchRules extends DS_Resource {
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
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "dispatchRules",
        "Rules to match an HTTP request and dispatch that request to a service.\nStructure is documented below.",
        () => appengine_ApplicationUrlDispatchRulesDispatchRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
