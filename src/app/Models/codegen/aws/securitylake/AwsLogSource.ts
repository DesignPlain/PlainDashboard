import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  securitylake_AwsLogSourceSource,
  securitylake_AwsLogSourceSource_GetTypes,
} from "../types/securitylake_AwsLogSourceSource";

export interface AwsLogSourceArgs {
  // Specify the natively-supported AWS service to add as a source in Security Lake.
  source?: securitylake_AwsLogSourceSource;
}
export class AwsLogSource extends DS_Resource {
  // Specify the natively-supported AWS service to add as a source in Security Lake.
  public source?: securitylake_AwsLogSourceSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "source",
        "Specify the natively-supported AWS service to add as a source in Security Lake.",
        () => securitylake_AwsLogSourceSource_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
