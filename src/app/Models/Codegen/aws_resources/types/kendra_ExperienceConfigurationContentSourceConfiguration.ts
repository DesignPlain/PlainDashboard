import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface kendra_ExperienceConfigurationContentSourceConfiguration {
  // The identifiers of the data sources you want to use for your Amazon Kendra experience. Maximum number of 100 items.
  dataSourceIds?: Array<string>;

  // Whether to use documents you indexed directly using the `BatchPutDocument API`. Defaults to `false`.
  directPutContent?: boolean;

  // The identifier of the FAQs that you want to use for your Amazon Kendra experience. Maximum number of 100 items.
  faqIds?: Array<string>;
}

export function kendra_ExperienceConfigurationContentSourceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dataSourceIds",
      "The identifiers of the data sources you want to use for your Amazon Kendra experience. Maximum number of 100 items.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "directPutContent",
      "Whether to use documents you indexed directly using the `BatchPutDocument API`. Defaults to `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "faqIds",
      "The identifier of the FAQs that you want to use for your Amazon Kendra experience. Maximum number of 100 items.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
