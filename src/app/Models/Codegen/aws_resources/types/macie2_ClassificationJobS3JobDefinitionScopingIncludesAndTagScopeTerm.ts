import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue,
  macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue";

export interface macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm {
  // The operator to use in the condition.
  comparator?: string;

  // The tag key to use in the condition. The only valid value is `TAG`.
  key?: string;

  // The tag keys or tag key and value pairs to use in the condition.
  tagValues?: Array<macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue>;

  // The type of object to apply the condition to. The only valid value is `S3_OBJECT`.
  target?: string;
}

export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "comparator",
      "The operator to use in the condition.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "The tag key to use in the condition. The only valid value is `TAG`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "tagValues",
      "The tag keys or tag key and value pairs to use in the condition.",
      macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTermTagValue_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "target",
      "The type of object to apply the condition to. The only valid value is `S3_OBJECT`.",
      [],
      false,
      false,
    ),
  ];
}
