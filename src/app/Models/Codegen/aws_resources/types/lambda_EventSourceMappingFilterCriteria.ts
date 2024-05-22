import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lambda_EventSourceMappingFilterCriteriaFilter,
  lambda_EventSourceMappingFilterCriteriaFilter_GetTypes,
} from "./lambda_EventSourceMappingFilterCriteriaFilter";

export interface lambda_EventSourceMappingFilterCriteria {
  // A set of up to 5 filter. If an event satisfies at least one, Lambda sends the event to the function or adds it to the next batch. Detailed below.
  filters?: Array<lambda_EventSourceMappingFilterCriteriaFilter>;
}

export function lambda_EventSourceMappingFilterCriteria_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filters",
      "A set of up to 5 filter. If an event satisfies at least one, Lambda sends the event to the function or adds it to the next batch. Detailed below.",
      lambda_EventSourceMappingFilterCriteriaFilter_GetTypes(),
      false,
      false,
    ),
  ];
}
