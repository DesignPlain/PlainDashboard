import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kendra_getExperienceConfigurationContentSourceConfiguration {
  // Identifier of the FAQs that you want to use for your Amazon Kendra Experience.
  faqIds?: Array<string>;

  // Identifiers of the data sources you want to use for your Amazon Kendra Experience.
  dataSourceIds?: Array<string>;

  // Whether to use documents you indexed directly using the `BatchPutDocument API`.
  directPutContent?: boolean;
}

export function kendra_getExperienceConfigurationContentSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "faqIds",
      "Identifier of the FAQs that you want to use for your Amazon Kendra Experience.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "dataSourceIds",
      "Identifiers of the data sources you want to use for your Amazon Kendra Experience.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "directPutContent",
      "Whether to use documents you indexed directly using the `BatchPutDocument API`.",
      [],
      true,
      false,
    ),
  ];
}
