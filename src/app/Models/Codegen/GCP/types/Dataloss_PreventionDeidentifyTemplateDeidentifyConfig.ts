import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations";
import {
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations,
  Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations_GetTypes,
} from "./Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations";

export interface Dataloss_PreventionDeidentifyTemplateDeidentifyConfig {
  /*
Treat the dataset as an image and redact.
Structure is documented below.
*/
  ImageTransformations?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations;

  /*
Treat the dataset as free-form text and apply the same free text transformation everywhere
Structure is documented below.
*/
  InfoTypeTransformations?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations;

  /*
Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.
Structure is documented below.
*/
  RecordTransformations?: Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations;
}

export function Dataloss_PreventionDeidentifyTemplateDeidentifyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ImageTransformations",
      "Treat the dataset as an image and redact.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigImageTransformations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InfoTypeTransformations",
      "Treat the dataset as free-form text and apply the same free text transformation everywhere\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigInfoTypeTransformations_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "RecordTransformations",
      "Treat the dataset as structured. Transformations can be applied to specific locations within structured datasets, such as transforming a column within a table.\nStructure is documented below.",
      Dataloss_PreventionDeidentifyTemplateDeidentifyConfigRecordTransformations_GetTypes(),
      false,
      false,
    ),
  ];
}
