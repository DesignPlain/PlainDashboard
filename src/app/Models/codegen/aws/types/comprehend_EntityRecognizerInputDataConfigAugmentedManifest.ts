import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface comprehend_EntityRecognizerInputDataConfigAugmentedManifest {
  // The JSON attribute that contains the annotations for the training documents.
  attributeNames?: Array<string>;

  /*
Type of augmented manifest.
One of `PLAIN_TEXT_DOCUMENT` or `SEMI_STRUCTURED_DOCUMENT`.
*/
  documentType?: string;

  // Location of augmented manifest file.
  s3Uri?: string;

  // Location of source PDF files.
  sourceDocumentsS3Uri?: string;

  /*
Purpose of data in augmented manifest.
One of `TRAIN` or `TEST`.
*/
  split?: string;

  // Location of annotation files.
  annotationDataS3Uri?: string;
}

export function comprehend_EntityRecognizerInputDataConfigAugmentedManifest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "attributeNames",
      "The JSON attribute that contains the annotations for the training documents.",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "documentType",
      "Type of augmented manifest.\nOne of `PLAIN_TEXT_DOCUMENT` or `SEMI_STRUCTURED_DOCUMENT`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "s3Uri",
      "Location of augmented manifest file.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "sourceDocumentsS3Uri",
      "Location of source PDF files.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "split",
      "Purpose of data in augmented manifest.\nOne of `TRAIN` or `TEST`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "annotationDataS3Uri",
      "Location of annotation files.",
      () => [],
      false,
      false,
    ),
  ];
}
