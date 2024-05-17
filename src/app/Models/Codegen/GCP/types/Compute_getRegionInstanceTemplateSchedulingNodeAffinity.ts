import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getRegionInstanceTemplateSchedulingNodeAffinity {
  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  Operator?: string;

  //
  Values?: Array<string>;

  // The key for the node affinity label.
  Key?: string;
}

export function Compute_getRegionInstanceTemplateSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
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
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Key",
      "The key for the node affinity label.",
      [],
      true,
      false,
    ),
  ];
}
