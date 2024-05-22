import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface alloydb_InstanceReadPoolConfig {
  // Read capacity, i.e. number of nodes in a read pool instance.
  nodeCount?: number;
}

export function alloydb_InstanceReadPoolConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "nodeCount",
      "Read capacity, i.e. number of nodes in a read pool instance.",
      [],
      false,
      false,
    ),
  ];
}
