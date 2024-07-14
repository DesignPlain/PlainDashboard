import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface redis_getInstanceNode {
  // Location of the node.
  zone?: string;

  // Node identifying string. e.g. 'node-0', 'node-1'
  id?: string;
}

export function redis_getInstanceNode_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "zone",
      "Location of the node.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "id",
      "Node identifying string. e.g. 'node-0', 'node-1'",
      [],
      true,
      false,
    ),
  ];
}
