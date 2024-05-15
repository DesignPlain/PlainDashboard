import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Bigtable_GCPolicyMaxVersion {
  /*
Number of version before applying the GC policy.

-----
`gc_rules` include 2 fields:
*/
  Number?: number;
}

export function Bigtable_GCPolicyMaxVersion_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "Number",
      "Number of version before applying the GC policy.\n\n-----\n`gc_rules` include 2 fields:",
      [],
      true,
      true,
    ),
  ];
}
