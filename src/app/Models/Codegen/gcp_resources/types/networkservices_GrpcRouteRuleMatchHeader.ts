import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface networkservices_GrpcRouteRuleMatchHeader {
  // Required. The value of the header.
  value?: string;

  // Required. The key of the header.
  key?: string;

  /*
The type of match.
Default value is `EXACT`.
Possible values are: `TYPE_UNSPECIFIED`, `EXACT`, `REGULAR_EXPRESSION`.
*/
  type?: string;
}

export function networkservices_GrpcRouteRuleMatchHeader_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Required. The value of the header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "key",
      "Required. The key of the header.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of match.\nDefault value is `EXACT`.\nPossible values are: `TYPE_UNSPECIFIED`, `EXACT`, `REGULAR_EXPRESSION`.",
      [],
      false,
      false,
    ),
  ];
}
