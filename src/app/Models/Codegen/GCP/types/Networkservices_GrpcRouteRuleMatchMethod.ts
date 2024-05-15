import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Networkservices_GrpcRouteRuleMatchMethod {
  // Specifies that matches are case sensitive. The default value is true.
  CaseSensitive?: boolean;

  // Required. Name of the method to match against.
  GrpcMethod?: string;

  // Required. Name of the service to match against.
  GrpcService?: string;
}

export function Networkservices_GrpcRouteRuleMatchMethod_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "CaseSensitive",
      "Specifies that matches are case sensitive. The default value is true.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GrpcMethod",
      "Required. Name of the method to match against.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "GrpcService",
      "Required. Name of the service to match against.",
      [],
      true,
      false,
    ),
  ];
}
