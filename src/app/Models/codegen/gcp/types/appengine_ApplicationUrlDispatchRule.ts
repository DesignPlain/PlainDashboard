import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appengine_ApplicationUrlDispatchRule {
  //
  domain?: string;

  //
  path?: string;

  //
  service?: string;
}

export function appengine_ApplicationUrlDispatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "domain", "", () => [], false, false),
    new DynamicUIProps(InputType.String, "path", "", () => [], false, false),
    new DynamicUIProps(InputType.String, "service", "", () => [], false, false),
  ];
}
