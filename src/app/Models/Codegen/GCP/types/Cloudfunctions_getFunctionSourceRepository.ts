import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface cloudfunctions_getFunctionSourceRepository {
  // The URL pointing to the hosted repository where the function was defined at the time of deployment.
  deployedUrl?: string;

  // The URL pointing to the hosted repository where the function is defined.
  url?: string;
}

export function cloudfunctions_getFunctionSourceRepository_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "deployedUrl",
      "The URL pointing to the hosted repository where the function was defined at the time of deployment.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "The URL pointing to the hosted repository where the function is defined.",
      [],
      true,
      false,
    ),
  ];
}
