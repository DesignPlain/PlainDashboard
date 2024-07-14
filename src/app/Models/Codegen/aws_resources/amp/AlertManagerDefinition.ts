import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface AlertManagerDefinitionArgs {
  // the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).
  definition?: string;

  // ID of the prometheus workspace the alert manager definition should be linked to
  workspaceId?: string;
}
export class AlertManagerDefinition extends Resource {
  // the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).
  public definition?: string;

  // ID of the prometheus workspace the alert manager definition should be linked to
  public workspaceId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "definition",
        "the alert manager definition that you want to be applied. See more [in AWS Docs](https://docs.aws.amazon.com/prometheus/latest/userguide/AMP-alert-manager.html).",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "workspaceId",
        "ID of the prometheus workspace the alert manager definition should be linked to",
        [],
        true,
        true,
      ),
    ];
  }
}
