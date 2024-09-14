import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  macie2_ClassificationJobS3JobDefinitionScopingExcludes,
  macie2_ClassificationJobS3JobDefinitionScopingExcludes_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScopingExcludes";
import {
  macie2_ClassificationJobS3JobDefinitionScopingIncludes,
  macie2_ClassificationJobS3JobDefinitionScopingIncludes_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScopingIncludes";

export interface macie2_ClassificationJobS3JobDefinitionScoping {
  // The property- or tag-based conditions that determine which objects to exclude from the analysis. (documented below)
  excludes?: macie2_ClassificationJobS3JobDefinitionScopingExcludes;

  // The property- or tag-based conditions that determine which objects to include in the analysis. (documented below)
  includes?: macie2_ClassificationJobS3JobDefinitionScopingIncludes;
}

export function macie2_ClassificationJobS3JobDefinitionScoping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "excludes",
      "The property- or tag-based conditions that determine which objects to exclude from the analysis. (documented below)",
      () => macie2_ClassificationJobS3JobDefinitionScopingExcludes_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "includes",
      "The property- or tag-based conditions that determine which objects to include in the analysis. (documented below)",
      () => macie2_ClassificationJobS3JobDefinitionScopingIncludes_GetTypes(),
      false,
      false,
    ),
  ];
}
