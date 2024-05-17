import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_GrpcRouteRuleMatchHeader {
  // Required. The key of the header.
  Key?: string;

  /*
The type of match.
Default value is `EXACT`.
Possible values are: `TYPE_UNSPECIFIED`, `EXACT`, `REGULAR_EXPRESSION`.
*/
  Type?: string;

  // Required. The value of the header.
  Value?: string;
}

export function Networkservices_GrpcRouteRuleMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Key",
      "Required. The key of the header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of match.\nDefault value is `EXACT`.\nPossible values are: `TYPE_UNSPECIFIED`, `EXACT`, `REGULAR_EXPRESSION`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Value",
      "Required. The value of the header.",
      [],
      true,
      false,
    ),
  ];
}
