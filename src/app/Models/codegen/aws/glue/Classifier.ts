import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_ClassifierXmlClassifier,
  glue_ClassifierXmlClassifier_GetTypes,
} from "../types/glue_ClassifierXmlClassifier";
import {
  glue_ClassifierCsvClassifier,
  glue_ClassifierCsvClassifier_GetTypes,
} from "../types/glue_ClassifierCsvClassifier";
import {
  glue_ClassifierGrokClassifier,
  glue_ClassifierGrokClassifier_GetTypes,
} from "../types/glue_ClassifierGrokClassifier";
import {
  glue_ClassifierJsonClassifier,
  glue_ClassifierJsonClassifier_GetTypes,
} from "../types/glue_ClassifierJsonClassifier";

export interface ClassifierArgs {
  // A classifier for XML content. Defined below.
  xmlClassifier?: glue_ClassifierXmlClassifier;

  // A classifier for CSV content. Defined below.
  csvClassifier?: glue_ClassifierCsvClassifier;

  // A classifier that uses grok patterns. Defined below.
  grokClassifier?: glue_ClassifierGrokClassifier;

  // A classifier for JSON content. Defined below.
  jsonClassifier?: glue_ClassifierJsonClassifier;

  // The name of the classifier.
  name?: string;
}
export class Classifier extends DS_Resource {
  // A classifier for CSV content. Defined below.
  public csvClassifier?: glue_ClassifierCsvClassifier;

  // A classifier that uses grok patterns. Defined below.
  public grokClassifier?: glue_ClassifierGrokClassifier;

  // A classifier for JSON content. Defined below.
  public jsonClassifier?: glue_ClassifierJsonClassifier;

  // The name of the classifier.
  public name?: string;

  // A classifier for XML content. Defined below.
  public xmlClassifier?: glue_ClassifierXmlClassifier;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "xmlClassifier",
        "A classifier for XML content. Defined below.",
        () => glue_ClassifierXmlClassifier_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "csvClassifier",
        "A classifier for CSV content. Defined below.",
        () => glue_ClassifierCsvClassifier_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "grokClassifier",
        "A classifier that uses grok patterns. Defined below.",
        () => glue_ClassifierGrokClassifier_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "jsonClassifier",
        "A classifier for JSON content. Defined below.",
        () => glue_ClassifierJsonClassifier_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the classifier.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
