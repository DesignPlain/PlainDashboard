import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface route53_getResolverEndpointFilter {
  //
  name?: string;

  //
  values?: Array<string>;
}

export function route53_getResolverEndpointFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "values",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
