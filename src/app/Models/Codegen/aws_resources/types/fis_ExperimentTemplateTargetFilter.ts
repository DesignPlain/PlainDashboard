import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface fis_ExperimentTemplateTargetFilter {
  // Attribute path for the filter.
  path?: string;

  /*
Set of attribute values for the filter.

> --NOTE:-- Values specified in a `filter` are joined with an `OR` clause, while values across multiple `filter` blocks are joined with an `AND` clause. For more information, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters).
*/
  values?: Array<string>;
}

export function fis_ExperimentTemplateTargetFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "path",
      "Attribute path for the filter.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "Set of attribute values for the filter.\n\n> **NOTE:** Values specified in a `filter` are joined with an `OR` clause, while values across multiple `filter` blocks are joined with an `AND` clause. For more information, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters).",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
