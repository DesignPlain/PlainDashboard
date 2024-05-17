import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Memcache_InstanceMemcacheParameters {
  // User-defined set of parameters to use in the memcache process.
  Params?: Map<string, string>;

  /*
(Output)
This is a unique ID associated with this set of parameters.
*/
  Id?: string;
}

export function Memcache_InstanceMemcacheParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Params",
      "User-defined set of parameters to use in the memcache process.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Id",
      "(Output)\nThis is a unique ID associated with this set of parameters.",
      [],
      false,
      false,
    ),
  ];
}
