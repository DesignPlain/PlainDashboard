import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface dms_getEndpointMongodbSetting {
  //
  authMechanism?: string;

  //
  authSource?: string;

  //
  authType?: string;

  //
  docsToInvestigate?: string;

  //
  extractDocId?: string;

  //
  nestingLevel?: string;
}

export function dms_getEndpointMongodbSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authMechanism",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "authSource",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.String, "authType", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "docsToInvestigate",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "extractDocId",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "nestingLevel",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
