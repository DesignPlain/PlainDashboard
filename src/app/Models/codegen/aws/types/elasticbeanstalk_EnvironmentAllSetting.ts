import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticbeanstalk_EnvironmentAllSetting {
  //
  resource?: string;

  //
  value?: string;

  /*
A unique name for this Environment. This name is used
in the application URL
*/
  name?: string;

  //
  namespace?: string;
}

export function elasticbeanstalk_EnvironmentAllSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "resource",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "value", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "name",
      "A unique name for this Environment. This name is used\nin the application URL",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
