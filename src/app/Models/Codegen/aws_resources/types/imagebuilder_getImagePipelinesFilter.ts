import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface imagebuilder_getImagePipelinesFilter {
  // Name of the filter field. Valid values can be found in the [Image Builder ListImagePipelines API Reference](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html).
  name?: string;

  // Set of values that are accepted for the given filter field. Results will be selected if any given value matches.
  values?: Array<string>;
}

export function imagebuilder_getImagePipelinesFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the filter field. Valid values can be found in the [Image Builder ListImagePipelines API Reference](https://docs.aws.amazon.com/imagebuilder/latest/APIReference/API_ListImagePipelines.html).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of values that are accepted for the given filter field. Results will be selected if any given value matches.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}