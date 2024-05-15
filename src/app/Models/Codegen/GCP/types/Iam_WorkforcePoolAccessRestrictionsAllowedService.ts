import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Iam_WorkforcePoolAccessRestrictionsAllowedService {
  /*
Domain name of the service.
Example: console.cloud.google
*/
  Domain?: string;
}

export function Iam_WorkforcePoolAccessRestrictionsAllowedService_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "Domain name of the service.\nExample: console.cloud.google",
      [],
      false,
      false,
    ),
  ];
}
