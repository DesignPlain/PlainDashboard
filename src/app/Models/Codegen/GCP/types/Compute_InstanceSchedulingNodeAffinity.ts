import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_InstanceSchedulingNodeAffinity {
  // The key for the node affinity label.
  Key?: string;

  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  Operator?: string;

  // The values for the node affinity label.
  Values?: Array<string>;
}

export function Compute_InstanceSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The key for the node affinity label.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Operator",
      "The operator. Can be `IN` for node-affinities\nor `NOT_IN` for anti-affinities.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Values",
      "The values for the node affinity label.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
