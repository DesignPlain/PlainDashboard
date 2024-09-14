import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings,
  chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings_GetTypes,
} from "./chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings";

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration {
  // Labels all personally identifiable information (PII) identified in Utterance events.
  contentIdentificationType?: string;

  // Filters partial Utterance events from delivery to the insights target.
  filterPartialResults?: boolean;

  // Language code for the transcription model.
  languageCode?: string;

  // Name of custom language model for transcription.
  languageModelName?: string;

  // Settings for post call analytics.
  postCallAnalyticsSettings?: chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings;

  // Method for applying a vocabulary filter to Utterance events.
  vocabularyFilterMethod?: string;

  // Name of the custom vocabulary filter to use when processing Utterance events.
  vocabularyFilterName?: string;

  // Filter for category events to be delivered to insights target.
  callAnalyticsStreamCategories?: Array<string>;

  // Enables partial result stabilization in Utterance events.
  enablePartialResultsStabilization?: boolean;

  // Level of stability to use when partial results stabilization is enabled.
  partialResultsStability?: string;

  // Types of personally identifiable information (PII) to redact from an Utterance event.
  piiEntityTypes?: string;

  // Name of the custom vocabulary to use when processing Utterance events.
  vocabularyName?: string;

  // Redacts all personally identifiable information (PII) identified in Utterance events.
  contentRedactionType?: string;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "languageCode",
      "Language code for the transcription model.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vocabularyFilterName",
      "Name of the custom vocabulary filter to use when processing Utterance events.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enablePartialResultsStabilization",
      "Enables partial result stabilization in Utterance events.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "partialResultsStability",
      "Level of stability to use when partial results stabilization is enabled.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "piiEntityTypes",
      "Types of personally identifiable information (PII) to redact from an Utterance event.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vocabularyName",
      "Name of the custom vocabulary to use when processing Utterance events.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentIdentificationType",
      "Labels all personally identifiable information (PII) identified in Utterance events.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "filterPartialResults",
      "Filters partial Utterance events from delivery to the insights target.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "languageModelName",
      "Name of custom language model for transcription.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "postCallAnalyticsSettings",
      "Settings for post call analytics.",
      () =>
        chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeCallAnalyticsProcessorConfigurationPostCallAnalyticsSettings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "vocabularyFilterMethod",
      "Method for applying a vocabulary filter to Utterance events.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "callAnalyticsStreamCategories",
      "Filter for category events to be delivered to insights target.",
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "contentRedactionType",
      "Redacts all personally identifiable information (PII) identified in Utterance events.",
      () => [],
      false,
      false,
    ),
  ];
}
