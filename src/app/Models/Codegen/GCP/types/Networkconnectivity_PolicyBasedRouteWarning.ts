import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkconnectivity_PolicyBasedRouteWarning {
  /*
(Output)
A human-readable description of the warning code.
*/
  WarningMessage?: string;

  /*
(Output)
A warning code, if applicable.
*/
  Code?: string;

  /*
(Output)
Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement.
*/
  Data?: Map<string, string>;
}

export function Networkconnectivity_PolicyBasedRouteWarning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Data",
      "(Output)\nMetadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "WarningMessage",
      "(Output)\nA human-readable description of the warning code.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Code",
      "(Output)\nA warning code, if applicable.",
      [],
      false,
      false,
    ),
  ];
}
