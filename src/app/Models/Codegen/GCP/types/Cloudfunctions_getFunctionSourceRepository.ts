import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudfunctions_getFunctionSourceRepository {
  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  DeployedUrl?: string;

  // The URL pointing to the hosted repository where the function is defined.
  Url?: string;
}

export function Cloudfunctions_getFunctionSourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "DeployedUrl",
      "The URL pointing to the hosted repository where the function was defined at the time of deployment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Url",
      "The URL pointing to the hosted repository where the function is defined.",
      [],
      true,
      false,
    ),
  ];
}
