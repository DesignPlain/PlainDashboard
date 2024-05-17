import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Appengine_ApplicationUrlDispatchRule {
  //
  Domain?: string;

  //
  Path?: string;

  //
  Service?: string;
}

export function Appengine_ApplicationUrlDispatchRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Service", "", [], false, false),
    new DynamicUIProps(InputType.String, "Domain", "", [], false, false),
    new DynamicUIProps(InputType.String, "Path", "", [], false, false),
  ];
}
