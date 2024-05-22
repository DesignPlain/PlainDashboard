import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd,
  macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd";

export interface macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes {
  // An array of conditions, one for each condition that determines which objects to include or exclude from the job. (documented below)
  ands?: Array<macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd>;
}

export function macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "An array of conditions, one for each condition that determines which objects to include or exclude from the job. (documented below)",
      macie2_ClassificationJobS3JobDefinitionBucketCriteriaIncludesAnd_GetTypes(),
      false,
      false,
    ),
  ];
}
