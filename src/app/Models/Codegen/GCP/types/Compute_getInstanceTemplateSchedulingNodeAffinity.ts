import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_getInstanceTemplateSchedulingNodeAffinity {
  //
  values?: Array<string>;

  // The key for the node affinity label.
  key?: string;

  /*
The operator. Can be `IN` for node-affinities
or `NOT_IN` for anti-affinities.
*/
  operator?: string;
}

export function compute_getInstanceTemplateSchedulingNodeAffinity_GetTypes(): DynamicUIProps[] {
  return [
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
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The key for the node affinity label.",
      [],
      true,
      false,
    ),
  ];
}
