import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface bigtable_GCPolicyMaxVersion {
  /*
Number of version before applying the GC policy.

-----
`gc_rules` include 2 fields:
*/
  number?: number;
}

export function bigtable_GCPolicyMaxVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "number",
      "Number of version before applying the GC policy.\n\n-----\n`gc_rules` include 2 fields:",
      [],
      true,
      true,
    ),
  ];
}
