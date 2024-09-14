import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lakeformation_getPermissionsDataLocation {
  /*
ARN that uniquely identifies the data location resource.

The following argument is optional:
*/
  arn?: string;

  // Identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.
  catalogId?: string;
}

export function lakeformation_getPermissionsDataLocation_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN that uniquely identifies the data location resource.\n\nThe following argument is optional:",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "catalogId",
      "Identifier for the Data Catalog where the location is registered with Lake Formation. By default, it is the account ID of the caller.",
      () => [],
      true,
      false,
    ),
  ];
}
