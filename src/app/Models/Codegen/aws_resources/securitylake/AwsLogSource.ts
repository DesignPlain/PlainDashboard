import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securitylake_AwsLogSourceSource,
  securitylake_AwsLogSourceSource_GetTypes,
} from "../types/securitylake_AwsLogSourceSource";

export interface AwsLogSourceArgs {
  // Specify the natively-supported AWS service to add as a source in Security Lake.
  source?: securitylake_AwsLogSourceSource;
}
export class AwsLogSource extends Resource {
  // Specify the natively-supported AWS service to add as a source in Security Lake.
  public source?: securitylake_AwsLogSourceSource;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "source",
        "Specify the natively-supported AWS service to add as a source in Security Lake.",
        securitylake_AwsLogSourceSource_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
