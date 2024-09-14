import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface redis_getInstanceNode {
  // Node identifying string. e.g. 'node-0', 'node-1'
  id?: string;

  // Location of the node.
  zone?: string;
}

export function redis_getInstanceNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "Node identifying string. e.g. 'node-0', 'node-1'",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "zone",
      "Location of the node.",
      () => [],
      true,
      false,
    ),
  ];
}
