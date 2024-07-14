import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd,
  macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd";

export interface macie2_ClassificationJobS3JobDefinitionScopingExcludes {
  // An array of conditions, one for each condition that determines which objects to include or exclude from the job. (documented below)
  ands?: Array<macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd>;
}

export function macie2_ClassificationJobS3JobDefinitionScopingExcludes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "ands",
      "An array of conditions, one for each condition that determines which objects to include or exclude from the job. (documented below)",
      macie2_ClassificationJobS3JobDefinitionScopingExcludesAnd_GetTypes(),
      false,
      false,
    ),
  ];
}
