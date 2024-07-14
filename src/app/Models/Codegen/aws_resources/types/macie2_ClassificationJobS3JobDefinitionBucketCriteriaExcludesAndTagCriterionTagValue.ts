import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue {
  // The tag key.
  key?: string;

  // The tag value.
  value?: string;
}

export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaExcludesAndTagCriterionTagValue_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "The tag key.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "The tag value.",
      [],
      false,
      false,
    ),
  ];
}
