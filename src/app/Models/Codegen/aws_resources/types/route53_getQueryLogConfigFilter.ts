import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface route53_getQueryLogConfigFilter {
  //
  values?: Array<string>;

  // The name of the query logging configuration.
  name?: string;
}

export function route53_getQueryLogConfigFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the query logging configuration.",
      [],
      true,
      false,
    ),
  ];
}
