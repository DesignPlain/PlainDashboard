import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkconnectivity_PolicyBasedRouteWarning {
  /*
(Output)
A warning code, if applicable.
*/
  code?: string;

  /*
(Output)
Metadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement.
*/
  data?: Map<string, string>;

  /*
(Output)
A human-readable description of the warning code.
*/
  warningMessage?: string;
}

export function networkconnectivity_PolicyBasedRouteWarning_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "code",
      "(Output)\nA warning code, if applicable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "data",
      "(Output)\nMetadata about this warning in key: value format. The key should provides more detail on the warning being returned. For example, for warnings where there are no results in a list request for a particular zone, this key might be scope and the key value might be the zone name. Other examples might be a key indicating a deprecated resource and a suggested replacement.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "warningMessage",
      "(Output)\nA human-readable description of the warning code.",
      [],
      false,
      false,
    ),
  ];
}
