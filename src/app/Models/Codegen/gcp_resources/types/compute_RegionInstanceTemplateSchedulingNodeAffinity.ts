import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_RegionInstanceTemplateSchedulingNodeAffinity {
  // The key for the node affinity label.
  key?: string;

  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  operator?: string;

  // Corresponds to the label values of a reservation resource.
  values?: Array<string>;
}

export function compute_RegionInstanceTemplateSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key for the node affinity label.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "operator",
      "The operator. Can be `IN` for node-affinities\nor `NOT_IN` for anti-affinities.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Corresponds to the label values of a reservation resource.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
