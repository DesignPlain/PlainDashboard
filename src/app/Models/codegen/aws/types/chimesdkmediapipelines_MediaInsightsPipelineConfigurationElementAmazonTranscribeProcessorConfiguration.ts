import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration {
  // Name of the custom vocabulary to use when processing Transcript events.
  vocabularyName?: string;

  // Filters partial Utterance events from delivery to the insights target.
  filterPartialResults?: boolean;

  // Name of custom language model for transcription.
  languageModelName?: string;

  // Method for applying a vocabulary filter to Transcript events.
  vocabularyFilterMethod?: string;

  // Language code for the transcription model.
  languageCode?: string;

  // Level of stability to use when partial results stabilization is enabled.
  partialResultsStability?: string;

  // Types of personally identifiable information (PII) to redact from a Transcript event.
  piiEntityTypes?: string;

  // Enables speaker partitioning (diarization) in your Transcript events.
  showSpeakerLabel?: boolean;

  // Name of the custom vocabulary filter to use when processing Transcript events.
  vocabularyFilterName?: string;

  // Labels all personally identifiable information (PII) identified in Transcript events.
  contentIdentificationType?: string;

  // Redacts all personally identifiable information (PII) identified in Transcript events.
  contentRedactionType?: string;

  // Enables partial result stabilization in Transcript events.
  enablePartialResultsStabilization?: boolean;
}

export function chimesdkmediapipelines_MediaInsightsPipelineConfigurationElementAmazonTranscribeProcessorConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'vocabularyFilterMethod',
      'Method for applying a vocabulary filter to Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'piiEntityTypes',
      'Types of personally identifiable information (PII) to redact from a Transcript event.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'contentIdentificationType',
      'Labels all personally identifiable information (PII) identified in Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'contentRedactionType',
      'Redacts all personally identifiable information (PII) identified in Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vocabularyName',
      'Name of the custom vocabulary to use when processing Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'filterPartialResults',
      'Filters partial Utterance events from delivery to the insights target.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'partialResultsStability',
      'Level of stability to use when partial results stabilization is enabled.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'showSpeakerLabel',
      'Enables speaker partitioning (diarization) in your Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'vocabularyFilterName',
      'Name of the custom vocabulary filter to use when processing Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enablePartialResultsStabilization',
      'Enables partial result stabilization in Transcript events.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'languageModelName',
      'Name of custom language model for transcription.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'languageCode',
      'Language code for the transcription model.',
      () => [],
      true,
      false,
    ),
  ];
}
