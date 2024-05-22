import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudtrail_TrailAdvancedEventSelectorFieldSelector,
  cloudtrail_TrailAdvancedEventSelectorFieldSelector_GetTypes,
} from "./cloudtrail_TrailAdvancedEventSelectorFieldSelector";

export interface cloudtrail_TrailAdvancedEventSelector {
  // Specifies the selector statements in an advanced event selector. Fields documented below.
  fieldSelectors?: Array<cloudtrail_TrailAdvancedEventSelectorFieldSelector>;

  // Name of the trail.
  name?: string;
}

export function cloudtrail_TrailAdvancedEventSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "fieldSelectors",
      "Specifies the selector statements in an advanced event selector. Fields documented below.",
      cloudtrail_TrailAdvancedEventSelectorFieldSelector_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the trail.",
      [],
      false,
      false,
    ),
  ];
}
