import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget_GetTypes,
} from "./kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget";
import {
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition,
  kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition_GetTypes,
} from "./kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition";

export interface kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration {
  // Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra. You can also include a value. Detailed below.
  target?: kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget;

  // Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. See condition.
  condition?: kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition;

  // `TRUE` to delete content if the condition used for the target attribute is met.
  documentContentDeletion?: boolean;
}

export function kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "target",
      "Configuration of the target document attribute or metadata field when ingesting documents into Amazon Kendra. You can also include a value. Detailed below.",
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "condition",
      "Configuration of the condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. See condition.",
      () =>
        kendra_DataSourceCustomDocumentEnrichmentConfigurationInlineConfigurationCondition_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "documentContentDeletion",
      "`TRUE` to delete content if the condition used for the target attribute is met.",
      () => [],
      false,
      false,
    ),
  ];
}
