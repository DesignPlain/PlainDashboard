import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lambda_getFunctionUrlCor {
  //
  allowCredentials?: boolean;

  //
  allowHeaders?: Array<string>;

  //
  allowMethods?: Array<string>;

  //
  allowOrigins?: Array<string>;

  //
  exposeHeaders?: Array<string>;

  //
  maxAge?: number;
}

export function lambda_getFunctionUrlCor_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "allowCredentials", "", [], true, false),
    new DynamicUIProps(
      InputType.Array,
      "allowHeaders",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowMethods",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "allowOrigins",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "exposeHeaders",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "maxAge", "", [], true, false),
  ];
}
