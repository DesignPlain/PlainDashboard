import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface glue_ClassifierGrokClassifier {
  // An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.
  classification?: string;

  // Custom grok patterns used by this classifier.
  customPatterns?: string;

  // The grok pattern used by this classifier.
  grokPattern?: string;
}

export function glue_ClassifierGrokClassifier_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "classification",
      "An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "customPatterns",
      "Custom grok patterns used by this classifier.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "grokPattern",
      "The grok pattern used by this classifier.",
      () => [],
      true,
      false,
    ),
  ];
}
