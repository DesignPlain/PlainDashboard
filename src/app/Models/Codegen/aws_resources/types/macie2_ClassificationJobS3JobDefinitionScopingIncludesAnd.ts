import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm,
  macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm";
import {
  macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm,
  macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm_GetTypes,
} from "./macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm";

export interface macie2_ClassificationJobS3JobDefinitionScopingIncludesAnd {
  // A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an object from the job. (documented below)
  tagScopeTerm?: macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm;

  // A property-based condition that defines a property, operator, and one or more values for including or excluding an object from the job. (documented below)
  simpleScopeTerm?: macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm;
}

export function macie2_ClassificationJobS3JobDefinitionScopingIncludesAnd_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "tagScopeTerm",
      "A tag-based condition that defines the operator and tag keys or tag key and value pairs for including or excluding an object from the job. (documented below)",
      macie2_ClassificationJobS3JobDefinitionScopingIncludesAndTagScopeTerm_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "simpleScopeTerm",
      "A property-based condition that defines a property, operator, and one or more values for including or excluding an object from the job. (documented below)",
      macie2_ClassificationJobS3JobDefinitionScopingIncludesAndSimpleScopeTerm_GetTypes(),
      false,
      false,
    ),
  ];
}
