import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig {
  // If this template is specified, it will serve as the default de-identify template.
  DeidentifyTemplate?: string;

  // If this template is specified, it will serve as the de-identify template for images.
  ImageRedactTemplate?: string;

  // If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.
  StructuredDeidentifyTemplate?: string;
}

export function Dataloss_PreventionJobTriggerInspectJobActionDeidentifyTransformationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StructuredDeidentifyTemplate",
      "If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "DeidentifyTemplate",
      "If this template is specified, it will serve as the default de-identify template.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageRedactTemplate",
      "If this template is specified, it will serve as the de-identify template for images.",
      [],
      false,
      false,
    ),
  ];
}
